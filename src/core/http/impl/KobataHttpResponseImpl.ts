import IKobataHttpResponse from "../IKobataHttpResponse";

class KobataHttpResponseImpl implements IKobataHttpResponse {
  data: any;

  constructor(data: string) {
    this.data = data;
  }
}

export default KobataHttpResponseImpl;