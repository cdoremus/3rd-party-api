# Deno Third-Party API Demo

This repo contains an app that exercises a proposed API to implement a [deno.land/x scoring propsal](https://github.com/denoland/dotland/issues/2133) demonstrated at the [MelbJS Meetup talk given by Deno team member Kitson Kelly](https://www.youtube.com/watch?v=G_2AgdgEbkI). The API is based at [apiland.deno.dev](https://apiland.deno.dev/).

The data displayed by the app includes an experimental popularity score for each module displayed in parentheses. The algorithm used to calculate the score is unknown to the author of this repo. Only the top 100 modules based on popularity score are displayed in this app.

This app is deployed to [3rd-party-api.deno.dev](https://3rd-party-api.deno.dev/). It was built using the [Fresh web framework](https://fresh.deno.dev/).


### Usage

Start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.
