export interface Product {
  name: string;
  price: number;
  qty?: number;
}

export const products = {
  stuffedFrog: { name: 'Stuffed Frog', price: 10.99 },
  fluffyBunny: { name: 'Fluffy Bunny', price: 9.99 },
  valentineBear: { name: 'Valentine Bear', price: 14.99 }
};
