# Pointers and References Explained

## What Is a Pointer?

---

A pointer is also a variable, one that stores an address in memory. 
Just the same way as a variable of type int is used to contain an integer value, a pointer variable is used to contain a memory address. 

A pointer is a variable, and like all variables a pointer occupies space in memory. 
What’s special about pointers is that the value contained in a pointer is interpreted as a memory address. So, a pointer is a special variable that points to a location in memory.

## Declaring a Pointer

---

A pointer being a variable needs to be declared, too. 
You normally declare a pointer to point to a specific value type. 
This would mean that the address contained in the pointer points to a location in the memory that holds an integer. 
You can also specify a pointer to a block of memory.

As is the case with most variables, unless you initialize a pointer it will contain a random value. 
You don’t want a random memory address to be accessed so you initialize a pointer to NULL. 
NULL is a value that can be checked against and one that cannot be a memory address.

```c++
type_name *variable_name = NULL
```

## Determining the Address of a Variable Using the Reference Operator (&)

---

Variables are tools the language provides for you to work with data in memory. 
If varName is a variable, &varName gives the address in memory where its value is placed.

```c++
int var;
cout << &var; // 0x7bfe1c
```

## Using Pointers to Store Addresses

---

You have learned how to declare pointers and how to determine the address of a variable.
You also know that pointers are variables that are used to hold memory addresses. 
It’s time to connect these dots and use pointers to store the addresses obtained using the referencing operator (&).

To store the address of this variable in a pointer, you would declare a pointer of the same type and initialize the pointer to the variable’s address using the referencing operator (&).

```c++
int var;
int *ptr = &var;
```

## Access Pointed Data Using the Dereference Operator (*)

---

You have a pointer to data, containing a valid address. How do you access that location? 

The answer lies in using the dereferencing operator (*). 
Essentially, if you have a valid pointer pData, use *pDatato access the value stored at the address contained in the pointer.

When the dereference operator (*) is used, the application essentially uses the address stored in the pointer as a starting point to fetch bytes from the memory that belong to that type of variable. 
Thus, the validity of the address contained in the pointer is absolutely essential.

```c++
int var = 12;
int *ptr = &var;
cout << *ptr; // 12 
```

## Dynamic Memory Allocation

---

To program an application that is able to optimally consume memory resources on the basis of the needs of the user, you need to use dynamic memory allocation. 
This enables you to allocate more when you need more memory and release memory that you have in excess. 

C++ supplies you two operators, new and delete, to help you better manage the memory consumption of your application. 
Pointers being variables that are used to contain memory addresses play a critical role in efficient dynamic memory allocation.

## Using Operators new and delete to Allocate and Release Memory Dynamically

---

You use new to allocate new memory blocks. 
The most frequently used form of new returns a pointer to the requested memory if successful or else throws an exception. 
When using new, you need to specify the data type for which the memory is being allocated.

You can also specify the number of elements you want to allocate that memory for.

Every allocation using new needs to be eventually released using an equal and opposite de-allocation via delete. 
This rule also applies when you request memory for multiple elements.

If you don’t release allocated memory after you stop using it, this memory remains reserved and allocated for your application.
This in turn reduces the amount of system memory available for applications to consume and possibly even makes the execution of your application slower. 
This is called a leak and should be avoided at all costs.

Operator delete cannot be invoked on any address contained in a pointer, rather only those that have been returned by new and only those that have not already been released by a delete.

Operators new and delete allocate memory from the free store. 
The free store is a memory abstraction in the form of a pool of memory where your application can allocate (that is, reserve) memory from and de-allocate (that is, release) memory to.

```c++
int *p = new int;
delete p;

int *p = new int[10];
delete[] p;
```

## Effect of Incrementing and Decrementing Operators (++ and --) on Pointers

---

A pointer contains a memory address. 
For example, the pointer to an integer contains 0x002EFB34 — the address where the integer is placed. 
The integer itself is 4 bytes long and hence occupies four places in memory from 0x002EFB34 to 0x002EFB37. 

