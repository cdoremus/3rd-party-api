# Deno Third-Party API Demo

This repo contains an app that exercises version 2 of the Deno third party module API that implements the [deno.land/x scoring proposal](https://github.com/denoland/dotland/issues/2133) demonstrated at the [MelbJS Meetup talk given by Deno team member Kitson Kelly](https://www.youtube.com/watch?v=G_2AgdgEbkI). The API is based at [apiland.deno.dev](https://apiland.deno.dev/).

The [Deno third party module page](https://deno.land/x) to displayed modules using the API was deployed in early October, 2022. The sorting on this page was based on a popularity score which is calculated from the number of requests done to each module over a 30 day period when the **https://deno.land/x/[module]** import url was called.

The third-party API was used in this app with an initial view showing modules ranked by popularity score. However, this  app added data views sorted by Github stars and a ranking metric created by weighing popularity score at 75% and Github stars 25%. Each sorted data set can be displayed using the drop down on the top of the landing page.

This app is deployed on Deno Deploy at [3rd-party-api.deno.dev](https://3rd-party-api.deno.dev/). It was built using the [Fresh web framework](https://fresh.deno.dev/).


### Usage

This app assumes that [Deno](https://deno.land) is installed locally.

Start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.
