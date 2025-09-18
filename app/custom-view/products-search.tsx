import { ChangeEvent, useCallback, useContext, useState } from 'react';
import { DataTableContext } from '#/app/custom-view/data-table-context';

export function ProductsSearch() {
  const context = useContext(DataTableContext);

  const handleInternalChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    context?.actions.setFilterValue(e.target.value)
  }, []);

  return (
    <input name="search-field" className="text-black" onChange={handleInternalChange} />
  )
}