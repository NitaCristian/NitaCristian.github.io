# Implementing Inheritance

## Basics of Inheritance

---

You are often faced with situations where components have similar attributes, differing in details or in behavior. 
- One way to solve this problem is to make each class implement all attributes and re-implement the common ones. 
- Another solution is using inheritance to allow classes that are similar to derive from a base class that contains common attributes and functionality, overriding this base functionality to implement behavior that makes each class unique. 

Welcome to inheritance in our world of object-oriented programming.

## Inheritance and Derivation

---

The is-a relationship between a derived class and its base is applicable only to public inheritance. 

To make understanding this concept easy, think of a base class Bird. 
Classes are derived from Bird are class Crow, class Parrot, or class Kiwi. 

A class Bird would define the most basic attributes of a bird, such as “is feathered,” “has wings,” “lays eggs,” “can fly,” and so on. 
Derived classes such as Crow, Parrot, or Kiwi inherit these attributes and customize them (for example, a class Kiwi that represents a flightless-bird would contain no implementation of Fly()).

What these examples show is that when you put on your object-oriented programming glasses, you see examples of inheritance in many objects around yourself. 
Fish is a base class for a Tuna because a Tuna, like a Carp, is a Fish and presents all fish-like characteristics such as being cold-blooded. 

However, Tuna differs from a Carp in the way it looks, swims, and in the fact that it is a saltwater fish. 
Thus, Tuna and Carp inherit common characteristics from a common base class Fish, yet specialize the base class attributes to distinguish themselves from each other.

## C++ Syntax of Derivation

---

C++ syntax for inehritance would be the following:

```c++
class Base {   
    // ... base class members
};

class Derived: access-specifier Base {   
    // ... derived class members
};
```
The access-specifier can be one of:
- public where a “derived class is a base class” relationship
- private or protected for a “derived class has a base class” relationship

## Access Specifier Keyword protected

---

You need a mechanism that allows derived class members to modify chosen attributes of the base class, while denying access to the same from everyone else. 
This is where keyword protected helps you.

protected, like public and private, is also an access specifier. 
When you declare a class attribute or function as protected, you are effectively making it accessible to classes that derive, yet simultaneously making it inaccessible to everyone else outside the class, including main().

## Base Class Initialization—Passing Parameters to the Base Class

---

What if a base class were to contain an overloaded constructor that requires arguments at the time of instantiation? 
How would such a base class be instantiated when the derived class is being constructed? 

The clue lies in using initialization lists and in invoking the appropriate base class constructor via the constructor of the derived class as shown in the following code:

```c++
class Base {
public:   
    Base(int someNumber) // overloaded constructor   
    {
        // Use someNumber   
    }
};

Class Derived: public Base {
public:   
    Derived(): Base(25)  // instantiate Base with argument 25   
    {
        // derived class constructor code   
    }
};
```

## Derived Class Overriding Base Class’s Methods

---

If a class Derived implements the same functions with the same return values and signatures as in a class Base it inherits from, it effectively overrides that method in class Base as shown in the following code:

```c++
class Base {
public:   
    void DoSomething() {
        // implementation code... Does something   
    }
};

class Derived: public Base {
public:   
    void DoSomething() {
        // implementation code... Does something else   
    }
};

```

## Invoking Overridden Methods of a Base Class

---

If you want to invoke a method of the parent class, you need to use the scope resolution operator (::) in the following syntax:

```c++
Tuna myDinner;
myDinner.Fish::Swim(); // invokes Fish::Swim() using instance of Tuna
```

## Invoking Methods of a Base Class in a Derived Class

---

Fish::Swim() would contain a generic implementation of swimming applicable to all fishes, tunas, and carps included. 
If your specialized implementations in Tuna:Swim() and Carp::Swim() need to reuse the base class’s generic implementation of Fish::Swim(), you use the scope resolution operator (::) as shown in the following code:

```c++
class Carp: public Fish {

public:
    Carp(): Fish(true) {}

    void Swim() {
        cout << "Carp swims real slow" << endl;
        Fish::Swim(); // invoke base class function using operator::
    } 
};
```

## Derived Class Hiding Base Class’s Methods

---

Overriding can take an extreme form where Derived::Method() can potentially hide all overloaded versions of Base::Method() available, even causing compilation failure when the overloaded ones are used.

So, if you want to invoke the Derived::Method(bool) function via an instance of Derived, you have the following solutions: 

- Solution 1: Use the scope resolution operator in main(): 

```c++
myDinner.Fish::Swim();
```

- Solution 2: Use keyword using in class Tuna to unhide Swim() in classFish: 

```c++
class Tuna: public Fish {
public:   
    using Fish::Swim;   // unhide all Swim() methods in class Fish   
    
    void Swim() {
        cout << "Tuna swims real fast" << endl;   
    }
};
```

- Solution 3: Override all overloaded variants of Swim() in class Tuna (invoke methods of Fish::Swim(...) via Tuna::Fish(...) if you want): 

```c++
class Tuna: public Fish {
public:   
    void Swim(bool isFreshWaterFish) {
        Fish::Swim(isFreshWaterFish);   
    }   
    
    void Swim() { 
        cout << "Tuna swims real fast" << endl;
    }
};
```

## Order of Construction

---

