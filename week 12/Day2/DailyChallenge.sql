CREATE TABLE customer (
id SERIAL PRIMARY KEY,
first_name VARCHAR(50)NOT NULL,
last_name VARCHAR (50)NOT NULL);

CREATE TABLE customer_profile (
id SERIAL PRIMARY KEY,
isLoggedIn BOOLEAN DEFAULT false ,
customer_id INTEGER REFERENCES customer(id)
);
	
	-- Insert customers
INSERT INTO Customer (first_name, last_name)
VALUES ('John', 'Doe'), ('Jerome', 'Lalu'), ('Lea', 'Rive');

-- Insert customer profiles using subqueries
INSERT INTO Customer_profile (isLoggedIn, customer_id)
VALUES (
  (SELECT true FROM Customer WHERE first_name = 'John' AND last_name = 'Doe'),
  (SELECT id FROM Customer WHERE first_name = 'John' AND last_name = 'Doe')
), (
  (SELECT false FROM Customer WHERE first_name = 'Jerome' AND last_name = 'Lalu'),
  (SELECT id FROM Customer WHERE first_name = 'Jerome' AND last_name = 'Lalu')
);

SELECT c first_name
FROM customer c
JOIN customer_profile cp ON c.id= cp.customer_id
WHERE cp.isLoggedIn= true;

SELECT COUNT(*) AS num_customer_not_LoggedIn
FROM customer c
LEFT JOIN customer_profile cp ON  c.id= cp.customer_id
WHERE cp.IsLoggedIn= false;

CREATE TABLE Book(
book_id SERIAL PRIMARY KEY,
title VARCHAR (100) NOT NULL,
author varchar (100) NOT NULL);

INSERT INTO Book (title,author)
VALUES ('Alice In Wonderland','Lewis Carrol'),('Harry Potter','J.K Rowling'),('To Kill A Mockingbird','Harper Lee');

CREATE TABLE student (
student_id SERIAL PRIMARY KEY,
name VARCHAR (50) NOT NULL UNIQUE,
age INTEGER CHECK(age <=15))


INSERT INTO student (name,age)
VALUES('Jhon',12),('Lera',11),('Patric',10),('Bob',14);

CREATE TABLE library (
	book_fk_id INTEGER REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
	student_fk_id INTEGER REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
	borrow_date DATE,
	PRIMARY KEY (book_fk_id, student_fk_id)
)

-- Add records in the junction table using subqueries
INSERT INTO Library (book_fk_id, student_fk_id, borrow_date)
VALUES (
  (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
  (SELECT student_id FROM Student WHERE name = 'John'),
  '2022-02-15'
), (
  (SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'),
  (SELECT student_id FROM Student WHERE name = 'Bob'),
  '2021-03-03'
), (
  (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
  (SELECT student_id FROM Student WHERE name = 'Lera'),
  '2021-05-23'
), (
  (SELECT book_id FROM Book WHERE title = 'Harry Potter'),
  (SELECT student_id FROM Student WHERE name = 'Patrick'),
  '2022-06-10'
)




Querying the data and deleting a student:

-- Select all columns from the junction table
SELECT *
FROM Library;

-- Select the name of the student and the title of the borrowed books
SELECT s.name AS student_name, b.title AS book_title
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id;

-- Select the average age of the children who borrowed the book "Alice in Wonderland"
SELECT AVG(s.age) AS average_age
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

-- Delete a student from the Student table
DELETE FROM Student
WHERE name = 'John';

