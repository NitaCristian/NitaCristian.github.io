# Implementing Inheritance

In this lesson, you find out about ■Inheritance in the context of programming ■The C++ syntax of inheritance ■public, private, and protected inheritance ■Multiple inheritance ■Problems caused by hiding base class methods and slicing

## Basics of Inheritance

What Tom Smith inherits from his forefathers is first and foremost his  family name that makes him a Smith. In addition, he inherits certain  values that his parents have taught him and a skill at sculpting wood that has been the Smith family occupation for many generations. These attributes  collectively identify Tom as an offspring of the Smith  family  tree.In programming parlance, you are often faced with situations where components being managed have similar attributes, differing minutely in details or in behavior. One way to solve this problem is to make each component a class where each class implements all attributes and re-implements the common ones. Another solution is using inheritance to allow classes that are similar to derive from a base class that contains common attributes and implements common functionality, overriding this base functionality to implement behavior that makes each class unique. The latter is often the preferred way. Welcome to inheritance in our world of object-oriented programming, as illustrated by Figure 10

.Inheritance and DerivationFigure 10.1 shows a diagrammatic relationship between a base class and its derived classes. It might not be easy right now to visualize what a base class or a derived class could be. Try to understand that a derived class inherits from the base class and in that sense is a base class (just like Tom is a Smith).

The is-a relationship between a derived class and its base is applicable only to public inheritance. This lesson starts with public inheritance to understand the concept of inheritance and the most frequent form of inheritance before moving on to private or protected inheritance.

To make understanding this concept easy, think of a base class Bird. Classes are derived from Bird are class Crow, class Parrot, or class Kiwi. A class Birdwould define the most basic attributes of a bird, such as “is feathered,” “has wings,” “lays eggs,” “can fly,” and so on. Derived classes such as Crow, Parrot, or Kiwi inherit these attributes and customize them (for example, a classKiwi that represents a flightless-bird would contain no implementation of Fly()). Table 10.1 demonstrates a few more examples of inheritance

What these examples show is that when you put on your object-oriented programming glasses, you see examples of inheritance in many objects around yourself. Fish is a base class for a Tuna because a Tuna, like a Carp, is a Fish and presents all fish-like char-acteristics such as being cold-blooded. However, Tuna differs from a Carp in the way it looks, swims, and in the fact that it is a saltwater fish. Thus, Tuna and Carp inherit com-mon characteristics from a common base class Fish, yet specialize the base class attri-butes to distinguish themselves from each other

.C++ Syntax of DerivationHow would you inherit class Carp from class Fish, or in general a class Derived from class Base? C++ syntax for doing this would be the following:class Base{   // ... base class members};class Derived: access-specifier Base{   // ... derived class members};

The access-specifier can be one of public (most frequently used) where a “derived class is a base class” relationship; private or protected for a “derived class has a base class” relationship

. Access Specifier Keyword protectedListing 10.1 is one where class Fish has a public attribute isFreshWaterFish that is set by the derived classes Tuna and Carp so as to customize (also called specialize) the behavior of Fish and adapt it to saltwater and freshwater, respectively. However, Listing 10.1 exhibits a serious flaw: If you want, even main() could tamper with isFreshWater-Fish, which is public and hence open for manipulation from outside class Fish:myDinner.isFreshWaterFish = true; // but Tuna isn't a fresh water fish!

Apparently, you need a mechanism that allows derived class members to modify chosen attributes of the base class, while denying access to the same from everyone else. This means that you want Boolean flag isFreshWaterFish in class Fish to be accessible to class Tuna and class Carp, but not accessible to main() that instantiates classes Tuna or Carp. This is where keyword protected helps you

protected, like public and private, is also an access speci-fier. When you declare a class attribute or function as pro-tected, you are effectively making it accessible to classes that derive (and friends), yet simultaneously making it inaccessible to everyone else outside the class, including main().

.Base Class Initialization—Passing Parameters to the Base ClassWhat if a base class were to contain an overloaded constructor that requires arguments at the time of instantiation? How would such a base class be instantiated when the derived class is being constructed? The clue lies in using initialization lists and in invoking the appropriate base class constructor via the constructor of the derived class as shown in the following code

class Base{public:   Base(int someNumber) // overloaded constructor   {// Use someNumber   }};Class Derived: public Base{public:   Derived(): Base(25)  // instantiate Base with argument 25   {// derived class constructor code   }};

This mechanism can be quite useful in class Fish wherein, by supplying a Boolean input parameter to the constructor of Fish that initializes Fish::isFreshWaterFish, this base class Fish can ensure that every derived class is forced to mention whether the Fish is a freshwater one or a saltwater one as shown in Listing 10.3.

.NOTEDerived Class Overriding Base Class’s MethodsIf a class Derived implements the same functions with the same return values and signatures as in a class Base it inherits from, it effectively overrides that method in class Base as shown in the following code:class Base{public:   void DoSomething()   {// implementation code... Does something   }};class Derived:public Base{public:   void DoSomething()   {// implementation code... Does something else   }};Thus, if method DoSomething() were to be invoked using an instance of Derived, then it would not invoke the functionality in class Base.