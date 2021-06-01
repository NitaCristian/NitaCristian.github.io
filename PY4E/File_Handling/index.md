# Files

The key function for working with files in Python is the open() function.

## Open a file
The open() function takes two parameters:
- filename
- mode

There are four different modes for opening a file:

- "r" - Read - Default value. Opens a file for reading, error if the file does not exist
- "a" - Append - Opens a file for appending, creates the file if it does not exist
- "w" - Write - Opens a file for writing, creates the file if it does not exist
- "x" - Create - Creates the specified file, returns an error if the file exists

In addition you can specify if the file should be handled as binary or text mode

- "t" - Text - Default value. Text mode
- "b" - Binary - Binary mode (e.g. images)

```py
file1 = open("demofile.txt")
# opened automatically in read mode

file2 = open("demofile.txt", "rt")
# opened in read and text mode
```

## Read from a file

- The read() method reads the content of the file.
By default the read() method returns the whole text, but you can also specify how many characters you want to return.

- The readLine() method will return one line at a time.

- You can read the whole file line by line by looping through the lines of the file.

```py
f = open("demofile.txt", "r")

print(f.read())

print(f.readLine()) # First Line
print(f.readLine()) # Second Line

for x in f:
  print(x)
```

## Close Files

It is a good practice to always close the file when you are done with it.

```py
f = open("demofile.txt", "r")
print(f.readline())
f.close() 
```

## Write to an Existing File

To write into a file, open it in append or write mode and use the function write().

```py
f = open("demofile2.txt", "a")
f.write("Now the file has more content!")
f.close()
````