CREATE DATABASE Hilcoe;
use Hilcoe;

CREATE table Students(
    Sid int PRIMARY KEY,
    Sname VARCHAR(20),
    Sage int
);

INSERT into Students VALUES
(1, 'kaleab', 25),
(2, 'nahom', 24),
(3, 'cherf', 24)

SELECT Sage FROM Students
WHERE Sage >= 24;

drop table cat;

CREATE TABLE cat(
    Cid int NOT NULL
    PRIMARY key IDENTITY,
    Cname VARCHAR(20) NOT NULL,
    Cage int NOT NULL
);

INSERT INTO cat VALUES
('mello', 5),
('yakk', '3'),
('boo', '4')

SELECT * FROM cat;








