import { Product } from '#/app/_internal/_data';

type Props = { products: Product[] };

export function ProductsList(props: Props) {
  return props.products.length ? (
    <div className="product-list-container">
      {props.products.map((product: Product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <div>{product.category}</div>
        </div>
      ))}
    </div>
  ) : (
    <div>No products found</div>
  );
}
