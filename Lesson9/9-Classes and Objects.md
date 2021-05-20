# Classes and Objects

## The Concept of Classes and Objects

---

To model an object in a program, you need a construct that enables you to group within it the attributes that define an object (data) and the activities that object can perform (functions) using the available attributes. This construct is the class.

Example:

Imagine you are writing a program that models a human being. 
This human being needs to have an identity: a name, date of birth, place of birth, and gender — information that makes him or her unique. 
Additionally, the human can perform certain functions, such as talk and introduce him, among others. 


## Declaring a Class

---

You declare a class using the keyword class followed by the name of the class, followed by a statement block {...} that encloses a set of member attributes and member functions within curly braces, and finally terminated by a semicolon ‘;’.

A declaration of a class tells the compiler about the class and its properties. 
Declaration of a class alone does not make a difference to the execution of a program, as the class needs to be used just the same way as a function would need to be invoked.

```c++
class Object
{
    // Attributes
    // Methods
};
```

Thus C++ has provided you with a powerful way to create your own data type that allows you to encapsulate attributes and functions that work using those. 
All attributes of a class and all functions declared within it are called members of class Human. 
Encapsulation, which is the ability to logically group data and functions that work using it, is an important property of object-oriented programming.

## An Object as an Instance of a Class

---

A class is like a blueprint, and declaring a class alone has no effect on the execution of a program. 
The real-world avatar of a class at program execution time is an object. 
To use the features of a class, you typically create an instance of that class, called an object. 
You use that object to access its member methods and attributes.

Creating an object of type class Human is similar to creating an instance of another type, say double:

```c++
double pi= 3.1415;  // a variable of type double
Human  firstMan;  // firstMan: an object of class Human 
```

Alternatively, you would dynamically create an instance of class Human using new as you would for another type, say an int:

```c++
int* pointsToNum = new int;  // an integer allocated dynamically 
delete pointsToNum;  // de-allocating memory when done using

Human* firstWoman = new Human(); // dynamically allocated Human
delete firstWoman;  // de-allocating memory 
```

## Accessing Members Using the Dot Operator (.)

---

The dot operator (.) helps you access attributes of an object. 

Instance firstMan is an object of class Human, an avatar of the class that exists in reality:

```c++
Human firstMan;  // an instance i.e. object of Human
```

firstMan has attributes such as dateOfBirththat and methods such as IntroduceSelf(), and can be accessed using the dot operator (.):

```c++
firstMan.dateOfBirth = "1970";
firstMan.IntroduceSelf();
```

If you have a pointer firstWoman to an instance of class Human you can use the indirection operator (\*) to reference the object following the dot operator.

```c++
Human* firstWoman = new Human();
(*firstWoman).IntroduceSelf();
```

## Accessing Members Using the Pointer Operator (->)

---

If an object has been instantiated on the free store using new or if you have a pointer to an object, then you use the pointer operator (->) to access the member attributes and functions:

```c++
Human* firstWoman = new Human();
firstWoman->dateOfBirth = "1970";
firstWoman->IntroduceSelf();
delete firstWoman;
```

## Keywords public and private

---

Information can be classified into at least two categories: 
- data that is public 
- data that is private
 
C++ enables you to model class attributes and methods as public or private:
- Public class members can be used by anyone
- Private class members can be used only within the class 

C++ keywords public and private help you as the designer of a class decide what parts of a class can be invoked from outside it and what cannot. 

```c++
class Object
{
public:
    int foo;
    float bar;
private:
    void DoSomething();    
};
```

## Abstraction of Data via Keyword private

---

Abstraction is an important concept in object-oriented languages. 

It empowers programmers to decide what attributes of a class need to remain known only to the class and its members with nobody outside it (with the exception of those declared as its “friends”) having access to it.

## Constructors

---

A constructor is a special method invoked during the instantiation of a class to construct an object. 
Just like functions, constructors can also be overloaded.

## Declaring and Implementing a Constructor

---

A constructor is a special function that takes the name of the class and returns no value. 
This constructor can be implemented either inline within the class or externally outside the class declaration. 

An implementation inside the class looks like this:

```c++
class Object {
public:   
    Object() {
        // constructor code here   
    }
};
```

A variant enabling you to define the constructor outside the class’ declaration looks like this:

```c++
class Object {
public:   
    Object(); // constructor declaration
};
// constructor implementation (definition)

Object::Object(){   
    // constructor code here
}
```

:: is called the scope resolution operator. It is used to refer to a variable declared within the scope of a class.

