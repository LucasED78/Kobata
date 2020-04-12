import React from 'react';
import classes from './Title.module.css';

export interface Title {
  title: string;
}

const Title = (props: Title) => {
  return (
    <h1 className={classes.Title}>
      { props.title }
    </h1>
  )
}

export default Title;