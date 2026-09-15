CREATE TABLE customer(
	id SERIAL PRIMARY KEY,
	name TEXT,
	age INT,
	address TEXT,
	created_at TIMESTAMPTZ DEFAULT NOW(),
	created_by INT,
	modified_at TIMESTAMPTZ,
	modified_by INT,
	deleted_at TIMESTAMPTZ,
	deleted_by INT,
	active BOOLEAN DEFAULT TRUE
);
INSERT INTO customer
(name, age, address, created_by, active)
VALUES

('Nguyen Van An',25,'Ha Noi',1,true),

('Tran Thi Binh',35,'Ho Chi Minh',1,true),

('Le Minh Anh',28,'Da Nang',1,true),

('Pham Quang Huy',42,'Hai Phong',1,false),

('Nguyen Thi Lan',31,'Ha Noi',1,true),

('Vo Thanh An',45,'Can Tho',1,true),

('Do Minh Quan',22,'Hue',1,false),

('Bui Ngoc Anh',38,'Ha Noi',1,true),

('Tran Van Nam',55,'Da Nang',1,true),

('Le Thi Hoa',29,'Nha Trang',1,true),

('Pham Gia An',33,'Ha Noi',1,false),

('Nguyen Duc Long',40,'Hai Duong',1,true),

('Hoang Thu Trang',27,'Vinh',1,true),

('Vu Minh Khoa',36,'Ha Noi',1,true),

('Dang Bao An',50,'Quang Ninh',1,false);
SELECT * FROM customer WHERE active= TRUE;
SELECT * FROM customer WHERE age >30;
SELECT * FROM customer WHERE address='Ha Noi';
SELECT * FROM customer WHERE name LIKE '%An%';
ALTER TABLE public.customer ADD COLUMN email TEXT;
ALTER TABLE public.customer ADD COLUMN phone TEXT;
ALTER TABLE public.customer ADD COLUMN gender TEXT;
UPDATE customer SET
email='an@gmail.com',
phone='0909123456',
gender='Male'
WHERE id=1;
SELECT * FROM customer;
UPDATE public.customer SET
	name='Nguyen Van A Updated',
	age=39,
	address='Ho Chi Minh city',
	email='an_new@gmail.com',
	phone='091234578989',
	gender='Male',
	modified_at=NOW(),
	modified_by=2
WHERE id =1;
SELECT * FROM public.customer WHERE id=1;