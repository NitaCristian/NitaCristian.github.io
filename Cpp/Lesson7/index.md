# Organising Code with Functons

## The Need for Functions

---

Another way is to break this application into logical blocks. 
Compartmentalizing the computation of a value into different functions can potentially help reuse as the functions can be invoked repeatedly when required.

## What is a Function Prototype

---

The function prototype basically tells what a function is called, the list of parameters the function accepts, and the return type of the function.
Without the function prototype the compiler wouldn’t know what the names of the functions are when called. 
The compiler then linkes the function call to its implementation and ensuring that the program execution actually triggers them.

A function can have multiple parameters separated by commas, but it can have only one return type. 
When programming a function that does not need to return any value, specify the return type as void.

```c++
type functionName(type1 parameter1, type2 parameter2);
```

## What is a Function Definition

---

The implementation of a function is called the definition. 
A function definition is always comprised of a statement block. 
A return statement is necessary unless the function is declared with return type void. 
The statement block contains statements within open and closed braces {...} that are executed when the function is called.

```c++
type functionName(type1 parameter1, type2 parameter2)
{
    // code here
    return type;
}
```

## What is a Function Call, and what are Arguments 

---

Calling a function is the same as invoking one. 
When a function declaration contains parameters, the function call needs to send arguments. 
Arguments are values the function requests within its parameter list. 
Function parameters are like local variables and are valid within the scope of the function only.

```c++
int main()
{
    functionCall(parameter1, parameter2);
}
```

## Programming Functions with No Parameters or No Return Values

---

If you delegate the task of saying “Hello World” to a function that does only that and nothing else, you could do it with one that doesn’t need any parameters. 
As one with return value of type void doesn’t return a value. 

## Function Parameters with Default Values

---

You can have multiple parameters with default values.
However, these should all be at the tail end of the parameter list.

```c++
void function (int a, int b = 0, int c = 10) {}
// can be called without the b parameter: function(12);
```

## Recursion—Functions That Invoke Themselves

---

In certain cases, you can actually have a function call itself. 
Such a function is called a recursive function. 
Note that a recursive function should have a very clearly defined exit condition where it returns without invoking itself again.

```c++
void factorial(int n)
{
    if (n == 0)
        return 1;
    return n * factorial(n - 1);
}
```

## Functions with Multiple Return Statements

---

You are not restricted to having only one return statement in your function definition. 
You can return from any point in the function, and multiple times if you want.

```c++
void function()
{
    if (condition1) {
        return 1;
    }
    if (condition2) {
        return 2;
    }
    if (condition3) {
        return 3;
    }
}
```

## Overloading Functions

---

Functions with the same name and return type but with different parameters or set of parameters are said to be overloaded functions. 
Overloaded functions can be quite useful in applications where a function with a particular name that produces a certain type of output might need to be invoked with different sets of parameters.

```c++
void func() {
    
}
void func(int a, int b) {

}
```

## Passing Arguments by Reference

---

There are cases where you might need a function to work on a variable that modifies a value that is available outside the function. 
This is when you declare a parameter that takes an argument by reference. 

Don’t miss the ampersand (&) next to the second parameter result. 
This sign indicates to the compiler that the second argument should NOT be copied to the function, and instead it is a reference to the variable being passed. 


```c++
void func(int foo, float &bar) {

}
```

## How Function Calls Are Handled by the Microprocessor

---

A function call essentially means that the microprocessor jumps to executing the next instruction belonging to the called function at a nonsequential memory location. 
After it is done with executing the instructions in the function, it returns to where it left off. 

To implement this logic, the compiler converts your function call into a CALL instruction for the microprocessor. 
This instruction is accompanied by the address in memory the next instruction needs to be taken from.
When the microprocessor encounters CALL, it saves the position of the instruction to be executed after the function call on the stack and jumps to the memory location contained in the CALL instruction.

### Understanding the Stack

---

The stack is a Last-In-First-Out memory structure, quite like a stack of plates where you pick the plate on top, which was the last one to be placed on the stack. 

Putting data onto the stack is called a push operation. 
Getting data out of the stack is called a pop operation. 

As the stack grows upward, the stack pointer always increments as it grows and points to the top of the stack. 

![The Stack](https://upload.wikimedia.org/wikipedia/commons/d/d3/Call_stack_layout.svg)

---

The nature of the stack makes it optimal for handling function calls. 
When a function is called, all local variables are instantiated on the stack. 
When the function ends, they’re simply popped off it, and the stack pointer returns to where it originally was.

This memory location contains instructions belonging to the function. 
The microprocessor executes them until it reaches the RET statement (the microprocessor’s code for return programmed by you). 

The RET statement results in the microprocessor popping that address from the stack stored during the CALL instruction. 
This address contains the location in the calling function where the execution needs to continue from.
Thus, the microprocessor is back to the caller and continues where it left off.

## Inline Functions

---

A regular function call is translated into a CALL instruction, which results in stack operations and microprocessor execution shift to the function and so on. 
The overhead of performing an actual function call might be quite high for the amount of time spent actually executing it. 

This is why C++ compilers enable the programmer to declare such functions as inline. 
Compilers typically see this keyword as a request to place the contents of the function directly where the function has been invoked which increases the execution speed of the code.

![Inline Function Example](https://simplesnippets.tech/wp-content/uploads/2018/03/inline-functions-in-c.jpg)