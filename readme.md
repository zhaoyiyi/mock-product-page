This repo contains the code that recreates [this product page](https://www.koio.co/collections/collection-men/products/capri-triple-white-men).

### How to start locally

_requires node 14 or higher_

1. `npm i` to install node modules
2. `npm run dev`

then the page should be available at http://localhost:3000/

### How to build

`npm run build`

compiled files will be in `dist` directory

### Testing

to run tests `npm run test`.

Tests are set up with [jest](https://jestjs.io/) and react [testing library](https://testing-library.com/).

There are two example tests in `src/pages/Product/components/ColorPicker/__tests__` and `src/pages/Product/components/SizeSelector/__tests__`.

### Folder structure

```
__mocks__/                    mock files used by jest

src                           main application code
  components                  app level shared ui components
  modules                     complex components being used on different pages

  pages
    Product                   product page components
      components              components only for product page
      Product.tsx             main product page container component
      Product.module.scss     styles
      Product.mock.ts         mock product data
      Product.query.ts        mock api calls that return mock data
      Product.types.ts        product types that are shared in different components
      index.ts                makes components easier to import

  App.tsx                     top level app component
  main.tsx                    app entry point
  index.scss                  global styles
```

### API

Assuming product variants and stock are returned as part of the product call, this page used 2 APIs. One is the main product call which returns all the necessary data to render first look of the page. Another one is to fetch other colors for the color dropdown.

Color dropdown makes a spearate call because we only need to show other colors when user clicks the dropdown, so defer this api call could speed up the initial page load.

There are various way to further optimize the page load time. For example, size options and stock level can be a separate call and not included in the initial product payload. The page can also lazy load all images and potentially load lower resolution images first before renders a high res images.
