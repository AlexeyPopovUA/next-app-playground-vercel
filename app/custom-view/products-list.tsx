import { EnrichedProduct } from '#/app/custom-view/types';
import { HeaderCell } from '#/app/custom-view/HeaderCell';

type Props = { products: EnrichedProduct[] };

export function ProductsList(props: Props) {
  return props.products.length ? (
    <div className="product-list-container">
      <div className="grid grid-cols-2 hover:bg-gray-700 p-2">
        <HeaderCell text="Name" />
        <HeaderCell text="Category" />
      </div>
      {props.products.map((product) => (
        <div className="grid grid-cols-2 hover:bg-gray-700 p-2" key={product.id}>
          <div>{product.name}</div>
          <div>{product.categoryData?.name}</div>
        </div>
      ))}
    </div>
  ) : (
    <div>No products found</div>
  );
}
