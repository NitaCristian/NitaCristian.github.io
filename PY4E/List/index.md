
# Lists

Lists are used to store multiple items in a single variable.

Lists are created using square brackets:

```py
myList = [1, 2, 3, 4, 5, 6]
myList = ['a', 'c', 'f']
myList = ['a', 12, 3.4]
```

## List Items

List items are ordered, changeable, and allow duplicate values.

List items are indexed, the first item has index [0], the second item has index [1] etc.

## Ordered

It means that the items have a defined order, and that order will not change. 
If you add new items to a list, the new items will be placed at the end of the list.

## Changeable

It means that we can change, add, and remove items in a list after it has been created.

## Allow Dupliactes

Since lists are indexed, lists can have items with the same value.

## Traverse a list using the for loop.

```py
l = [1, 2, 3, 4]
for i in range(len(l)):
    print(l[i])

for elem in l:
    print(elem)
```

## List operations:
- \+ concatenation
- \* repeat

```py
a = [1, 2, 3]
b = [4, 5, 6]
c = a + b 
# >> [1, 2, 3, 4, 5, 6]

[0] * 4 
# >> [0, 0, 0, 0]
```

## List slices

```py
t = [1, 2, 3, 4, 5, 6, 7]

t[1:3]
# >> [2, 3]

t[:3]
# >> [1, 2, 3]

t[4:]
# >> [5, 6, 7]
```

## List methods

Python provides methods that operate on lists:
Append a new item at the end of the list. 
- append(element) 

Extend takes a list and appends it to the list that called the method. 
- extend(list)

Sort a list. 
- sort()

Pop element at a given index and return it.
- pop(index)

Remove first specific element.
- remove(element)

Delete a slice of elements up to, but not including, the second index.
- del [a:b]

```py
t = [4, 3, 2, 1]

t.append(5) 
# >> [4, 3, 2, 1, 5]

t_2 = [6, 7, 8]
t.extend(t_2) 
# >> [4, 3, 2, 1, 5, 6, 7, 8]

t.sort()
# >> [1, 2, 3, 4, 5, 6, 7, 8]

t.sort(reverse=True)
# >> [8, 7, 6, 5, 4, 3, 2, 1]

t = [1, 2, 3, 4]

# x = t.pop() # removes the last element
x = t.pop(1)
# >> [1, 3, 4]

del t[1]
# >> [1, 3, 4]

t.remove(1)
# >> [2, 3, 4]

del t[1:3]
# >> [1, 4] 
```

## Lists and functions

There are a number of built-in functions that can be used on lists that allow youto quickly look through a list without writing your own loops:

```py
nums = [3, 41, 12, 9, 74, 15]
len(nums)
# >> 6

max(nums)
# >> 74

min(nums)
# >> 3

sum(nums)
# >> 154
```

## The list() Constructor

It is also possible to use the list() constructor when creating a new list.

```py
myList = list(("apple", "banana", "cherry"))
```
