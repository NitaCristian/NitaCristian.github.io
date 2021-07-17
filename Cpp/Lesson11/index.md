# Polymorphism

## Basics of Polymorphism

“Poly” is Greek for many, and “morph” means form. 
Polymorphism is that feature of object-oriented languages that allows objects of different types to be treated similarly. 

The polymorphic behavior where an object of known type class Fish can behave as its actual type; namely, derived class Tuna, can be implemented by making Fish::Swim() a virtual function.

## Polymorphic Behavior Implemented Using Virtual Functions

You have access to an object of type Fish, via pointer Fish* or reference Fish&. 
This object could have been instantiated solely as a Fish, or be part of a Tuna or Carpthat inherits from Fish. 

You invoke method Swim() using this pointer or reference, like this:

pFish->Swim();
myFish.Swim();

What you expect is that the object Fish swims as a Tuna if it is part of a Tuna, as a Carp if it is part of a Carp, or an anonymous Fish if it wasn’t instantiated as part of a specialized class such as Tuna or Carp. 

You can ensure this by declaring function Swim() in the base class Fish as a virtual function:

class Base {
    virtual ReturnType FunctionName (Parameter List);
};
class Derived {   
    ReturnType FunctionName (Parameter List);
};

Use of keyword virtual means that the compiler ensures that any overriding variant of the requested base class method is invoked. 

Thus, if Swim() is declared virtual, invoking myFish.Swim() (myFish being of type Fish&) results in Tuna::Swim() being executed.

## Need for Virtual Destructors

There is a more sinister side to the feature demonstrated by Listing 11.1—unintentionally invoking base class functionality of an instance of type derived, when a specialization is available.

 What happens when a function calls operator delete using a pointer of type Base* that actually points to an instance of type Derived?

This flaw means that the destructor of a deriving class that has been instantiated on the free store using new would not be invoked if delete is called using a pointer of type Base*. This can result in resources not being released, memory leaks, and so on and is a problem that is not to be taken lightly

Always declare the base class destructor as virtual:class Base{public:   virtual ~Base() {};  // virtual destructor};This ensures that one with a pointer Base* cannot invoke delete in a way that instances of the deriving classes are not correctly destroyed

EAbstract Base Classes and Pure Virtual FunctionsA base class that cannot be instantiated is called an abstract base class. Such a base class fulfills only one purpose, that of being derived from. C++ allows you to create an abstract base class using pure virtual functions.A virtual method is said to be pure virtual when it has a declaration as shown in the  following:class AbstractBase{public:   virtual void DoSomething() = 0;  // pure virtual method};

This declaration essentially tells the compiler that DoSomething() needs to be imple-mented and by the class that derives from AbstractBase

Thus, what class AbstractBase has done is that it has enforced class Derived to supply an implementation for virtual method DoSomething(). This functionality where a base class can enforce support of methods with a specified name and signature in classes that derive from it is that of an interface. Think of a Fish again. Imagine a Tuna that cannot swim fast because Tuna did not override Fish::Swim(). This is a failed implementation and a flaw. Making class Fish an abstract base class with Swim as a pure virtual func-tion ensures that Tuna that derives from Fish implements Tuna::Swim() and swims like a Tuna and not like just any Fish. See Listing 11.6.

## Specifier Override to Indicate Intention to Override

Our versions of base class Fish have featured a virtual function called Swim() as seen in the following code:class Fish{public:   virtual void Swim()   {cout << "Fish swims!" << endl;   }};Assume that derived class Tuna were to define a function Swim() but with a slightly  different signature—one using const inserted unintentionally by a programmer who wants to override Fish::Swim(): class Tuna:public Fish{public:   void Swim() const    {cout << "Tuna swims!" << endl;   }};This function Tuna::Swim() actually does not override Fish::Swim(). The signatures are different thanks to the presence of const in Tuna::Swim(). Compilation succeeds, however, and the programmer may falsely believe that he has successfully overridden the function Swim() in class Tuna. C++11 and beyond give the programmer a specifier override that is used to verify whether the function being overridden has been declared as virtual by the base class:class Tuna:public Fish{public:   void Swim() const override // Error: no virtual fn with this sig in Fish   {cout << "Tuna swims!" << endl;   }}

Thus, override supplies a powerful way of expressing the explicit intention to override a base class virtual function, thereby getting the compiler to check whether ■The base class function is virtual. ■The signature of the base class virtual function exactly matches the signature of thederived class function declared to override

## Use final to Prevent Function Overriding

Specifier final, introduced in C++11, was first presented to you in Lesson 10. A class declared as final cannot be used as a base class. Similarly, a virtual function declared as final cannot be overridden in a derived class.Thus, a version of class Tuna that doesn’t allow any further specialization of virtual function Swim() would look like this:class Tuna:public Fish{public:   // override Fish::Swim and make this final   void Swim() override final   {cout << "Tuna swims!" << endl;   }};This version of Tuna can be inherited from, but Swim() cannot be overridden any  further:class BluefinTuna final:public Tuna{public:   void Swim() // Error: Swim() was final in Tuna, cannot override   {   }};A demonstration of specifiers override and final is available in Listing 11.9.

We used final in the declaration of class BluefinTuna as well. This ensures that class BluefinTuna cannot be used as a base class. Therefore, the following would result in error:class FailedDerivation:public BluefinTuna  {};