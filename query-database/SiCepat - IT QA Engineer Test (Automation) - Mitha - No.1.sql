SELECT emp_name as "employee name", emp_status as "status employee" FROM test.tbl_employee;


SELECT emp_name, emp_status, emp_income
FROM test.tbl_employee
INNER JOIN test.tbl_income
ON test.tbl_employee.emp_code = test.tbl_income.emp_code
WHERE emp_status='R';

SELECT emp_code, emp_name as "nama", emp_status as "status", emp_income as "income"
FROM test.tbl_employee
INNER JOIN test.tbl_income
ON test.tbl_employee.emp_code = test.tbl_income.emp_code
ORDER BY emp_income DESC;