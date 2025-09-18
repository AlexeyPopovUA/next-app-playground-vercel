'use cache';

import { ProductsPlayground } from '#/app/custom-view/products-playground';

export default async function Page() {
  return (
    <>
      <h2>Products</h2>
      <ProductsPlayground />
    </>
  );
}
