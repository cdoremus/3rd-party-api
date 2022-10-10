export type Module = {
  name: string;
  description: string;
  popularity_score: number;
  versions?: Array<string>;
  latest_version: string;
  star_count: number;
}

export type ModuleDetails = {
  popularity: {
    prev_sessions_30_day: number;
    score: number;
    prev_score: number;
    prev_users_30_day: number;
    sessions_30_days: number;
    users_30_day: number;
  }

}
export type ThirdPartyApi = {
  items: Module[];
}
