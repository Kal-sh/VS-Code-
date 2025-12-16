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
drop table Advisor;
CREATE TABLE Advisor(
    Aid int PRIMARY KEY IDENTITY,
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


ALTER table staff drop COLUMN sage;
ALTER TABLE staff
add Sinfo int;

ALTER table staff ALTER COLUMN sage VARCHAR(20);

sp_help staff; 

ALTER table staff ALTER COLUMN sage int IDENTITY(2,4);

SELECT * FROM staff;
SELECT * FROM Advisor;

ALTER TABLE staff
add staff_info int;

ALTER table staff
add CONSTRAINT st_fn
FOREIGN KEY (staff_info) REFERENCES Advisor(Aid);

insert into staff VALUES
('chala','ch@gmail.com',2)

CREATE table stu_council(
    id int PRIMARY KEY IDENTITY,
    adress VARCHAR(20),
    email VARCHAR(50),
    stu_info int
)


update staff set age=21
where sid=6

ALTER table stu_council 
ADD CONSTRAINT fn_stu
FOREIGN KEY (stu_info) REFERENCES Advisor(Aid);

SELECT * FROM Advisor;
SELECT * FROM stu_council;
SELECT * FROM staff;

UPDATE stu_council set email='kk@gmal.com'
WHERE id=2

UPDATE stu_council set adress='merkato'
WHERE id=3


insert into stu_council VALUES
    ('bole','ab@gmail.com',3)

ALTER table staff
add CONSTRAINT email
UNIQUE(email);

alter TABLE staff

ALTER TABLE staff
ADD CONSTRAINT default_name
DEFAULT deeee for sname

SELECT *from staff

alter table staff
add age int

ALTER TABLE staff
add CONSTRAINT default_age
DEFAULT 20 for age

INSERT into staff (sname,email,staff_info) VALUES
('gaga','gg@gmail.com',1)





CREATE table Class(
    cid int not null PRIMARY key IDENTITY,
    name VARCHAR(20) not NULL,
    department int NULL
)

create table Department(
    did int not null PRIMARY KEY IDENTITY,
    dname VARCHAR(50) not null
)

ALTER table Class
add CONSTRAINT class_fn
FOREIGN KEY (department) REFERENCES Department(did);

insert into class VALUES
('kebede',1)

INSERT into Department VALUES
('uaaa')

SELECT * from Class;

