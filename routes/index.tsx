// @ts-nocheck handler type checks

/** @jsx h */
import { h } from 'preact';
import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import ModuleList from "../components/ModuleList.tsx";
import { ThirdPartyApi, Module } from "../types.ts";
import { tw } from "twind";

type PageData = {
  modules: Module[];
  searchTerm: string;
}
export const handler: Handlers<PageData | null> = {
  async GET(_: Request, ctx: HandlerContext) {
    const resp: ThirdPartyApi = await fetch(`https://apiland.deno.dev/v2/modules?limit=100`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const ret = await resp.json();
    return ctx.render({modules: ret.items, searchTerm: ""});
  },

  async POST(req: Request, ctx: HandlerContext) {
    const formData = await req.formData();
    const searchTerm = formData.get("search")?.trim();
    console.log("search term: ", searchTerm);
    const resp: ThirdPartyApi = await fetch(`https://apiland.deno.dev/v2/modules`);
    const data = await resp.json();
    const modules: Module[] = data.items;
    let found = []
    if (searchTerm !== "") {
      found = modules.filter(item => item.description?.includes(searchTerm) || item?.name.includes(searchTerm));
    } else {
      found = modules;
    }
    // console.log("found items: ", found)
    return ctx.render({modules: found, searchTerm});
  }

};


export default function Page({ data }: PageProps<PageData | null>) {
  const {modules, searchTerm} = data;

  return (
    <div  class={tw`p-4 mx-auto max-w-screen-md`}>
      <h1 class={tw`text-xl font-bold`}>Deno Third-Party API Demo</h1>
      <div class={tw`flex flex-row`}>
        <div class={tw`text-xl mr-2`}>Search: </div>
        <div class={tw``}>
          <form method="post">
            <input
              type="text"
              name="search"
              id="search"
              value={searchTerm}
              class={tw`border w-full`}
            />
          </form>
        </div>
        <a class={tw`w-full text-center underline`} href="/">Show All Modules</a>
      </div>
      {!modules || modules.length === 0
      ? <h1 class={tw`text-left grow w-full`}>Modules not found: </h1>
      : <ModuleList modules={modules} />
      }
    </div>
  );
}
