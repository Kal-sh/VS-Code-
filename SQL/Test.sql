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

SELECT * FROM Students;