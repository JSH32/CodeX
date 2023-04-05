# Functions in C++

In C++, functions are blocks of code that perform a specific task and can be called (or invoked) from other parts of the program. Functions make code easier to understand, maintain, and reuse by breaking the program into smaller, modular components.

## Terminology

**Function definition**: A function definition is a block of code that defines the function's behavior, including its input parameters, output, and the actual code that will be executed when the function is called.

**Function declaration**: A function declaration is a statement that provides information about the function like its name, return type, and input parameters, but not the actual implementation. It serves as an interface between the function definition and the code that calls the function.

**Function call (or invocation)**: A function call is a statement in the program that requests the execution of a specific function. When a function is called, the control is transferred to the function definition, and after the function has finished executing, the control is returned to the point in the program where the function was called.

**Parameters**: Parameters, are the input values that a function receives when it is called. They are declared within the parentheses in the function definition and function declaration. When calling a function with values these are called arguments.

**Return type**: The return type is the data type of the value that a function returns after its execution. If a function does not return any value, its return type is `void`.

## Syntax

Here is the basic syntax for declaring and defining a function in C++:

```cpp
// Function declaration (prototype)
return_type function_name(parameter_type parameter1, parameter_type parameter2);

// Function definition
return_type function_name(parameter_type parameter1, parameter_type parameter2) {
    // Function body (code to be executed)
    ...
    return value; // Optional, depending on the return type
}
```

## Example

~~~admonish example
```cpp, editable
#include <iostream>

// Function declaration
int sum(int a, int b);

int main() {
    int x = 5, y = 10;
    int result = sum(x, y); // Function call
    std::cout << "The sum is: " << result << std::endl;
    return 0;
}

// Function definition
int sum(int a, int b) {
    int total = a + b; // Function body (code to be executed)
    return total; // Return the result
}
```
In this example, we declare a function called `sum` with a return type of `int` and two input parameters of type `int`. The function definition provides the actual implementation of the `sum` function, which calculates the sum of the input parameters and returns the result. The `sum` function is called from the `main` function, and the result is printed to the console.
~~~

## Key Points

- Functions help to modularize and reuse code, making it easier to understand and maintain.
- Functions have a name, return type, and input parameters.
- Functions are declared (prototyped) before they are called and defined separately.
- The return type of a function indicates the type of value it returns after its execution. If a function does not return any value, its return type is `void`.
- Function calls transfer control to the function definition and then return control to the point in the program where the function was called.