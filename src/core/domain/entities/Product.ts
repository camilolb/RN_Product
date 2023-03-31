import {IProductEntity, IProductEntityData} from '../interfaces/iProduct';

export class Product implements IProductEntity {
  private _Id: string;
  private _Name: string;
  private _Price: string;
  private _Stock: string;
  private _Image: string;

  constructor(request: IProductEntityData) {
    this._Id = request.id;
    this._Name = request.name;
    this._Price = request.unit_price;
    this._Stock = request.stock;
    this._Image = request.image;
  }
  get Id(): string {
    return this._Id;
  }
  get Name(): string {
    return this._Name;
  }
  get Price(): string {
    return this._Price;
  }
  get Stock(): string {
    return this._Stock;
  }
  get Image(): string {
    return this._Image;
  }
}
