# Dictionary

Dictionaries are used to store data values in key:value pairs.

A dictionary is a collection which is ordered, changeable and does not allow duplicates.

Dictionaries are written with curly brackets, and have keys and values:

```py
myDict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
```

## Dictionary Items

Dictionary items are ordered, changeable, and does not allow duplicates.

Dictionary items are presented in key:value pairs, and can be referred to by using the key name.

```py
dict["brand"]
```

## Changeable

Dictionaries are changeable, meaning that we can change, add or remove items after the dictionary has been created.

## Duplicates Not Allowed

Dictionaries cannot have two items with the same key. Duplicate values will overwrite existing values.

## Get Keys

The keys() method will return a list of all the keys in the dictionary.

```py
keys = myDicy.keys()
print(keys)
# dict_keys(['brand', 'model', 'year']) 
```

## Get Values

The values() method will return a list of all the values in the dictionary.

```py
values = myDicy.values()
print(values)
# dict_values(['Ford', 'Mustang', 1964])
```

## Get Items

The items() method will return each item in a dictionary, as tuples in a list.

```py
items = myDict.items()
print(items)
# dict_items([('brand', 'Ford'), ('model', 'Mustang'), ('year', 1964)]) 
```

## Check if Key Exists

To determine if a specified key is present in a dictionary use the in keyword:

```py
if "model" in myDict:
    print("The key exists!")
```

## Adding Items

Adding an item to the dictionary is done by using a new index key and assigning a value to it:

```py
myDict['newIndex'] = value
```

## Removing Items

- pop() method removes the item with the specified key name
- popitem() method removes the last inserted item 
- del keyword removes the item with the specified key name
- clear() method empties the dictionary

```py
myDict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

myDict.pop("model")

myDict.popitem()

del myDict["model"]

myDict.clear()
```