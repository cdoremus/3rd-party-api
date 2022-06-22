import { HandlerContext } from "$fresh/server.ts";

type Module = {
  name: string;
  description: string;
  popularity_score: number;
  versions?: Array<string>;
  latest_version: string;
}

const sortItems = (item1: Module, item2: Module): number => {
  return item2.popularity_score - item1.popularity_score;
}


const jsonItems = (module: {default: { items: Array<Module>}}): Array<Module> => {
  return module.default.items as Array<Module>;
}

const fetchModules = async (): Promise<Array<Module>> => {
  const res = await fetch("https://apiland.deno.dev/v2/modules");
  // @ts-ignore type error
  const json = await res.json();
  return json.items.sort(sortItems)
}


export const handler = async (_req: Request, _ctx: HandlerContext): Response => {
  const resp = await fetchModules();
  // console.log(JSON.stringify(resp));
  return new Response(JSON.stringify(resp));
};
