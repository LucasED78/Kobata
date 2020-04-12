import React, { CSSProperties } from 'react';
import classes from './Card.module.css';

export interface CardProps {
  style?: CSSProperties;
  children: JSX.Element | string;
}

const Card = (props: CardProps) => {
  return (
    <div className={classes.Card}>
      { props.children }
    </div>
  )
}

export default Card;