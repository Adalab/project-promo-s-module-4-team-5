USE prueba;

CREATE TABLE departments (
    idDeparment INT auto_increment PRIMARY key,
    name VARCHAR(50),
    location VARCHAR(50)
);
CREATE TABLE employees (
    idEmployee INT AUTO_INCREMENT primary key,
    name VARCHAR(20),
    lastname VARCHAR(20),
    email VARCHAR(50),
    fkDepartment INT,
    FOREIGN KEY (fkDepartment) REFERENCES departments (idDeparment)
    );
    
insert into  departments (name,location) values
 ("Accounting","Sevilla"),
("Software development","Vigo"),
("Marketing","Bilbao");

insert into  employees (name,lastname,email,fkDepartment)
values ("María","Ruiz","maria@gmail.com",1),
       ("Lucía","Ramírez","lucia@hotmail.com",2),
       ("Sofia","Gomes","sofia@yahoo.com",3),
       ("Ana","Sánchez","ana@yahoo.com",3),
       ("Victoria","Roldan","victoria@yahoo.com",2);
       
       
SELECT employees.idEmployee, employees.name, departments.name, departments.location
FROM employees, departments
WHERE employees.fkDepartment = departments.idDeparment;

Use netflix;

create table rel_movies_users (
idMoviesUsers int auto_increment primary key,
fkUser int not null,
fkMovies int not null,
foreign key (fkUser) references users (idUsers),
foreign Key (fkMovies) references movies (idmovies)
);



insert into rel_movies_users (score) VALUES
(8) , (5);

create table rel_movies_actors (
idMoviesActors int auto_increment primary key,
fkActor int not null,
fkMovies int not null,
foreign key (fkActor) references actors (idActor),
foreign Key (fkMovies) references movies (idmovies)
);

insert into rel_movies_actors (fkActor, fkMovies) VALUES
(1,2) , (1,3) , (2,1);

insert into rel_movies_users (fkUser, fkMovies, score) VALUES (1,1,8) , (1,2,5) , (3,2,7);