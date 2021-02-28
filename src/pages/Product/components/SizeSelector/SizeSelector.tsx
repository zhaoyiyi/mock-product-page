import React from 'react';

import { Alert } from '~/components';

import { ProductVariant, ProductVariants } from '../../Product.type';
import classes from './SizeSelector.module.scss';

export function SizeSelector({
  variants,
  onSelect,
  selectedVariant,
}: {
  variants: ProductVariants;
  onSelect: (variant: ProductVariant) => void;
  selectedVariant: ProductVariant | null;
}): JSX.Element {
  return (
    <>
      <div className={classes.buttons}>
        SIZE:
        {variants.map((variant) => {
          const { size, stock } = variant;
          const isSelected = selectedVariant?.size === size;

          return (
            <button
              className={[classes.button, isSelected ? classes.isSelected : ''].join(' ')}
              disabled={stock === 0}
              key={size}
              onClick={() => onSelect(variant)}
            >
              {size}
            </button>
          );
        })}
      </div>

      {selectedVariant && selectedVariant.stock <= 5 && (
        <Alert className={classes.lowStock}>
          <div>ONLY {selectedVariant.stock} LEFT IN STOCK</div>
        </Alert>
      )}
    </>
  );
}
