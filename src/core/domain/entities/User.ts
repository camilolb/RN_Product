import {IUserEntity, IUserEntityData} from '../interfaces/iUser';

export class User implements IUserEntity {
  private _Email: string;
  private _NickName: string;
  private _Image: string;

  constructor(request: IUserEntityData) {
    this._Email = request.email;
    this._NickName = request.nickname;
    this._Image = request.image;
  }
  get Email(): string {
    return this._Email;
  }
  get NickName(): string {
    return this._NickName;
  }
  get Image(): string {
    return this._Image;
  }
}
