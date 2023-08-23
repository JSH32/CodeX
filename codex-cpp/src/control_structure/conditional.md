# Conditional Statements

These allow you to control the flow of your program based on certain conditions. With conditional statements, you can add logic and decision-making capabilities to your code.

## What are Conditional Statements?

Conditional statements are used to decide whether a specific block of code should be executed or not, depending on whether a certain condition is true or false. They form the backbone of many algorithms and programs.

In C++, we mainly use three types of conditional statements:

1. `if` statement
2. `if-else` statement
3. `switch` statement

Let's dive into each one in more detail!

## The `if` Statement

The simplest type of conditional statement is the `if` statement. It checks if a condition is true, and if so, executes the code inside its block.

~~~admonish example
```cpp, editable
#include <iostream>

int main() {
    int age = 17;

    if (age >= 18) {
        std::cout << "You are eligible to vote!";
    }

    return 0;
}
```
In this case, since `age` is less than 18, nothing will be printed.
~~~

## The `if-else` Statement

The `if-else` statement adds another branch for when the condition is false.


~~~admonish example
```cpp, editable
#include <iostream>

int main() {
    int age = 17;

    if (age >= 18) {
        std::cout << "You are eligible to vote!";
    } else {
        std::cout << "You are not eligible to vote yet.";
    }

    return 0;
}
```

In this case, since `age` is less than 18, the message "You are not eligible to vote yet." will be printed.
~~~

## The `switch` Statement

The `switch` statement is used when you need to make a decision based on multiple discrete values of a variable. It's a cleaner alternative to using multiple nested `if-else` statements.

~~~admonish example
```cpp, editable
#include <iostream>

int main() {
    int day = 3;

    switch (day) {
        case 1:
            std::cout << "Monday";
            break;
        case 2:
            std::cout << "Tuesday";
            break;
        case 3:
            std::cout << "Wednesday";
            break;
        default:
            std::cout << "Invalid day number!";
    }

    return 0;
}
```

In this case, since `day` is equal to `3`, the output will be `"Wednesday"`.
~~~

## Ternary Operator
The ternary operator in C++ is a shorthand way of writing simple `if...else` statements. It's called "ternary" because it involves three operands.

It takes the following form:

```cpp
condition ? expression_if_true : expression_if_false
```

If `condition` is true, then `expression_if_true` is evaluated and returned. Otherwise, `expression_if_false` is evaluated and returned.

~~~admonish example title="Ternary"
```cpp,editable
#include <iostream>

int main() {
    int a = 10;
    int b = 20;

    int min = (a < b) ? a : b;

    std::cout << min << std::endl;

    return 0;
}
```
~~~


In this example, the `a < b` condition checks if `a` is less than `b`. If so, it evaluates to `a` (the expression before the colon), and `a` is assigned to `min`. If the condition `a < b` is false (meaning `b` is less than `a`), then the expression after the colon (`b`) is evaluated and assigned to `min`.

This is an extremely useful operator that can help simplify your code when working with simple conditional expressions.