## When and How to Use Constructors

---

A constructor is always invoked during object creation, when an instance of a class is constructed. 
This makes a constructor a perfect place for you to initialize class  member variables such as integers, pointers, and so on to values you choose. 

A constructor that is invoked without arguments is called the default constructor. 
Programming a default constructor is optional. 
If you don’t program any constructor the compiler creates one for you .

## Overloading Constructors

---

Constructors can be overloaded just like functions. 

You can choose to not implement the default constructor to enforce object instantiation with certain minimal parameters as explained in the next section.

```c++
class Object {
public:
    Object();
    Object(int param1, float param2);
};

Object obj1;
Object obj2(1, 2.3);
```

## Constructor Parameters with Default Values

---

Just the same way as functions can have parameters with default values specified, so can constructors. 

Note that a default constructor is one that can be instantiated without arguments, and not necessarily one that doesn’t take parameters. So, a constructor with two parameters, both with default values, is a default constructor.

## Constructors with Initialization Lists

---

You have seen how useful constructors are in initializing member variables. 
Another way to initialize members is by using initialization lists. 

```c++
class Human {
    int age, height;
public:
    Human(int humanAge, int humanHeight) : age(humanAge), height(humanHeight) {}
};
```

The initialization list is characterized by a colon (:) following the parameter declaration contained in parentheses (...), followed by an individual member variable and the value it is initialized to. 
Initialization lists can also be useful in invoking base class constructors with specific arguments. 

It is possible to define a constructor as a constant expression too, using keyword constexpr. 
In special cases where such a construct would be useful from a performance point of view, you would use it at the constructor declaration.

```c++
class Sample
{
    const char* someString;
public:
    constexpr Sample(const char* input) : someString(input) { 
        // constructor code
    }
};
```

## Destructor

---

A destructor, like a constructor, is a special function, too. 
A constructor is invoked at object instantiation, and a destructor is automatically invoked when an object is destroyed.
The role of the destructor is opposite to that of the constructor.

## Declaring and Implementing a Destructor

---

The destructor looks like a function that takes the name of the class, yet has a tilde (~) preceding it. 
This destructor can either be implemented inline in the class or externally outside the class declaration. 


An implementation or definition inside the class looks like this:

```c++
class Human { 
public:   
    ~Human() {
        // destructor code here   
    }
};
```

A variant enabling you to define the destructor outside the class’s declaration looks like this: 

```c++
class Human {
public:   
    ~Human(); // destructor declaration
};
// destructor definition (implementation)

Human::~Human() {   
    // destructor code here
}
```

## When and How to Use a Destructor

---

A destructor is always invoked when an object of a class is destroyed when it goes out of scope or is deleted via delete. 
This property makes a destructor the ideal place to reset variables and release dynamically allocated memory and other resources.

A destructor cannot be overloaded. 
A class can have only one destructor. 
If you forget to implement a destructor, the compiler creates and invokes a dummy destructor, that is, an empty one (that does no cleanup of dynamically allocated memory).

## Copy Constructor

---

A copy constructor is a member function that initializes an object using another object of the same class.

## When is  copy constructor called? 

In C++, a Copy Constructor may be called in the following cases: 

- When an object of the class is returned by value. 
- When an object of the class is passed (to a function) by value as an argument. 
- When an object is constructed based on another object of the same class. 
- When the compiler generates a temporary object.

## Shallow Copying and Associated Problems

---

Classes could contain a pointer member buffer that points to dynamically allocated memory, allocated in the constructor using new and deallocated in the destructor using delete[]. 
When an object of this class is copied, the pointer member is copied, but not the pointed memory, resulting in two objects pointing to the same dynamically allocated buffer in memory.
When an object is destructed, delete[] deallocates the memory, thereby invalidating the pointer copy held by the other object. 
Such copies are shallow and are a threat to the stability of the program.

## Ensuring Deep Copy Using a Copy Constructor

---

The copy constructor is an overloaded constructor that you supply. 
It is invoked by the compiler every time an object of the class is copied. 

The declaration syntax of a copy constructor for class MyString is the following:

```c++
class MyString {   
    MyString(const MyString& copySource); // copy constructor
};

MyString::MyString(const MyString& copySource){   
    // Copy constructor implementation code
}
```

A copy constructor takes an object of the same class by reference as a parameter. 
This parameter is an alias of the source object and is the handle you have in writing your custom copy code. 
You would use the copy constructor to ensure a deep copy of all buffers in the source.

