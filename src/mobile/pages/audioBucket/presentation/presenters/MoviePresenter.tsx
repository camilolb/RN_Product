import {useEffect} from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../core/frameworks/redux';
import {dataMovie} from '../../infraestructure/redux';
import {Movie} from '../components';

export function MoviePresenter() {
  const dispatch = useAppDispatch();
  const searchHistory = useAppSelector(state => state.movie);

  useEffect(() => {
    console.log('searchHistory', searchHistory);
    dispatch(dataMovie(true));
  }, []);

  return <Movie />;
}

export default MoviePresenter;
