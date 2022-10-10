import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import ModuleList from "../components/ModuleList.tsx";
import { ThirdPartyApi, Module } from "../types.ts";
import Search from '../components/Search.tsx';

type PageData = {
  modules: Module[];
  searchTerm: string;
}

export const handler: Handlers<PageData | null> = {
  async GET(_: Request, ctx: HandlerContext) {
    const resp = await fetch(`https://apiland.deno.dev/v2/modules?limit=100`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const ret: ThirdPartyApi = await resp.json();
    return ctx.render({modules: ret.items, searchTerm: ""});
  },

  async POST(req: Request, ctx: HandlerContext) {
    const formData = await req.formData();
    const searchTerm = formData.get("search")?.trim();
    console.log("search term: ", searchTerm);
    const resp = await fetch(`https://apiland.deno.dev/v2/modules`);
    const data: ThirdPartyApi = await resp.json();
    const modules: Module[] = data.items;
    let found = []
    if (searchTerm !== "") {
      found = modules.filter(item => item.description?.includes(searchTerm) || item?.name.includes(searchTerm));
    } else {
      found = modules;
    }
    return ctx.render({modules: found, searchTerm});
  }

};


export default function Page({ data }: PageProps<PageData | null>) {
  const {modules, searchTerm} = data;

  return (
    <div>
      <Search searchTerm={searchTerm} />
      {!modules || modules.length === 0
        ? <h1 class="text-left grow w-full">Modules not found: </h1>
        : <ModuleList modules={modules} />
      }
    </div>
  );
}
