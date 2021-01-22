DROP DATABASE IF EXISTS employment_DB;
CREATE DATABASE employment_DB;

USE employment_DB;

CREATE TABLE all_employee_data (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)NOT NULL,
    -- //department name 
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
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30)NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE roles(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30)NOT NULL,
    salary DECIMAL(10,2)NOT NULL,
    department_id INT NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY(department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employees(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30)NOT NULL,
    last_name VARCHAR(30)NOT NULL,
    role_id INT NOT NULL,
    manager_id INT UNSIGNED
);

CREATE TABLE employee_departments(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30)NOT NULL,
    last_name VARCHAR(30)NOT NULL,
    department_id INT NOT NULL
);

CREATE TABLE employee_managers(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30)NOT NULL,
    last_name VARCHAR(30)NOT NULL,
    manager_id INT UNSIGNED
);

CREATE TABLE add_new_employees(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30)NOT NULL,
    last_name VARCHAR(30)NOT NULL,
    role_id INT NOT NULL,
    manager_id INT UNSIGNED
);

DELETE FROM employees 
WHERE (last_name = '' AND first_name = '');

UPDATE employees
SET role_id = '' WHERE last_name = '' AND first_name = '';

UPDATE employee_managers
SET manager_id = '' WHERE last_name = '' AND first_name = '';