# Storefront Backend Project

## Getting Started

This repo contains a basic Node and Express app to get you started in constructing an API. 

## Create DBs

In psql run the following to create the dev and test database:
```bash
CREATE DATABASE storefront;
```
```bash
CREATE DATABASE storefront_test;
```

## Migrate DBs

Navigate to the root directory and run the command below to migrate the database:
```bash
db-migrate up
```

## Environment Set-Up

Bellow are the environment variables that are set in the .env file.
```
POSTGRES_HOST=127.0.0.1
POSTGRES_DB=storefront
POSTGRES_TEST_DB=storefront_test
POSTGRES_USER=toddskinner
POSTGRES_PASSWORD=password123
ENV=dev
BCRPYT_PASSWORD=your-secret-password
SALT_ROUNDS=10
TOKEN_SECRET=whitelotus
```

Note that the default ENV setting is "dev".  For testing this needs to be switched and hard-coded as "test". I will go into more about this below in the "Testing" section.

## Endpoints

All endpoints are described in the REQUIREMENT.md file.

## Usage

Scripts:
- Build --> "tsc"
- Test --> "test"
- Start --> "watch"

## Testing

I was having issues related to my testing script switching the ENV variable to "test" and I wrote in to the mentors for guidance. It seems that other students were having similar issues so the advice I received was to hardcode the ENV setting in the .env file to "test" when running tests. So this needs to be done by the user/reviewer. 

Run tests with:
```bash
npm run test
```

This migrates up tables for the test database, runs the test, and then migrates down all the tables for the test database.

## License
[MIT](https://choosealicense.com/licenses/mit/)
