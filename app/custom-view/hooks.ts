import { useEffect, useState } from 'react';
import { Category, data } from '#/app/_internal/_data';
import { EnrichedProduct } from '#/app/custom-view/types';

type Props = { filterValue: string };

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
      .filter((product) => product.name.toLowerCase().includes(props.filterValue.toLowerCase()))
      .map((product) => {
        return {
          ...product,
          categoryData:
            state.categories.find((cat) => cat.id === product.category) || null,
        };
      });

    setState(prevState => ({ ...prevState, products: filteredProducts }));
  }, [props.filterValue, state.categories]);

  return [state.products] as const;
}
