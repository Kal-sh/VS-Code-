CREATE DATABASE test1;

USE test1;

CREATE TABLE
    users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50),
        email VARCHAR(100)
    );

INSERT INTO
    users (name, email)
VALUES
    ('Bob', 'bob@example.com'),
    ('Charlie', 'charlie@example.com'),
    ('Dawit', 'dawit@example.com');

CREATE TABLE
    orders (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        product VARCHAR(100),
        amount DECIMAL(10, 2),
        FOREIGN KEY (user_id) REFERENCES users (id)
    );

IERT INTO
    orders (user_id, product, amount)
VALUES
    (1, 'Laptop', 999.99),
    (1, 'Mouse', 19.99),
    (3, 'Keyboard', 39.99);

SELECT
    *
FROM
    users;

SELECT
    *
FROM
    orders;

SHOW DATABASES;

SHOW TABLES;