Incrementing this pointer using operator (++) would not result in the pointer pointing to 0x002EFB35, for pointing to the middle of an integer would literally be **pointless**.
An increment or decrement operation on a pointer is interpreted by the compiler as your need to point to the next value in the block of memory, assuming it to be of the same type, and not to the next byte. 

Using ++ on this pointer is telling the compiler that you want it to point to the next consecutive integer. Hence, after incrementing, the pointer would then point to 0x002EFB38. 
Similarly, adding 2 to this pointer would result in it moving 2 integers ahead, that is 8 bytes ahead.

Decrementing pointers using operator -- demonstrates the same effect — the address value contained in the pointer is reduced by the sizeof the data type it is being pointed to.

## Using the const Keyword on Pointers

---

You learned that declaring a variable as const effectively ensures that value of the variable is fixed as the initialization value for the life of the variable. 
The value of a const-variable cannot be changed, and therefore it cannot be used as an l-value.

Pointers are variables, too, and hence the const keyword that is relevant to variables is relevant to pointers as well. 
However, pointers are a special kind of variable as they contain a memory address and are used to modify memory at that address. 

Thus, when it comes to pointers and constants, you have the following combinations: 

- **The address** contained in the pointer **is constant** and cannot be changed, yet **the data** at that address **can be changed**

```c++
// pointer to const int

const int *foo = new int;
*foo = 10; // expression must be a modifiable lvalue

int bar;
foo = &bar;
```

- **Data pointed to is constant** and cannot be changed, yet **the address contained in the pointer can be changed**

```c++
// const pointer to int
int *const foo = new int;
*foo = 10;

int bar;
foo = &bar; // expression must be a modifiable lvalue

```

- **Both the address contained** in the pointer **and the value being pointed** to are **constant** and cannot be changed (most restrictive variant)

```c++
const int *const foo = new int;
*foo = 10; // expression must be a modifiable lvalue

int bar;
foo = &bar; // expression must be a modifiable lvalue
```

These different forms of const are particularly useful when passing pointers to functions. 
Function parameters need to be declared to support the highest possible (restrictive) level of const-ness, to ensure that a function does not modify the pointed value when it is not supposed to. 
This will keep programmers of your application from making unwanted changes to pointer values or data.


## Passing Pointers to Functions

---

Pointers are an effective way to pass memory space that contains relevant data for functions to work on. 
The memory space shared can also return the result of an operation. 
When using a pointer with functions, it becomes important to ensure that the called function is only allowed to modify parameters that you want to let it modify, but not others. 

```c++
void function(int *p, int const *t, int * const r) {}
```

## Similarities between Arrays and Pointers

---

When you declare an **array of integers**:

You tell the compiler to allocate a **fixed amount of memory** to hold five integers and **give you a pointer** to the first element in that array that is identified by the name you assign the array variable.

Because **array variables are essentially pointers**, it should be possible to use the de-reference operator (*) that you have used with pointers to work with arrays. 
Similarly, it should be possible to use the array operator [] to work with pointers.

In other words, an array declaration is similar to a pointer that will be created to operate within a fixed range of memory.

It is important to remember that pointers that are allocated dynamically using operator new still need to be released using operator delete, even if you accessed data using syntax commonly used with static arrays. 
If you forget this, your application leaks memory, and that’s bad.

```c++
int arr1[] = {0, 1, 2, 3};

int *arr2 = new int[4]{0, 1, 2, 3};

cout << *(arr1 + 1) << ' ' << arr2[0]; // 1 0
```


## Common Programming Mistakes When Using Pointers

---

C++ enables you to allocate memory dynamically so that you can optimize and control the memory consumption of your application. 

Unlike newer languages such as C# and Java that are based on a runtime environment, C++ **does not feature an automatic garbage collector** that cleans up the memory your program has allocated but can’t use. 
This incredible control over managing memory resources using pointers is accompanied by a host of opportunities to make mistakes.

