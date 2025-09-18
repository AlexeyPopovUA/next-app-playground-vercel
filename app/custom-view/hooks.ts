import { useEffect, useState } from 'react';
import { data, Product } from '#/app/_internal/_data';

type Props = { filterValue: string };

type UseProductsState = { products: Product[] };

export function useProducts(props: Props) {
  const [state, setState] = useState<UseProductsState>({
    products: [],
  });

  useEffect(() => {
    const filteredProducts = data.products.filter((product) =>
      product.name.includes(props.filterValue),
    );

    setState({ ...state, products: filteredProducts });
  }, [props.filterValue]);

  return [state.products] as const;
}
