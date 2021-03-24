# Organising Code with Functons

In this les-son you learn ■The need for programming functions ■Function prototypes and function definition ■Passing parameters to functions and returning values from them ■Overloading functions ■Recursive functions ■C++11 lambda functions

## The Need for Functions

Another way is to break this application into logical blocks. Compartmentalizing the computation of area and circumference into different  functions can potentially help reuse as the functions can be invoked repeatedly, as and when required.

## What is a Function Prototype

The function prototype basically tells what a function is called (the name, Area), the list of parameters the function accepts (one parameter, a double called radius), and the return type of the function (a double).

Without the function prototype, on reaching Lines 16 and 19 in main() the compiler wouldn’t know what the terms Area and Circumference are. The function prototypes tell the compiler that Area and Circumference are functions; they take one parameter of type double and return a value of type double. The compiler then recognizes these statements as valid and the job of linking the function call to its implementation and ensuring that the program execution actually triggers them is that of the linker

A function can have multiple parameters separated by commas, but it can have only one return type.When programming a function that does not need to return any value, specify the return type as void

## What is a Function Definition

the implementation of a function—is what is called the definition. A function definition is always comprised of a statement block. A return statement is necessary unless the function is declared with return type void. The statement block contains statements within open and closed braces ({...}) that are executed when the function is called

## What is a Function Call, and what are Arguments 

Calling a function is the same as invoking one. When a function declaration contains parameters, the function call needs to send arguments. Arguments are values the func-tion requests within its parameter list. Function parameters are like local variables. They are valid within the scope of the function only.

## Programming Functions with No Parameters or No Return Values

If you delegate the task of saying “Hello World” to a function that does only that and nothing else, you could do it with one that doesn’t need any parameters. as one with return value of type void—that is, SayHello() doesn’t return a value. Consequently, in the function definition in Lines 11–14, there is no return statement.

## Function Parameters with Default Values

You can have multiple parameters with default values; however, these should all be at the tail end of the parameter list

## Recursion—Functions That Invoke Themselves

In certain cases, you can actually have a function call itself. Such a function is called a recursive function. Note that a recursive function should have a very clearly defined exit condition where it returns without invoking itself again

## Functions with Multiple Return Statements

You are not restricted to having only one return statement in your function definition. You can return from any point in the function, and multiple times if you want

## Overloading Functions

Functions with the same name and return type but with different parameters or set of parameters are said to be overloaded functions. Overloaded functions can be quite  useful in applications where a function with a particular name that produces a certain type of output might need to be invoked with different sets of parameters

## Passing Arguments by Reference

There are cases where you might need a function to work on a variable that modifies a value that is avail-able outside the function, too, say in the calling function. This is when you declare a parameter that takes an argument by reference. Don’t miss the ampersand (&) next to the second parameter result. This sign indicates to the compiler that the second argument should NOT be copied to the function; instead, it is a reference to the variable being passed. The return type has been changed to void as the function no longer sup-plies the area computed as a return value, rather as an output parameter by reference

## How Function Calls Are Handled by the Microprocessor

## Inline Functions

A regular function call is translated into a CALL instruction, which results in stack  operations and microprocessor execution shift to the function and so on. The overhead of performing an actual function call on this might be quite high for the amount of time spent actually executing GetPi(). This is why C++ compilers enable the programmer to declare such functions as inline. The keyword in question is inline used in Line 4. Compilers typically see this keyword as a request to place the contents of the function DoubleNum() directly where the func-tion has been invoked—in Line 16—which increases the execution speed of the code

## Automatic Return Type Deduction

You learned about the keyword auto in Lesson 3, “Using Variables, Declaring Constants.” It lets you leave variable type deduction to the compiler that does so on the basis of the initialization value assigned to the variable. Starting with C++14, the same applies also to functions. Instead of specifying the return type, you would use auto and let the compiler deduce the return type for you on the basis of return values you program. Functions that rely on automatic return type deduction need to be defined (i.e., implemented) before they’re invoked. This is because the compiler needs to know a function’s return type at the point where it is used. If such a function has multiple return statements, they need to all deduce to the same type. Recursive calls need to follow at least one return statement.
