"use strict";
// import { Product, ProductStore } from '../models/product';
// const store = new ProductStore();
// describe('Product Model', () => {
//   beforeAll(async function () {
//     const result1 = await store.create({
//       name: 'Nike Sweatshirt',
//       price: 28,
//       category: 'apparel',
//     });
//     const result2 = await store.create({
//       name: 'iPad',
//       price: 999,
//       category: 'electronics',
//     });
//     const result3 = await store.create({
//       name: 'Adidas Soccer Jersey',
//       price: 79,
//       category: 'apparel',
//     });
//     const result4 = await store.create({
//       name: 'Sapiens',
//       price: 19,
//       category: 'books',
//     });
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
//   // it('should have a update method', () => {
//   //   expect(store.update).toBeDefined();
//   // });
//   // it('should have a delete method', () => {
//   //   expect(store.delete).toBeDefined();
//   // });
//   it('create method should add a product', async () => {
//     const result = await store.create({
//       name: 'Airpod Headphones',
//       price: 249,
//       category: 'electronics',
//     });
//     expect(result).toEqual({
//       id: 5,
//       name: 'Airpod Headphones',
//       price: 249,
//       category: 'electronics',
//     });
//   });
//   it('index method should return a list of products', async () => {
//     const result = await store.index();
//     expect(result).toEqual([
//       {
//         id: 1,
//         name: 'Nike Sweatshirt',
//         price: 28,
//         category: 'apparel',
//       },
//       {
//         id: 2,
//         name: 'iPad',
//         price: 999,
//         category: 'electronics',
//       },
//       {
//         id: 3,
//         name: 'Adidas Soccer Jersey',
//         price: 79,
//         category: 'apparel',
//       },
//       {
//         id: 4,
//         name: 'Sapiens',
//         price: 19,
//         category: 'books',
//       },
//       {
//         id: 5,
//         name: 'Airpod Headphones',
//         price: 249,
//         category: 'electronics',
//       },
//     ]);
//   });
//   it('show method should return the correct product', async () => {
//     const result = await store.show('5');
//     expect(result).toEqual({
//       id: 5,
//       name: 'Airpod Headphones',
//       price: 249,
//       category: 'electronics',
//     });
//   });
//   it('productsByCategory method should return a list of only products in that category', async () => {
//     const result = await store.productsByCategory('apparel');
//     expect(result).toEqual([
//       {
//         id: 1,
//         name: 'Nike Sweatshirt',
//         price: 28,
//         category: 'apparel',
//       },
//       {
//         id: 3,
//         name: 'Adidas Soccer Jersey',
//         price: 79,
//         category: 'apparel',
//       }
//     ]);
//   });
//   afterAll(async function () {
//     store.delete('1');
//     store.delete('2');
//     store.delete('3');
//     store.delete('4');
//     store.delete('5');
//   });
// });
