 show databases;

 create database todo_app;

 show databases;

 use todo_app;

 show databases;

 use todo_app;

 show todo_app;

 SELECT * FROM todo_app;

 INSERT INTO todo_app (id,task,goalDate);
    -> VALUES (1, 'homework', 2018-12-18);
ERROR 1292 (22007): Incorrect date value: '1988' for column 'goalDate' at row 1;
 INSERT INTO todo_app (id,task,goalDate);
    -> VALUES (1, 'homework', '2018-12-18');

 INSERT INTO todo_app (id,task,goalDate);
    -> VALUES (2,'sleep','2026-10-10');

 INSERT INTO todo_app (id,task,goalDate);
    -> VALUES (3,'train','2030-03-04');

 SELECT * FROM todo_app;
