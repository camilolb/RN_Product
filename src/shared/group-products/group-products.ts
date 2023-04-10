import {
  Cart,
  ICartEntity,
  ICartEntityData,
  IProductEntity,
} from '../../core/domain';

export class CartPage {
  static groupProducts(productList: IProductEntity[]): ICartEntity[] {
    const groupedProducts = productList?.reduce(
      (accumulator: ICartEntityData, product: IProductEntity) => {
        if (!accumulator[product.Id]) {
          accumulator[product.Id] = {
            product,
            quantity: 1,
          };
        } else {
          accumulator[product.Id].quantity += 1;
        }
        return accumulator;
      },
      {} as ICartEntityData, // Valor inicial con la forma adecuada de ICartEntityData
    );

    const response = Object.values(groupedProducts);
    return response.map(
      item =>
        new Cart({
          product: item?.product,
          quantity: item?.quantity,
        }),
    );
  }
}
