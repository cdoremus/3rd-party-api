export type Module = {
  name: string;
  description: string;
  popularity_score: number;
  versions?: Array<string>;
  latest_version: string;
  star_count: number;
  metrics?: ModuleMetrics;
}

export type ModuleMetrics = {
  popularity: {
    prev_sessions_30_day: number;
    score: number;
    prev_score: number;
    prev_users_30_day: number;
    sessions_30_days: number;
    users_30_day: number;
  },
  info: {
    uploaded_at: string; // ISO 8601 format date (see Date.toISOString and std/datetime)
  }
}
export type ThirdPartyApi = {
  items: Module[];
}

export type OrderOptions = "score" | "stars" | "75_25";


