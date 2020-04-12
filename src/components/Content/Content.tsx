import React from 'react';
import classes from './Content.module.css';

export interface ContentProps {
  children: JSX.Element;
}

const Content = (props: ContentProps) => {
  return (
    <div className={classes.Content}>
      { props.children }
    </div>
  )
}

export default Content;