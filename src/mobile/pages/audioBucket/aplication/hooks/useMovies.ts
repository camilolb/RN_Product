import {useQuery} from 'react-query';
import {movieInteractor} from '../interactor';

export function useMovies() {
  const interactor = new movieInteractor();
  return useQuery<any, any, any, any>(interactor.processGetMovies());
}
