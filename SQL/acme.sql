-- Active: 1763202212555@@127.0.0.1@3306@acme
CREATE DATABASE acme;

use acme;

CREATE TABLE
    users (
        id INT AUTO_INCREMENT,
        first_name VARCHAR(100),
        last_name VARCHAR(100),
        email VARCHAR(50),
        password VARCHAR(20),
        location VARCHAR(100),
        dept VARCHAR(100),
        is_admin TINYINT (1),
        register_date DATETIME,
        PRIMARY KEY (id)
    );

INSERT INTO
    users (
        first_name,
        last_name,
        email,
        password,
        location,
        dept,
        is_admin,
        register_date
    )
values
    (
        'Fred',
        'Smith',
        'fred@gmail.com',
        '123456',
        'New York',
        'design',
        0,
        now ()
    ),
    (
        'Sara',
        'Watson',
        'sara@gmail.com',
        '123456',
        'New York',
        'design',
        0,
        now ()
    ),
    (
        'Will',
        'Jackson',
        'will@yahoo.com',
        '123456',
        'Rhode Island',
        'development',
        1,
        now ()
    ),
    (
        'Paula',
        'Johnson',
        'paula@yahoo.com',
        '123456',
        'Massachusetts',
        'sales',
        0,
        now ()
    ),
    (
        'Brad',
        'Traversy',
        'brad@gmail.com',
        '123456',
        'Massachusetts',
        'development',
        1,
        now ()
    ),
    (
        'Tom',
        'Spears',
        'tom@yahoo.com',
        '123456',
        'Massachusetts',
        'sales',
        0,
        now ()
    );

SELECT
    *
FROM
    users;

SELECT
    first_name,
    last_name
FROM
    users;

SELECT
    *
FROM
    users
WHERE
    location = 'Massachusetts'
    AND dept = 'sales';

DELETE FROM users
WHERE
    id = 6;

UPDATE users
SET
    email = 'freddy@gmail.com' name = 'abebe'
WHERE
    id = 2