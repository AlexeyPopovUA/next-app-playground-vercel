'use client';

import { useCallback, useState } from 'react';
import { ProductsSearch } from '#/app/custom-view/products-search';
import { ProductsList } from '#/app/custom-view/products-list';
import { useProducts } from '#/app/custom-view/hooks';
import {
  DEFAULT_SORTING_FIELD,
  DEFAULT_SORTING_ORDER,
  SORTING_ORDERS,
  SortingOrder,
} from '#/app/custom-view/common';

type PlaygroundState = { searchValue: string; sortingField: string; sortingOrder: SortingOrder; };

export function ProductsPlayground() {
  const [state, setState] = useState<PlaygroundState>({
    searchValue: '',
    sortingField: DEFAULT_SORTING_FIELD,
    sortingOrder: DEFAULT_SORTING_ORDER,
  });

  const [products] = useProducts({
    filterValue: state.searchValue,
    sortingField: state.sortingField,
    sortingOrder: state.sortingOrder
  });

  // console.log({state, products});

  const handleFilterChange = useCallback((value: string) => {
    setState((prevState) => ({ ...prevState, searchValue: value }));
  }, []);

  const handleSortingChange = useCallback((params: {field: string}) => {
    setState((prevState) => {
      let sortingOrder = prevState.sortingOrder;
      if (prevState.sortingField === params.field) {
        sortingOrder = SORTING_ORDERS.find(order => order !== sortingOrder)!
      } else {
        sortingOrder = DEFAULT_SORTING_ORDER
      }

      return { ...prevState, sortingField: params.field, sortingOrder };
    });
  }, []);

  return (
    <>
      <ProductsSearch onChange={handleFilterChange} />
      <ProductsList products={products} onSortingToggle={handleSortingChange} />
    </>
  );
}
