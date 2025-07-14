
interface Total {
    value: number;
}

export interface Item {
    "biblionumber": string;
    "datestamp": Date;
    "language": string;
    "cdd": string;
    "cutter": string;
    "title": string;
    subtitle?: string;
    responsibility?: string;
    "publication_year": number;
    "extent": string;
    physical_details?: string;
    note?: string;
    image: string;
    "publication_place": string;
    "publisher": string;
    "subject": {
        "name": string;
        "number": string;
    },
    "personal_name_added": [
        {
            "name": string;
            "relator": string;
        },
        {
            "name": string;
            "relator": string;
        }
    ]
}

export interface Hit {
    _id: string;
    _source: {
        title: string;
        responsibility: string;
        publisher: string;
        publication_year: string;
        isbn: string;
        image: string;
    };
}

export interface Hits {
    total: Total;
    hits: Hit[];
}

interface TermsBucket {
  key: string;
  doc_count: number;
}

export interface TermsAggregationResponse {
  buckets: TermsBucket[];
}

export interface Aggregation {
    authors: TermsAggregationResponse
    min_year: {
        value: number;
    };
    max_year: {
        value: number;
    };
}

export interface ResponseElastic {
    hits: Hits;
    aggregations: Aggregation;
}