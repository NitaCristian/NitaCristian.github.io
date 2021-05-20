# Operator Types and Operator Overloading

## What Are Operators in C++?

On a syntactical level, there is very little that differentiates an operator from a function. 
An operator declaration looks quite like a function declaration. 

The operator_symbol in this case could be any of the several operator types that the programmer can define. 
The operands help the compiler distinguish one operator from another.
The operator-based mechanism facilitates consumption by supplying ease of use and intuitiveness. 

On a broad level, operators in C++ can be classified into two types:
- unary operators
- binary operators

## Unary Operators

Operators that function on a single operand are called unary operators. 

A unary operator that is implemented in the global namespace or as a static member function of a class uses the following structure:
```c++
return_type operator operator_type (parameter_type){    
    // ... implementation
    }
```
A unary operator that is a (non-static) member of a class has a similar structure but is lacking in parameters, because the single parameter that it works upon is the instance of the class itself (*this):
```c++
return_type operator operator_type (){    
    // ... implementation
    }
```
## Types of Unary Operators
The unary operators that can be overloaded (or redefined) are shown in Table  
| Operator             | Name                        |
| -------------------- | --------------------------- |
| ++                   | Increment                   |
| --                   | Decrement                   |
| *                    | Pointer dereference         |
| ->                   | Member selection            |
| !                    | Logical NOT                 |
| &                    | Address-of                  |
| ~                    | One’s complement            |
| +                    | Unary plus                  |
| -                    | Unary negation              |
| Conversion operators | Conversion into other types |

## Programming a Unary Increment/Decrement Operator

A unary prefix increment operator (++) can be programmed using the following syntax within the class declaration: 
```c++
// Unary increment operator (prefix)
Date& operator ++ (){    
    // operator implementation code    
    return *this;
    }
```

The postfix increment operator (++), on the other hand, has a different return type and an input parameter (that is not always used):
```c++
Date operator ++ (int){   
    // Store a copy of the current state of the object, before incrementing day   
    Date copy (*this);  

    // increment implementation code    

    // Return state before increment (because, postfix)   
    return copy;
    }
```
The prefix and postfix decrement operators have a similar syntax as the increment  operators, just that the declaration would contain a -- where you see a ++. 

## Programming Conversion Operators

This operator opens up new possibilities toward consuming class Date. It allows you to even assign an instance of a Date directly to a string:string strHoliday (holiday);
```c++
strHoliday = Date(11, 11, 2016); 
```
Note that such assignments cause implicit conversions, that is, the compiler has used the available conversion operator (in this case const char*) thereby permitting unintended assignments that get compiled without error. 

To avoid implicit conversions, use keyword explicit at the beginning of an operator declaration, as follows:
```c++
explicit operator const char*(){   // conversion code here}
```

Program as many operators as you think your class would be used with. If your application needs an integer representation of a Date, then you may program it as follows:
```c++
explicit operator int(){   return day + month + year;}
```
This would allow an instance of Date to be used or transacted as an integer:
```c++
FuncTakesInt(static_cast<int>(Date(12, 25, 2016)));
```

## Binary Operators
Operators that function on two operands are called binary operators. 

The definition of a binary operator implemented as a global function or a static member function is the following:
```c++
return_type operator_type (parameter1, parameter2);
```
The definition of a binary operator implemented as a class member isreturn_type operator_type (parameter); The reason the class member version of a binary operator accepts only one parameter is that the second parameter is usually derived from the attributes of the class itself.

## Types of Binary Operators

Table 12.2 contains binary operators that can be overloaded or redefined in your C++ application

| Operator | Name                                            |
| -------- | ----------------------------------------------- |
| ,        | Comma                                           |
| !=       | Inequality                                      |
| %        | Modulus                                         |
| %=       | Modulus/assignment                              |
| &        | Bitwise AND                                     |
| &&       | Logical AND                                     |
| &=       | Bitwise AND/assignment                          |
| \*       | Multiplication                                  |
| *=       | Multiplication/assignment                       |
| +        | Addition                                        |
| +=       | Addition/assignment                             |
| -        | Subtraction                                     |
| -=       | Subtraction/assignment                          |
| ->*      | Pointer-to-member selection                     |
| /        | Division                                        |
| /=       | Division/assignment                             |
| <        | Less than                                       |
| <<       | Left shift                                      |
| <<=      | Left shift/assignment                           |
| <=       | Less than or equal to                           |
| =        | Assignment, Copy Assignment and Move Assignment |
| ==       | Equality                                        |
| >        | Greater than                                    |
| >=       | Greater than or equal to                        |
| >>       | Right shift                                     |
| >>=      | Right shift/assignment                          |
| ^        | Exclusive OR                                    |
| ^=       | Exclusive OR/assignment                         |
| \|       | Bitwise inclusive OR                            |
| \|=      | Bitwise inclusive OR/assignment                 |
| \|\|     | Logical OR                                      |
| []       | Subscript operator                              |


## Programming Binary Addition (a+b) and Subtraction (a-b) Operators

Similar to the increment/decrement operators, the binary plus and minus, when defined, enable you to add or subtract the value of a supported data type from an object of the class that implements these operators. 

```c++
Date operator + (int daysToAdd) // binary addition    
{        
    Date newDate (month, day + daysToAdd, year);
    return newDate;
}   
Date operator - (int daysToSub) // binary subtraction
{
    return Date(month, day - daysToSub, year);
}
```
## Implementing Addition Assignment (+=) and Subtraction Assignment (-=) Operators

