# Print values to the console

You can print values to the console using the print() function:

```py
print(10)
print(15.97)
print(True)
print('Hello world!')
```

# Value and types

Python has 4 primitive values:
- Integers (10)
- Floats (10.123)
- Strings ('This is a string' / "This is another string")
- Boolean (True / False)

# Variables

In Python, you can define variable like this:

```py
variable_name = initial_value
```

To display the type of a variable, use the type() function:

```py
type(True)
# class bool

type('Hello')
# class str

type(10)
# class int

type(10.5)
# class float
```

# Operators

Python offers operators for:
- Exponentiation (**)
- Multiplication (*)
- Division (/)
- Adition (+)
- Subtraction (-)
- Quotient (//)
- Remainder (%)

For mathematical operators, Python follows mathematical convention. The rules are PEMDAS (Parantheses, Exponentiation, Multiplication and Division, Adition and Subtraction)

# Input 

You can get input form the terminal using the input() function. Additionally, you can print a prompt by providing a message in the parameter.

```py
inp = input()
inp = input('What is your name?\n')

# >> What is your name?
# Cristian Nita
```

# Boolean expressions

Python provide the following comparison operators which can be used to create boolean expressions:

- != 
- == 
- \> 
- \>= 
- < 
- <= 
- is (is the same as)
- is not (is not the same as)

# Logical operators

Python provide the following logical operators which can be used to create conditional expressions:

- and
- or
- not

# Conditional execution

The if, else, and elif statements:

```py
if x > 0:
    print('x is positive')
elif x > -5:
    print('x is greater than -5')
else:
    print('x has a small value')
```

# Catching exceptions

To catch exceptions, use the try-except conditional structure:

```py
inp = input('Enter a number: ')
try:
    number = int(inp)
    print(number)

except:
    print('Please enter a number')
```

# Type conversion functions

Python provides functions that convert values from one type to another:
- int()
- float()
- str()
- bool()

```py
bool(1) 
# >> True

int('5')
# >> 5
```

# Built-in functions

Python provides a number of important built-in functions:

- max()
- min()
- len()

# Math functions

Python has amathmodule that provides most of the familiar mathematical functions.

First, import the math module

```py
import math
```

We now have a module object which we can use to call the mathematical functions:

- log10()
- sin()
- cos()
- pi
- sqrt()

```py
degrees = 45
radians = degrees / 360.0 * 2 * math.pi
math.sin(radians)
```

# Random numbers

The random module provides functions that generate pseudorandom numbers.

```py
import random
```

The function random() returns a random float between 0.0 and 1.0 (including 0.0 but not 1.0)

```py
random.random()
# >> 0.11132867921152356
random.random()
# >> 0.5950949227890241
```

The function randint() takes the parameters low and high, and returns an integer between low and high (including both).

```py
random.randint(5, 10)
# >> 5
random.randint(5, 10)
# >> 9
```

# Adding new functions

A function definition specifies the name of a new function and the sequence of statements that execute when the function is called.

def is a keyword that indicates that this is a function definition.

```py
def name_of_function():
    # statement here
    # another statement here
```

Functions can take parameters which they can use inside them. 
Also, functions can return values or not. 
Use the return keyword to return a value from the function.

```py
def name_of_function(a, b, c):
    message = a + b + c
    print(message)
    return message # optional 
```

# Iteration

Python provides statements for iterating, like while and for.

```py
x = 10
while x > 0:
    if x == 5:
        continue
    
    if x == 1:
        break

    print(x)
    x = x - 1

friends = ['alex', 'daniel', 'mihai']
for friend in friends:
    print(friend)

for i in range(0, 10)
    print(i)
```

# Strings

A string is a sequence of characters.

```py
fruit = 'banana'

letter = fruit[0] # b

len(fruit) # 6
```

In Python you can use the operators + and * on string to concatenate two strings or repeat a number of times a string.

```py
x = '100'
y = '150'

x + y 
# >> 100150

x * 3 
# >> 100100100
```

You can traverse a string using the for loop like this.

```py
fruit = 'banana'
for char in fruit:
    print(char)

for i in range(len(fruit)):
    print(fruit[i])
```

# Slices of strings

A segment of a string is called a slice. 
Selecting a slice is similar to selecting a character.

```py
# index a and b
# [a, b)
f = 'banana'

f[0:3] 
f[:3]
# >> ban

f[3:6] 
f[3:]
# >> ana
```

The word in is a boolean operator that takes two strings and returns True if the first appears as a substring in the second.

```py
print('a' in 'banana')
# >> True
print('ana' in 'banana')
# >> True
```

The comparison operators work on strings.

# Format operator

```py
age = 18
s = 'Hello, I am %d years old.' % age

s = 'Hello, my name is %s, I am %d years old, and I have %f dollars in my bank account.' % ('Cristian Nita', 18, 200.0)
```

# List all methods for a type

Python has a function calleddirwhich lists the methods available for an object.
You can use help to get some simple documentation on a method.

```py
m = 'Hello'

dir(m)
# >> 'encode', 'endswith', 'expandtabs', 'find', 'format', 'format_map', 'index',
help(str.capitalize)
"""
Help on built-in function capitalize:

capitalize() method of builtins.str instance
    Return a capitalized version of the string.

    More specifically, make the first character have upper case and the rest lower
    case.
"""
```
# Files

Open the file. You can read the whole file using the read() function. Or, alternatively, you can read line by line from a file using the for loop.

```py
try:
    fhand = open('text.txt')
    
    for line in fhand:
        print(line) 
    
    # or use the function read()
    text = fhand.read() 
except:
    print('File cannot be opened')
    exit()
```

# Lists

A list is a sequence of values.

```py
[1, 2, 3, 4, 5, 6]
['a', 'c', 'f']
['a', 12, 3.4, [10, 20]]
```

Traverse a list using the for loop.

```py
l = [1, 2, 3, 4]
for i in range(len(l)):
    print(l[i])

for elem in l:
    print(elem)
```

List operations:
- \+ concatenation
- \* repeat

```py
a = [1, 2, 3]
b = [4, 5, 6]
c = a + b 
# >> [1, 2, 3, 4, 5, 6]

[0] * 4 
# >> [0, 0, 0, 0]
```

# List slices

```py
t = [1, 2, 3, 4, 5, 6, 7]

t[1:3]
# >> [2, 3]

t[:3]
# >> [1, 2, 3]

t[4:]
# >> [5, 6, 7]
```

# List methods

Python provides methods that operate on lists:
Append a new item at the end of the list. 
- append(element) 

Extend takes a list and appends it to the list that called the method. 
- extend(list)

Sort a list. 
- sort()

Pop element at a given index and return it.
- pop(index)

Remove first specific element.
- remove(element)

Delete a slice of elements up to, but not including, the second index.
- del [a:b]

```py
t = [4, 3, 2, 1]

t.append(5) 
# >> [4, 3, 2, 1, 5]

t_2 = [6, 7, 8]
t.extend(t_2) 
# >> [4, 3, 2, 1, 5, 6, 7, 8]

t.sort()
# >> [1, 2, 3, 4, 5, 6, 7, 8]

t.sort(reverse=True)
# >> [8, 7, 6, 5, 4, 3, 2, 1]

t = [1, 2, 3, 4]

# x = t.pop() # removes the last element
x = t.pop(1)
# >> [1, 3, 4]

del t[1]
# >> [1, 3, 4]

t.remove(1)
# >> [2, 3, 4]

del t[1:3]
# >> [1, 4] 
```

# Lists and functions

There are a number of built-in functions that can be used on lists that allow youto quickly look through a list without writing your own loops:

```py
nums = [3, 41, 12, 9, 74, 15]
len(nums)
# >> 6

max(nums)
# >> 74

min(nums)
# >> 3

sum(nums)
# >> 154
```