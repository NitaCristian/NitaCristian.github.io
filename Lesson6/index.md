# Controlling Program Flow

In this lesson, you find out:
- How to make your program behave differently in certain conditions
- How to execute a section of code repeatedly in a loop
- How to better control the flow of execution in a loop

## Conditional Programming Using if ... else

Conditional execution of code is implemented in C++ using the if ... else construct that looks like this:

```c++
if (conditional expression) {
    // Do something when expression evaluates true
} else {
    // Optional   Do something else when condition evaluates false;
}    
```

If you want to execute multiple statements in event of a condition succeeding or failing, you need to enclose them within statement blocks.

### Conditional Processing Using switch-case

The objective of switch-case is to enable you to check a particular expression against a host of possible constants and possibly perform a different action for each of those different values. The C++ keywords you would often find in such a construct are switch, case, default, and break.

Each case label needs to be a constant. It then executes the code following that label. 
When the expression does not evaluate to LabelA, it checks against LabelB. 

This check continues until it encounters a break. This is the first time we are using the keyword break. break causes execution to exit the code block. 

breaks are not compulsory; however, without a break the execution simply continues checking against the next labels and so on, which is what you want to avoid in this case. default is optional, too, and is the case that is executed when the expression does not equate to any of the labels in the switch-case construct.

### Conditional Execution Using Operator (?:)

C++ has an interesting and powerful operator called the conditional operator that is similar to a compacted if-else construct. The conditional operator is also called a ternary operator as it takes three operands:

```c++
(conditional expression evaluated to bool) ? expression1 if true : expression2 if false;
```

## The while loop

The statement block is executed repeatedly so long as the expression evaluates to true. It is hence important to code in a way that there are situations where the expression would also evaluate to false, else the while loop would never end.

## The do...while Loop

There are cases where you need to ensure that a certain segment of code repeats in a loop and that it executes at least once.

## The for Loop

The for statement is a more sophisticated loop in that it allows for:
-  an initialization statement executed once (typically used to initialize a counter)
-  checking for an exit condition (typically using this counter)
-  performing an action at the end of every loop (typically incrementing or modifying this counter)

## The Range-Based for Loop

C++11 introduced a new variant of the for loop that makes operating over a range of values, such as those contained in an array, simpler to code and to read. The syntax of the range-based for loop also uses the same keyword for:

```c++
for (VarType varName : sequence) { 
    // Use varName that contains an element from sequence
}
```

## Modifying Loop Behavior Using continue and break

There are a few cases where you are not able to program the loop condition efficiently and need to modify program behavior even within the loop.

- continue lets you resume execution from the top of the loop. The code following it within the block is skipped. 

- break exits the loop’s block, thereby ending the loop when invoked.
