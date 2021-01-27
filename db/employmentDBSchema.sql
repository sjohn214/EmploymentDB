DROP DATABASE IF EXISTS employment_DB;
CREATE DATABASE employment_DB;

USE employment_DB;

CREATE TABLE all_employee_data (
    name VARCHAR(30)NOT NULL,
    -- //department name 
    employee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     -- //employee's id number
    first_name VARCHAR(30)NOT NULL,
    last_name VARCHAR(30)NOT NULL,
    -- //employee's first and last names
    title VARCHAR(30)NOT NULL,
    -- //job title
    salary DECIMAL(10,2)NOT NULL,
     role_id INT NOT NULL,
    --  //role id assigment by department
    manager_id INT UNSIGNED
    -- //manager assignment if any
);

CREATE TABLE department(
	    employee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     -- //employee's id number
    name VARCHAR(30)NOT NULL
);

CREATE TABLE roles(
    title VARCHAR(30)NOT NULL,
    salary DECIMAL(10,2)NOT NULL,
    department_id INT NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY(department_id) REFERENCES department(employee_id) ON DELETE CASCADE
);

CREATE TABLE employees(
	employee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     -- //employee's id number
    first_name VARCHAR(30)NOT NULL,
    last_name VARCHAR(30)NOT NULL,
    title VARCHAR(30)NOT NULL,
    role_id INT NOT NULL,
    department_id INT NOT NULL,
    manager_id INT UNSIGNED
);

CREATE TABLE employee_departments(
	employee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     -- //employee's id number
    first_name VARCHAR(30)NOT NULL,
    last_name VARCHAR(30)NOT NULL,
    department_id INT NOT NULL
);

CREATE TABLE employee_managers(
    first_name VARCHAR(30)NOT NULL,
    last_name VARCHAR(30)NOT NULL,
    manager_id INT UNSIGNED
);


DELETE FROM employees 
WHERE (last_name = '' AND first_name = '');

UPDATE employees
SET role_id = '' WHERE last_name = '' AND first_name = '' AND employee_id = ''
AND title = '' AND department_id = '';

UPDATE employee_managers
SET manager_id = '' WHERE last_name = '' AND first_name = '';