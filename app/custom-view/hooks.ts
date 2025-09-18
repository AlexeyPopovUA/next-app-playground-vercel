import { useEffect, useState } from 'react';
import _get from "lodash-es/get"
import { Category, data } from '#/app/_internal/_data';
import { EnrichedProduct } from '#/app/custom-view/types';
import { SORTING_ASC, SortingOrder } from '#/app/custom-view/common';

type Props = { filterValue: string; sortingField: string; sortingOrder: SortingOrder };

type UseProductsState = { products: EnrichedProduct[]; categories: Category[] };

export function useProducts(props: Props) {
  const [state, setState] = useState<UseProductsState>({
    products: [],
    categories: [],
  });

  useEffect(() => {
    setState((prevState) => ({ ...prevState, categories: data.categories }));
  }, [data.categories]);

  useEffect(() => {
    const filteredProducts: EnrichedProduct[] = data.products
      .filter((product) =>
        product.name.toLowerCase().includes(props.filterValue.toLowerCase()),
      )
      .map((product) => {
        return {
          ...product,
          categoryData:
            state.categories.find((cat) => cat.id === product.category) || null,
        };
      })
      .sort((a, b) => (props.sortingOrder === SORTING_ASC ? 1 : -1) * _get(a, props.sortingField).localeCompare(_get(b, props.sortingField)));

    setState((prevState) => ({ ...prevState, products: filteredProducts }));
  }, [props.filterValue, state.categories, props.sortingOrder, props.sortingField]);

  return [state.products] as const;
}
