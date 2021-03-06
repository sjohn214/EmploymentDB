USE employment_DB;

INSERT INTO all_employee_data(name, employee_id, first_name, last_name, title, salary, role_id, manager_id)
VALUES
    ("Engineering", 1, "Peyton", "Holmes", "Lead Engineer", 150000, 2, null),
    ("Engineering", 2, "Jonathan", "Doerety", "Software Engineer", 125000, 2, 1),
    ("Sales", 3, "Sally", "Watkins", "Sales Lead", 100000, 1, null),
    ("Sales", 4, "Dominique", "Agnes", "Salesperson", 80000, 1, 3),
    ("Sales", 9, "Corey", "Dunn", "Salesperson", 80000, 1, 3),
    ("Finance", 5, "Samantha", "Cheney", "Accountant", 120000, 3, null),
    ("Legal", 6, "Shannon", "Paige", "Managing Attorney", 230000, 4, null),
    ("Legal", 7, "Daniel", "Sirees", "Lawyer", 190000, 4, 6),
    ("Human Resources", 8, "Austin", "Jon", "HR Leader", 175000, 5, null);
    
INSERT INTO department (name) 
VALUES 
    ("Sales"),
    ("Engineering"),
    ("Finance"),
    ("Legal"),
    ("Human Resources");

INSERT INTO roles (title, salary, department_id)
VALUES 
    ("Sales Lead", 100000, 1), 
    ("Salesperson", 80000, 1),
    ("Lead Engineer", 150000, 2),
    ("Software Engineer", 125000, 2),
    ("Accountant", 120000, 3),
    ("Managing Attorney", 230000, 4),
    ("Lawyer", 190000, 4),
    ("Human Resource Leader", 175000, 5);


INSERT INTO employees (department_id, first_name, last_name, title, role_id, manager_id)
VALUES
    (2, "Peyton", "Holmes", "Lead Engineer", 2, null),
    (2, "Jonathan","Doerety", "Software Engineer", 2, 1),
    (1, "Sally", "Watkins", "Sales Leader",  1, null), 
    (1, "Dominique", "Agnes", "Salesperson", 1, 3),
    (3, "Samantha", "Cheney", "Accountant", 3 ,null),
    (4, "Shannon", "Paige", "Managing Attorney", 4, null),
    (4, "Daniel", "Sirees", "Lawyer",  4, 6),
    (5, "Austin", "Jon", "HR Leader", 5, null),
    (1, "Corey", "Dunn", "Salesperson", 1, 3);
    
INSERT INTO employee_departments(first_name, last_name, employee_id, department_id)
VALUES 
    ("Peyton", "Holmes", 1, 2),
    ("Jonathan","Doerety", 2, 2),
    ("Sally", "Watkins", 3, 1),
    ("Dominique", "Agnes", 4, 1),
    ("Corey", "Dunn", 9, 1),
    ("Samantha", "Cheney", 5, 3),
    ("Shannon", "Paige", 6, 4),
    ("Daniel", "Sirees",7, 4),
    ("Austin", "Jon", 8, 5);

INSERT INTO employee_managers(first_name, last_name, manager_id)
VALUES
    ("Peyton", "Holmes", null),
    ("Jonathan","Doerety", 1),
    ("Sally", "Watkins", null),
    ("Dominique", "Agnes", 3),
    ("Corey", "Dunn", 3),
    ("Samantha", "Cheney", null),
    ("Shannon", "Paige", null),
    ("Daniel", "Sirees",6),
    ("Austin", "Jon", null);

DELETE FROM employees 
WHERE (last_name = '' AND first_name = '');

UPDATE employees
SET role_id = '' WHERE last_name = '' AND first_name = '' AND employee_id = ''
AND title = '' AND department_id = '';

UPDATE employee_managers
SET manager_id = '' WHERE last_name = '' AND first_name = '';

INSERT INTO add_employees(last_name, first_name, role_id, title, department_id)
VALUES
('Heartwell','Chistoff', 2, 'Software Engineer',2),
('Jordan', 'Michaela', 1, 'Salesperson', 3),
('Barthwell','Lordes', 1, 'Salesperson',3);