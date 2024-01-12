# Lambda Expressions

In C++, lambda expressions are a concise way to write anonymous functions. These unnamed, small functions can be defined inline within the code where they are used, making them particularly useful for short snippets of code that are passed to algorithms or used for implementing callbacks.

Lambda expressions can capture variables from their surrounding scope, support parameter declaration, and can have a return type inferred by the compiler. They provide a powerful way to define function objects quickly.

## Syntax of Lambda Expressions

The general syntax of a lambda expression looks like this:

```cpp
[ capture_clause ] ( parameters ) -> return_type {
    // function body
}
```

Here's a breakdown of the lambda expression syntax:

- **Capture Clause (`[]`):** This part is used to specify which variables from the surrounding scope are available inside the lambda, and whether they are captured by value or by reference.
- **Parameters (`()`):** Just like regular functions, you can pass parameters to a lambda.
- **Mutable Specification (`mutable`):** If you need to modify the captured variables within the lambda, you can specify `mutable` after the parameter list.
- **Return Type (`->`):** You can specify the return type of the lambda. If omitted, it will be inferred from the return statements in the function body.
- **Function Body (`{}`):** The code to be executed when the lambda is invoked goes here.

## Examples of Lambda Expressions

### Simple Lambda Without Capture

```cpp
auto greet = []() {
    std::cout << "Hello, World!" << std::endl;
};
greet();  // Output: Hello, World!
```

### Lambda With Capture By Value

```cpp
int x = 10;
auto add_to_x = [x](int y) {
    return x + y;
};
std::cout << add_to_x(5);  // Output: 15
```

### Lambda With Capture By Reference

```cpp
int x = 10;
auto add_to_x = [&x](int y) {
    x += y; // Modifies the original 'x'
};
add_to_x(5);
std::cout << x;  // Output: 15
```

~~~admonish tip title="Be Cautious with Reference Captures in Lambdas"
When you use lambda expressions in C++, capturing local variables by reference (`&`) can lead to potential issues if the lambda outlives the scope of the variables it captures. This is similar to the problem of dangling pointers or references.

Here's an important caution: If a lambda captures variables by reference and is stored for use later—such as passing it to a function that might execute the callback asynchronously, or storing it for future use—there's a risk that the captured references will become invalid. If the function that created the local variables finishes execution, the references held by the lambda will refer to destroyed variables, leading to undefined behavior when accessed.

This might manifest as accessing a `nullptr`, segmentation faults, or other erratic behavior, because you're trying to use data that no longer exists.

**Example of Dangerous Lambda Capture by Reference:**

```cpp,editable
#include <iostream>
#include <functional>

std::function<void()> create_dangerous_lambda() {
    int local_var = 42;
    // Capture by reference is risky here!
    auto lambda = [&local_var]() {
        std::cout << local_var << std::endl; // DANGER: 'local_var' may not exist!
    };
    return lambda; // Returning lambda that keeps a reference to 'local_var'
}

int main() {
    auto dangerous_lambda = create_dangerous_lambda();
    // Now 'dangerous_lambda' holds a reference to 'local_var' which is out of scope.
    dangerous_lambda(); // UNDEFINED BEHAVIOR: Accessing a reference to a destroyed variable.
    return 0;
}
```

To avoid such issues, you can:

- Capture by value instead of by reference when you expect the lambda to outlive the scope of local variables.
- Use `std::shared_ptr` or `std::unique_ptr` for dynamic memory allocation if the lambda needs to manage the lifetime of the coped object.
- Ensure that the lifetime of the referenced variables is extended to match the lifetime of the lambda, which can be complex and is generally not recommended.

Lambda expressions are incredibly powerful, but with that power comes a responsibility to manage captured variables' lifetimes carefully to prevent unsuspecting bugs and crashes.
~~~

### Lambda With a Specified Return Type

```cpp
auto divide = [](double a, double b) -> double {
    if (b == 0) {
        throw std::runtime_error("Division by zero!");
    }
    return a / b;
};
std::cout << divide(10, 2);  // Output: 5
```

### Lambda Used as a Comparator in `std::sort`

```cpp
std::vector<int> numbers = {4, 2, 3, 1, 5};
std::sort(numbers.begin(), numbers.end(), [](int a, int b) {
    return a < b;
});
// Now 'numbers' is sorted in ascending order
```

## Advantages of Lambda Expressions

Lambda expressions are favored in modern C++ because they enable us to:

- Write shorter and cleaner code, making it more readable.
- Avoid the overhead of creating named function objects when a quick, one-time function is needed.
- Have better encapsulation and locality of behavior within the code.
- Easily work with generic programming and the Standard Template Library (STL).

With lambdas, C++ code that relies on function pointers, functors, or callbacks becomes more intuitive and manageable. Lambda expressions are therefore a powerful feature for any C++ programmer to understand and use effectively.

