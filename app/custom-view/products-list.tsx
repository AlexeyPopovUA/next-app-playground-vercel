import { EnrichedProduct } from '#/app/custom-view/types';
import { HeaderCell } from '#/app/custom-view/HeaderCell';

type Props = {
  products: EnrichedProduct[];
  onSortingToggle: ({ field }: { field: string }) => void;
};

export function ProductsList(props: Props) {
  return props.products.length ? (
    <div className="product-list-container">
      <div className="grid grid-cols-2 p-2 hover:bg-gray-700">
        <HeaderCell
          clickHandler={props.onSortingToggle}
          text="Name"
          columnData={{ field: 'name' }}
        />
        <HeaderCell
          clickHandler={props.onSortingToggle}
          text="Category"
          columnData={{ field: 'categoryData.name' }}
        />
      </div>
      {props.products.map((product) => (
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