The instantiation sequence is standardized. 
Base class objects are instantiated before the derived class. 

## Order of Destruction

---

The sequence of destruction is the opposite to that of construction. 

<details>
<summary>Order of Construction and Destruction</summary>

```c++
#include <iostream>
using namespace std;

class FishDummyMember{
public:
    FishDummyMember() {
        cout << "FishDummyMember constructor" << endl;
    }

    ~FishDummyMember() {
        cout << "FishDummyMember destructor" << endl;
    }
};

class Fish {
protected:
    FishDummyMember dummy;

public:
    // Fish constructor
    Fish() {
        cout << "Fish constructor" << endl;
    }

    ~Fish() {
        cout << "Fish destructor" << endl;
    }
};

class TunaDummyMember {
public:
    TunaDummyMember() {
        cout << "TunaDummyMember constructor" << endl;
    }

    ~TunaDummyMember() {
        cout << "TunaDummyMember destructor" << endl;
    }
};

class Tuna: public Fish {
private:
    TunaDummyMember dummy;   public:
    Tuna() {
        cout << "Tuna constructor" << endl;
    }
    ~Tuna() {
        cout << "Tuna destructor" << endl;
    }
};

int main() {
    Tuna myDinner;
}
```

The Output will be:

```
FishDummyMember constructor
Fish constructor
TunaDummyMember constructor
Tuna constructor

Tuna destructor
TunaDummyMember destructor
Fish destructor
FishDummyMember destructor
```
</details>

## Private Inheritance

---

Private inheritance differs from public inheritance in that the keyword private is used in the line where the derived class declares its inheritance from a base class:

```c++
class Base 
{
 // ... base class members and methods
};

class Derived: private Base // private inheritance
{
 // ... derived class members and methods
};
```

Private inheritance of the base class means that all public members and attributes of the base class are private to anyone with an instance of the derived class. 

Thus, for the world outside the inheritance hierarchy, private inheritance essentially does not imply an "is-a" relationship. 
As private inheritance allows base class attributes and methods to be consumed only by the subclass that derives from it, this relationship is also called a “has-a” relationship. 

## Protected Inheritance

---

Protected inheritance differs from public inheritance in that the keyword protected is used in the line where the derived class declares its inheritance from a base class:

```c++
class Base
{
 // ... base class members and methods
};
class Derived: private Base // private inheritance
{
 // ... derived class members and methods
};
```

Protected inheritance is similar to private inheritance in the following ways: 
- It also signifies a has-a relationship. 
- It also lets the derived class access all public and protected members of Base. 
- Those outside the inheritance hierarchy with an instance of Derived cannot accesspublic members of Base.

However, protected inheritance is a bit different when it comes to the derived class being inherited from:

```c++
class Derived2: protected Derived {   
    // can access public & protected members of Base
};
```

Protected inheritance hierarchy allows the subclass of the subclass access to public and protected members of the Base. 
This would not be possible if the inheritance between Derived and Base were private.

Use private or protected inheritance only when you have to. 
In most cases where private inheritance is used, such as that of the Car and the Motor, the base class could have as well been a member attribute of the class Car instead of being a super-class. 

By inheriting from class Motor, you have essentially restricted your Car to having only one motor, for no significant gain over having an instance of class Motor as a private member. 
Cars have evolved, and hybrid cars, for instance, have a gas motor in addition to an electric one. 
Our inheritance hierarchy for class Car would prove to be a bottleneck in being compatible to such developments.

Having an instance of Motor as a private member instead of inheriting from it is called composition or aggregation. 
Such a class Car looks like this:

```c++
class Car { 
private:   
    Motor heartOfCar;
public:   
    void Move() {
        heartOfCar.SwitchIgnition();
        heartOfCar.PumpFuel();
        heartOfCar.FireCylinders();   
    }
};
```

## The Problem of Slicing

---

What happens when a programmer does the following? 

```c++
Derived objDerived;
Base objectBase = objDerived;
```

Or, alternatively, what if a programmer does this?

```c++
void UseBase(Base input);
...
Derived objDerived;
UseBase(objDerived);  // copy of objDerived will be sliced and sent
```

In both cases, an object of type Derived is being copied into another of type Base, either explicitly via assignment or by passing as an argument.

What happens in these cases is that the compiler copies only the Base part of objDerived — that is, not the complete object. The information contained by the data members belonging to Derivedis lost in the process. 

This is not anticipated, and this unwanted reduction of that part of data that makes the Derived a specialization of Base is called slicing.

To avoid slicing problems, don’t pass parameters by value. Pass them as pointers to the base class or as a (optionally const) reference to the same.

## Multiple Inheritance

---

Earlier in this lesson I mentioned that in some certain cases multiple inheritance might be relevant. 

For such cases, C++ allows a class to derive from two or more base classes:

```c++
class Derived: access-specifier Base1, access-specifier Base2 {   
    // class members
};
```

## Avoiding Inheritance Using final

---

Starting with C++11, compilers support specifier final. 
It is used to ensure that a class declared as final cannot be used as a base class. 

In addition to classes, final can also be used on member functions in controlling  polymorphic behavior. 

When making design decisions, don’t forget that public inheritance also should signify an “is-a” relationship. It should not be used indiscriminately with the purpose of fulfilling goals related to code reuse.