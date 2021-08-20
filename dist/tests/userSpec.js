"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
// https://stackoverflow.com/questions/54496398/typescript-type-string-undefined-is-not-assignable-to-type-string
const saltRounds = process.env.SALT_ROUNDS || '';
const pepper = process.env.BCRYPT_PASSWORD || '';
// const password:string = 'warriors' || '';
// const hash:string = bcrypt.hashSync(password + pepper, parseInt(saltRounds));
const store = new user_1.UserStore();
describe('User Model', () => {
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
    it('should have a delete method', () => {
        expect(store.delete).toBeDefined();
    });
    it('create method should add a user', async () => {
        const result = await store.create({
            username: 'stephcurry30',
            firstname: 'Steph',
            lastname: 'Curry',
            password: 'warriors',
        });
        expect(result.id).toEqual(1);
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
        expect(result[0].id).toEqual(1);
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
        const result = await store.show('1');
        expect(result.id).toEqual(1);
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
    it('delete method should remove the user', async () => {
        store.delete('1');
        const result = await store.index();
        expect(result).toEqual([]);
    });
});