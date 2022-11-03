CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    department_id INTEGER,
    title VARCHAR(30) NOT NULL,
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    salary DECIMAL(6,0) NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    role_id INTEGER,
    manager_id INTEGER,
    FOREIGN KEY (role_id) REFERENCES role(id)
);