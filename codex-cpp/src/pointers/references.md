# References

References are a convenient feature that allows us to create an alias for a variable. In simple terms, you can think of a reference as another name for an existing variable. When we declare a reference, it must be initialized with a variable, and once initialized, we cannot change the reference to refer to another variable.

## Why use references?

References provide an alternative to pointers when working with variables indirectly. Unlike pointers, references are safer because they cannot be `nullptr` and always refer to a valid object or variable. Additionally, the syntax for using references is cleaner and easier to read compared to pointers.

Here’s an analogy that might help you understand the concept of references better: Imagine you have two names (say "Alice" and "Bob") which both refer to the same person. If someone asks you about Alice or Bob's age, it doesn't matter which name they use because they're referring to the same person. Similarly, in C++, if you have a variable `x` and its reference `y`, both can be used interchangeably while accessing or modifying data as they point to the same memory location.

## How do we declare and use references?

To declare a reference, put an ampersand (`&`) before the reference name during declaration followed by equal sign (`=`) and then mention the variable whose alias it will be:

```cpp
int  x = 42;
int& y = x; // y is now referencing x
```

Now `y` is a reference (alias) for `x`. Any operation we perform on `y` will affect `x`

~~~admonish example title="Putting it all together"
```cpp,editable
#include <iostream>

int main() {
    int  x = 42;
    int& y = x; // y is now referencing x

    y = 10; // This assigns 10 to x through y.
    std::cout << "Value of x: " << x << std::endl; // Output: Value of x: 10
    std::cout << "Value of y: " << y << std::endl; // Output: Value of y: 10

    return 0;
}
```
~~~


## References as function arguments

One common use case for references is in function arguments. By passing a reference to a function, we can modify the original variable directly without the need for pointers or returning a new value.

~~~admonish example
```cpp,editable
#include <iostream>

void increment(int& num) {
    // This increments the variable that was passed in as an argument, not a copy.
    num++;
}

int main() {
    int x = 5;
    increment(x); // Pass x by reference to the increment function.
    std::cout << "Value of x after increment: " << x << std::endl; // Output: Value of x after increment: 6

    return 0;
}
```
In this example, we pass `x` by reference to the `increment` function. Since it's passed by reference, any changes made inside the `increment` function will affect our original variable `x`.

Try removing the reference in `increment`'s argument list, instead of passing by reference this will pass by copy and the original value will not be changed.
~~~


Remember that references must be initialized when declared and cannot be changed to refer to another object later. In other words, a reference always refers to the object with which it was initialized.