DROP DATABASE IF EXISTS bamazno_db;
CREATE database bamazon_db;

use bamazon_db;


CREATE TABLE products(
  PRIMARY KEY (id) ,
  id INTEGER(11) AUTO_INCREMENT, 
  item_id INTEGER(11), 
  product_name VARCHAR(100),
  department_name VARCHAR(30),
  price INTEGER(10), 
  stock_quantity INTEGER(10)
  
);
-- 1st row
INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
	VALUES ('1', 'T-Shirt', 'Mens Clothing', 30, '302');
-- 2nd row
INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
	VALUES ('2', 'Jeans', 'Mens Clothing', 80, '202');
-- 3rd row
INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
	VALUES ('3', 'Bra', 'Womens Clothing', 20, '502');
-- 4th row
INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
	VALUES ('4', 'Dress Slacks', 'Womens Clothing', 60, '1002');
-- 5th row
INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
	VALUES ('5', 'Dress Slacks', 'Mens Clothing', 80, '602');
    -- 6th row
INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
	VALUES ('6', 'Mens Polo', 'Mens Clothing', 65, '2005');
    -- 6th row
INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
	VALUES ('7', 'Dress Slacks', 'Mens Clothing', 80, '602');
    -- 8th row
INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
	VALUES ('8', 'Hoodie', 'Mens Clothing', 50, '3500');
	-- 9th row
INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
	VALUES ('9', 'Tennis Shoes', 'Mens Clothing', 100, '52');
        -- 6yh row
INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
	VALUES ('10', 'Boxers', 'Mens Clothing', 10, '5');
