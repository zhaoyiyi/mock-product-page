import React, { useState } from 'react';

import { ColorPicker, Details, Gallery, SizeSelector } from './components';
import classes from './Product.module.scss';
import { getProductColors, useProductData } from './Product.query';
import { ProductColors, ProductVariant } from './Product.type';

export function ProductPage(): JSX.Element {
  const productSlug = 'product-slug';
  const { data: product, error, isLoading } = useProductData(productSlug);
  const [productColors, setProductColors] = useState<ProductColors>([]);
  const [selectedVariant, setSelectedVariant] = useState<null | ProductVariant>(null);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error || !product) {
    return <div>something went wrong...</div>;
  }

  if (product) {
    getProductColors(productSlug)
      .then((colors) => {
        setProductColors(colors);
      })
      .catch(() => {
        // error handling
      });
  }

  return (
    <div className={classes.page}>
      <div className={classes.pageUpper}>
        <Gallery images={product.images} />
        <div className={classes.productInfo}>
          <div className={classes.productKeyInfo}>
            <div className={classes.productType}>{product.type}</div>
            <h1 className={classes.productName}>{product.name}</h1>
            <div className={classes.productPrice}>${product.price}</div>
          </div>

          <ColorPicker
            currentColor={product.color}
            currentColorImageUrl={product.thumbnail}
            productColors={productColors}
          />

          <SizeSelector
            variants={product.variants}
            selectedVariant={selectedVariant}
            onSelect={(variant) => setSelectedVariant(variant)}
          />

          <div className={classes.buttons}>
            <button className={classes.addToCartButton} disabled={!selectedVariant}>
              ADD TO CART
            </button>
            <button className={classes.tryButton}>TRY BEFORE YOU BUY</button>
          </div>

          <Details product={product} />
        </div>
      </div>

      <div className={classes.additionalImages}>
        {product.additionalImages.map((imageUrl, index) => {
          return <img src={imageUrl} key={index} />;
        })}
      </div>
    </div>
  );
}
