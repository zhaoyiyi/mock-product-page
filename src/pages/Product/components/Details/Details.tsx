import React from 'react';

import { Collapse } from '~/components';

import { Product } from '../../Product.type';
import classes from './Details.module.scss';

export function Details({ product }: { product: Product }): JSX.Element {
  return (
    <div>
      <Collapse
        className={classes.collapse}
        title={<div className={classes.title}>Product Description</div>}
        content={<div className={classes.content}>{product.description}</div>}
      />
      <Collapse
        className={classes.collapse}
        title={<div className={classes.title}>Product Details</div>}
        content={
          <ul className={[classes.content, classes.details].join(' ')}>
            {product.details.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        }
      />
      <Collapse
        className={classes.collapse}
        title={<div className={classes.title}>Shipping & Returns</div>}
        content={
          <div className={classes.content}>
            Shipping <br />
            <br />
            Receive free ground shipping (3-5 business days) on all orders over $100. Read more about our
            shipping options here. <br />
            <br />
            Returns/Exchanges <br />
            <br />
            If for any reason you are unhappy with your order, you may return or exchange it for a full refund
            within 30-days. Read more about our returns/exchange policy here.
          </div>
        }
      />
    </div>
  );
}
