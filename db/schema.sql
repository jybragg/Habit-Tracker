DROP DATABASE IF EXISTS habits;
CREATE DATABASE habits;
USE habits;

CREATE TABLE habits
(
	id int NOT NULL AUTO_INCREMENT,
	habit_name varchar (255) NOT NULL,
	accepted BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);