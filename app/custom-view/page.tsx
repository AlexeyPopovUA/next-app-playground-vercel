'use cache';

import { ProductsPlayground } from '#/app/custom-view/ProductsPlayground';

export default async function Page() {
  return (
    <>
      <h2>Products</h2>
      <ProductsPlayground />
    </>
  );
}
