# The Anatomy of a C++ Program

In this lesson, you learn:
- The parts of a C++ program
- How the parts work together

## Preprocessor Directive #include

As the name suggests, a preprocessor is a tool that runs before the actual compilation starts. Preprocessor directives are commands to the preprocessor and always start with a pound sign #. 

#include \<filename> tells the  preprocessor to take the contents of the file (iostream, in this case) and include them at the line where the directive is made.

## The Body of Your Program main()

The execution of a C++ program always starts in the function main(). It is a standardized convention that function main() is declared with an int preceding it. Conventionally programmers return 0 in the event of success or –1 in the event of error. 

## The Concept of Namespaces

Namespaces are names given to parts of code that help in  reducing the potential for a naming conflict. By invoking std::cout, you are telling the compiler to use that one unique cout that is available in the std namespace.

## Comments in C++ Code

Comments do not interfere with the ability of the program to compile and are popularly used by programmers to explain their code

C++ supports comments in two styles: 
- // indicates the start of a comment, valid until the end of that line.
- /\* followed by \*/ indicates that the contained text is a comment, even if it spans multiple lines.
