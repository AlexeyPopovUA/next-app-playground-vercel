import { ChangeEvent, useCallback, useContext, useState } from 'react';
import { DataTableContext } from '#/app/custom-view/data-table-context';

export function ProductsSearch() {
  const context = useContext(DataTableContext);

  const handleInternalChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    context?.actions.setFilterValue(e.target.value)
  }, []);

  const handleReset = useCallback(() => {
    context?.actions.setFilterValue("")
  }, []);

  return (
    <div className="flex flex-row relative">
      <input name="search-field" className=" flex-1 text-black rounded-2xl" onChange={handleInternalChange} value={context?.state.filterValue} />
      <button className="absolute right-0 h-full px-4 bg-gray-300 rounded-2xl cursor-pointer" onClick={handleReset} >X</button>
    </div>
  )
}