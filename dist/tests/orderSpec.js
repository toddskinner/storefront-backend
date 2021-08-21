"use strict";
// import { Order, OrderStore } from '../models/order';
// import { User, UserStore } from '../models/user';
// import { Product, ProductStore } from '../models/product';
// const store = new OrderStore();
// const userStore = new UserStore();
// const productStore = new ProductStore();
// describe('Order Model', () => {
//   beforeAll(async function () {
//     const product1 = await productStore.create({
//       name: 'Nike Sweatshirt',
//       price: 28,
//       category: 'apparel',
//     });
//     const product2 = await productStore.create({
//       name: 'iPad',
//       price: 999,
//       category: 'electronics',
//     });
//     const product3 = await productStore.create({
//       name: 'Adidas Soccer Jersey',
//       price: 79,
//       category: 'apparel',
//     });
//     const product4 = await productStore.create({
//       name: 'Sapiens',
//       price: 19,
//       category: 'books',
//     });
//     const product5 = await productStore.create({
//       name: 'Airpod Headphones',
//       price: 249,
//       category: 'electronics',
//     });
//     const user1 = await userStore.create({
//       username: 'stephcurry30',
//       firstname: 'Steph',
//       lastname: 'Curry',
//       password: 'warriors',
//     });
//     const user2 = await userStore.create({
//       username: 'klaythompson11',
//       firstname: 'Klay',
//       lastname: 'Thompson',
//       password: 'thetown',
//     });
//     const order1 = await store.create({
//       status: 'active',
//       user_id: '1',
//     });
//     const order2 = await store.create({
//       status: 'complete',
//       user_id: '1',
//     });
//     const order3 = await store.create({
//       status: 'active',
//       user_id: '2',
//     });
//     const addProduct1 = await store.addProduct('1', '3', 4);
//     const addProduct2 = await store.addProduct('1', '5', 5);
//     const addProduct3 = await store.addProduct('2', '2', 10);
//     const addProduct4 = await store.addProduct('2', '4', 7);
//     const addProduct5 = await store.addProduct('3', '1', 20);
//   });
//   it('should have an index method', () => {
//     expect(store.index).toBeDefined();
//   });
//   it('should have a show method', () => {
//     expect(store.show).toBeDefined();
//   });
//   it('should have a create method', () => {
//     expect(store.create).toBeDefined();
//   });
//   it('should have a delete method', () => {
//     expect(store.delete).toBeDefined();
//   });
//   it('create method should add an order', async () => {
//     const result = await store.create({
//       status: 'complete',
//       user_id: '2',
//     });
//     expect(result).toEqual({
//       id: 4,
//       status: 'complete',
//       user_id: '2',
//     });
//   });
//   it('index method should return a list of orders', async () => {
//     const result = await store.index();
//     expect(result).toEqual([
//       {
//         id: 1,
//         status: 'active',
//         user_id: '1',
//       },
//       {
//         id: 2,
//         status: 'complete',
//         user_id: '1',
//       },
//       {
//         id: 3,
//         status: 'active',
//         user_id: '2',
//       },
//       {
//         id: 4,
//         status: 'complete',
//         user_id: '2',
//       },
//     ]);
//   });
//   it('show method should return the correct order', async () => {
//     const result = await store.show('2');
//     expect(result).toEqual({
//       id: 2,
//       status: 'complete',
//       user_id: '1',
//     });
//   });
//   it('getCurrentOrderAndProducts method should return the products in User 1\'s current (\'active\') order', async () => {
//     const result = await store.getCurrentOrderAndProducts('1');
//     expect(result).toEqual([
//       {
//         order_id: '1', 
//         status: 'active', 
//         user_id: '1', 
//         name: 'Adidas Soccer Jersey',
//         product_id: '3', 
//         quantity: 4, 
//         price: 79,
//       },
//       {
//         order_id: '1', 
//         status: 'active', 
//         user_id: '1', 
//         name: 'Airpod Headphones',
//         product_id: '5', 
//         quantity: 5, 
//         price: 249,
//       }
//     ]);
//   });
//   afterAll(async function () {
//     store.removeProductFromOrder('1');
//     store.removeProductFromOrder('2');
//     store.removeProductFromOrder('3');
//     store.delete('1');
//     store.delete('2');
//     store.delete('3');
//     store.delete('4');
//     productStore.delete('1');
//     productStore.delete('2');
//     productStore.delete('3');
//     productStore.delete('4');
//     productStore.delete('5');
//     userStore.delete('1');
//     userStore.delete('2');
//   });
//   // it('delete method should remove the order', async () => {
//   //   store.delete('1');
//   //   const result = await store.index();
//   //   expect(result).toEqual([]);
//   // });
// });
