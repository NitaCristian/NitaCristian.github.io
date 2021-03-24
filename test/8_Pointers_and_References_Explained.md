# Pointers and References Explained

In this lesson, you find out ■What pointers are ■What the free store is ■How to use operators new and delete to allocate and free memory ■How to write stable applications using pointers and dynamic allocation ■What references are ■Differences between pointers and references ■When to use a pointer and when to use references

## What Is a Pointer?

A pointer is also a variable—one that stores an address in memory. Just the same way as a variable of type int is used to contain an integer value, a pointer variable is used to contain a memory address. a pointer is a variable, and like all variables a pointer occupies space in memory (in the case of Figure 8.1, at address 0x101). What’s special about pointers is that the value contained in a pointer (in this case, 0x558) is interpreted as a memory address. So, a pointer is a special variable that points to a location in memory

## Declaring a Pointer

A pointer being a variable needs to be declared, too. You normally declare a pointer to point to a specific value type (for example, int). This would mean that the address  contained in the pointer points to a location in the memory that holds an integer. You can also specify a pointer to a block of memory (also called a void pointer).

As is the case with most variables, unless you initialize a pointer it will contain a  random value. You don’t want a random memory address to be accessed so you initialize a pointer to NULL. NULL is a value that can be checked against and one that cannot be a memory address

## Determining the Address of a Variable Using the Reference Operator (&)
Variables are tools the language provides for you to work with data in memory. If varName is a variable, &varName gives the address in memory where its value is placed

## Using Pointers to Store Addresses

You have learned how to declare pointers and how to determine the address of a  variable. You also know that pointers are variables that are used to hold memory addresses. It’s time to connect these dots and use pointers to store the addresses obtained using the  referencing operator (&)

