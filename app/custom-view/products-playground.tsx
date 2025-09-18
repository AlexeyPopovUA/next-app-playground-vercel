'use client';

import { ProductsSearch } from '#/app/custom-view/products-search';
import { ProductsList } from '#/app/custom-view/products-list';
import { DataTableContextProvider } from '#/app/custom-view/data-table-context';

export function ProductsPlayground() {
  return (
    <DataTableContextProvider>
      <ProductsSearch />
      <ProductsList />
    </DataTableContextProvider>
  );
}
