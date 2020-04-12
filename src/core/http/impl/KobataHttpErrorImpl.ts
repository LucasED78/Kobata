import IKobataHttpError from "../IKobataHttpError";

class KobataHttpErrorImpl implements IKobataHttpError {
  message: string;

  constructor(message: string) {
    this.message = message;
  }
}

export default KobataHttpErrorImpl;