DROP DATABASE IF EXISTS employment_DB;
CREATE DATABASE employment_DB;

USE employment_DB;

CREATE TABLE department(
    id INT PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL,
);

CREATE TABLE roles(
    id INT PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL(10,4) UNIQUE NOT NULL,
    department_id INT UNIQUE NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY(department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employees(
    id INT PRIMARY KEY,
    first_name VARCHAR(30) UNIQUE NOT NULL,
    last_name VARCHAR(30) UNIQUE NOT NULL,
    role_id INT UNIQUE NOT NULL,
    manager_id INT UNIQUE NULL,

);

