# ML Programming language

Objective:

Learn the *fundamental concepts* that appear in one form or another in almost every programming language and how these concepts fit together to provide what programmers need in a language.

## ML Expressions and Variable Bindings

An ML program is a *sequence of bindings*.
Each binding gets *type-checked* and then *evaluated*.

The type of a binding depends on a *static environment*, which is roughly the types of the preceding bindings in the file. Sometimes *context* is used as a synonym for static environment.

Evaluation of a binding depends on a *dynamic environment*, which is roughly the values of the preceding bindings in the file.

A *value* is an expression that has *no more computation to do* (there is no way to simplify it). All values are expressions, but not all expressions are values.

---

A *variable binding* in ML has this syntax:

```ml
val x = e;
```
**val** is a *keyword*, **x** can be any *variable*, and **e** can be any *expression*.

### To type-check a variable binding:
1. use the *current static environment* to type-check e
2. produce a *new static environment* (current environment + variable x having type t, where t is the type of e).

```sml
(* static environment: x : int *)
val x = 10;

(* static environment: x : int, y : int *)
val y = x + 10;

(* static environment: x : int, y : int, z : bool *)
val z = x < y;
```

### To evaluate a variable binding:
1. use the *current dynamic environment* to evaluate e 
2. produce a *new dynamic environment* (the current environment + variable x having the value v, where v is the result of evaluating e).

```sml
(* dynamic environment: x --> 10 *)
val x = 10;

(* dynamic environment: x --> 10, y --> 20 *)
val y = x + 10;

(* dynamic environment: x --> 10, y --> 20, z --> true *)
val z = x < y;
```

---

Integer constants:
- Syntax: a sequence of digits.
- Type-checking: type int in any static environment.
- Evaluation: to itself in any dynamic environment (it is a value).

Addition:
- Syntax: e1+e2 where e1 and e2 are expressions.
- Type-checking: type int but only if e1 and e2 have type int in the same static environment, else does not type-check.
- Evaluation: evaluate e1 to v1 and e2 to v2 in the same dynamic environment and then produce the sum of v1 and v2.

Variables:
- Syntax: a sequence of letters, underscores, etc.
- Type-checking: look up the variable in the current static environment and use that type.
- Evaluation: look up the variable in the current dynamic environment and use that value.

Conditionals:
- Syntax is if e1 then e2 else e3 where e1, e2, and e3 are expressions.
- Type-checking: using the current static environment, a conditional type-checks only if (a) e1 has type bool and (b) e2 and e3 have the same type. The type of the whole expression is the type of e2 and e3.
- Evaluation: under the current dynamic environment, evaluate e1. If the result is true, the result of evaluating e2 under the current dynamic environment is the overall result. If the result is false, the result of evaluating e3 under the current dynamic environment is the overall result.

Boolean constants:
- Syntax: either true or false.
- Type-checking: type bool in any static environment.
- Evaluation: to itself in any dynamic environment (it is a value).

Less-than comparison:

- Syntax: e1 < e2 where e1 and e2 are expressions.
- Type-checking: type bool but only if e1 and e2 have type int in the same static environment, else does not type-check.
- Evaluation: evaluate e1 to v1 and e2 to v2 in the same dynamic environment and then produce true if v1 is less than v2 and false otherwise.

---

Bindings are *immutable*. 
We produce a *dynamic environment* where x maps to a value, 
and in this environment, x will always map to this specific value. 

You can have another binding later using the same variable,
but that just creates a different environment where the later binding for x *shadows* the earlier one. 

```sml
val a = 10;

(*  a : int
    a -> 10 *)

val b = a * 2

(*  b : int
    b -> 20 
    b is bound to 20 and not related to "a" in any way*)

val a = 5

(*a -> 5, b -> 20*)

val c = b

(* a -> 5, b -> 20, c -> 20 *)
```

## Important

Whenever you learn a new construct in a programming language, you should ask these three
questions: 
1. What is the syntax? 
2. What are the type-checking rules? 
3. What are the evaluation rules?

## Function Bindings

A function is something that is called with arguments and has a body that produces a result.

A *function binding* in ML has this syntax:

```sml
fun x0 (x1 : t1, ..., xn : tn) = e
```

This function named x0 takes n arguments x1, ... xn of types t1, ..., tn and has an expression e for its body. The result of calling x0 is the result of evaluating e.

```sml
(* The function is named "pow" and it has two arguments "x" and "y", both of type int. *)
fun pow(x: int, y: int) =
    if y = 0
    then 1
    else x * pow(x, y-1)
```

### To type-check a function binding:

To type-check a function binding, we type-check the body e.
This is done in a static environment that in addition to all the earlier bindings, maps x1 to t1, ... xn to tn and x0 to t1 * ... * tn -> t.

```sml
val a = 10;
val b = a * 2;
(* static environment: a -> int, b -> int *)

fun pow(x: int, y: int) = if y = 0 then 1 else x * pow(x, y-1)
(* static environment: ..., x -> int, y -> int *)


```

The syntax of a function type is “argument types” -> “result type” where the argument types are separated by *.

```sml
(* pow = fn: int * int -> int *)
fun pow(x: int, y: int) = if y = 0 then 1 else x * pow(x, y-1)
```

### To evaluate a function binding:

A *function is a value* -- we simply add x0 to the environment as a function that can be called later. 

As expected for recursion, x0 is in the dynamic environment in the function body and for subsequent bindings.

### Function calls:

The syntax for calling a function is:

```sml
e0 (e1,...,en)
```

The *typing rules* require that e0 has a type that looks like t1 \* ... \* tn -> t and for 1 <= i <= n, ei has type ti.

For the *evaluation rules*, we use the dynamic environment at the point of the call to evaluate e0 to v0, e1 to v1, ..., en to vn. 

