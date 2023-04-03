# Statements and Expressions in C++

In C++ programming, statements and expressions are the building blocks of your code.

## Expressions

An expression is a piece of code that evaluates or calculates a value. It consists of variables, constants, and operators (`+`, `-`, `*`, `/`, etc.) combined in a meaningful way. Think of expressions as a simple math equation or a question that the program needs to answer.

Here are some examples of expressions:

```cpp
5 + 3 // add
x * y // multiply
a > b // comparison
```

## Statements

A statement, on the other hand, is a complete line of code that performs an action. It usually consists of one or more expressions joined together. Statements end with a semicolon (`;`), which tells the compiler that the line is complete.

Here are some examples of statements:

```cpp
int x = 5; // Declaration and assignment statement
x = x + 3; // Assignment statement
std::cout << x; // Output statement (or function call)
```

## Types of Statements

```admonish
Control Statements and Functions will be discussed further in the next two chapters.
```

C++ has several types of statements, including:

1. **Declaration Statements**: These statements declare and define variables and their types. For example:

    ```cpp
    int age; // Declares an integer variable named 'age'
    std::string name; // Declares a string variable named 'name'
    ```

2. **Assignment Statements**: These statements assign a value to a variable. For example:

    ```cpp
    age = 25;
    name = "John Doe";
    ```

3. **Control Statements**: These statements control the flow of your program, such as loops and conditional statements.
    For example:

    ```cpp
    if (age > 18) {
        std::cout << "You are an adult!";
    } else {
        std::cout << "You are a child!";
    }

    // Subtract age until it is no longer greater than 0.
    while (number > 0) {
        std::cout << number << std::endl;
        number--; // Equivalent to `number = number - 1;`
    }
    ```

4. **Function Call Statements**: These statements call or invoke a function in your program. For example:

    ```cpp
    int result = add_numbers(5, 3); // Calls the 'add_numbers' function with arguments 5 and 3
    ```

## Combining Statements and Expressions

In C++ programs, you'll often see expressions and statements combined. For example:

```cpp
int x = 5; // Declaration and assignment statement
int y = x * 2 + 1; // Declaration, assignment, and expression combined
```

In this example, the expression `x * 2 + 1` is combined with the declaration and assignment statement to create a new statement.