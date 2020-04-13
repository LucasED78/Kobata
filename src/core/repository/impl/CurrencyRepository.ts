import ICurrencyRepository from "../ICurrencyRepository";
import Currency from "../../model/Currency";
import KobataHttp from "../../http/impl/KobataHttpImpl";
import KobataHttpErrorImpl from "../../http/impl/KobataHttpErrorImpl";

class CurrencyRepository implements ICurrencyRepository {
  private kobataHttp = new KobataHttp();

  constructor(kobataHttp: KobataHttp) {
    this.kobataHttp = kobataHttp;
  }

  getCurrency = async (currency: string): Promise<Currency> => {
    try {
      const response = this.kobataHttp.get(`/${currency}`);

      return Currency.fromJSON((await response).data[0])
    } catch(e){
      throw new KobataHttpErrorImpl('Ocorreu um erro ao buscar a cotação')
    }
  }
  
}

export default CurrencyRepository;