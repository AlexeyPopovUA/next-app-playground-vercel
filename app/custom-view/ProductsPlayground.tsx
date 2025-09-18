'use client';

import { useCallback, useState } from 'react';
import { ProductsSearch } from '#/app/custom-view/products-search';
import { ProductsList } from '#/app/custom-view/products-list';
import { useProducts } from '#/app/custom-view/hooks';

type PlaygroundState = { searchValue: string; };

export function ProductsPlayground() {
  const [state, setState] = useState<PlaygroundState>({
    searchValue: ''
  });

  const [products] = useProducts({filterValue: state.searchValue});

  const handleChange = useCallback((value: string) => {
    setState(prevState => ({ ...prevState, searchValue: value }));
  }, []);

  return (
    <>
      <ProductsSearch onChange={handleChange} />
      <ProductsList products={products} />
    </>
  );
}
