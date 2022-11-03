USE employee;

INSERT INTO department(name) 
VALUES 
 ('Sales'),
 ('Customer Service'),
 ('Engineering'),
 ('Marketing');

INSERT INTO role(title, salary, department_id) 
VALUES 
 ('Sales Lead', 120000, 1),
 ('Sales Associate', 80000, 1),
 ('Customer Service Lead', 120000, 2),
 ('Custoemr Service rep', 80000, 2),
 ('Lead Engineer', 120000, 3),
 ('Developer', 80000, 3),
 ('Marketing Lead', 120000, 4),
 ('Marketing Specialist', 80000, 4);

INSERT INTO employee(first_name, last_name, manager_id, role_id) 
VALUES 
 ('Jane', 'Doe', 1, 1),
 ('John', 'Doe', 1, 1),
 ('Finn', 'Mertens', 2, 2),
 ('Jake', 'TheDog', 2, 2),
 ('Joseph', 'Wright', 3, 3),
 ('Alanna', 'Rod', 3, 3),
 ('Bob', 'Smith', 4, 4),
 ('Lumpy', 'Space', 4, 4);