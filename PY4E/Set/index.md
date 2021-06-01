
# Set

Sets are used to store multiple items in a single variable.

A set is a collection which is both unordered and unindexed.

Sets are written with curly brackets.

```py
mySet = {"apple", "banana", "cherry"}
```

## Set Items

Set items are unordered, unchangeable, and do not allow duplicate values.

## Unordered

Unordered means that the items in a set do not have a defined order.

Set items can appear in a different order every time you use them, and cannot be referred to by index or key.

## Unchangeable

Sets are unchangeable, meaning that we cannot change the items after the set has been created.

## The set() Constructor

It is also possible to use the set() constructor to make a set.

```py
mySet = set(("apple", "banana", "cherry"))
```

## Access Items

You cannot access items in a set by referring to an index or a key.

But you can loop through the set items using a for loop, or ask if a specified value is present in a set, by using the in keyword.

```py
mySet = {"apple", "banana", "cherry"}

for x in mySet:
    print(x)

if "banana" in mySet:
    print("Items is in mySet")
```

## Add Items

To add one item to a set use the add() method.

```py
mySet = {"apple", "banana", "cherry"}
mySet.add("orange")

print(mySet) 
# {'banana', 'orange', 'cherry', 'apple'} 
```

## Add Any Iterable

The object in the update() method does not have be a set, it can be any iterable object (tuples, lists, dictionaries etc.)

```py
mySet = {"apple", "banana", "cherry"}
myList = ["kiwi", "orange"]

mySet.update(myList)
print(mySet) 
# {'banana', 'cherry', 'apple', 'orange', 'kiwi'} 
```

Remove Item

To remove an item in a set, use the remove(), or the discard() method.
The clear() method empties the set.

```py
mySet = {"apple", "banana", "cherry"}

mySet.remove("banana")
mySet.discard("banana")

print(mySet)
```
