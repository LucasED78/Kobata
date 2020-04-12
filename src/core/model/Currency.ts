class Currency {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  bid: string;
  ask: string;

  constructor(
    code: string,
    codein: string,
    name: string,
    high: string,
    low: string,
    varBid: string,
    pctChange: string,
    bid: string,
    ask: string,
  ) {
    this.code = code;
    this.codein = codein;
    this.name = name;
    this.high = high;
    this.low = low;
    this.varBid = varBid;
    this.pctChange = pctChange;
    this.bid = bid;
    this.ask = ask;
  }

  static fromJSON(data: any): Currency {
    return new Currency(
      data.code,
      data.codein,
      data.name,
      data.high,
      data.low,
      data.varBid,
      data.pctChange,
      data.bid,
      data.ask,
    )
  }
}

export default Currency;