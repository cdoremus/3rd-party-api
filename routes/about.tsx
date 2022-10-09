import { tw } from "twind";

export default function About() {
  return (
    <div>
      <h1 class={tw`text-center text-xl font-bold`}>About the Experimental Deno API</h1>
      <p>
      The data displayed by the app comes from the <a class={tw`underline`} href="https://deno.land/x">Deno third-party module registry</a>
      {' '}which includes an experimental popularity score for each module displayed in parentheses.
      {' '}<a class={tw`underline`} href="https://github.com/denoland/dotland/issues/2133">This proposal</a> explains the rationale behind this score.
      The algorithm used to calculate the score is unknown to the author of this application.
      Only the top 100 modules based on popularity score are
      displayed.
      </p>
      <p>
      API Documentation is available at <a class={tw`underline`} href="https://apiland.deno.dev" target="_blank">https://apiland.deno.dev</a>.
      </p>
    </div>
  )
}