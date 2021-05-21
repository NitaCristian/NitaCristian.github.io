# Implementing Inheritance

## Basics of Inheritance

---

What Tom Smith inherits from his forefathers is first and foremost his  family name that makes him a Smith. In addition, he inherits certain  values that his parents have taught him and a skill at sculpting wood that has been the Smith family occupation for many generations. These attributes  collectively identify Tom as an offspring of the Smith  family  tree.In programming parlance, you are often faced with situations where components being managed have similar attributes, differing minutely in details or in behavior. One way to solve this problem is to make each component a class where each class implements all attributes and re-implements the common ones. Another solution is using inheritance to allow classes that are similar to derive from a base class that contains common attributes and implements common functionality, overriding this base functionality to implement behavior that makes each class unique. The latter is often the preferred way. Welcome to inheritance in our world of object-oriented programming, as illustrated by Figure 10

## Inheritance and Derivation

---

Figure 10.1 shows a diagrammatic relationship between a base class and its derived classes. It might not be easy right now to visualize what a base class or a derived class could be. Try to understand that a derived class inherits from the base class and in that sense is a base class (just like Tom is a Smith).

The is-a relationship between a derived class and its base is applicable only to public inheritance. This lesson starts with public inheritance to understand the concept of inheritance and the most frequent form of inheritance before moving on to private or protected inheritance.

To make understanding this concept easy, think of a base class Bird. Classes are derived from Bird are class Crow, class Parrot, or class Kiwi. A class Birdwould define the most basic attributes of a bird, such as “is feathered,” “has wings,” “lays eggs,” “can fly,” and so on. Derived classes such as Crow, Parrot, or Kiwi inherit these attributes and customize them (for example, a classKiwi that represents a flightless-bird would contain no implementation of Fly()). Table 10.1 demonstrates a few more examples of inheritance

What these examples show is that when you put on your object-oriented programming glasses, you see examples of inheritance in many objects around yourself. Fish is a base class for a Tuna because a Tuna, like a Carp, is a Fish and presents all fish-like char-acteristics such as being cold-blooded. However, Tuna differs from a Carp in the way it looks, swims, and in the fact that it is a saltwater fish. Thus, Tuna and Carp inherit com-mon characteristics from a common base class Fish, yet specialize the base class attri-butes to distinguish themselves from each other

## C++ Syntax of Derivation

---

