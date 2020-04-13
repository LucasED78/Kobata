import React, { useState, ChangeEvent, useEffect } from 'react';
import Card from './Card/Card';
import UnderlineInput from './UnderlineInput/UnderlineInput/UnderlineInput';
import PaymentRadioGroup from './PaymentRadioGroup/PaymentRadioGroup';
import Spacer from './Spacer/Spacer';
import Button from './Button/Button';
import Content from './Content/Content';
import Title from './Title/TItle';
import Backdrop from './Backdrop/Backdrop';
import Modal from './Modal/Modal';
import KobataHttp from '../core/http/impl/KobataHttpImpl';
import CurrencyRepository from '../core/repository/impl/CurrencyRepository';
import CalculationResult from './CalculationResult/CalculationResult';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  
  const currencyRepository = new CurrencyRepository(new KobataHttp());
  
  const [dollar, setDollar] = useState(0);
  const [amount, setAmount] = useState('');
  const [stateTax, setStateTax] = useState('');
  const [iof, setIOF] = useState('');
  const [backdrop, setBackdrop] = useState(false);
  
  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        const currency = await currencyRepository.getCurrency('USD');
      
        setDollar(+currency.bid);
      } catch({ message }){
        toast.error(message)
      }
    }
    
    fetchCurrency();
  }, [])
  
  const backdropClickedHandler = () => { 
    setAmount('');
    setStateTax('');
    setBackdrop(false);
  };
  
  const buttonClickedHandler = () => setBackdrop(true);
  
  const getButtonState = () => {
    return (dollar == undefined) || (amount.length == 0) || (stateTax.length == 0) || (iof.length == 0);
  }

  return (
    <Content>
      <>
        <ToastContainer />
        <Backdrop show={backdrop} onBackdropClicked={backdropClickedHandler}>
          <Modal show={backdrop}>
            <CalculationResult 
              amount={+amount}
              dollar={dollar}
              stateTax={+stateTax}
              iof={+iof}
              backButtonClicked={buttonClickedHandler}/>
          </Modal>
        </Backdrop>
        <Card>
          <>
          <Title title="Kobata" />
            <Spacer verticalSpace="30px" />
            <UnderlineInput 
              placeholder="Digite o valor em dólar"
              name="dollar"
              value={amount.toString()}
              onChange={({ currentTarget }) => setAmount(currentTarget.value)} />

            <Spacer verticalSpace="30px" />

            <UnderlineInput 
              placeholder="Digite a taxa do estado"
              name="dollar"
              value={stateTax.toString()}
              onChange={({ currentTarget }) => setStateTax(currentTarget.value)} />

              <Spacer verticalSpace="30px" />
              <PaymentRadioGroup onChange={({ currentTarget }) => setIOF(currentTarget.value)} />
              <Spacer verticalSpace="30px" />
              <Button 
                style={{ width: '100%' }} 
                onClick={buttonClickedHandler}
                disabled={getButtonState()}>
                Calcular
              </Button>
          </>
        </Card>
      </>
    </Content>
  )
}

export default App;