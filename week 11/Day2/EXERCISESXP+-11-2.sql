CREATE TABLE students (
id SERIAL PRIMARY KEY,
first_name VARCHAR (50) NOT NULL,
last_name VARCHAR (50) NOT NULL,
	birth_day DATE NOT NULL
)

INSERT INTO students (first_name, last_name, birth_day) VALUES
('David','Benichou', '1998-10-02'),
('Yemy','Leon','1994-12-04'),
('Marc','Perez','1999-08-06'),
('Salo','Nagar','2001-03-14'),
('Elias','Jasqui','1981-08-10')

SELECT *FROM students

SELECT first_name,last_name FROM students

SELECT first_name,last_name FROM students WHERE id=2;
SELECT * FROM students

SELECT first_name,last_name FROM students WHERE last_name= 'Benichou' AND first_name= 'David';


SELECT first_name,last_name FROM students WHERE first_name ILIKE '%A%'

SELECT first_name,last_name FROM students WHERE first_name ILIKE 'D%'

SELECT first_name,last_name FROM students WHERE first_name ILIKE '%S'


SELECT first_name, last_name FROM students WHERE (RIGHT(first_name, 2) ILIKE 'a%')

SELECT first_name, last_name FROM students WHERE (id=1 AND id=3)

SELECT * FROM students WHERE (birth_day >= '2001-03-14')


SELECT COUNT (*) FROM students WHERE (birth_day >= '2001-03-14')
  