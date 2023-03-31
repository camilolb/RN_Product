import {useQuery} from 'react-query';
import di from '../di';

export function useProduct(id?: string) {
  return useQuery(['PRODUCT'], async () => {
    return di.storeUseCase.getProduct(id || '');
  });
}
