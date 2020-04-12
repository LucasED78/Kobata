class MoneyUtil {
  static dollarWithTax(amount: number, stateTax: number, iof: number) {
    return (amount + stateTax) * iof;
  }

  static realWithTax(amount: number, dollar: number, stateTax: number, iof: number) {    
    return (amount + stateTax) * (dollar + iof);
  }

  static realWithoutTax(amount: number, stateTax: number, dollar: number) {
    return (amount + stateTax) * dollar;
  }

  static formatDollar(amount: number) {
    return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  }

  static formatReal(amount: number) {
    return Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(amount);
  }
}

export default MoneyUtil;