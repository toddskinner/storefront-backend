"use strict";
// import { Product, ProductStore } from '../models/product';
// import { Order, OrderStore } from '../models/order';
// import { User, UserStore } from '../models/user';
// import { DashboardQueries } from '../services/dashboard';
// const orderStore = new OrderStore();
// const userStore = new UserStore();
// const productStore = new ProductStore();
// const dashboard = new DashboardQueries();
// describe('Dashboard', () => {
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
//     const order1 = await orderStore.create({
//       status: 'active',
//       user_id: '1',
//     });
//     const order2 = await orderStore.create({
//       status: 'complete',
//       user_id: '1',
//     });
//     const order3 = await orderStore.create({
//       status: 'active',
//       user_id: '2',
//     });
//     const addProduct1 = await orderStore.addProduct('1', '3', 4);
//     const addProduct2 = await orderStore.addProduct('1', '5', 5);
//     const addProduct3 = await orderStore.addProduct('2', '2', 10);
//     const addProduct4 = await orderStore.addProduct('2', '4', 7);
//     const addProduct5 = await orderStore.addProduct('3', '1', 20);
//   });
//   it('getCurrentOrderAndProducts method should return the products in User 1\'s current (\'active\') order', async () => {
//     const result = await dashboard.getCurrentOrderAndProducts('1');
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
//     orderStore.removeProductFromOrder('1');
//     orderStore.removeProductFromOrder('2');
//     orderStore.removeProductFromOrder('3');
//     orderStore.delete('1');
//     orderStore.delete('2');
//     orderStore.delete('3');
//     productStore.delete('1');
//     productStore.delete('2');
//     productStore.delete('3');
//     productStore.delete('4');
//     productStore.delete('5');
//     userStore.delete('1');
//     userStore.delete('2');
//   });
// });
