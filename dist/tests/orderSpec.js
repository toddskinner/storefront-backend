"use strict";
// import { Order, OrderStore } from '../models/order';
// const store = new OrderStore();
// describe('Order Model', () => {
//   it('should have an index method', () => {
//     expect(store.index).toBeDefined();
//   });
//   it('should have a show method', () => {
//     expect(store.index).toBeDefined();
//   });
//   it('should have a create method', () => {
//     expect(store.index).toBeDefined();
//   });
//   it('should have a update method', () => {
//     expect(store.index).toBeDefined();
//   });
//   it('should have a delete method', () => {
//     expect(store.index).toBeDefined();
//   });
//   it('create method should add an order', async () => {
//     const result = await store.create({
//       status: 'out for delivery',
//       user_id: 1234567890,
//     });
//     expect(result).toEqual({
//       id: 1,
//       status: 'out for delivery',
//       user_id: 1234567890,
//     });
//   });
//   it('index method should return a list of orders', async () => {
//     const result = await store.index();
//     expect(result).toEqual([
//       {
//         id: 1,
//         status: 'out for delivery',
//         user_id: 1234567890,
//       },
//     ]);
//   });
//   it('show method should return the correct order', async () => {
//     const result = await store.show('1');
//     expect(result).toEqual({
//       id: 1,
//       status: 'out for delivery',
//       user_id: 1234567890,
//     });
//   });
//   it('delete method should remove the order', async () => {
//     store.delete('1');
//     const result = await store.index();
//     expect(result).toEqual([]);
//   });
// });