Then v0 must be a function (it will be assuming the call type-checked) and we evaluate the function’s body in an environment extended such that the function arguments map to v1, ..., vn.


```sml
val res = pow(2, 4); (* val res = 16 : int *)
```

## Pairs and Other Tuples

Programming languages need ways to build compound data out of simpler data.

The *syntax* to build a pair is (e1,e2) which evaluates e1 to v1 and e2 to v2 and
makes the pair of values (v1,v2), which is itself a value.

The *type* of a pair is (t1 \* t2) where t1 is the type of the first part and t2 is the type of the second part.

The *typing rule* for (#1 e) or (#2 e) should not be a surprise: e must have some type that looks like (ta \* tb) and then (#1 e) has type **ta** and (#2 e) has type **tb**.

### Examples

```sml
fun swap(pr: int * bool) = 
    (#2 pr, #1 pr)

fun sum_two_pairs(pr1: int * int, pr2: int * int) =
    (#1 pr1) + (#1 pr2) + (#2 pr1) + (#2 pr2)
```

### Tuples

ML supports tuples by allowing any number of parts. 

```sml
(e1, e2, e3, e4, ..., en)
```

For example, a 3-tuple of integers (7,9,11) has type int \* int \* int. You retrieve the parts with #1 e, #2 e, and #3 e where e is an expression that evaluates to a triple.

## Lists

ML has *lists*, which are more *flexible* than pairs because they can have *any length*, but *less flexible* because all the elements of any particular list must have the *same type*.

The empty list, with syntax [], has 0 elements. It is a value, so like all values it evaluates to itself immediately.
It can have type t list for any type t, which ML writes as ’a list (pronounced “quote a list” or “alpha list”). In general, the type t list describes lists where all the elements in the list have type t. That holds for [] no matter what t is.

A non-empty list with n values is written [v1,v2,...,vn]. You can make a list with [e1,...,en] where each expression is evaluated to a value.

### Add Elements in Lists

```sml
e1 :: e2, pronounced “e1 consed onto e2.” 
```

Here e1 evaluates to an “item of type t” and e2 evaluates to a “list of t values” and the result is a new list that starts with the result of e1 and then is all the elements in e2.

### Functions on Lists

1. null evaluates to true for empty lists and false for nonempty lists.
2. hd returns the first element of a list, raising an exception if the list is empty.
3. tl returns the tail of a list (a list like its argument but without the first element), raising an exception if the list is empty.

### Examples

```sml
fun sum_list (xs : int list) =
    if null xs
    then 0
    else hd(xs) + sum_list(tl xs)

fun countdown (x : int) =
    if x=0
    then []
    else x :: countdown(x-1)

fun append (xs : int list, ys : int list) =
    if null xs
    then ys
    else (hd xs) :: append(tl xs, ys)
```

## Let Expressions

*Let-expressions* are crucial for *style* and for *efficiency*. A let-expression lets us have local bindings of any sort, including function bindings, anywhere an expression can be.

*Syntactically*, a let-expression is:

```sml
let b1 b2 ... bn in e end
```

The type-checking and semantics of a let-expression are much like the semantics of the top-level bindings in our ML program. 

We evaluate each binding in turn, creating a larger environment for the subsequent
bindings.

### Examples

```sml
fun countup_from1_better (x:int) =
    let fun count (from:int) =
        if from=x
        then x::[]
        else from :: count(from+1)
    in
        count 1
    end
```

```sml
fun good_max (xs : int list) =
    if null xs
    then 0 (* note: bad style; see below *)
    else if null (tl xs)
    then hd xs
    else
        (* for style, could also use a let-binding for hd xs *)
        let 
            val tl_ans = good_max(tl xs)
        in
            if hd xs > tl_ans
            then hd xs
            else tl_ans
        end
```

## Options

The previous example does not properly handle the empty list — it returns 0. This is bad style because 0 is really not the maximum value of 0 numbers. 

There is no good answer, but we should deal with this case reasonably. Let’s change the return type to either return the maximum number or indicate the input list was empty so there is no maximum.

The ML library has “options” which are a precise description: 
an option value has either 0 or 1 thing: 
1. **NONE** is an option value “carrying nothing”. The type of NONE is ’a option.
2. **SOME e** evaluates *e* to a value *v* and becomes the option carrying the one value v. The type of SOME e is t option if e has type t.

1. We have *isSome* which evaluates to false if its argument is NONE.  
2. We have *valOf* to get the value carried by SOME (raising an exception for NONE).

### Examples

```sml
fun better_max2 (xs : int list) =
    if null xs
    then NONE
    else 
        let (* fine to assume argument nonempty because it is local *)
            fun max_nonempty (xs : int list) =
                if null (tl xs) (* xs must not be [] *)
                then hd xs
                else 
                    let val tl_ans = max_nonempty(tl xs)
                    in
                        if hd xs > tl_ans
                        then hd xs
                        else tl_ans
                    end
        in
            SOME (max_nonempty xs)
        end
```

## Some Other Expressions and Operators

- e1 andalso e2 is logical-and
- e1 orelse e2 is logical-or
- not e is logical-negation
- = is logical-equality
- <> logical-iniquality
- ~ negation

## The Pieces of a Programming Language

Now that we have learned enough ML to write some simple functions and programs with it, we can list the essential “pieces” necessary for defining and learning any programming language:
- **Syntax**: How do you write the various parts of the language?
- **Semantics**: What do the various language features mean? For example, how are expressions evaluated?
- **Idioms**: What are the common approaches to using the language features to express computations?
- **Libraries**: What has already been written for you? How do you do things you could not do without library support (like access files)?
- **Tools**: What is available for manipulating programs in the language (compilers, read-eval-print loops, debuggers, ...)