Using const in the copy constructor declaration ensures that the copy constructor does not modify the source object being referred to. 
Additionally, the parameter in the copy constructor is passed by reference as a necessity. 
If this weren’t a reference, the copy constructor would itself invoke a copy, thus invoking itself again and so on till the system runs out of memory.

## Move Constructors Help Improve Performance

---

There are cases where objects are subjected to copy steps automatically, due to the nature of the language and its needs. Consider the following:class MyString{   // pick implementation from Listing 9.9};MyString Copy(MyString& source) // function{   MyString copyForReturn(source.GetString());  // create copy   return copyForReturn;  // return by value invokes copy constructor

int main(){   MyString sayHello ("Hello World of C++");   MyString sayHelloAgain(Copy(sayHello)); // invokes 2x copy constructor   return 0;}As the comment indicates, in the instantiation of sayHelloAgain, the copy constructor was invoked twice, thus a deep copy was performed twice because of our call to function Copy(sayHello) that returns a MyString by value. However, this value returned is very temporary and is not available outside this expression. So, the copy constructor invoked in good faith by the C++ compiler is a burden on performance. This impact becomes sig-nificant if our class were to contain objects of great size.To avoid this performance bottleneck, versions of C++ starting with C++11 feature a move constructor in addition to a copy constructor. The syntax of a move constructor is// move constructorMyString(MyString&& moveSource){   if(moveSource.buffer != NULL)   {buffer = moveSource.buffer; // take ownership i.e. 'move'moveSource.buffer = NULL;   // set the move source to NULL   }}When a move constructor is programmed, the compiler automatically opts for the same for “moving” the temporary resource and hence avoiding a deep-copy step. With the move constructor implemented, the comment should be appropriately changed to the fol-lowing:MyString sayHelloAgain(Copy(sayHello)); // invokes 1x copy, 1x move constructorsThe move constructor is usually implemented with the move assignment operator, which is discussed in greater detail in Lesson 12. Listing 12.11 is a better version of class MyString that implements the move constructor and the move assignment operator.

## Different Uses of Constructors and the Destructor

---

You have learned a few important and basic concepts in this lesson, such as the concepts of constructors, destructor, and the abstraction of data and methods via keywords such as public and private. 

These concepts enable you to create classes that can control how they’re created, copied, destroyed, or expose data. 

## Class That Does Not Permit Copying

---
 
You need to ensure that certain resources cannot be copied or duplicated. 
If you don’t declare a copy constructor, the C++ compiler inserts a default public copy constructor for you. 
This ruins your design and threatens your implementation. 
Yet, the language gives you a solution to this design paradigm. 
You would ensure that your class cannot be copied by declaring a private copy constructor.  
To avoid assignment, you declare a private assignment operator. 

```c++
class President {
private:   
    President(const President&); // private copy constructor   
    President& operator= (const President&); // private copy assignment operator   
    // ... other attributes
};
```

There is no need for implementation of the private copy constructor or assignment operator. 
Just declaring them as private is adequate and sufficient toward fulfilling your goal of ensuring non-copyable objects of class President.

## Singleton Class That Permits a Single Instance

---

class President discussed earlier is good, but it has a shortcoming: 
It cannot help creation of multiple presidents via instantiation of multiple objects:
President One, Two, Three;
Individually they are non-copyable thanks to the private copy constructors, but what you ideally need is a class President that has one, and only one, real-world manifestation—that is, there is only one object and creation of additional ones is prohibited. 

Welcome to the concept of singleton that uses private constructors, a private assignment operator, and a static instance member to create this powerful pattern.

When the keyword static is used on a class’s data member, it ensures that the member is shared across all instances. 
When static is used on a local variable declared within the scope of a function, it ensures that the variable retains its value between function calls. 
When static is used on a member function—a method—the method is shared across all instances of the class.

Use the singleton pattern only where absolutely necessary, keeping future growth of the application and its features in perspective. 
Note that the very feature that it restricts creation of multiple instances can become an architectural bottleneck when a use case comes up that needs multiple instances of the class. 

For example, if our project were to change from modeling a nation to modeling the United Nations, which is currently represented by 193 member nations, each with its own president, clearly we would have an architectural problem given a singleton class President that would permit the existence of only one instance.


## Class That Prohibits Instantiation on the Stack

---

Space on the stack is often limited. 
You might want to ensure that an object of this class cannot be instantiated on the stack, and instead it is forced to create instances only on the free store. 
The key to ensuring this is declaring the destructor private.

```c++
private:
    ~Class();
```

Declaring a private destructor ensures that one is not allowed to create an instance. 
 
All objects on the stack get popped when the stack is unwound and therefore the compiler would need to compile and invoke the destructor ~MonsterDB() at the end of main(). 
A private destructor would not stop you from instantiating on the heap
As the destructor is not accessible from main, you cannot do a delete.

You need a public static member function that would destroy the instance.

## Using Constructors to Convert Types

---

Earlier in this lesson, you learned that constructors can be overloaded, that is, they may take one or more parameters. 
This feature is often used to convert one type to another. 

Let’s consider a class Human that features an overloaded constructor that accepts an integer. 
Such converting constructors allow implicit conversions:

```c++
Human anotherKid = 11; // int converted to Human
DoSomething(10); // 10 converted to Human
```

We declared DoSomething(Human person) as a function that accepts a parameter of type Human.
The compiler knows that class Human supports a constructor that accepts an integer and performed an implicit conversion for you — it created an object of type Human using the integer you supplied and sent it as an argument to the function. 

To avoid implicit conversions, use keyword explicit at the time of declaring the constructor:

```c++
class Human {   
    int age;
public:   
    explicit Human(int humansAge): age(humansAge) {}
};
```

Using explicit is not a prerequisite but in many cases a good programming practice. 

The problem of implicit conversions and avoiding them using keyword explicit applies to operators too.

<details>
<summary>Only explicit conversions</summary>

```c++
 #include<iostream>
using namespace std;

class Human {
int age;
public:
// explicit constructor blocks implicit conversions
explicit Human(int humansAge) : age(humansAge) {}
};

void DoSomething(Human person) {
cout << "Human sent did something" << endl;
return;
}

int main() {
Human kid(10); // explicit conversion is OK
Human anotherKid = Human(11); // explicit, OK
DoSomething(kid); // OK

Human anotherKid2 = 11; // failure: implicit conversion not OK
DoSomething(10); // implicit conversion 

return 0;
}
```
</details>

## this Pointer

---

An important concept in C++, this is a reserved keyword applicable within the scope of a class and contains the address of the object. 
In other words, the value of this is &object.

Within a class member method, when you invoke another member method, the compiler sends this pointer as an implicit, invisible parameter in the function call.

## How struct Differs from class

---

Struct is a keyword from the days of C, and for all practical purposes it is treated by a C++ compiler similarly to a class. 

The exceptions are applicable to the access specifiers (public and private) when the programmer has not specified any. 
Unless specified, members in a struct are public by default (private for a class), and unless specified, a struct features public inheritance from a base struct (private for a class). 

## Declaring a friend of a class

---

A class does not permit external access to its data members and methods that are declared private. 

This rule is waived for classes and functions that are disclosed as friend classes or functions, using keyword friend.

<details>
<summary>Friend Function</summary>

```c++
#include <iostream>
#include <string>
using namespace std;

class Human
{
private:
    friend void DisplayAge(const Human& person);
    string name;
    int age;
 
public:
    Human(string humansName, int humansAge) {
    name = humansName;
    age = humansAge;
    }
};
 
void DisplayAge(const Human& person) {
    cout << person.age << endl;
}
```
</details>


## union: A Special Data Storage Mechanism 

---

A union is a special class type where only one of the non-static data members is active at a time. 
Thus, a union can accommodate multiple data members, just like a class can, with the exception that only one of them can actually be used.

## Declaring a Union

---

A union is declared using keyword union, followed by the name of the union and its data members within braces:

```c++
union UnionName{
    Type1 member1;   
    Type2 member2;
    ...   
    TypeN memberN;
};
```

Similar to the struct, the members of a union are public by default. 
Unlike a struct, however, unions cannot be used in inheritance hierarchies. 

## Where Would You Use a union?

---

Often a union is used as a member of a struct to model a complex data type. 
In some implementations, the ability of a union to interpret the fixed memory space as another type is used for type conversions or memory reinterpretation.

## Using Aggregate Initialization on Classes and Structs

---

The following initialization syntax is called an aggregate initialization syntax:

```c++
Type objectName = {argument1, ..., argumentN};
```

```c++
Type objectName {argument1, ..., argumentN};
```
Aggregate initialization can be applied to an aggregate, and therefore it is important to understand what data types fall under this category.

The term aggregate, however, is not limited to arrays of simple types like integers or characters, but extends also to classes (and therefore structs and unions) too. 
Aggregate initialization will initialize only the first non-static member of a union.
