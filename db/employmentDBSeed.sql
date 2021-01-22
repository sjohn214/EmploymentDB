USE employment_DB;

INSERT INTO department (name) 
VALUES ("Sales"),("Engineering"),("Finance"),("Legal"),("Human Resources");

INSERT INTO roles (title, salary, department_id)
VALUES 
    ("Sales Lead", 100000, 1), 
    ("Salesperson", 80000, 1),
    ("Lead Engineer", 150000, 2),
    ("Software Engineer", 125000, 2),
    ("Accountant", 120000, 3),
    ("Managing Attorney", 250000, 4),
    ("Lawyer", 190000, 4),
    ("Human Resource Leader", 175000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ("Peyton", "Holmes", 1,null),
    -- //Lead Engineer
    ("Jonathan","Doerety", 2,1),
    -- //Software Engineer
    ("Sally", "Watkins", 3,null), 
    -- //Sales Leader
    ("Dominique", "Agnes", 4,3),
    -- //Salesperson
    ("Samantha", "Cheney", 5,null),
    -- //Accountant
    ("Shannon", "Paige", 6,null),
    -- //Managing Attorney
    ("Daniel", "Sirees",7, 6),
    -- //Lawyer
    ("Austin", "Jon", 8,null),
    -- //HR Leader
    ("Corey", "Dunn", 9,3);


