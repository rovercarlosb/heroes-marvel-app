export interface JsonResponseMarvelAPI {
  code?: number;
  data?: {
    results: Hero<array>;
  };
  errors?: Array<{ message: string }>;
}

export interface Hero {
  id: number;
  name: string;
  description: string | null;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
}
