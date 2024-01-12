# Use of `try`, `catch`, and `throw`

In C++, error handling is an essential aspect of program design. When an error occurs within a program, we want to handle it gracefully rather than allowing the program to crash. To address errors, C++ provides a mechanism known as exception handling, which is built around three keywords: `try`, `catch`, and `throw`.

Exception handling allows a program to catch and handle errors in a controlled way. It separates the error-handling code from the regular code, making your code cleaner and easier to maintain. Moreover, it provides a way to pass an error up the call stack, potentially allowing for a higher-level function to handle the problem if the current context cannot.

## The `try` Block

A `try` block defines a section of code in which exceptions may occur. It is followed by one or more `catch` blocks. When an exception is thrown within the `try` block, control is transferred to the appropriate `catch` block where the error can be addressed.

~~~admonish info title="Try block structure"
```cpp
try {
    // Code that might throw an exception
} 
```
~~~

## The `throw` Keyword

To signal that an error has occurred, we use the `throw` keyword followed by an exception object. The exception object can be of any type, but it's often an instance of `std::exception` or a subclass thereof.

~~~admonish example title="Throwing an exception"
```cpp
throw std::runtime_error("An error has occurred");
```
~~~

## The `catch` Block

A `catch` block catches an exception thrown from a `try` block and contains code to handle the error. Each `catch` block is associated with a type of exception, which it is equipped to handle.

~~~admonish info title="Catch block structure"
```cpp
catch (ExceptionType& e) {
    // Code to handle the exception
}
```
~~~

## Why Use Exception Handling Over Other Methods

Prior to exceptions, errors were commonly handled using return codes or global error flags that had to be checked after every operation that could fail. This leads to cluttered code, as error handling is mingled with regular logic, and it's easy to forget to check a return code, leading to unhandled errors.

Exception handling centralizes error-handing code and separates it from the main logic, making it more readable and maintainable. It also allows errors to "bubble up" to higher levels where they can be handled appropriately instead of requiring immediate handling after every operation.

Exception handling is also a clear signal of handling "exceptional" circumstances that are not expected to happen often, which distinguishes it from regular control flow.

## Example: Using `try`, `catch`, and `throw`

Let's imagine we have a function that divides two numbers. However, division by zero is an error in mathematics, and thus we should handle it as an exception in our code.

~~~admonish example "A simple division function with exception handling"
```cpp,editable
#include <iostream>
#include <stdexcept> // For std::runtime_error

int divide(int numerator, int denominator) {
    if (denominator == 0) {
        throw std::runtime_error("Division by zero error");
    }
    return numerator / denominator;
}

int main() {
    try {
        int result = divide(10, 0);
        std::cout << "Result is: " << result << std::endl;
    } catch (const std::runtime_error& e) {
        std::cerr << "Caught an exception: " << e.what() << std::endl;
    }

    return 0;
}
```
When running this code, the division by zero will throw an exception, which is then caught and handled in the `catch` block, printing the error message without crashing the program.

By building your C++ applications with consistent and thoughtful use of exception handling, you can ensure they are more robust, easier to debug, and provide clear and helpful feedback to the user or other developers working on the codebase.
~~~

## Understanding the Call Stack and Exception Propagation
The call stack is an important concept in the execution of a program; it's a stack data structure that keeps track of active subroutines (or functions) within the program. This is the place where the program stores information about the sequence of function calls that are in progress, ensuring that each function returns control to the function that called it.

Here's a step-by-step explanation on how the call stack works:

1. When a function is called, an entry is made on the top of the call stack—this entry is often called a "stack frame" or "activation record."
2. This stack frame contains information such as the function's parameters, its local variables, and the address in the code to return to when the function exits.
3. Once a function completes its task, its stack frame is "popped" off the call stack, and the program resumes execution at the return address that was stored in the popped stack frame.

Now, when it comes to exceptions and the call stack:

- When an exception is thrown using the `throw` keyword, it disrupts the normal sequential execution of code.
- The runtime system starts unwinding the call stack, checking for a `catch` block that can handle the thrown exception. This is often referred to as "exception propagation" or "stack unwinding."
- As the unwinding occurs, if the current stack frame has no `catch` block that matches the exception, it is popped off the call stack, and the runtime looks in the next stack frame.
- This process continues "up" the call stack until a suitable `catch` block is found. If no such block is encountered and the exception reaches the main function, then the default behavior is that the program will terminate.

By using exception handling with `try`, `catch`, and `throw`, you allow your program to handle errors at the most appropriate level within the call stack, without cluttering lower-level functions with error-handling logic that is better handled by higher-level functions. This approach leads to cleaner, more modular, and more maintainable code.
