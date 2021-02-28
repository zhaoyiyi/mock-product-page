import React from 'react';

import classes from './Alert.module.scss';

export function Alert({
  children,
  className = '',
}: {
  children: JSX.Element;
  className?: string;
}): JSX.Element {
  return <div className={[classes.alert, className].join(' ')}>{children}</div>;
}
