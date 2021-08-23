import { Order, OrderStore } from '../models/order';
import { User, UserStore } from '../models/user';
import { Product, ProductStore } from '../models/product';

const orderStore = new OrderStore();
const userStore = new UserStore();
const productStore = new ProductStore();

describe('All Backend Models', () => {
  beforeAll(async function () {
    const product1 = await productStore.create({
      name: 'Nike Sweatshirt',
      price: 28,
      category: 'apparel',
    });
    const product2 = await productStore.create({
      name: 'iPad',
      price: 999,
      category: 'electronics',
    });
    const product3 = await productStore.create({
      name: 'Adidas Soccer Jersey',
      price: 79,
      category: 'apparel',
    });
    const product4 = await productStore.create({
      name: 'Sapiens',
      price: 19,
      category: 'books',
    });
    const product5 = await productStore.create({
      name: 'Airpod Headphones',
      price: 249,
      category: 'electronics',
    });
    const user1 = await userStore.create({
      username: 'stephcurry30',
      firstname: 'Steph',
      lastname: 'Curry',
      password: 'warriors',
    });
    const user2 = await userStore.create({
      username: 'klaythompson11',
      firstname: 'Klay',
      lastname: 'Thompson',
      password: 'thetown',
    });
    const order1 = await orderStore.create({
      status: 'active',
      user_id: '1',
    });
    const order2 = await orderStore.create({
      status: 'complete',
      user_id: '1',
    });
    const order3 = await orderStore.create({
      status: 'active',
      user_id: '2',
    });
    const addProduct1 = await orderStore.addProduct('1', '3', 4);
    const addProduct2 = await orderStore.addProduct('1', '5', 5);
    const addProduct3 = await orderStore.addProduct('2', '2', 10);
    const addProduct4 = await orderStore.addProduct('2', '4', 7);
    const addProduct5 = await orderStore.addProduct('3', '1', 20);
  });

  describe('User Model', () => {
    it('should have an index method', () => {
      expect(userStore.index).toBeDefined();
    });

    it('should have a show method', () => {
      expect(userStore.show).toBeDefined();
    });

    it('should have a create method', () => {
      expect(userStore.create).toBeDefined();
    });

    it('create method should add a user', async () => {
      const result = await userStore.create({
        username: 'draymondgreen23',
        firstname: 'Draymond',
        lastname: 'Green',
        password: 'dubs',
      });

      expect(result.id).toEqual(3);
      expect(result.username).toEqual('draymondgreen23');
      expect(result.firstname).toEqual('Draymond');
      expect(result.lastname).toEqual('Green');
    });

    it('index method should return a list of users', async () => {
      const result = await userStore.index();
      // expected to equal 2 b/c already added and deleted an entry during order tests
      expect(result[0].id).toEqual(1);
      expect(result[0].username).toEqual('stephcurry30');
      expect(result[0].firstname).toEqual('Steph');
      expect(result[0].lastname).toEqual('Curry');
      expect(result[1].id).toEqual(2);
      expect(result[1].username).toEqual('klaythompson11');
      expect(result[1].firstname).toEqual('Klay');
      expect(result[1].lastname).toEqual('Thompson');
      expect(result[2].id).toEqual(3);
      expect(result[2].username).toEqual('draymondgreen23');
      expect(result[2].firstname).toEqual('Draymond');
      expect(result[2].lastname).toEqual('Green');
    });

    it('show method should return the correct user', async () => {
      const result = await userStore.show('1');
      expect(result.id).toEqual(1);
      expect(result.username).toEqual('stephcurry30');
      expect(result.firstname).toEqual('Steph');
      expect(result.lastname).toEqual('Curry');
    });

    // it('delete method should remove the user', async () => {
    //   userStore.delete('1');
    //   userStore.delete('2');
    //   userStore.delete('3');
    //   const result = await userStore.index();

    //   expect(result).toEqual([]);
    // });
  });

  describe('Product Model', () => {
    it('should have an index method', () => {
      expect(productStore.index).toBeDefined();
    });

    it('should have a show method', () => {
      expect(productStore.show).toBeDefined();
    });

    it('should have a create method', () => {
      expect(productStore.create).toBeDefined();
    });

    it('should have a delete method', () => {
      expect(productStore.delete).toBeDefined();
    });

    it('create method should add a product', async () => {
      const result = await productStore.create({
        name: 'Toothpaste',
        price: 4,
        category: 'toiletries',
      });
      expect(result).toEqual({
        id: 6,
        name: 'Toothpaste',
        price: 4,
        category: 'toiletries',
      });
    });

    it('index method should return a list of products', async () => {
      const result = await productStore.index();
      expect(result).toEqual([
        {
          id: 1,
          name: 'Nike Sweatshirt',
          price: 28,
          category: 'apparel',
        },
        {
          id: 2,
          name: 'iPad',
          price: 999,
          category: 'electronics',
        },
        {
          id: 3,
          name: 'Adidas Soccer Jersey',
          price: 79,
          category: 'apparel',
        },
        {
          id: 4,
          name: 'Sapiens',
          price: 19,
          category: 'books',
        },
        {
          id: 5,
          name: 'Airpod Headphones',
          price: 249,
          category: 'electronics',
        },
        {
          id: 6,
          name: 'Toothpaste',
          price: 4,
          category: 'toiletries',
        },
      ]);
    });

    it('show method should return the correct product', async () => {
      const result = await productStore.show('5');
      expect(result).toEqual({
        id: 5,
        name: 'Airpod Headphones',
        price: 249,
        category: 'electronics',
      });
    });

    it('productsByCategory method should return a list of only products in that category', async () => {
      const result = await productStore.productsByCategory('apparel');
      expect(result).toEqual([
        {
          id: 1,
          name: 'Nike Sweatshirt',
          price: 28,
          category: 'apparel',
        },
        {
          id: 3,
          name: 'Adidas Soccer Jersey',
          price: 79,
          category: 'apparel',
        },
      ]);
    });
  });

  describe('Order Model', () => {
    it('should have an index method', () => {
      expect(orderStore.index).toBeDefined();
    });

    it('should have a show method', () => {
      expect(orderStore.show).toBeDefined();
    });

    it('should have a create method', () => {
      expect(orderStore.create).toBeDefined();
    });

    it('should have a delete method', () => {
      expect(orderStore.delete).toBeDefined();
    });

    it('create method should add an order', async () => {
      const result = await orderStore.create({
        status: 'complete',
        user_id: '2',
      });
      expect(result).toEqual({
        id: 4,
        status: 'complete',
        user_id: '2',
      });
    });

    it('addProduct method should add products to an order', async () => {
      const result = await orderStore.addProduct('3', '2', 5);
      expect(result).toEqual({
        id: 6,
        order_id: '3',
        product_id: '2',
        quantity: 5,
      });
    });

    it('index method should return a list of orders', async () => {
      const result = await orderStore.index();
      expect(result).toEqual([
        {
          id: 1,
          status: 'active',
          user_id: '1',
        },
        {
          id: 2,
          status: 'complete',
          user_id: '1',
        },
        {
          id: 3,
          status: 'active',
          user_id: '2',
        },
        {
          id: 4,
          status: 'complete',
          user_id: '2',
        },
      ]);
    });

    it('show method should return the correct order', async () => {
      const result = await orderStore.show('2');
      expect(result).toEqual({
        id: 2,
        status: 'complete',
        user_id: '1',
      });
    });

    it("getCurrentOrderAndProducts method should return the products in User 1's current ('active') order", async () => {
      const result = await orderStore.getCurrentOrderAndProducts('1');
      expect(result).toEqual([
        {
          order_id: '1',
          status: 'active',
          user_id: '1',
          name: 'Adidas Soccer Jersey',
          product_id: '3',
          quantity: 4,
          price: 79,
        },
        {
          order_id: '1',
          status: 'active',
          user_id: '1',
          name: 'Airpod Headphones',
          product_id: '5',
          quantity: 5,
          price: 249,
        },
      ]);
    });
  });

  // Not needed b/c down migration will be run after all tests pass
  //   afterAll(async function () {
  //     orderStore.removeProductFromOrder('1');
  //     orderStore.removeProductFromOrder('2');
  //     orderStore.removeProductFromOrder('3');
  //     orderStore.removeProductFromOrder('4');
  //     orderStore.removeProductFromOrder('5');
  //     orderStore.delete('1');
  //     orderStore.delete('2');
  //     orderStore.delete('3');
  //     orderStore.delete('4');
  //     productStore.delete('1');
  //     productStore.delete('2');
  //     productStore.delete('3');
  //     productStore.delete('4');
  //     productStore.delete('5');
  //     productStore.delete('6');
  //     userStore.delete('1');
  //     userStore.delete('2');
  //     userStore.delete('3');
  //   });
});
