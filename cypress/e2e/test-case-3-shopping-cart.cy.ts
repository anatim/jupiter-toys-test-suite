/// <reference types="cypress" />

import { HomePage } from './pageObjects/HomePage';
import { ShopPage } from './pageObjects/ShopPage';
import { CartPage } from './pageObjects/CartPage';
import { products } from '../fixtures/product-catalog';

describe('Shop Page and Cart Calculations', () => {
  const home = new HomePage();
  const shop = new ShopPage();
  const cart = new CartPage();

  // Define quantities for this test
  const orderQuantities = {
    stuffedFrog: 2,
    fluffyBunny: 5,
    valentineBear: 3
  };

  beforeEach(() => {
    home.visit();
  });

  it('Shop page and cart calculations', () => {
    home.goToShopPage();
    
    // Add products to cart
    Object.entries(orderQuantities).forEach(([key, qty]) => {
      const product = products[key as keyof typeof products];
      shop.addProduct(product.name, qty);
    });
    
    home.goToCartPage();
    
    let expectedTotal = 0;
    
    // // Verify each product's price and subtotal
    // products.forEach(product => {
    //   cart.verifyProductDetails(product.name, product.price, qty);
    //   expectedTotal = product.price * qty;
    // });

    // Verify each product's price and subtotal
    Object.entries(orderQuantities).forEach(([key, qty]) => {
      const product = products[key as keyof typeof products];
      cart.verifyProductDetails(product.name, product.price, qty);
      expectedTotal += product.price * qty;
    });

    // Verify total matches sum of subtotals
    cart.getTotal().invoke('text').then((totalText: string) => {
      const actualTotal = cart.parsePriceString(totalText);
      expect(actualTotal).to.equal(expectedTotal);
    });
  });
});
