import { useEffect, useState } from 'react';

import { product, productColors } from './Product.mock';
import { Product, ProductColors } from './Product.type';

// mock api call
function getProduct(productSlug: string): Promise<Product> {
  console.log(`fetching product ${productSlug}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(product);
    }, 1000);
  });
}

export function getProductColors(productSlug: string): Promise<ProductColors> {
  console.log(`fetching colors for product ${productSlug}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productColors);
    }, 1000);
  });
}

export function useProductData(
  productSlug: string
): { isLoading: boolean; data: Product | null; error: Error | null } {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<null | Product>(null);
  const [error, setError] = useState<null | Error>(null);

  useEffect(() => {
    getProduct(productSlug)
      .then((product) => {
        setProduct(product);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { isLoading, data: product, error };
}
