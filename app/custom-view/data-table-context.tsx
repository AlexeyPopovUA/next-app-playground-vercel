import {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import _get from 'lodash-es/get';
import { Category, data } from '#/app/_internal/_data';
import { EnrichedProduct } from '#/app/custom-view/types';

export const DEFAULT_SORTING_FIELD = "name"
export const SORTING_ASC = "asc"
export const SORTING_DESC = "desc"
export const DEFAULT_SORTING_ORDER = SORTING_ASC

export const SORTING_ORDERS = [SORTING_DESC, SORTING_ASC] as const

export type SortingOrder = typeof SORTING_ORDERS[number]

type ProductsState = {
  products: EnrichedProduct[];
  categories: Category[];
  filterValue: string;
  sortingField: string;
  sortingOrder: SortingOrder;
};

type DataTableContextState = {
  products: EnrichedProduct[];
  categories: Category[];
};

type DataTableContextActions = {
  setFilterValue: (filterValue: string) => void;
  setSortingOrder: (sortingOrder: SortingOrder) => void;
  setSortingField: (sortingField: string) => void;
};

type DataTableContextType = {
  state: DataTableContextState;
  actions: DataTableContextActions;
};

export const DataTableContext = createContext<DataTableContextType | null>(
  null,
);

export function DataTableContextProvider({ children }: PropsWithChildren) {
  const [state, setState] = useState<ProductsState>({
    products: [],
    categories: [],
    filterValue: '',
    sortingField: DEFAULT_SORTING_FIELD,
    sortingOrder: DEFAULT_SORTING_ORDER,
  });

  useEffect(() => {
    setState((prevState) => ({ ...prevState, categories: data.categories }));
  }, [data.categories]);

  useEffect(() => {
    const filteredProducts: EnrichedProduct[] = data.products
      .filter((product) =>
        product.name.toLowerCase().includes(state.filterValue.toLowerCase()),
      )
      .map((product) => {
        return {
          ...product,
          categoryData:
            state.categories.find((cat) => cat.id === product.category) || null,
        };
      })
      .sort(
        (a, b) =>
          (state.sortingOrder === SORTING_ASC ? 1 : -1) *
          _get(a, state.sortingField).localeCompare(
            _get(b, state.sortingField),
          ),
      );

    setState((prevState) => ({ ...prevState, products: filteredProducts }));
  }, [
    state.filterValue,
    state.categories,
    state.sortingOrder,
    state.sortingField,
  ]);

  function setFilterValue(filterValue: string) {
    setState((prevState) => ({ ...prevState, filterValue: filterValue }));
  }

  function setSortingOrder(sortingOrder: SortingOrder) {
    setState((prevState) => ({ ...prevState, sortingOrder: sortingOrder }));
  }

  function setSortingField(sortingField: string) {
    setState((prevState) => {
      let sortingOrder = prevState.sortingOrder;
      if (prevState.sortingField === sortingField) {
        sortingOrder = SORTING_ORDERS.find((order) => order !== sortingOrder)!;
      } else {
        sortingOrder = DEFAULT_SORTING_ORDER;
      }

      return { ...prevState, sortingField, sortingOrder };
    });
  }

  return (
    <DataTableContext.Provider
      value={{
        state: { products: state.products, categories: state.categories },
        actions: { setFilterValue, setSortingOrder, setSortingField },
      }}
    >
      {children}
    </DataTableContext.Provider>
  );
}
