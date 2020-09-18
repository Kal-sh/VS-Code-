use hilcoe;

CREATE TABLE animals(
    Did int IDENTITY,
    Dname VARCHAR(20) NOT NULL,
    Dage INT NOT NULL
);

INSERT INTO animals VALUES
('rat',5),
('donkey',6),
('lion',3)

SELECT * FROM animals;

SELECT Dname FROM animals;

-- SELECT Dage FROM animals WHERE Dage >= 2;

SELECT Dage FROM animals WHERE (Dage + 2);

DROP table pets;

CREATE TABLE pets(
    oid int IDENTITY,
    oname VARCHAR(20) NOT NULL,
    oage INT NOT NULL
);

INSERT INTO pets VALUES
('rat',5),
('donkey',6),
('lion',3)

SELECT * FROM pets WHERE oage > 3
ORDER BY oname;
SELECT * FROM pets WHERE oage > 3
ORDER BY oname desc;
SELECT oname, COUNT(*) from pets GROUP BY oid;

CREATE TABLE staff(
    sid int IDENTITY,
    sname VARCHAR(10) NOT NULL,
    email VARCHAR(20) NOT NULL,    
);

CREATE TABLE Advisor(
    Aid int IDENTITY,
    Aname VARCHAR(10) NOT NULL,
    adv INT
);

INSERT INTO staff VALUES
('abebe','ab@gmail.com'),
('girma','gir@gmail.com'),
('saba','saba@gmail.com')

INSERT INTO Advisor VALUES
    ('Dr Alemu', 3),
    ('Dr biruk', 2),
    ('Dr gebre', NULL)

SELECT sname AS [students name] from staff;
