# Fifteen Feet - Bypass paywalls on news sites

[fifteenfeet.netlify.app](https://fifteenfeet.netlify.app)

## What?

Get rid of annoying popups blocking you from reading websites because you're not subscribed.


## Why?

Because [12ft.io](https://12ft.io/) isn't working for some sites anymore, and I think paywalls are cringe.

## How?
Websites are optimized to show up in search results, so they don't paywall content for web crawlers. This way, the crawler will have access to the site's full text, and the page will show up in more results. We take advantage of this by simply _pretending to be Google's crawler_.

We simply proxy the request, changing the useragent to be that of googlebot.
