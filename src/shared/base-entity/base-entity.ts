export interface IBaseEntity {
  toJSON: any;
}

class BaseEntity {
  toJSON(): any {
    return Object.entries(this)
      .map(([key, value]) => [
        key.startsWith('_') ? key.substring(1) : key,
        value,
      ])
      .reduce((acc: any, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});
  }
}

export default BaseEntity;
