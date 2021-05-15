# Getting started

## Programming a C++ Application

---

When you start Notepad on Windows or the Terminal on Linux, you actually are telling the processor to run an executable of that program. 

The executable is the finished product that can be run and should do what the programmer intended to achieve.

## Steps to Generating an Executable

---

The basic steps in creating applications in C++ are the following:

1. Writing (or programming) C++ code using a text editor.

2. Compiling code using a C++ compiler that converts it to a machine language version contained in “object files”.

3. Linking the output of the compiler using a linker to get an executable (.exe inWindows, for example).

Compilation is the step where code in C++ is converted into byte code that the processor can execute. The compiler converts one code file at a time, generating an object file with a .o or .obj extension, ignoring dependencies that this CPP file may have on code in another file. 

The linker joins the dots and resolves these dependencies. In the event of successful linkage, it creates an executable for the programmer to execute and distribute. 

This entire process is also called building an executable.

## Analyzing Errors and Debugging

---

Most applications rarely compile and execute as intended at the first run. A huge or complex application programmed in any language needs many runs as part of a testing effort to identify errors in code, called bugs. After the bugs are fixed, the executable is rebuilt, and the testing process continues. 