import React, { ChangeEvent } from 'react';
import classes from './RadioWithLabel.css';
import { v4 as uuidv4 } from 'uuid';

export interface RadioWithLabelProps {
  label: string;
  value: string;
  id?: string;
  name: string;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
}

const RadioWithLabel = (props: RadioWithLabelProps) => {
  const id = props.label ?? uuidv4();

  return (
    <>
      <label htmlFor={id}>
        <input 
          type="radio" 
          id={id} 
          name={props.name}
          onChange={props.onChange}
          value={props.value} />
        
        <span className={classes.Radio}>
          <div className={classes['Radio--checked']}></div>
        </span>
        
        <span className={classes.Radio__label}>{ props.label }</span>
      </label>
      
    </>
  )
}

export default RadioWithLabel;