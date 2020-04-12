import React from 'react';
import classes from './FlexRow.module.css';

export interface FlexRowProps {
  children: JSX.Element | string;
}

const FlexRow = (props: FlexRowProps) => {
  return (
    <div className={classes.FlexRow}>
      { props.children }
    </div>
  )
}

export default FlexRow;