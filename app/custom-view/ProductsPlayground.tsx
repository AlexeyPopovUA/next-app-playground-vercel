'use client';

import { ProductsSearch } from '#/app/custom-view/products-search';
import { ProductsList } from '#/app/custom-view/products-list';
import { useEffect, useState } from 'react';
import { data, Product } from '#/app/_internal/_data';

type PlaygroundState = { searchValue: string; products: Product[] };

export function ProductsPlayground() {
  const [state, setState] = useState<PlaygroundState>({
    searchValue: '',
    products: [],
  });

  const handleChange = (value: string) => {
    console.log('handleChange', value);

    setState({ ...state, searchValue: value });
  };

  useEffect(() => {
    const filteredProducts = data.products.filter(product => product.name.includes(state.searchValue));

    setState({...state, products: filteredProducts});
  }, [state.searchValue]);

  return (
    <>
      <ProductsSearch onChange={handleChange} />
      <ProductsList products={state.products} />
    </>
  );
}
