# Bundle size analysis on catch-all segment routes

1. Doing client-side routing on a catch-all segment route will increase the bundle size of that route as it will include all the components and their deps
2. Having independent routes results in small bundle sizes

![](/build-sizes.png)