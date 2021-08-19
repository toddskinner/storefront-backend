/* Replace with your SQL commands */
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    price numeric(6,2) NOT NULL,
    category integer NOT NULL
);