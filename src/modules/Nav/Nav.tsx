import React, { useEffect, useRef } from 'react';

import { Alert } from '~/components';

import classes from './Nav.module.scss';

export function Nav(): JSX.Element {
  const navElement = useRef<null | HTMLDivElement>(null);

  // update nav-height variable dynamically
  useEffect(() => {
    const { height } = navElement.current?.getBoundingClientRect() || {};
    if (height) {
      document.documentElement.style.setProperty('--nav-height', `${height}px`);
    }
  });

  return (
    <div className={classes.navContainer} ref={navElement}>
      <Alert>
        <div className={classes.alert}>FREE SHIPPING & EASY RETURNS</div>
      </Alert>
      <nav className={classes.nav}>
        <div>
          <button className={classes.mobileOnly}>MENU</button>
          <a className={classes.desktopOnly} href="#">
            SHOP MEN
          </a>
          <a className={classes.desktopOnly} href="#">
            SHOP WOMEN
          </a>
          <a className={classes.desktopOnly} href="#">
            ABOUT
          </a>
        </div>
        <div>
          <a className={classes.desktopOnly} href="#">
            STORES
          </a>
          <a className={classes.desktopOnly} href="#">
            CRAFTSMANSHIP
          </a>
          <button>CART(0)</button>
        </div>
      </nav>
    </div>
  );
}
