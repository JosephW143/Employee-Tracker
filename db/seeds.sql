USE employee;

INSERT INTO department(name) VALUES ('Sales');
INSERT INTO department(name) VALUES ('Customer Service');
INSERT INTO department(name) VALUES ('Engineering');
INSERT INTO department(name) VALUES ('Marketing');

INSERT INTO role(title, salary, department_id) VALUES ('Sales Lead', 120000, 1);
INSERT INTO role(title, salary, department_id) VALUES ('Sales Associate', 80000, 1);
INSERT INTO role(title, salary, department_id) VALUES ('Customer Service Lead', 120000, 2);
INSERT INTO role(title, salary, department_id) VALUES ('Custoemr Service rep', 80000, 2);
INSERT INTO role(title, salary, department_id) VALUES ('Lead Engineer', 120000, 3);
INSERT INTO role(title, salary, department_id) VALUES ('Developer', 80000, 3);
INSERT INTO role(title, salary, department_id) VALUES ('Marketing Lead', 120000, 4);
INSERT INTO role(title, salary, department_id) VALUES ('Marketing Specialist', 80000, 4);

INSERT INTO employee(first_name, last_name, manager_id, role_id) VALUES ('Jane', 'Doe', 1, 1);
INSERT INTO employee(first_name, last_name, manager_id, role_id) VALUES ('John', 'Doe', 1, 1);
INSERT INTO employee(first_name, last_name, manager_id, role_id) VALUES ('Finn', 'Mertens', 2, 2);
INSERT INTO employee(first_name, last_name, manager_id, role_id) VALUES ('Jake', 'TheDog', 2, 2);
INSERT INTO employee(first_name, last_name, manager_id, role_id) VALUES ('Joseph', 'Wright', 3, 3);
INSERT INTO employee(first_name, last_name, manager_id, role_id) VALUES ('Alanna', 'Rod', 3, 3);
INSERT INTO employee(first_name, last_name, manager_id, role_id) VALUES ('Bob', 'Smith', 4, 4);
INSERT INTO employee(first_name, last_name, manager_id, role_id) VALUES ('Lumpy', 'Space', 4, 4);