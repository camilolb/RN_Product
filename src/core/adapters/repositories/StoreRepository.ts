import {IProductEntity, IProductEntityData, Product} from '../../domain';
import {IHttp} from '../infrastructures/interfaces';
import {IStoreRepository} from './interfaces';
import {API_URL} from '@env';

export class StoreRepository implements IStoreRepository {
  constructor(readonly http: IHttp) {}

  getProducts(): Promise<IProductEntity[]> {
    return this.http
      .request<{products: IProductEntityData[]}>({
        method: 'get',
        headers: {},
        url: `${API_URL}/all-products`,
      })
      .then(res => res.products)
      .then(res => {
        return res.map(item => new Product(item));
      });
  }

  getProduct(id: string): Promise<IProductEntity> {
    return this.http
      .request<IProductEntityData>({
        method: 'get',
        url: `${API_URL}/detail/${id}`,
      })
      .then(res => new Product(res));
  }
}
