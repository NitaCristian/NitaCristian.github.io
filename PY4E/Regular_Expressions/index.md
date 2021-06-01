# Regular expressions

The regular expression library re must be imported into your program before youcan use it.  

The re.search() function returns the first match for a pattern in a string. 

The re.findall() function returns all non-overlapping matches of a pattern in a string. The function returns all the findings as a list. 

```py
import re
s = 'A message from csev@umich.edu to cwen@iupui.edu about meeting @2PM'
lst = re.findall('\S+@\S+', s)
print(lst)
```
## Special Characters and Sequences

- ˆ Matches the beginning of the line.

- $ Matches the end of the line.

- . Matches any character (a wildcard).

- \s Matches a whitespace character.

- \S Matches a non-whitespace character (opposite of \s).

- \* Applies to the immediately preceding character(s) and indicates to match zero or more times.

- *? Applies to the immediately preceding character(s) and indicates to match zero or more times in “non-greedy mode”.

- \+ Applies to the immediately preceding character(s) and indicates to match one or more times.

- +? Applies to the immediately preceding character(s) and indicates to match oneor more times in “non-greedy mode”.

- ? Applies to the immediately preceding character(s) and indicates to match zero or one time.

- ?? Applies to the immediately preceding character(s) and indicates to match zero or one time in “non-greedy mode”.

- [aeiou] Matches a single character as long as that character is in the specified set.
In this example, it would match “a”, “e”, “i”, “o”, or “u”, but no other characters.

- [a-z0-9] You can specify ranges of characters using the minus sign. This exampleis a single character that must be a lowercase letter or a digit.

- [ˆA-Za-z] When the first character in the set notation is a caret, it inverts the logic. 
This example matches a single character that is anything other than an uppercase or lowercase letter.

- () When parentheses are added to a regular expression, they are ignored for thepurpose of matching, but allow you to extract a particular subset of the matchedstring rather than the whole string when usingfindall().

- \b Matches the empty string, but only at the start or end of a word.

- \B Matches the empty string, but not at the start or end of a word.

- \d Matches any decimal digit; equivalent to the set [0-9].

- \D Matches any non-digit character; equivalent to the set [ˆ0-9].

## Translation of RegEx

'S+@\S+' => Match any substring that have at least one non-whitespace character, followed by an @ sign, followed by at least one or more non-whitespace characters.

'[a-zA-Z0-9]\S*@\S*[a-zA-Z]' => Match any substring that start with a lowercase letter, uppercase letter or number, followed by an @ sign, followed by zero or more non-blank characters.

'^X-.*: [0-9.]+' => Match any substring that starts with X- followed by zero or more characters followed by a colon (:) and then a space. After the space we need one or more characters that are digits or a period (.)

'^Details:.\*rev=([0-9.]+' => , we are looking for lines that start withDetails:, followed by any number of characters (.\*), followed byrev=, and thenby one or more digits. We want to find lines that match the entire expression butwe only want to extract the integer number at the end of the line, so we surround[0-9]+with parentheses

## Escape character

Since we use special characters in regular expressions to match the beginning orend of a line or specify wild cards, we need a way to indicate that these charactersare “normal” and we want to match the actual character such as a dollar sign orcaret.We can indicate that we want to simply match a character by prefixing that charac-ter with a backslash

'$[0-9.]+' => $10.0