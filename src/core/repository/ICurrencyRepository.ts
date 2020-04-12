import Currency from "../model/Currency";

interface ICurrencyRepository {
  getCurrency(currency: string): Promise<Currency>
}

export default ICurrencyRepository;