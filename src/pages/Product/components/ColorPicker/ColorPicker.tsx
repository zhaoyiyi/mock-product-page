import React from 'react';

import { Collapse } from '~/components/Collapse';

import { ProductColors } from '../../Product.type';
import classes from './ColorPicker.module.scss';

export function ColorPicker({
  currentColor,
  currentColorImageUrl,
  productColors,
}: {
  currentColor: string;
  currentColorImageUrl: string;
  productColors: ProductColors;
}): JSX.Element {
  const otherColors = productColors.filter(({ color }) => color !== currentColor);

  return (
    <div className={classes.container}>
      <Collapse
        absolutePosition
        title={
          <div className={classes.color}>
            <img
              className={classes.productImage}
              src={currentColorImageUrl}
              alt={`product image for ${currentColor} color`}
            />
            color: {currentColor}
          </div>
        }
        content={
          <div className={classes.otherColors}>
            {otherColors.map(({ color, slug, imageUrl }, index) => {
              return (
                <a href={`#${slug}`} key={index} className={[classes.color, classes.link].join(' ')}>
                  <img
                    className={classes.productImage}
                    src={imageUrl}
                    alt={`product image for ${color} color`}
                  />
                  {color}
                </a>
              );
            })}
          </div>
        }
      />
    </div>
  );
}
