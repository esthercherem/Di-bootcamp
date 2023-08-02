-- How To Join 3 Or More Tables In SQL

-- Not Completed
-- In a database, information is typically separated into different tables. The JOIN (or INNER JOIN) statement enables us to combine the columns we require into a single table. The syntax of joining 3 or more tables is the same as joining 2 tables:​

-- JOIN, INNER JOIN and , can be used to join tables. However, if a , is used, then the WHERE clause needs to be used instead of the ON clause.
-- Simple Join
-- First, all the tables are joined using the JOIN keyword, then the WHERE clause is used:

FROM Employee e JOIN Salary s JOIN Department d
        WHERE e.ID = s.Emp_ID AND e.Dep_ID = d.ID


-- Nested Join
-- The nested JOIN statement is used with the ON keyword:

SELECT e.ID, e.Name, s.Salary, d.Name
FROM (Employee e JOIN Salary s ON e.ID = s.Emp_ID)
  JOIN Department d ON e.Dep_ID = d.ID

  