How would you inherit class Carp from class Fish, or in general a class Derived from class Base? C++ syntax for doing this would be the following:class Base{   // ... base class members};class Derived: access-specifier Base{   // ... derived class members};

The access-specifier can be one of public (most frequently used) where a “derived class is a base class” relationship; private or protected for a “derived class has a base class” relationship

## Access Specifier Keyword protected

---

Listing 10.1 is one where class Fish has a public attribute isFreshWaterFish that is set by the derived classes Tuna and Carp so as to customize (also called specialize) the behavior of Fish and adapt it to saltwater and freshwater, respectively. However, Listing 10.1 exhibits a serious flaw: If you want, even main() could tamper with isFreshWater-Fish, which is public and hence open for manipulation from outside class Fish:myDinner.isFreshWaterFish = true; // but Tuna isn't a fresh water fish!

Apparently, you need a mechanism that allows derived class members to modify chosen attributes of the base class, while denying access to the same from everyone else. This means that you want Boolean flag isFreshWaterFish in class Fish to be accessible to class Tuna and class Carp, but not accessible to main() that instantiates classes Tuna or Carp. This is where keyword protected helps you

protected, like public and private, is also an access speci-fier. When you declare a class attribute or function as pro-tected, you are effectively making it accessible to classes that derive (and friends), yet simultaneously making it inaccessible to everyone else outside the class, including main().

## Base Class Initialization—Passing Parameters to the Base Class

---

What if a base class were to contain an overloaded constructor that requires arguments at the time of instantiation? How would such a base class be instantiated when the derived class is being constructed? The clue lies in using initialization lists and in invoking the appropriate base class constructor via the constructor of the derived class as shown in the following code

class Base{public:   Base(int someNumber) // overloaded constructor   {// Use someNumber   }};Class Derived: public Base{public:   Derived(): Base(25)  // instantiate Base with argument 25   {// derived class constructor code   }};

This mechanism can be quite useful in class Fish wherein, by supplying a Boolean input parameter to the constructor of Fish that initializes Fish::isFreshWaterFish, this base class Fish can ensure that every derived class is forced to mention whether the Fish is a freshwater one or a saltwater one as shown in Listing 10.3.

## Derived Class Overriding Base Class’s Methods

---

If a class Derived implements the same functions with the same return values and signatures as in a class Base it inherits from, it effectively overrides that method in class Base as shown in the following code:class Base{public:   void DoSomething()   {// implementation code... Does something   }};class Derived:public Base{public:   void DoSomething()   {// implementation code... Does something else   }};Thus, if method DoSomething() were to be invoked using an instance of Derived, then it would not invoke the functionality in class Base.

If classes Tuna and Carp were to implement their own Swim() method that also exists in the base class as Fish::Swim(), then a call to Swim as shown in main() from the follow-ing excerpt of Listing 10.336:    Tuna myDinner;// ...other lines44:    myDinner.Swim();would result in the local implementation of Tuna::Swim() being invoked, which essentially overrides the base class’s Fish::Swim() method. This is demonstrated by Listing 10.4

The output demonstrates that myLunch.Swim() in Line 51 invokes Carp::Swim()defined in Lines 37–40. Similarly, myDinner.Swim() from Line 54 invokes Tuna::Swim() defined in Lines 26–29. In other words, the implementation of Fish::Swim() in the base class Fish, as shown in Lines 12–18, is overridden by the identical function Swim() defined by the classes Tuna and Carp that derive from Fish. The only way to invoke Fish::Swim() is by having main() use the scope resolution operator (::) in explicitly invoking Fish::Swim(), as shown later in this lesson

## Invoking Overridden Methods of a Base Class

---

In Listing 10.4, you saw an example of derived classTuna overriding the Swim() function  in Fish by implementing its version of the same. Essentially:

If you want to be invoke Fish::Swim() in Listing 10.4 via main(), you need to use the scope resolution operator (::) in the following syntax:myDinner.Fish::Swim(); // invokes Fish::Swim() using instance of TunaListing 10.5 that follows shortly demonstrates invoking a base class member using an instance of the derived class.

## Invoking Methods of a Base Class in a Derived Class

---

Typically, Fish::Swim() would contain a generic implementation of swimming appli-cable to all fishes, tunas, and carps included. If your specialized implementations in Tuna:Swim() and Carp::Swim() need to reuse the base class’s generic implementation of Fish::Swim(), you use the scope resolution operator (::) as shown in the following code:

## Derived Class Hiding Base Class’s Methods

---

Overriding can take an extreme form where Tuna::Swim() can potentially hide all over-loaded versions of Fish::Swim() available, even causing compilation failure when the overloaded ones are used (hence, called hidden), as demonstrated by Listing 10.6

This version of class Fish is a bit different from those that you have seen so far. Apart from being a minimalized version to explain the problem at hand, this version of Fishcontains two overloaded methods for Swim(), one that takes no parameters, as shown in Lines 6–9, and another that takes a bool parameter, as shown in Lines 11–17. As Tunainherits public from Fish as shown in Line 20, one would not be wrong to expect that both versions of method Fish::Swim() would be available via an instance of class Tuna. The fact is, however, that Tuna implementing its own Tuna::Swim(), as shown in Lines 23–26, results in the hiding of Fish::Swim(bool) from the compiler. If you uncomment Line 35, you see a compilation failure.So, if you want to invoke the Fish::Swim(bool) function via an instance of Tuna, you have the following solutions: ■Solution 1: Use the scope resolution operator in main():myDinner.Fish::Swim(); ■Solution 2: Use keyword using in class Tuna to unhide Swim() in classFish:class Tuna: public Fish{public:   using Fish::Swim;   // unhide all Swim() methods in class Fish   void Swim()   {cout << "Tuna swims real fast" << endl;   }};

Solution 3: Override all overloaded variants of Swim() in class Tuna (invoke methods  of Fish::Swim(...) via Tuna::Fish(...) if you want):class Tuna: public Fish{public:   void Swim(bool isFreshWaterFish)   {Fish::Swim(isFreshWaterFish);   }   void Swim()   {cout << "Tuna swims real fast" << endl;   }};

## Order of Construction

---

So, when you create an object of class Tuna that derives from class Fish, was the constructor of Tuna invoked before or after the constructor of class Fish? Additionally, within the instantiation of objects in the class hierarchy, what respective order do mem-ber attributes such as Fish::isFreshWaterFish have? Thankfully, the instantiation sequence is standardized. Base class objects are instantiated before the derived class. So, the Fish part of Tuna is constructed first, so that member attributes—especially the protected and public ones contained in class Fish—are ready for consumption when class Tuna is instantiated. Within the instantiation of class Fish and class Tuna, the member attributes (such as Fish::isFreshWaterFish) are instantiated before the constructor Fish::Fish() is invoked, ensuring that member attributes are ready before the constructor works with them. The same applies to Tuna::Tuna()

## Order of Destruction

---

When an instance of Tuna goes out of scope, the sequence of destruction is the opposite to that of construction. Listing 10.7 is a simple example that demonstrates the sequence of construction and destruction.

main() as shown in Lines 67–70 is pretty short for the volume of output it generates. Instantiation of a Tuna is enough to generate these lines of output because of the coutstatements that you have inserted into the constructors and destructors of all objects involved. For the sake of understanding how member variables are instantiated and destroyed, you defined two dummy classes, FishDummyMember, and TunaDummyMemberwith cout in their constructors and destructors. class Fish and class Tuna contain a member of each of these dummy classes as shown in Lines 20 and 53. The output indicates that when an object of classTuna is instantiated, instantiation actually starts at the top of the hierarchy. So, the base class Fish part of class Tuna is instantiated first, and in doing so, the members of the Fish—that is, Fish::dummy—are instantiated first. This is then followed by the constructor of the Fish, which is rightfully executed after the member attributes such as dummy have been constructed. After the base class has been constructed, the instantiation of Tuna continues first with instantiation of member T u n a::du m m y, finally followed by the execution of the constructor code in Tuna::Tuna(). The output demonstrates that the sequence of destruction is exactly the opposite.

## Private Inheritance

---

Private inheritance differs from public inheritance (which is what you have seen up to now) in that the keyword private is used in the line where the derived class declares its inheritance from a base class:

Private inheritance of the base class means that all public members and attributes of the base class are private (that is, inaccessible) to anyone with an instance of the derived class. In other words, even public members and methods of class Base can only be consumed by class Derived, but not by anyone else in possession of an instance of Derived.This is in sharp contrast to the examples with Tuna and base Fish that you have been following since Listing 10.1. main() in Listing 10.1 could invoke function Fish::Swim()on an instance of Tuna because Fish::Swim() is a public method and because class Tuna derives from class Fish using public inheritance. Thus, for the world outside the inheritance hierarchy, private inheritance essentially does not imply an "is-a" relationship (imagine a tuna that can’t swim!). As private inheri-tance allows base class attributes and methods to be consumed only by the subclass that derives from it, this relationship is also called a “has-a” relationship. There are a few examples of private inheritance in some things you see around you in daily life (see Table  10.2).

class Motor defined in Lines 3–18 is simple with three public member functions that switch ignition, pump fuel, and fire the cylinders. class Car as Line 20 demon-strates inherits from Motor, using keyword private. Thus, public function Car::Move()invokes members from the base class Motor. If you try inserting the following in main():myDreamCar.PumpFuel(); // cannot access base's public member

If another class RaceCar had to inherit from Car, then irre-spective of the nature of inheritance between RaceCar and Car, RaceCar would not have access to any public member or function of base class Motor. This is because the relationship between Car and Motor is one of private inheritance, meaning that all entities other than Car have private access (that is, no access) to public and protected members of Base when using an instance of Car.In other words, the most restrictive access specifier takes domi-nance in the compiler’s calculation of whether one class should have access to a base class’s public or protected members

## Protected Inheritance

---

Protected inheritance differs from public inheritance in that the keyword protected is used in the line where the derived class declares its inheritance from a base class:

Protected inheritance is similar to private inheritance in the following ways: ■It also signifies a has-a relationship. ■It also lets the derived class access all public and protected members of Base. ■Those outside the inheritance hierarchy with an instance of Derived cannot accesspublic members of Base.Yet, protected inheritance is a bit different when it comes to the derived class being inherited from:class Derived2: protected Derived{   // can access public & protected members of Base};Protected inheritance hierarchy allows the subclass of the subclass (that is, Derived2) access to public and protected members of the Base as shown in Listing 10.9. This would not be possible if the inheritance between Derived and Base were private

class Car inherits using protected from Motor as shown in Line 20. class RaceCar inherits using protected from class Car using protected as shown in Line 31. As you can see, the implementation of RaceCar::Move() uses public methods defined in base classMotor. This access to the ultimate base class Motor via inter-mediate base class Car is governed by the relationship between Car and Motor. If this were private instead of protected, SuperClass would have no access to the public members of Motor as the compiler would choose the most restrictive of the relevant access specifiers. Note that the nature of the relationship between the classes Car and RaceCar plays no role in access to base Motor, while the relationship between Car and 

Motor does. So, even if you change protected in Line 31 to public or to private, the fate of compilation of this program remains unchanged

Use private or protected inheritance only when you have to.In most cases where private inheritance is used, such as that of the Car and the Motor, the base class could have as well been a member attribute of the class Car instead of being a super- class. By inheriting from class Motor, you have essentially restricted your Car to having only one motor, for no significant gain over having an instance of class Motor as a privatemember.Cars have evolved, and hybrid cars, for instance, have a gas motor in addition to an electric one. Our inheritance hierarchy for class Car would prove to be a bottleneck in being compatible to such developments.

Having an instance of Motor as a private member instead of inheriting from it is called composition or aggregation. Such a class Car looks like this:class Car{private:   Motor heartOfCar;public:   void Move()   {heartOfCar.SwitchIgnition();heartOfCar.PumpFuel();heartOfCar.FireCylinders();   }};This can be good design as it enables you to easily add more motors as member attributes to an existing Car class without changing its inheritance hierarchy or its design with respect to its clients.

## The Problem of Slicing

---

What happens when a programmer does the following? 

Derived objDerived;
Base objectBase = objDerived;

Or, alternatively, what if a programmer does this?

void UseBase(Base input);
...
Derived objDerived;
UseBase(objDerived);  // copy of objDerived will be sliced and sent

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