import { createContext } from "preact";
import { asset, Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/src/server/types.ts";
import MenuLink from "../islands/MenuLink.tsx";
import state, { AppStateSignal } from "../utils/state.ts";

export const AppState = createContext({} as AppStateSignal);

export default function App({ Component }: AppProps) {
  return (
    <html data-custom="data">
      <Head>
        <link rel="stylesheet" href={asset("style.css")} />
      </Head>
      <body class="m-x-50 m-y-0 p-4 mx-auto max-w-screen-md">
        <header class="flex flex-row justify-between border border-black p-2 pb-5">
          <h1 class="grow-1.1 text-center text-2xl font-bold mx-20">Deno Third-Party Module API Demo</h1>
          <div><MenuLink /></div>
        </header>
        <div class="p-4 mx-auto max-w-screen-md">
          <AppState.Provider value={state}>
            <Component />
          </AppState.Provider>
        </div>
        <footer class="border">
          <div class="text-center">Created with the <a href="https://fresh.deno.dev" target="_blank">FRESH<img class="inline underline" src="logo.svg"/></a> framework</div>
          {/* <div class="mt-1.5 mr-2 text-right"><a href="https://apiland.deno.dev" target="_blank"><span class="underline">API Docs</span></a></div> */}
        </footer>
      </body>
    </html>
  );
}