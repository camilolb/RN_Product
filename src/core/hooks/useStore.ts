import {useQuery} from 'react-query';
import di from '../di';

export function useStore() {
  return useQuery(['PRODUCTS'], async () => {
    return di.storeUseCase.getProducts();
  });
}
