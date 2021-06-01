# Tuples

Tuples are used to store multiple items in a single variable.

A tuple is a collection which is ordered and unchangeable.

Tuples are written with round brackets.

```py
myTuple = ("apple", "banana", "cherry")
myTuple = (1, 2, 3, 4, 5)
```

## Tuple Items

Tuple items are ordered, unchangeable, and allow duplicate values.

Tuple items are indexed, the first item has index [0], the second item has index [1] etc.

## Ordered

When we say that tuples are ordered, it means that the items have a defined order, and that order will not change.

## Unchangeable

Tuples are unchangeable, meaning that we cannot change, add or remove items after the tuple has been created.

## Allow Duplicates

Since tuples are indexed, they can have items with the same value.

## Create Tuples with one item

To create a tuple with only one item, you have to add a comma after the item.

```py
myTuple = ("apple",)
```

## The tuple() Constructor

It is also possible to use the tuple() constructor to make a tuple.

```py
myTuple = tuple(("apple", "banana", "cherry"))
```

## Access Tuple Items

You can access tuple items by referring to the index number, inside square brackets.

```py
myTuple = ("apple", "banana", "cherry")
print(myTuple[1])
```