import React, { ChangeEvent } from 'react';
import RadioWithLabel from '../RadioWithLabel/RadioWithLabel';
import classes from './PaymentRadioGroup.module.css';

export interface PaymentRadioGroupProps {
  onChange(event: ChangeEvent<HTMLInputElement>): void;
}

const PaymentRadioGroup = (props: PaymentRadioGroupProps) => {
  return (
    <fieldset className={classes.RadioGroup}>
      <RadioWithLabel 
        label="dinheiro"
        name="payment"
        value="1"
        onChange={props.onChange} />

      <RadioWithLabel 
        label="cartão"
        name="payment"
        value="2"
        onChange={props.onChange} />
    </fieldset>
  )
}

export default PaymentRadioGroup;