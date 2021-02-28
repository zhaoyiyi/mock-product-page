import { product, productColors } from './Product.mock';

export type Product = typeof product;
export type ProductColors = typeof productColors;
export type ProductVariant = typeof product['variants'][0];
export type ProductVariants = ProductVariant[];
