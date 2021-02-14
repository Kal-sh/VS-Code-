use students

CREATE table students(
    stdId int PRIMARY KEY IDENTITY,
    F_name VARCHAR(20),
    L_name VARCHAR(20),
    gender CHAR,
    city VARCHAR(10),
    age int
)

DROP table students

INSERT into students VALUES
('meron','challa','F','awassa',23),
('aron','challa','M','mekele',25),
('biruk','challa','M','addis',21),
('mola','challa','M','addis',20),
('nugus','challa','M','awassa',25),
('mekdes','challa','F','dire',27)

SELECT * FROM Students

SELECT F_name, city from Students
where city='awassa'
SELECT AVG(age) as [average], gender
FROM Students
GROUP BY gender

