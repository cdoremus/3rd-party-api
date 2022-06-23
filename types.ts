export type Module = {
  name: string;
  description: string;
  popularity_score: number;
  versions?: Array<string>;
  latest_version: string;
}

export type ThirdPartyApi = {
  items: Module[];
}
