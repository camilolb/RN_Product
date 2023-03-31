import axios, {AxiosInstance, AxiosResponse} from 'axios';
import ENV from '../../../../../environments/enviroment.dev';
import {IMovieServiceService} from './interfaces';

export class movieService implements IMovieServiceService {
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
      },
      baseURL: `${ENV.apiURL}/Screening`,
      timeout: 15000,
    });
  }

  getMovies(): Promise<AxiosResponse> {
    return this.api.get('Movies/getMovies');
  }
}
