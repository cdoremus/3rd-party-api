
export default function About() {
  return (
    <div>
      <h1 class="text-center text-xl font-bold">About the Deno Third-Party API</h1>
      <p>
      The data displayed by the app comes from the <a class="underline" href="https://deno.land/x">Deno third-party module registry</a>
      {' '}which includes a popularity score for each module displayed in parentheses and Github
      {' '}stars after the GH icon.
      {' '}<a class="underline" href="https://github.com/denoland/dotland/issues/2133">This proposal</a> explains the rationale behind this score.

      </p>
      <p>
      The API was used on the home page to show the top 500 modules ranked by popularity score which is determined by
      the number of requests done to each module using a <b>https://deno.land/x/[module]</b> import url. The ranking
      was done in three ways that can be selected in the drop down:
      </p>
      <ul>
        <li class="about">Popularity Score</li>
        <li class="about">Github Stars</li>
        <li class="about">Weighted 75% popularity, 25% GH star ranking</li>
      </ul>

      <p>
      See the <a href="http://deno-blog.com/What_every_developer_should_know_about_the_Deno_third_party_module_registry.2023-04-08">blog post</a> for more details on the API and ranking used in this app.
      API Documentation is available at <a class="underline" href="https://apiland.deno.dev" target="_blank">https://apiland.deno.dev</a>.
      </p>
    </div>
  )
}