
export default function About() {
  return (
    <div>
      <h1 class="text-center text-xl font-bold">About the Deno Third-Party API Demo App</h1>
      <p>
      The data displayed by this app comes from the <a class="underline" href="https://deno.land/x">Deno third-party module registry</a>
      {' '}which includes a list with each module shown with a popularity score displayed in parentheses and the Github
      {' '}star count after the GH icon.
      {' '}<a class="underline" href="https://github.com/denoland/dotland/issues/2133">This proposal</a> explains the rationale behind this score.

      </p>
      <p>
      {' '}The API was used on the home page to show the top 500 modules ranked by popularity score which is calculated from
      {' '}the number of requests done to each module over a 30 day period when the <b>https://deno.land/x/[module]</b> import url was called.
      {' '}Besides the popularity score, the data was sorted by Github stars and a metric created by weighing
      {' '}popularity score at 75% and Github stars 25%.  Each sorted data set can be displayed using the drop down on the top of
      {' '}the page.
      </p>

      <p>
      See the <a class="underline" href="http://deno-blog.com/What_every_developer_should_know_about_the_Deno_third_party_module_registry.2023-04-09">blog post</a>
      {' '}for more details on the API and ranking used in this app. Source code for this app can be found at <a class="underline" href="https://github.com/cdoremus/3rd-party-api">https://github.com/cdoremus/3rd-party-api</a>.
      {' '}API documentation is available at <a class="underline" href="https://apiland.deno.dev" target="_blank">https://apiland.deno.dev</a>.
      </p>
    </div>
  )
}