To store the address of this variable in a pointer, you would declare a pointer to the same Type and initialize the pointer to the variable’s address using the referencing operator (&

## Access Pointed Data Using the Dereference Operator (*)

You have a pointer to data, containing a valid address. How do you access that  location—that is, get or set data at that location? The answer lies in using the dereferencing operator (*). Essentially, if you have a valid pointer pData, use *pDatato access the value stored at the address contained in the pointer.

When the dereference operator (*) is used, the application essentially uses the address stored in the pointer as a starting point to fetch 4 bytes from the memory that belong to an integer (as this is a pointer to integers and sizeof(int) is 4). Thus, the validity of the address contained in the pointer is absolutely essential

## Dynamic Memory Allocation

To program an application that is able to optimally consume memory resources on the basis of the needs of the user, you need to use dynamic memory allocation. This enables you to allocate more when you need more memory and release memory that you have in excess. C++ supplies you two operators, new and delete, to help you better manage the memory consumption of your application. Pointers being variables that are used to  contain memory addresses play a critical role in efficient dynamic memory allocation

## Using Operators new and delete to Allocate and Release Memory Dynamically

You use new to allocate new memory blocks. The most frequently used form of newreturns a pointer to the requested memory if successful or else throws an exception. When using new, you need to specify the data type for which the memory is being  allocated

You can also specify the number of elements you want to allocate that memory for (when you need to allocate memory for more than one element

Every allocation using new needs to be eventually released using an equal and opposite de-allocation via delete. This rule also applies when you request memory for multiple elements

If you don’t release allocated memory after you stop using it, this memory remains reserved and allocated for your application. This in turn reduces the amount of system memory available for applications to consume and possibly even makes the execution of your application slower. This is called a leak and should be avoided at all costs

Operator delete cannot be invoked on any address contained in a pointer, rather only those that have been returned by new and only those that have not already been released by a delete

Operators new and delete allocate memory from the free store. The free store is a memory abstraction in the form of a pool of memory where your application can allocate (that is, reserve) memory from and de-allocate (that is, release) memory to.


## Effect of Incrementing and Decrementing Operators (++ and --) on Pointers

A pointer contains a memory address. For example, the pointer to an integer in Listing 8.3 contains 0x002EFB34—the address where the integer is placed. The  integer itself is 4 bytes long and hence occupies four places in memory from 0x002EFB34 to 0x002EFB37. Incrementing this pointer using operator (++) would not result in the pointer pointing to 0x002EFB35, for pointing to the middle of an integer would literally be pointless.An increment or decrement operation on a pointer is interpreted by the compiler as your need to point to the next value in the block of memory, assuming it to be of the same type, and not to the next byte (unless the value type is 1 byte large, like a char, for inst a nce).So, incrementing a pointer such as pointsToInt seen in Listing 8.3 results in it being incremented by 4 bytes, which is the sizeof an int. Using ++ on this pointer is telling the compiler that you want it to point to the next consecutive integer. Hence, after incrementing, the pointer would then point to 0x002EFB38. Similarly, adding 2 to this pointer would result in it moving 2 integers ahead, that is 8 bytes ahead

Decrementing pointers using operator (--) demonstrates the same effect—the address value contained in the pointer is reduced by the sizeof the data type it is being pointed to.



What Happens When You Increment or Decrement a Pointer?The address contained in the pointer is incremented or decremented by the sizeofthe type being pointed to (and not necessarily a byte). This way, the compiler ensures that the pointer never points to the middle or end of data placed in the memory; it only points to the beginning.If a pointer has been declared asType* pType = Address;++pType would mean that pType contains (and hence points to) Address+ sizeof(Type)

## Using the const Keyword on Pointers

In Lesson 3, you learned that declaring a variable as const effectively ensures that value of the variable is fixed as the initialization value for the life of the variable. The value of a const-variable cannot be changed, and therefore it cannot be used as an l-value.Pointers are variables, too, and hence the const keyword that is relevant to variables is relevant to pointers as well. However, pointers are a special kind of variable as they contain a memory address and are used to modify memory at that address. Thus, when it comes to pointers and constants, you have the following combinations: ■The address contained in the pointer is constant and cannot be changed, yet the dataat that address can be changed:int daysInMonth = 30;int* const pDaysInMonth = &daysInMonth;*pDaysInMonth = 31; // OK! Data pointed to can be changedint daysInLunarMonth = 28;pDaysInMonth = &daysInLunarMonth; // Not OK! Cannot change address!
ptg18655082194LESSON 8:  Pointers and References Explained ■Data pointed to is constant and cannot be changed, yet the address contained in thepointer can be changed—that is, the pointer can also point elsewhere:int hoursInDay = 24;const int* pointsToInt = &hoursInDay;int monthsInYear = 12;pointsToInt = &monthsInYear; // OK!*pointsToInt = 13; // Not OK! Cannot change data being pointed toint* newPointer = pointsToInt; // Not OK! Cannot assign const to non-const ■Both the address contained in the pointer and the value being pointed to are constant and cannot be changed (most restrictive variant):int hoursInDay = 24;const int* const pHoursInDay = &hoursInDay;*pHoursInDay = 25; // Not OK! Cannot change data being pointed toint daysInMonth = 30;pHoursInDay = &daysInMonth; // Not OK! Cannot change addressThese different forms of const are particularly useful when passing pointers to functions. Function parameters need to be declared to support the highest possible (restrictive) level of const-ness, to ensure that a function does not modify the pointed value when it is not supposed to. This will keep programmers of your application from making unwanted changes to pointer values or data.


## Passing Pointers to Functions

Pointers are an effective way to pass memory space that contains relevant data for functions to work on. The memory space shared can also return the result of an operation. When using a pointer with functions, it becomes important to ensure that the called function is only allowed to modify parameters that you want to let it modify, but not others. For example, a function that calculates the area of a circle given radius sent as a pointer should not be allowed to modify the radius. This is where you use the keyword const to control what a function is allowed to modify and what it isn’t 

## Similarities between Arrays and Pointers

Don’t you think that the sample in Listing 8.9 where the pointer was incremented using zero-based index to access the next integer in the memory has too many similarities to the manner in which arrays are indexed? When you declare an array of integers:

You tell the compiler to allocate a fixed amount of memory to hold five integers and give you a pointer to the first element in that array that is identified by the name you assign the array variable. In other words, myNumbers is a pointer to the first element myNumbers[0]. Listing 8.11 highlights this correlation

This simple program demonstrates that an array variable can be assigned to a pointer of the same type as seen in Line 9, essentially confirming that an array is akin to a pointer. Lines 12 and 15 demonstrate that the address stored in the pointer is the same as the address where the first element in the array (at index 0) is placed in memory. This  program demonstrates that an array is a pointer to the first element in it.Should you need to access the second element via the expression myNumbers[1], you can also access the same using the pointer pointToNums with the syntax * (pointToNums + 1). The third element is accessed in the static array using  myNumbers[2], whereas thethird element is accessed in the dynamic array using the syntax *(pointToNums + 2)

Because array variables are essentially pointers, it should be possible to use the  de-reference operator (*) that you have used with pointers to work with arrays. Similarly, it should be possible to use the array operator ([]) to work with pointers as demonstrated by Listing 8.12

Thus, what this program demonstrates is that both array myNumbers and pointer pointToNums actually exhibit pointer behavior. In other words, an array declaration is similar to a pointer that will be created to operate within a fixed range of memory. Note that one can assign an array to a pointer as in Line 11, but one cannot assign a pointer to an array. This is because by its very nature, an array like myNumbers is static and cannot be used as an l-value. myNumbers cannot be modified.

It is important to remember that pointers that are allocated dynamically using operator new still need to be released using operator delete, even if you accessed data using syntax com-monly used with static arrays.If you forget this, your application leaks memory, and that’s bad.


## Common Programming Mistakes When Using Pointers

C++ enables you to allocate memory dynamically so that you can optimize and  control the memory consumption of your application. Unlike newer languages such as C# and Java that are based on a runtime environment, C++ does not feature an automatic  garbage collector that cleans up the memory your program has allocated but can’t use. This incredible control over managing memory resources using pointers is accompanied by a host of opportunities to make mistakes.Memory LeaksThis is probably one of the most frequent problems with C++ applications: The longer they run, the larger the amount of memory they consume and the slower the system gets. This typically happens when the programmer did not ensure that his application releases memory allocated dynamically using new with a matching call to delete after the block of memory is no longer required.

pointToNums = new int[10]; // leaks the previously allocated memoryWhen Pointers Don’t Point to Valid Memory LocationsWhen you dereference a pointer using operator (*) to access the pointed value, you need to be sure that the pointer contains a valid memory location, or else your program will either crash or misbehave. Logical as this may seem, invalid pointers are quite a common reason for application crashes. Pointers can be invalid for a range of reasons,  primarily due to poor programming and memory management. A typical case where a pointer might be invalid is shown in Listing 8.13.


## When Pointers Don’t Point to Valid Memory Locations

When you dereference a pointer using operator (*) to access the pointed value, you need to be sure that the pointer contains a valid memory location, or else your program will either crash or misbehave. Logical as this may seem, invalid pointers are quite a common reason for application crashes. Pointers can be invalid for a range of reasons,  primarily due to poor programming and memory management. A typical case where a pointer might be invalid is shown in Listing 8.13. There are many problems in the program, some already commented in the code. Note how memory is allocated and assigned to the pointer in Line 14, which is conditionally executed when the user presses ‘y’ for yes. For all other inputs of the user, this if block is not executed, and the pointer isSunny remains invalid. Thus, when the user presses ‘n’ in the second run, the application crashes because isSunny contains an invalid memory address and dereferencing an invalid pointer in Line 19 causes problems.Similarly, invoking delete on this pointer, which has not been allocated for using newas seen in Line 22, is equally wrong. Note that if you have a copy of a pointer, you need to be calling delete on only one of them (you also need to avoid having copies of a pointer floating around).A better (safer, more stable) version of this program would be one where pointers are ini-tialized, used where their values are valid, and released only once but only when valid

## Dangling Pointers (Also Called Stray or Wild Pointers)

Note that any valid pointer is invalid after it has been released using delete. In other words, even a valid pointer isSunny in Listing 8.13 would be invalid after the call to delete at Line 22, and should not be used after this point.To avoid this problem, some programmers follow the convention of assigning NULL to a pointer when initializing it or after it has been deleted. They also always check a pointer for validity (by comparing against NULL) before dereferencing it using operator (*).
Minor restructuring has made the code safer for all combinations of user input. Note how the pointer is initialized to a valid memory address during declaration in Line 10. We used const to ensure that while the data being pointed to can be modified, the pointer value (address contained) remains fixed and unchangeable. We also initialized the Boolean value being pointed to, to true in Line 11. This data initialization doesn’t add to the stability of the program but to the reliability of the output. These steps ensure that the pointer is valid for the rest of the program, and it is safely deleted in Line 19, for every combination of user input.

## Checking Whether Allocation Request Using new Succeeded

In our code to this point, we have assumed that new will return a valid pointer to a block of memory. Indeed, new usually succeeds unless the application asks for an unusually large amount of memory or if the system is in such a critical state that it has no memory to spare. There are applications that need to make requests for large chunks of memory (for example, database applications). Additionally, it is good to not simply assume that memory allocation requests will always be successful. C++ provides you with two  possible methods to ensure that your pointer is valid before you use it. The default method—one that we have been using thus far—uses exceptions wherein unsuccessful allocations result in an exception of the type std::bad_alloc to be thrown. An excep-tion results in the execution of your application being disrupted, and unless you have programmed an exception handler, your application ends rather unelegantly with an error message “unhandled exception.”Exceptions are explained in detail in Lesson 28, “Exception Handling.” Listing 8.15 gives you a sneak peek of how exception handling can be used to check for failed memory allocation requests. Don’t be too worried if exception handling seems overwhelming at this stage—it’s mentioned here only for the sake of completeness of the topic of memory allocations. You may revisit this sample again, after covering Lesson 28

This program might execute differently on your computer. My environment could not successfully allocate the requested space for 536870911 integers! Had I not programmed an exception handler (the catch block you see in Lines 14–17), the program would have ended disgracefully. You may experiment with the behavior of the program in the absence of the exception handler by commenting Lines 6, 7, and 13–17. When using debug mode binaries built using Microsoft Visual Studio, program execution results in output as shown in Figure 8.2

The exception handling try-catch construct thus helped the application in making a controlled exit after informing the user that a problem in memory allocation hampers normal execution. For those who don’t want to rely on exceptions, there is a variant of new called new(nothrow). This variant does not throw an exception when allocation requests fail, rather it results in the operator new returning NULL. The pointer being assigned,  therefore, can be checked for validity against NULL before it is used. See Listing 8.16.

## What Is a Reference?

A reference is an alias for a variable. When you declare a reference, you need to  initialize it to a variable. Thus, the reference variable is just a different way to access the data stored in the variable being referenced.You would declare a reference using the reference operator (&) as seen in the following statement:VarType original = Value;VarType& ReferenceVariable = original;

The output demonstrates that references, irrespective of whether they’re initialized to the original variable as seen in Line 9 or to a reference as seen in Line 12, address the same location in memory where the original is contained. Thus, references are true aliases—that is, just another name for original. Displaying the value using ref2 in Line 14 gets the same value as the original in Line 6 because ref2 aliases originaland is  contained in the same location in memory.

## What Makes References Useful?

References enable you to work with the memory location they are initialized to. This makes references particularly useful when programming functions. As you learned in Lesson 7, “Organizing Code with Functions,” a typical function is declared like this:ReturnType DoSomething(Type parameter);Function DoSomething() is invoked like this:ReturnType Result = DoSomething(argument); // function call

The preceding code would result in the argument being copied into Parameter, which is then used by the function DoSomething(). This copying step can be quite an overhead if the argument in question consumes a lot of memory. Similarly, when DoSomething()returns a value, it is copied again into Result. It would be ideal if we could avoid or eliminate the copy steps, enabling the function to work directly on the data in the caller’s stack. References enable you to do just that.A version of the function without the copy step looks like this:ReturnType DoSomething(Type& parameter); // note the reference&This function would be invoked as the following:ReturnType Result = DoSomething(argument);As the argument is being passed by reference, Parameter is not a copy of  argumentrather an alias of the latter, much like Ref in Listing 8.17. Additionally, a function that accepts a parameter as a reference can optionally return values using reference  parameters. See Listing 8.18 to understand how functions can use references instead of return values

The function that performs the operation of squaring is in Lines 3–6. Note how it accepts the number to be squared as a parameter by reference and returns the result in the same. Had you forgotten to mark the parameter number as a reference (&), the result would not reach the calling function main() as GetSquare() would then perform its operations on a local copy of number and that would be destroyed when the function exits. Using  references, you ensure that GetSquare() is operating in the same address space where number in main() is defined. Thus, the result of the operation is available in main()even after the function GetSquare() has exited.In this sample, the input parameter containing the number sent by the user has been modified. If you need both values, the original and the square, you can have the function accept two parameters: one that contains the input and the other that supplies the square.

## Using Keyword const on References

You might need to have references that are not allowed to change the value of the  original variable being aliased. Using const when declaring such references is the way to achieve that:int original = 30;const int& constRef = original;constRef = 40; // Not allowed: constRef can’t change value in originalint& ref2 = constRef; // Not allowed: ref2 is not constconst int& constRef2 = constRef; // OK

## Passing Arguments by Reference to Functions

One of the major advantages of references is that they allow a called function to work on parameters that have not been copied from the calling function, resulting in significant performance improvements. However, as the called function works using parameters directly on the stack of the calling function, it is often important to ensure that the called function cannot change the value of the variable at the caller’s end. References that are defined as const help you do just that, as demonstrated by Listing 8.19. A const reference parameter cannot be used as an l-value, so any attempt at assigning to it causes a compilation failure.

n contrast to the program in Listing 8.18 where the variable that sent the number to be squared also held the result, this one uses two variables—one to send the number to be squared and the other to hold the result of the operation. To ensure that the number being sent cannot be modified, it has been marked as a const reference using the const keyword, as shown in Line 3. This automatically makes parameter number an input parameter—one whose value cannot be modified.As an experiment, you may modify Line 5 to return the square using the same logic shown in the Listing 8.18:number *= number;You are certain to face a compilation error that tells you that a const value cannot be modified. Thus, const references indicate that a parameter is an input param-eter and ensure that its value cannot be modified. It might seem trivial at first, but in a  multiprogrammer environment where the person writing the first version might be  different from the one enhancing it, using const references will add to the quality of the program.