The addition assignment operators allow syntax such as “a += b;” that allows the  programmer to increment the value of an object a by an amount b. In doing this, the utility of the addition assignment operator is that it can be overloaded to accept different types of parameter b. Listing 12.5 that follows allows you to add an integer value to a Date object.
```c++
void operator+= (int daysToAdd) // addition assignment13:    {14:        day += daysToAdd;15:    }16: 17:    void operator-= (int daysToSub) // subtraction assignment18:    {19:        day -= daysToSub;20:    }
```
The multiplication assignment *=, division assignment /=, modulus assignment %=, subtraction assignment -=, left-shift assignment <<=, right-shift assignment >>=, XOR assignment ^=, bitwise inclusive OR assignment |=, and bitwise AND assignment &= operators have a syntax similar to the addition assignment operator shown in Listing 12.5.Although the ultimate objective of overloading operators is mak-ing the class easy and intuitive to use, there are many situa-tions where implementing an operator might not make sense. For example, our calendar class Date has absolutely no use for a bitwise AND assignment &= operator. No user of this class should ever expect (or even think of) getting useful results from an operation such as greatDay &= 20;

## Overloading Equality (==) and Inequality (!=) Operators

What do you expect when the user of class Date compares one instance to another:

```c+
if (date1 == date2) {    
    // Do something
} else {    
    // Do something else
}
```

In the absence of an equality operator ==, the compiler simply performs a binary comparison of the two objects and returns true when they are exactly identical. This binary comparison will work for instances of classes containing simple data types (like the Dateclass as of now), but it will not work if the class in question has a non-static string mem-ber (char*), such as MyString in Listing 9.9. When two instances of class MyStringare compared, a binary comparison of the member attributes would actually compare the member string pointer values (MyString::buffer). These would not be equal even when the strings are identical in content. Comparisons involving two instances of MyString would return false consistently. You solve this problem by defining compari-son operators. A generic expression of the equality operator is the following:bool operator== (const ClassType& compareTo){   // comparison code here, return true if equal else false}

The inequality operator can reuse the equality operator:

```c++
bool operator!= (const ClassType& compareTo){   
    // comparison code here, return true if inequal else false
}
```

## Overloading <, >, <=, and >= Operators

The code in Listing 12.6 made the Date class intelligent enough to be able to tell whether two Date objects are equal or unequal. You need to program the less-than (<), greater-than (>), less-than-equals (<=), and greater-than-equals (>=) operators to enable conditional checking akin to the following

```c++
bool operator<= (const Date& compareTo) {
    if (this->operator== (compareTo))
        return true;
    else
        return this->operator< (compareTo);
}

bool operator > (const Date& compareTo) {
    return !(this->operator<= (compareTo));
}
```

## Overloading Copy Assignment Operator (=)

There are times when you want to assign the contents of an instance of a class to another, like this:

```c++
Date holiday(12, 25, 2016);
Date anotherHoliday(1, 1, 2017);
anotherHoliday = holiday; // uses copy assignment operator
```

This assignment invokes the default copy assignment operator that the compiler has built in to your class when you have not supplied one. 
Depending on the nature of your class, the default copy assignment operator might be inadequate, especially if your class is managing a resource that will not be copied. 

This problem with the default copy assignment operator is similar to the one with the default copy constructor discussed in Lesson 9. 
To ensure deep copies, as with the copy constructor, you need to specify an accompanying copy assignment operator:

```c++
ClassType& operator= (const ClassType& copySource) {   
    if(this != &copySource)  // protection against copy into self   
    {
        // copy assignment operator implementation   
    }   
    return *this;
}
```

Deep copies are important if your class encapsulates a raw pointer, such as class MyString shown in Listing 9.9. 
To ensure deep copy during assignments, define a copy assignment operator as shown in Listing 12.8.

## Subscript Operator ([])

The operator that allow array-style [] access to a class is called subscript operator. The typical syntax of a subscript operator is:return_type& operator [] (subscript_type& subscript);So, when creating a class such as MyString that encapsulates a dynamic array class of characters in a char* buffer, a subscript operator makes it really easy to randomly access individual characters in the buffer

/\*const*/ char& operator [] (int index) /\*const*/   {


Using keyword const is important even when programming operators. Note how Listing 12.9 has restricted the return value of subscript operator [] to const char&. The program works and compiles even without the const keywords, yet the reason you have it there is to avoid this code:MyString sayHello("Hello World");sayHello[2] = 'k'; //error: operator[] is constBy using const you are protecting internal member MyString::buffer from direct modifications from the outside via operator []. In addition to classifying the return value as const, you even have restricted the operator function type to const to ensure that it cannot modify the class’s member attributes. In general, use the maximum possible const restriction to avoid unintentional data modifications and increase protection of the class’s member attributes

You can, however, implement two subscript operators—one as a const function and the other as a non-const one:char& operator [] (int index);  // use to write / change buffer at indexchar& operator [] (int index) const; // used only for accessing char at index

## Function Operator ()

The operator () that make objects behave like a function is called a function  operator. 

They find application in the standard template library (STL) and are typically used in STL algorithms. 
Their usage can include making decisions; such function objects are typically called unary or binary predicates, depending on the number of operands they work on. Listing 12.10 analyzes a really simple function object so you can first  understand what gives them such an intriguing name!