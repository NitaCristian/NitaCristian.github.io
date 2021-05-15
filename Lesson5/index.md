# Working with Expressons, Statements and Operators

## Statements

---

Languages — spoken or programmed — are composed of statements that are executed one after another. 
All statements in C++ end with a semicolon (;), which defines the boundary of a statement. 
This is similar to the period (.) you add when ending a sentence in English. 
The next statement can start immediately after the semicolon, but for convenience and readability you often program successive statements on successive lines.

```c++
int foo; // This is a statement
cin >> foo; // This is another statement
cout << foo; // Another statement
```

## Compound Statements or Blocks

---

When you group statements together within braces {...}, you create a compound  statement or a block. 
A block typically groups many statements to indicate that they belong together. 
Blocks are particularly useful when programming conditional statements or loops.

```c++
{
    int foo, bar;
    foo = 12 * 19 + 345;
    bar + 4 * foo + 78;
    cout << foo + bar;
}
```

## Using Operators

---

Operators are tools that C++ provides for you to be able to work with data, transform it, process it, and possibly make decisions on the basis of it.

### The Assignment Operator (=)

---

A statement can use the assignment operator to initialize a variable to a value. 
The assignment operator replaces the value contained by the operand to the left (unimaginatively called l-value) by that on the right (called r-value).

### Understanding L-Values and R-Values

---

L-values often refer to locations in memory. 
A variable is actually a handle to a memory location and is an l-value. 

R-values, on the other hand, can be the very content of a memory location. 
So, all l-values can be r-values, but not all r-values can be l-values.

```c++
int foo; // This is both an l-value and and r-value

foo = 1;
int bar = foo;

5 // This constant can only be an r-value
foo = 5;
```

### Operators to Add, Subtract, Multiply, Divide, and Modulo Divide

---

You can perform an arithmetic operation between two operands by using + for addition, – for subtraction, * for multiplication, / for division, and % for modulo operation.

Note that the division operator / returns the result of division between two operands. 
In the case of integers, however, the result contains no decimals as integers by definition cannot hold decimal data. 

The modulo operator % returns the remainder of a division operator, and it is applicable only on integer values.

### Operators to Increment and Decrement

---

Sometimes you need to count in increments of one. 
This is particularly required in variables that control loops where the value of the variable needs to be incremented or decremented every time a loop has been executed. 
C++ includes the ++ (increment) and -- (decrement) operators to help you with this task.

### To Postfix or Prefix

---

The result of execution of the postfix operators is that the l-value is first assigned the r-value and after that assignment the r-value is incremented (or decremented). 

Prefix operators have exactly the opposite in behavior. The r-value is first incremented (or decremented) and then assigned to the l-value.

```c++
int foo = 0;

int bar = ++foo; // bar = 1, foo = 1
int bar = foo++; // bar = 0, foo = 1
```

### Equality Operators

---

Often you need to check for a certain condition being fulfilled or not being fulfilled before you proceed to take an action. Equality operators `==` (operands are equal) and `!=` (operands are unequal) help you with exactly that.

### Relational Operators

---

In addition to equality checks, you might want to check for inequality of a certain variable against a value

| Operator Name                 | Description                                                                                     |
| ----------------------------- | ----------------------------------------------------------------------------------------------- |
| Less than (<)                 | Evaluates to true if one operand is less than the other (op1 < op2), else evaluates to false    |
| Greater than (>)              | Evaluates to true if one operand is greater than the other (op1 > op2), else evaluates to false |
| Less than or equal to (<=)    | Evaluates to true if one operand is less than or equal to another, else evaluates to false      |
| Greater than or equal to (>=) | Evaluates to true if one operand is greater than or equal to another, else evaluates to false   |

### Logical Operators

---

Logical NOT operation is supported by the operator ! and works on a single operand.

Other operators such as AND, OR, and XOR need two operands.

