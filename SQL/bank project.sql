create database Bank
use Bank

create table branch(
 branch_no int primary key IDENTITY,
 branch_name varchar(30),
 PO_Box int,
 Manager_id int
); 





create table employee(
    Emp_id int primary key IDENTITY,
    F_name varchar(15),
    L_name varchar(15),
    DOB date,
    salary float,
    Start_date date,
    emp_branch int
);





create table department(
    dep_no int primary key IDENTITY,
    Dep_name varchar(30),
    manager_id int,   
    department_branch int
);



create table B_Account(
    acc_no int primary key IDENTITY,
    date_created date,
    balance float,
    type varchar(10),
    owned_by int,
    in_branch int, 
    active int
);





create table loan(
    loan_no int primary key IDENTITY,
    amount float,
    issued_on date,
    Deadline date,
    loaned_by int,  
    loaned_to int, 
    paid int
);



create table customer(
    id int primary key IDENTITY,
    f_name varchar(15),
    L_name varchar(15),
    phone bigint,
    DOB date,
    address varchar(30),
    active int
);



SELECT AVG(salary) 
from employee
where F_name='abebech'




alter table branch add foreign key(Manager_id) references employee(emp_id);
alter table employee add foreign key (emp_branch) references branch(branch_no) on delete set null;
alter table employee add foreign key (works_for) references department(dep_no) on delete set null;
alter table department add foreign key (manager_id) references employee(emp_id) on delete set null;
alter table department add foreign key (in_branch) references branch( branch_no) on delete set null;
alter table b_account add foreign key (owned_by) references customer(id) on delete set null;
alter table b_account add foreign key (in_branch) references branch(branch_no) on delete set null;
alter table loan add foreign key (loaned_by) references branch(branch_no) on delete set null;
alter table loan add foreign key (loaned_to) references customer(id) on delete set null;

INSERT into branch VALUES
('Merkato branch', 23424,1),
('Bole branch', 42255,2),
('Piyasa branch', 24522,3),
('Saris branch', 24224,4),
('Gotera branch', 26224,5)

INSERT into loan VALUES
(140000,'1999-08-12','2013-08-12',2,4,100000),
(240000,'1992-06-07','2009-06-07',4,2,150000),
(1500000,'1999-08-12','2019-08-12',1,3,650000),
(40000,'2008-08-12','2016-08-12',2,6,20000),
(180000,'2000-08-12','2014-08-12',3,3,130000),
(350000,'2003-08-24','2016-08-23',5,5,190000)

INSERT into employee VALUES
('Abebech','challa','1984-03-22', 2353, '2003-05-14', 1 ),
('Ayele','kebede', '1980-05-12', 4322, '1996-06-07', 3 ),
('challa','ayele', '1985-02-16', 2662, '1995-02-05',2 ),
('betty','muluken', '1985-02-24', 2442, '1996-06-07', 4 ),
('abebe','ayantu', '1980-02-12', 1533, '1996-06-07', 5 ),
('ayantu','abebe', '1986-06-11', 2532, '1996-06-07', 1 ),
('melat','mulatu', '1988-11-15', 2342, '1996-06-07', 4 ),
('abebech','mulatu', '1987-03-12', 1443, '1996-06-07', 2 ),
('mikiyas','asefa', '1982-06-23', 2333, '1996-06-07', 3 ),
('kaleab','kebede', '1984-12-13', 2341, '1996-06-07', 2 ),
('mulatu','astatke', '1987-10-15', 5323, '1996-06-07', 3 ),
('Ayele','mola', '1984-09-16', 1232, '1996-06-07', 2 ),
('betty','beyene', '1984-06-17', 1242, '1996-06-07', 3 ),
('mekdes','cherinet', '1986-08-11', 2234, '1996-06-07', 1 ),
('ayanty','moges', '1982-09-19', 3213, '1996-06-07', 5 )


INSERT into Department VALUES
('Accounting',3,1),
('sales',2,4),
('finance',1,2),
('tailors', 4,5)

INSERT into B_Account VALUES
('2010-04-11', 4223, 'saving', 2, 3,0),
('2003-06-21', 5323, 'saving', 1, 2,0),
('2011-07-10', 12324, 'checking', 4, 4,1),
('2012-04-12', 12341, 'saving', 6, 1,1),
('1998-08-21', 53412, 'Retirement', 5, 5,1),
('1992-02-25', 42341, 'checking', 2, 2,1),
('1997-07-19', 42341, 'Retirement', 7, 5,1),
('1994-09-18', 53234, 'saving', 3, 2,1),
('1994-02-15', 4223, 'Retirement', 8, 4,1),
('1999-10-14', 253522, 'saving', 9, 3,1)

INSERT into customer VALUES
('Muluken','mola', 0912834493,'1988-12-15', 'kirkos', 0),
('melat','astrat', 0912344355,'1992-12-19', 'merkato', 0),
('betty','yayis', 0942842453,'1986-10-13', 'gergi', 1),
('meron','astatke', 0913456432,'1985-11-12', 'saris', 1),
('mekdes','abebe', 0924553244,'1978-02-11', 'bole', 1),
('ayele','mulatu', 0953566345,'1992-05-25', 'piyasa', 1),
('Muluken','moges', 0924234423,'1975-03-05', 'mekanisa', 1),
('biruk','selamawi', 0912442355,'1974-08-10', 'gotera', 1),
('israel','nigatu', 0988245534,'1986-07-29', 'kirkos', 1)