Memory Leaks are probably one of the most frequent problems with C++ applications: 
The longer they run, the larger the amount of memory they consume and the slower the system gets. 
This typically happens when the programmer did not ensure that his application releases memory allocated dynamically using new with a matching call to delete after the block of memory is no longer required.

When Pointers Don’t Point to Valid Memory Locations when you dereference a pointer using operator (*) to access the pointed value. 
You need to be sure that the pointer contains a valid memory location, or else your program will either crash or misbehave. 

Logical as this may seem, invalid pointers are quite a common reason for application crashes. 
Pointers can be invalid for a range of reasons, primarily due to poor programming and memory management.

## When Pointers Don’t Point to Valid Memory Locations

---

When you dereference a pointer using operator (*) to access the pointed value, you need to be sure that the pointer contains a valid memory location, or else your program will either crash or misbehave.

Logical as this may seem, invalid pointers are quite a common reason for application crashes. 
Pointers can be invalid for a range of reasons, primarily due to poor programming and memory management. 

## Dangling Pointers (Also Called Stray or Wild Pointers)

---

Note that any valid pointer is invalid after it has been released using delete. 
In other words, even a valid pointer would be invalid after the call to delete, and **should not be used after this point**.

To avoid this problem, some programmers follow the convention of assigning NULL to a pointer when initializing it or after it has been deleted. 
They also always check a pointer for validity (by comparing against NULL) before dereferencing it using operator (*).

## Checking Whether Allocation Request Using new Succeeded

---

There are applications that need to make requests for large chunks of memory (for example, database applications). 
Additionally, it is good to not simply assume that memory allocation requests will always be successful. 
C++ provides you with two possible methods to ensure that your pointer is valid before you use it. 

The default method uses exceptions where in unsuccessful allocations result in an exception of the type std::bad_alloc to be thrown. 
An exception results in the execution of your application being disrupted, and unless you have programmed an exception handler, your application ends rather unelegantly with an error message “unhandled exception.”

The exception handling try-catch construct thus helped the application in making a controlled exit after informing the user that a problem in memory allocation hampers normal execution. 

```c++
try 
{
    int *p = new int[10000000000];
}
catch(const bad_alloc& e) 
{
    cout << e.what();
}
```

For those who don’t want to rely on exceptions, there is a variant of new called new(nothrow). This variant does not throw an exception when allocation requests fail, rather it results in the operator new returning NULL. The pointer being assigned, therefore, can be checked for validity against NULL before it is used.

```c++
int *p = new(std::nothrow) int;
if (p == nullptr) {
    cout << "Allocation failed";
}
```

## What Is a Reference?

---

A reference is an alias for a variable. 
When you declare a reference, you need to initialize it to a variable. 
Thus, the reference variable is just a different way to access the data stored in the variable being referenced. 
You would declare a reference using the reference operator (&) as seen in the following statement:

```c++
VarType original = Value;
VarType& ReferenceVariable = original;
```

## What Makes References Useful?

---

References enable you to work with the memory location they are initialized to. 
This makes references particularly useful when programming functions. 

It would be ideal if we could avoid or eliminate the copy steps, enabling the function to work directly on the data in the caller’s stack. 
References enable you to do just that.

## Using Keyword const on References

---

You might need to have references that are not allowed to change the value of the original variable being aliased. 
Using const when declaring such references is the way to achieve that.

```c++
int foo = 10;
const int &bar = foo;
bar = 12; // Does not work

int var = 100;
bar = var; // This works just fine
```

Another example

```c++
int foo = 10;
int & const bar = foo;
bar = 12; // This works just fine

int var = 100;
bar = var; // Does not work
```

## Passing Arguments by Reference to Functions

---

One of the major advantages of references is that they allow a called function to work on parameters that have not been copied from the calling function, resulting in significant performance improvements. 
However, as the called function works using parameters directly on the stack of the calling function, it is often important to ensure that the called function cannot change the value of the variable at the caller’s end. 

References that are defined as const help you do just that. 
A const reference parameter cannot be used as an l-value, so any attempt at assigning to it causes a compilation failure.

```c++
void function(int &a, const int &b) {}
```