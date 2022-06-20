import { Hero, JsonResponseAPI } from '../types';
import FetchService from './fetchService';

const http = new FetchService();

const URI_MARVEL = `https://gateway.marvel.com`;
const API_KEY = `33dade9735c624e366be3d6a9a6eae72`;

const getAllHeroes = async (): Promise<Hero[]> => {
  const response: JsonResponseAPI = await http.get(
    `${URI_MARVEL}/v1/public/characters`,
    { apikey: API_KEY }
  );
  const { data, errors } = response;
  if (response.code == 200) {
    return data?.results;
  } else {
    const error = new Error(
      errors?.map((e) => e.message).join('\n') ?? 'unknown'
    );
    return Promise.reject(error);
  }
};

const MarvelService = {
  getAllHeroes,
};

export default MarvelService;
