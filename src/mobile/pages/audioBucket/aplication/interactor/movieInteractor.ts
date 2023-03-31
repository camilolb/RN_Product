import {HelperGlobal} from '../../../../../shared/helper/HelperGlobal';
import {movieService} from '../../infraestructure';
import {IMovieInteractor} from './interfaces';

const service = new movieService();

export class movieInteractor implements IMovieInteractor {
  processGetMovies = async (): Promise<any> => {
    return await service
      .getMovies()
      .then(res => HelperGlobal.handleResponsePetition<any>(res));
  };
}
