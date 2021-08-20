import { User, UserStore } from '../models/user';
import bcrypt from 'bcrypt';

// https://stackoverflow.com/questions/54496398/typescript-type-string-undefined-is-not-assignable-to-type-string
const saltRounds: string = process.env.SALT_ROUNDS || '';
const pepper: string = process.env.BCRYPT_PASSWORD || '';
// const password:string = 'warriors' || '';
// const hash:string = bcrypt.hashSync(password + pepper, parseInt(saltRounds));

const store = new UserStore();

describe('User Model', () => {
  beforeAll(async function () {
    store.delete('1');
    const result = await store.index();
  });
  
  it('should have an index method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(store.show).toBeDefined();
  });

  it('should have a create method', () => {
    expect(store.create).toBeDefined();
  });

  // it('should have a update method', () => {
  //   expect(store.update).toBeDefined();
  // });

  // it('should have a delete method', () => {
  //   expect(store.delete).toBeDefined();
  // });

  it('create method should add a user', async () => {
    const result = await store.create({
      username: 'stephcurry30',
      firstname: 'Steph',
      lastname: 'Curry',
      password: 'warriors',
    });
    // expected to equal 2 b/c already added and deleted an entry during order tests
    expect(result.id).toEqual(2);
    expect(result.username).toEqual('stephcurry30');
    expect(result.firstname).toEqual('Steph');
    expect(result.lastname).toEqual('Curry');

    // expect(result).toEqual({
    //   id: 1,
    //   username: 'stephcurry30',
    //   firstname: 'Steph',
    //   lastname: 'Curry',
    //   // password: '',
    // });
  });

  it('index method should return a list of users', async () => {
    const result = await store.index();
    // expected to equal 2 b/c already added and deleted an entry during order tests
    expect(result[0].id).toEqual(2);
    expect(result[0].username).toEqual('stephcurry30');
    expect(result[0].firstname).toEqual('Steph');
    expect(result[0].lastname).toEqual('Curry');

    // expect(result).toEqual([
    //   {
    //     id: 1,
    //     username: 'stephcurry30',
    //     firstname: 'Steph',
    //     lastname: 'Curry',
    //     // password: hash,
    //   },
    // ]);
  });

  it('show method should return the correct user', async () => {
    // expected to equal 2 b/c already added and deleted an entry during order tests
    const result = await store.show('2');
    expect(result.id).toEqual(2);
    expect(result.username).toEqual('stephcurry30');
    expect(result.firstname).toEqual('Steph');
    expect(result.lastname).toEqual('Curry');

    // expect(result).toEqual({
    //   id: 1,
    //   username: 'stephcurry30',
    //   firstname: 'Steph',
    //   lastname: 'Curry',
    //   // password: hash,
    // });
  });

  // it('delete method should remove the user', async () => {
  //   store.delete('1');
  //   const result = await store.index();

  //   expect(result).toEqual([]);
  // });
});
