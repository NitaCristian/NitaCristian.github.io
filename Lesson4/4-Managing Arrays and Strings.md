# Managing Arrays and Strings

In this lesson, you learn: 
- What arrays are and how to declare and use them
- What strings are and how to use character arrays to make them

## What is an Array

An array is a group of elements forming a complete unit. The following are characteristics of an array: 

- An array is a collection of elements. 
- All elements contained in an array are of the same kind. 
- This collection forms a complete set.

## Declaring and Initializing a Static Array

Array declaration in C++ follows a simple syntax:

```c++    
ElementType ArrayName [constant_number of elements] = {optional initial values};
```
## How data is stored in an Array

Think of books placed on a shelf, one next to the other. Each book is an element in the array, and the rack is akin to the memory that has been reserved to store this collection of books.

Note that the memory space occupied by the array is comprised of five blocks, each of equal size, that is defined by the type of data to be held in the array, in this case integer. 

The amount of memory reserved by the compiler for the array myNumbers is hence sizeof(int) * 5. In general, the amount of memory reserved by the compiler for an array in bytes is

```c++
Bytes consumed by an array = sizeof(element_type) * Number of Elements
```

## Accessing Data Store in an Array

Elements in an array can be accessed using their zero-based index. These indexes are called zero-based because the first element in an array is at index 0. 

When asked to access element at index N, the compiler uses the memory address of the first element (positioned at index zero) as the starting point and then skips N elements by adding the offset computed as N * sizeof(element) to reach the address containing the (N+1)th element. 

The C++ compiler does not check if the index is within the actual defined bounds of the array. You can try fetching the element at index 1001 in an array of only 10 elements, putting the security and stability of your program at risk.

## Declaring and Initializing Multidimensional Arrays

C++ enables you to declare multidimensional arrays by indicating the number of elements you want to reserve in each dimension.

```c++
type name [][];
```

When you need to access an integer in this array, you would need to use a first subscript to address the array where the integer is and the second subscript to address that integer in this array.

## C-Style Character Strings

C-style strings are a special case of an array of characters. 

The last character in the array is a null character '\0'. This is also called the string-terminating character because it tells the compiler that the string has ended. When you embed a string literal in your code, the compilerdoes the job of adding a '\0' after it.

```c++
char sayHello[] = {'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '\0'};
char sayHello[] = "Hello World";
```