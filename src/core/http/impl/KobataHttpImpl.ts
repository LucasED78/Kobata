import IKobataHttp from "../IKobataHttp";
import HttpMethods from '../HttpMethods';
import { AxiosResponse } from "axios";
import api from '../api';
import KobataHttpResponseImpl from "./KobataHttpResponseImpl";
import KobataHttpErrorImpl from "./KobataHttpErrorImpl";

class KobataHttp implements IKobataHttp<KobataHttpResponseImpl> {
  request = async (url: string, method: HttpMethods, data?: string | undefined, headers?: string | undefined): Promise<KobataHttpResponseImpl> => {
    try {
      const response = await this.getMethods(url, method, data, headers);

      const { data: responseData } = response;

      if (response) return new KobataHttpResponseImpl(responseData);
      
      throw new KobataHttpErrorImpl("data can't be acessed");
    } catch(e){
      throw new KobataHttpErrorImpl("Unexpected error");
    }
  }

  get = async (url: string, headers?: string | undefined): Promise<KobataHttpResponseImpl> => {
    return this.request(url, HttpMethods.GET);
  }

  post = async (url: string, data?: string | undefined, headers?: string | undefined): Promise<KobataHttpResponseImpl> => {
    return this.request(url, HttpMethods.POST, data, headers);
  }

  put = async (url: string, data?: string | undefined, headers?: string | undefined): Promise<KobataHttpResponseImpl> => {
    return this.request(url, HttpMethods.PUT, data, headers);
  }

  delete = async (url: string, headers?: string | undefined): Promise<KobataHttpResponseImpl> => {
    return this.request(url, HttpMethods.DELETE, undefined, headers);
  }
  
  getMethods = async (url: string, method: HttpMethods, data?: string | undefined, headers?: string | undefined): Promise<AxiosResponse<any>> => {
   switch (method) {
      case HttpMethods.GET:
        return  api.get(url);
      case HttpMethods.POST:
        return api.post(url, data);
      case HttpMethods.PUT:
        return api.put(url, data);
      case HttpMethods.DELETE:
        return api.delete(url);
   }
  }
}

export default KobataHttp;