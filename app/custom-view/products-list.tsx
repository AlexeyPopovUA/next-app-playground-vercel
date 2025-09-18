import { useCallback, useContext } from 'react';
import { HeaderCell } from '#/app/custom-view/header-cell';
import { DataTableContext } from '#/app/custom-view/data-table-context';

export function ProductsList() {
  const context = useContext(DataTableContext)

  const onSortingToggle = useCallback(({field}: {field: string}) => {
    context?.actions.setSortingField(field)
  }, []);

  return context?.state.products.length ? (
    <div className="product-list-container">
      <div className="grid grid-cols-2 p-2 hover:bg-gray-700">
        <HeaderCell
          clickHandler={onSortingToggle}
          text="Name"
          columnData={{ field: 'name' }}
        />
        <HeaderCell
          clickHandler={onSortingToggle}
          text="Category"
          columnData={{ field: 'categoryData.name' }}
        />
      </div>
      {context.state.products.map((product) => (
        <div
          className="grid grid-cols-2 p-2 hover:bg-gray-700"
          key={product.id}
        >
          <div>{product.name}</div>
          <div>{product.categoryData?.name}</div>
        </div>
      ))}
    </div>
  ) : (
    <div>No products found</div>
  );
}
