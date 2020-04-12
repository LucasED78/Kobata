import React, { MouseEvent } from 'react';
import Paragraph from '../Paragraph/Paragraph';
import FlexRow from '../Structure/FlexRow';
import MoneyUtil from '../../utils/moneyUtil';
import classes from './CalculationResult.module.css';
import Button from '../Button/Button';
import Spacer from '../Spacer/Spacer';

export interface CalculationResultProps {
  amount: number;
  dollar: number;
  iof: number;
  stateTax: number;
  backButtonClicked(event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void
}

const CalculationResult = (props: CalculationResultProps) => {
  const { amount, dollar, iof, stateTax } = props;

  return (
    <div className={classes.CalculationResult}>
      <Paragraph content={`IOF: ${iof}`} />

      <Paragraph content={`Cotação do dolar: ${dollar}`} />

      <FlexRow>
        <>
          <Paragraph content="Total com imposto:" />
          <span>{ MoneyUtil.formatDollar(MoneyUtil.dollarWithTax(amount, stateTax, iof)) }</span>
        </>
      </FlexRow>

      <FlexRow>
        <>
          <Paragraph content="Total sem imposto:" />
          <span>{ MoneyUtil.formatDollar(amount) }</span>
        </>
      </FlexRow>

      <FlexRow>
        <>
          <Paragraph content="Total em real com imposto:" />
          <span>{ MoneyUtil.formatReal(MoneyUtil.realWithTax(amount, dollar, stateTax, iof)) }</span>
        </>
      </FlexRow>

      <FlexRow>
        <>
          <Paragraph content="Total em real sem imposto:" />
          <span>{ MoneyUtil.formatReal(MoneyUtil.realWithoutTax(amount, stateTax, dollar)) }</span>
        </>
      </FlexRow>

      <Spacer verticalSpace="20px" />

      <Button onClick={props.backButtonClicked}>
        Voltar
      </Button>
    </div>
  )
}

export default CalculationResult;