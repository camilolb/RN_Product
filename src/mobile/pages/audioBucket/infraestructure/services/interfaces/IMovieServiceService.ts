import {AxiosResponse} from 'axios';

export interface IMovieServiceService {
  getMovies: () => Promise<AxiosResponse>;
}
