CREATE DATABASE Hill;
USE Hill;

ALTER DATABASE Hill MODIFY NAME = university;

CREATE TABLE People(
PId int not null PRIMARY KEY IDENTITY,
pname VARCHAR(20) not NULL DEFAULT 'kebede',
Age int DEFAULT 20,
ORDER INT
);

CREATE TABLE Orders(
    Oid int not null PRIMARY KEY IDENTITY,
    item VARCHAR(20) NOT NULL
);

ALTER TABLE [dbo].[Orders]
 ADD Quantity int
go

ALTER TABLE [dbo].[orders]
DROP COLUMN Quantity 
go

ALTER TABLE [dbo].[orders]
ADD fk_orders int REFERENCES Orders(Oid)
go

ALTER TABLE [dbo].[orders]

drop fk_orders 
ADD orders
go

ALTER TABLE [dbo].[orders]
ADD sperson VARCHAR(20) DEFAULT 'selam'
go

ALTER TABLE [dbo].[People]
add CONSTRAINT un_name FOR People(pname)
go

SELECT * from People;