# Using Variables, Declaring Constants

In this lesson, you find out:
- How to declare and define variables and constants
- How to assign values to variables and manipulate those values
- How to use keywords auto and constexpr

## What is a Variable?

Variables are places of memory used to store different types of values. Defining a variable is quite simple and follows this pattern:

```c++    
variable_type variable_name;
or
variable_type variable_name = initialValue; 
```
The variable_type attribute tells the compiler the nature of data the variable can store, and the compiler reserves the necessary space for it. 

The name chosen by the programmer is a friendly replacement for the address in the memory where the variable’s value is stored.

## Understanding the Scope of a Variable

Ordinary variables have a well-defined scope within which they’re valid and can be used. When used outside their scope, the variable names will not be recognized by the compiler and your program won’t compile.

### Local Variables

A local variable can be used in a function after variable declaration till the end of the function. When a function ends, all local variables are destroyed and the memory they occupied returned.

### Global Variables

Variables declared outside the scope of any function instead of within them have a global scope and they can be used inside any function.

Indiscriminate use of global variables is considered poor programming practice. This is because global variables can be assigned values in any/every function and can contain an unpredictable state.

## C++ Variable Types

C++ offers a variety of fundamental  variable types supported directly by the compiler.

| Type                  | Value                                                   |
| --------------------- | ------------------------------------------------------- |
| bool                  | true or false                                           |
| char                  | 256 character values                                    |
| unsigned short int    | 0 to 65,535                                             |
| short int             | –32,768 to 32,767                                       |
| unsigned long int     | 0 to 4,294,967,295                                      |
| long int              | –2,147,483,648 to 2,147,483,647                         |
| unsigned long long    | 0 to 18,446,744,073,709,551,615                         |
| long long             | –9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |
| int (16 bit)          | –32,768 to 32,767                                       |
| int (32 bit)          | –2,147,483,648 to 2,147,483,647                         |
| unsigned int (16 bit) | 0 to 65,535                                             |
| unsigned int (32 bit) | 0 to 4,294,967,295                                      |
| float                 | 1.2e–38 to 3.4e38                                       |
| double                | 2.2e–308 to 1.8e308                                     |

## The Concept of Signed and Unsigned Integers

Sign implies positive or negative. 

All numbers you work with using a computer are stored in the memory in the form of bits and bytes. 
A memory location that is 1 byte large contains 8 bits. Each bit can either be a 0 or 1. Thus, a memory location that is 1 byte large can contain a maximum of 2 to the power 8 values—that is, 256 unique values. 
Similarly, a memory location that is 16 bits large can contain 2 to the power 16 values—that is, 65,536 unique values.

If these values were to be unsigned (assumed to be only positive) then one byte could contain integer values ranging from 0 through 255 and two bytes would contain values ranging from 0 through 65,535.

## Floating-Point Types float and double

Floating-point numbers are real numbers. These are numbers that can be positive or negative. They can contain decimal value s. So, if you want to store the value of pi (22 / 7 or 3.14) in a variable in C++, you would use a floating-point type.

## Determining the Size of a Variable

Size is the amount of memory that the compiler reserves when the programmer declares a variable to hold the data assigned to it. The size of a variable depends on its type. C++ has a operator called sizeof that tells you the size in bytes of a variable or a type.

## Automatic Type Inference Using auto

There are cases where the type of a variable is apparent given the initialization value being assigned to it. For example, if a variable is being initialized with the value true, the type of the variable can be best estimated as bool. Compilers supporting C++11 and beyond give you the option of not having to explicitly specify the variable type when using the keyword auto.

## What is a Constant

C++ enables you to define pi as a constant that cannot be changed after declaration. In other words, after it’s defined, the value of a constant cannot be altered. Assignments to a constant in C++ cause compilation errors.Thus, constants are like variables in C++ except that these cannot be changed. Similar to variables, constants also occupy space in the memory and have a name to identify the address where the space is reserved.

## Constant Expression Using constexpr

Keyword constexpr allows function-like declaration of constants:
```c++    
constexpr double GetPi() {return 22.0 / 7;}
```
constexpr may look like a function, however, allows for optimization possibilities from the compiler’s and application’s point of view. So long as a compiler is capable of evaluating a constant expression to a constant, it can be used in statements and expressions at places where a constant is expected.

## Enumerations

There are situations where a particular variable should be allowed to accept only a certain set of values. These are situations where you don’t want the colors in the rainbow to contain Turquoise or the directions on a compass to contain Left. In both these cases, you need a type of variable whose values are restricted to a certain set defined by you. 

Enumerations are exactly the tool you need in this situation and are characterized by the keyword enum. Enumerations comprise a set of constants called enumerators. Enumerations are used as user-defined types. Variables of this type can be assigned a range of values restricted to the enumerators contained in the enumeration. 

The compiler converts the enumerator into integers. Each enumerated value specified is one more than the previous value. You have the choice of specifying a starting value, and if this is not specified, the compiler takes it as 0.

## Defining Constants Using #define

#define is a preprocessor macro that replaces all the mentions of the constant with the value assigned.