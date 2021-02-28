import React, { useState } from 'react';

import classes from './Collapse.module.scss';

export function Collapse({
  title,
  content,
  absolutePosition = false,
  className = '',
}: {
  title: JSX.Element;
  content: JSX.Element;
  absolutePosition?: boolean;
  className?: string;
}): JSX.Element {
  const [showAll, setShowAll] = useState(false);

  return (
    <div
      className={[
        classes.container,
        showAll ? classes.showAll : '',
        absolutePosition ? classes.absolutePosition : '',
        className,
      ].join(' ')}
    >
      <div className={classes.title} onClick={() => setShowAll(!showAll)}>
        {title}
        <span className={classes.triangle} />
      </div>
      <div className={classes.content}>{content}</div>
    </div>
  );
}
