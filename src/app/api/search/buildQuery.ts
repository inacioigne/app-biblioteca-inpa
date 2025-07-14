interface ElasticsearchQuery {
    size?: number;
    from?: number;
    query: Record<string, any>;
}

interface QBool {
    bool: {
        minimum_should_match?: number
        should?: any[]
        filter?: any[]
    }
}

interface TQRange {
    range: {
        publication_year: {
            gte?: string
            lte?: string
        }
    }
}

export function BuildQuery(
    q: string | null,
    page: number | null,
    fromYear: string | null,
    toYear: string | null,
    personalNameMain: string | null
): ElasticsearchQuery {


    const query: ElasticsearchQuery = {
        size: 20,
        query: {}
    };

    if (page) {
        query.size = 20;
        query.from = (page - 1) * query.size; 
    }

    const qBool: QBool = {
        bool: {}
    }

    const qFilter: Record<string, any>[] = []

    const qRange: TQRange = {
        range: {
            "publication_year": {} 
        }
    }

    if (fromYear) {
        qRange.range.publication_year.gte = fromYear; 
    }

    if (toYear) {
        qRange.range.publication_year.lte = toYear
    }

    if (fromYear || toYear) {
        qFilter.push(qRange)
    }

    if (personalNameMain) {
        const qPNM = {
            term: {
                "personal_name_main.name.keyword": personalNameMain.replace(/^"(.*)"$/, '$1')
            }
        }
        qFilter.push(qPNM)

    }

    if (q || qFilter.length > 0) {
        if (q) {
            const qShould = [
                {
                    multi_match: {
                        query: q,
                        type: "phrase",
                        fields: ["title^2"]
                    }
                },
                {
                    multi_match: {
                        query: q,
                        fields: [
                            "subject",
                            "personal_name_main.name",
                            "personal_name_added.name"
                        ],
                        type: "best_fields",
                        fuzziness: "AUTO"
                    }
                }
            ]
            qBool.bool.minimum_should_match = 1
            qBool.bool.should = qShould
        }

        if (qFilter.length > 0) {
            qBool.bool.filter = qFilter
        }
        query.query = qBool
    } else {
        query.query = { match_all: {} }
    }

    // console.log("QUERY: ", JSON.stringify(query, null, 2))

    return query
}