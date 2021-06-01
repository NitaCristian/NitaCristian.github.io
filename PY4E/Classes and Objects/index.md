# Classes and Objects

A Class is like an object constructor, or a "blueprint" for creating objects.

An object can contain a number of methods as well as data that is used by those functions. 
We call data items that are part of the object attributes.

We use the class keyword to define the data and code that will make up each of the objects. 
The class keyword includes the name of the class and begins an indented block of code where we include the attributes (data) and methods (code).

```py
class PartyAnimal:
    x = 0
    def party(self) :
        self.x = self.x + 1
        print("So far", self.x)

an = PartyAnimal()
```

If we want our object to be aware of these moments of construction and destruction,we add specially named methods to our object.

```py
class PartyAnimal:
    x = 0 
    def __init__(self):
        print('I am constructed')
    def party(self) :
        self.x = self.x + 1 
        print('So far', self.x)
    
    def __del__(self):
        print('I am destructed', self.x)
```

As Python constructs our object, it calls our __init__ method to give us a chanceto set up some default or initial values for the object.

Just at the moment when ouranobject is being “destroyed” our destructor code (__del__) is called. 
We cannot stop our variable from being destroyed,but we can do any necessary cleanup right before our object no longer exists.

## Inheritance

Another powerful feature of object-oriented programming is the ability to createa new class by extending an existing class. 

When extending a class, we call the original class the parent class and the new class the child class.

```py
class CricketFan(PartyAnimal):
    points = 0 
    def six(self):
        self.points = self.points + 6 
        self.party()
        print(self.name,"points",self.points)

j = CricketFan("Jim")
```

When we define theCricketFanclass, we indicate that we are extending thePartyAnimalclass. This means that all of the variables (x) and methods (party)from thePartyAnimalclass areinheritedby theCricketFanclass