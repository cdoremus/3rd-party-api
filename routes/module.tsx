import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import ModuleList from "../components/ModuleList.tsx";
import { fetch500, sortModules } from "../utils/fetch.ts";
import { ThirdPartyApi, Module, OrderOptions } from "../types.ts";
import OrderByForm from "../components/SortOrderDropDown.tsx";

type PageData = {
  modules: Module[];
  sortOrder: OrderOptions;
}

export const handler: Handlers<PageData | null> = {
  async GET(_: Request, ctx: HandlerContext) {
    const items: Module[] = await fetch500();
    console.log("GET called: ");
    sortModules(items)
    return ctx.render({modules: items});
  },

  async POST(req: Request, ctx: HandlerContext) {
    const formData = await req.formData();
    const sortOrder = formData.get("order_by") as OrderOptions;
    const items: Module[] = await fetch500();
    console.log("Mod count in POST: ", sortOrder);
    sortModules(items, sortOrder);
    return ctx.render({modules: items, sortOrder});
    // return ctx.render({modules: found, searchTerm});
  }

};


export default function Page({ data }: PageProps<PageData>) {
  const {modules, sortOrder} = data;
  return (
    <div>
      <OrderByForm order={sortOrder} />
      {!modules || modules.length === 0
        ? <h1 class="text-left grow w-full">Modules not found: </h1>
        : <ModuleList modules={modules} />
      }
    </div>
  );
}
