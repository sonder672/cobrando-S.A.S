CREATE TABLE departments(
    code INT,
    name VARCHAR(10),
    budget FLOAT,
    PRIMARY KEY(code)
);

CREATE TABLE employees(
    code INT,
    nif VARCHAR(9),
    name VARCHAR(100),
    surname VARCHAR(100),
    second_surname VARCHAR(100),
    department_code INT,
    PRIMARY KEY (code),
    FOREIGN KEY (department_code)
    REFERENCES departments(code)
); 

INSERT INTO departments(code, name, budget) 
VALUES (1, 'Sistemas', 10000.50); 