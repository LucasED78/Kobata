import React, { ChangeEvent } from 'react';
import classes from './UnderlineInput.module.css';

export interface UnderlineInputProps {
  value: string;
  placeholder?: string;
  name: string;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
}

const UnderlineInput = (props: UnderlineInputProps) => {
  return (
    <input 
      type="text" 
      placeholder={props.placeholder}
      className={classes.UnderlineInput}
      name={props.name}
      onChange={props.onChange} />
  )
}

export default UnderlineInput;