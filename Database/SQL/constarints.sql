
-- foreign key 


create table student_council
(
id int primary key identity,
address varchar(100) not null,
email varchar(50),
student_info  int


)



-- set a forign key 
alter table student_council
add constraint foreign_student
foreign key (student_info) references computer_science(id)

insert into student_council values('piassa','ab@gmail.com',3)


-- creating database diagram

--- unique const

alter table student_council
add constraint unique_email
unique(email)

-- default cons

alter table computer_science
add constraint default_age
default 20 for age

insert into computer_science(name) values('almaz')

alter table student_council
add constraint default_address
default 'piassa' for address



--using a keyword default
insert into student_council values('arat kilo','am@gmail.com',7)

--check constraint
select * from computer_science
select * from student_council


alter table student_council
add constraint check_address
check(address in('bole','piassa','merkato') )


--droping a constarint 
alter table student_council
drop  constraint check_address


