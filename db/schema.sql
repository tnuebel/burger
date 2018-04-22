-- Create the database wishes_db and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table wishes.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name VARCHAR (255) NOT NULL,
devoured VARCHAR (50) NOT NULL,
PRIMARY KEY (id)
);

