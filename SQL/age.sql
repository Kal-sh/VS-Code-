use test1

CREATE table students (
    stdId INT NOT NULL AUTO_INCREMENT,
    F_name VARCHAR(20),
    L_name VARCHAR(20),
    gender CHAR,
    city VARCHAR(10),
    age int,
    PRIMARY KEY (stdId)
)

DROP table students

INSERT into
    students (
        F_name,
        L_name,
        gender,
        city,
        age
    )
VALUES (
        'meron',
        'challa',
        'F',
        'awassa',
        23
    ),
    (
        'aron',
        'challa',
        'M',
        'mekele',
        25
    ),
    (
        'biruk',
        'challa',
        'M',
        'addis',
        21
    ),
    (
        'mola',
        'challa',
        'M',
        'addis',
        20
    ),
    (
        'nugus',
        'challa',
        'M',
        'awassa',
        25
    ),
    (
        'mekdes',
        'challa',
        'F',
        'dire',
        27
    )

SELECT * FROM students

SELECT F_name, city from students where city = 'awassa'

SELECT AVG(age) as [average], gender FROM students GROUP BY gender