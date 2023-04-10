import {BaseEntity} from '../../../shared';
import {IProductEntity, IProductEntityData} from '../interfaces/iProduct';

export class Product
  extends BaseEntity<IProductEntity>
  implements IProductEntity
{
  private _Id: string;
  private _Title: string;
  private _Price: string;
  private _Image: string;
  private _Description: string;

  constructor(request: IProductEntityData) {
    super();
    this._Id = request.id;
    this._Title = request.title;
    this._Price = request.price;

    this._Image = request.image;
    this._Description = request.description;
  }
  get Id(): string {
    return this._Id;
  }
  get Title(): string {
    return this._Title;
  }
  get Price(): string {
    return this._Price;
  }

  get Image(): string {
    return this._Image;
  }
  get Description(): string {
    return this._Description;
  }
}