Logical AND operation evaluates to true only when each operand evaluates to true. Logical AND operation is supported by operator &&.

Logical OR evaluates to true when at least one of the operands evaluates to true. Logical OR operation is supported by operator ||.

The exclusive OR (abbreviated to XOR) operation is slightly different than the logical OR for it evaluates to true when any one operand is true but not both.

### Bitewise NOT, AND, OR, XOR Operators

---

The difference between the logical and the bitwise operators is that bitwise operators don’t return a boolean result. Instead, they supply a result in which individual bits are governed by executing the operator on the operands’ bits. 

C++ allows you to perform operations such as NOT, OR, AND, and exclusive OR (that is, XOR) operations on a bitwise mode where you can manipulate individual bits by negating them using ~, OR-ing them using |, AND-ing them using &, and XOR-ing them using ^. 
The latter three are performed against a number (typically a bit mask) of your choosing.

### Bitewise Right Shift and Left Shift Operators

---

Shift operators move the entire bit sequence to the right or to the left, and thus can help with multiplication or division by multiples of two, apart from having other uses in an application.

### Compound Assignment Operators

---

Compound assignment operators are assignment operators where the operand to the left is assigned the value resulting from the operation.

| Operator                       | Usage          | Equivalent           |
| ------------------------------ | -------------- | -------------------- |
| Addition Assignment            | num1 += num2;  | num1 = num1 +  num2; |
| Subtraction Assignment         | num1 -= num2;  | num1 = num1 -  num2; |
| Multiplication Assignment      | num1 *= num2;  | num1 = num1 *  num2; |
| Division Assignment            | num1 /= num2;  | num1 = num1 /  num2; |
| Modulo Assignment              | num1 %= num2;  | num1 = num1 %  num2; |
| Bitwise Left-Shift Assignment  | num1 <<= num2; | num1 = num1 << num2; |
| Bitwise Right-Shift Assignment | num1 >>= num2; | num1 = num1 >> num2; |
| Bitwise AND Assignment         | num1 &= num2;  | num1 = num1 &  num2; |
| Bitwise OR Assignment          | num1 \|= num2; | num1 = num1 \| num2; |
| Bitwise XOR Assignment         | num1 ^= num2;  | num1 = num1 ^  num2; |

## Operators Precedence

---

The order in which the various operators are invoked is very strictly specified by the C++ standard. This order is what is meant by operator precedence.

| Rank | Name                                                                                                                                                            | Operator                        |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| 1    | Scope resolution                                                                                                                                                | ::                              |
| 2    | Member selection, subscripting, increment, and decrement                                                                                                        | . ->()++ --                     |
| 3    | sizeof, prefix increment and decrement, complement, and, not, unary minus and plus, address-of and dereference, new, new[], delete, delete[], casting, sizeof() | ++ --^ !- +& \*()               |
| 4    | Member selection for pointer                                                                                                                                    | .\* ->\*                        |
| 5    | Multiply, divide, modulo                                                                                                                                        | \* / %                          |
| 6    | Add, subtract                                                                                                                                                   | + -                             |
| 7    | Shift (shift left, shift right)                                                                                                                                 | << >>                           |
| 8    | Inequality relational                                                                                                                                           | < <= > >=                       |
| 9    | Equality, inequality                                                                                                                                            | == !=                           |
| 10   | Bitwise AND                                                                                                                                                     | &                               |
| 11   | Bitwise exclusive OR                                                                                                                                            | ^                               |
| 12   | Bitwise OR                                                                                                                                                      | \                               |
| 13   | Logical AND                                                                                                                                                     | &&                              |
| 14   | Logical OR                                                                                                                                                      | \|\|                            |
| 15   | Conditional                                                                                                                                                     | ?:                              |
| 16   | Assignment operators                                                                                                                                            | = *= /= %=+= -=<<=>>=&= \| = ^= |
| 17   | Comma                                                                                                                                                           | ,                               |
