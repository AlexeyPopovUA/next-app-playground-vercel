import { ChangeEvent, useCallback, useState } from 'react';

type Props = {
  onChange: (value: string) => void
}

export function ProductsSearch(props: Props) {
  const handleInternalChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
  }, [props.onChange]);

  return (
    <input name="search-field" className="text-black" onChange={handleInternalChange} />
  )
}