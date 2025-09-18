import { ChangeEvent, useState } from 'react';

type Props = {
  onChange: (value: string) => void
}

export function ProductsSearch(props: Props) {
  const handleInternalChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
  }

  return (
    <input name="search-field" className="text-black" onChange={handleInternalChange} />
  )
}