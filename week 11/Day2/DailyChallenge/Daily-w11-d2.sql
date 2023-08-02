CREATE TABLE actors(
id SERIAL PRIMARY KEY, first_name VARCHAR (50) NOT NULL, last_name VARCHAR (50) NOT NULL, day_birth DATE NOT NULL, number_oscars VARCHAR (50) NOT NULL)

INSERT INTO actors (first_name, last_name, day_birth, number_oscars)
VALUES ('Katherine', 'Hepburn', '1907-05-12', 4),
       ('Daniel', 'Day-Lewis', '1957-04-29', 3),
       ('Meryl', 'Streep', '1949-06-22', 3),
       ('Jack', 'Nicholson', '1937-04-22', 3),
       ('Ingrid', 'Bergman', '1915-08-29', 3),
       ('Walter', 'Brennan', '1894-07-25', 3),
       ('Marlon', 'Brando', '1924-04-03', 2),
       ('Tom', 'Hanks', '1956-07-09', 2),
       ('Denzel', 'Washington', '1954-12-28', 2),
       ('Dustin', 'Hoffman', '1937-08-08', 2);
	   
	   SELECT * FROM actors
	   