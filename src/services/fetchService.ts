import { JsonResponseAPI } from '../types';

type JsonHeaders = {
  [key: string]: string;
};

const jsonHeaders: JsonHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export default class fetchService {
  private headers: JsonHeaders;

  constructor() {
    this.headers = jsonHeaders;
  }

  public async get(url: string, params?: any): Promise<JsonResponseAPI> {
    let query = Object.keys(params)
      .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
      .join('&');
    const response = await fetch(url + '?' + query, { headers: this.headers });
    return response.json();
  }
}
