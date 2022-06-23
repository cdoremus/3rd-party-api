// @ts-nocheck

/** @jsx h */
import { h } from 'preact';
import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import ModuleList from "../islands/ModuleList.tsx";
import { ThirdPartyApi } from "../types.ts";
import { tw } from "twind";


export const handler: Handlers<Module[] | null> = {
  async GET(_: Request, ctx: HandlerContext) {
    const resp: ThirdPartyApi = await fetch(`https://apiland.deno.dev/v2/modules`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const ret = await resp.json();
    return ctx.render(ret.items);
  },
};

export default function Page({ data }: PageProps<Module[] | null>) {
  if (!data) {
    return <h1>User not found</h1>;
  }

  // console.log(JSON.stringify(data));
  return (
    <div  class={tw`p-4 mx-auto max-w-screen-md`}>
      <h1 class={tw`text-xl font-bold`}>Deno Third-Party API Demo</h1>
      <ModuleList modules={data} />
    </div>
  );
}
