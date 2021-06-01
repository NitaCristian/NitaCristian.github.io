# Using Databases and SQL

## What is a database?

A database is a file that is organized for storing data. 
Most databases are organized like a dictionary in the sense that they map from keys to values. 

The biggest difference is that the database is on disk (or other permanent storage), so it persistsafter the program ends. 
Because a database is stored on permanent storage, it canstore far more data than a dictionary, which is limited to the size of the memoryin the computer.

There are many different database systems which are used for a wide variety of purposes including: Oracle, MySQL, Microsoft SQL Server, PostgreSQL, and SQLite.

## Database concepts

When you first look at a database it looks like a spreadsheet with multiple sheets. 
The primary data structures in a database are: tables, rows, and columns.

In technical descriptions of relational databases the concepts of table, row, and column are more formally referred to as relation, tuple, and attribute, respectively.

## Creating a database table

Databases require more defined structure than Python lists or dictionaries1.

When we create a database table we must tell the database in advance the names of each of the columns in the table and the type of data which we are planning tostore in each column. 

```py
import sqlite3
conn = sqlite3.connect('music.sqlite')
cur = conn.cursor()

cur.execute('DROP TABLE IF EXISTS Tracks')
cur.execute('CREATE TABLE Tracks (title TEXT, plays INTEGER)')

conn.close()
```

The connect() operation makes a “connection” to the database stored in the file music.sqlite in the current directory. 
If the file does not exist, it will be created.

A cursor() is like a file handle that we can use to perform operations on the datastored in the database. Calling cursor() is very similar conceptually to calling open() when dealing with text files.

Once we have the cursor, we can begin to execute commands on the contents ofthe database using the execute() method.

To insert a row into a table, we use the SQLINSERT command: 

    INSERT INTOTracks (title, plays)VALUES('My Way',15)

The SQLSELECT command is used to retrieve rows and columns from a database.
The SELECT statement lets you specify which columns you would like to retrieveas well as a WHERE clause to select which rows you would like to see. 
It also allows an optional ORDER BY clause to control the sorting of the returned rows. 

    SELECT * FROM Tracks WHERE title = 'My Way'

To remove a row, you need a WHERE clause on an SQL DELETE statement. 
The WHERE clause determines which rows are to be deleted:

    DELETE FROM Tracks WHERE title = 'My Way'

It is possible to UPDATE a column or columns within one or more rows in a table using the SQL UPDATE statement as follows:

    UPDATE Tracks SET plays = 16 WHERE title = 'My Way'