# Bundle size analysis on catch-all segment routes

1. Doing client-side routing on a catch-all segment route will increase the bundle size of that route as it will include all the components and their deps. **Next.js can't optimize the bundle because the routing happens at runtime, not at build time**.
2. Having independent routes results in smaller bundle sizes

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
