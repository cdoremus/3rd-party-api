import { ThirdPartyApi, Module, OrderOptions } from "../types.ts";
const TOTAL_PAGES = 5;

export async function fetch500(): Promise<Module[]> {
  const mods = []
  for(let i = 1; i <= TOTAL_PAGES; i++) {
    const resp = await fetch(`https://apiland.deno.dev/v2/modules?limit=100&page=${i}`);
    const ret: ThirdPartyApi = await resp.json();
    mods.push(ret.items);
  }
  return mods.flat();
}

export function sortModules(modules: Module[], orderBy: OrderOptions = "score"): void {
  switch (orderBy) {
    case "stars":
      modules.sort(sortByGithubStars);
      break;

    case "75_25":
      modules.sort(sortBy75_25);
      break;

    case "score":
      modules.sort(sortByPopularityScore);
      break;

    default:
      modules.sort(sortByPopularityScore);
      break;
  }
}

export function sortByPopularityScore(mod1: Module, mod2: Module): number {
  const score1 = (mod1.popularity_score);
  const score2 = (mod2.popularity_score);
  return score2 === score1 ? 0 : score2 < score1 ? -1 : 1;
}

export function sortByGithubStars(mod1: Module, mod2: Module): number {
  const score1 = (mod1.star_count);
  const score2 = (mod2.star_count);
  return score2 === score1 ? 0 : score2 < score1 ? -1 : 1;
}

export function sortBy75_25(mod1: Module, mod2: Module): number {
  const score1 = (mod1.popularity_score) * 0.75 + (mod1.star_count) * .25;
  const score2 = (mod2.popularity_score) * 0.75  + (mod2.star_count) * .25;
  return score2 === score1 ? 0 : score2 < score1 ? -1 : 1;
}