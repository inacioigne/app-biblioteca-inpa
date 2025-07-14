export interface SearchResult {
  id: string;
  score: number;
  source: Record<string, any>;
}

export interface ApiResponse {
  total: { value: number }
  //   total?: {
  //       value: number;
  //       relation: string
  //     };
  //     max_score: number | null;
  //     hits: Hit[];
}

export interface ApiError {
  error: string;
  details?: string;
}

export interface ElasticsearchQuery {
  size?: number;
  //   sort?: Array<Record<string, any>>;
  query: Record<string, any>;
  //   post_filter?: Record<string, any>;
}

export interface ElasticsearchResponse {
  took: number;
  timed_out: boolean;
  _shards: {
    total: number;
    successful: number;
    skipped?: number;
    failed: number;
  };
  hits: {
    total?: number | {
      value: number;
      relation: string
    };
    max_score: number | null;
    hits: Hit[];
  };
}

export interface Hit {
  _index: string;
  _id: string;
  _score: number;
  _source: Source;
}

export interface TExemplar {
  id?: number;
  collection: string;
  location: string;
  barcode: string;
  call_number: string;
  create_at: string;
}

export interface TPersonalNameAdded {
    name: string;
    relator: string;
}

export interface TSerie {
    name: string;
    number: string;
}

export interface Source {
  id?: string;
  biblionumber: string;
  datestamp: string; // ISO string
  language: string;
  cdd: string;
  cutter: string;
  title: string;
  subtitle: string | null;
  responsibility: string | null;
  publication_year: number;
  extent: string;
  physical_details: string;
  note: string | null;
  image: string;
  publication_place: string;
  publisher: string;
  subject: Subject[];
  corporate_main: string;
  exemplares: TExemplar[] | TExemplar;
  personal_name_added?: TPersonalNameAdded[];
  serie: TSerie
}

export interface Subject {
  subject_full: string;
  subject_form: string | null;
  subject_general: string | null;
  subject_chronological: string | null;
  subject_geographic: string | null;
}
