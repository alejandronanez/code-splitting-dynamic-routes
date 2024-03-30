# Bundle size analysis on catch-all segment routes

## TL;DR

> [!IMPORTANT]  
> Client-size routing using catch-all segment routes will negatively affect your bundle size

- Doing client-side routing on a catch-all segment route will increase the bundle size of that route as it will include all the components and their deps. **Next.js can't optimize the bundle because the routing happens at runtime, not at build time**.
- Having individual routes results in smaller bundle sizes because Next.js can analyze them at build time.

![](/build-sizes.png)

## Detailed pages bundle sizes
### `/d3`
![](d3.png)

### `/lodash`
![](lodash.png)

### `/moment`
![](moment.png)

### `/catch-all/[...page]`
![](catch-all.png)

## How to run this locally?

```shell
npm install
npm run analyze
```