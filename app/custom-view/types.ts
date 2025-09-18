import { Category, Product } from '#/app/_internal/_data';

export type EnrichedProduct = Product & { categoryData: Category | null };
