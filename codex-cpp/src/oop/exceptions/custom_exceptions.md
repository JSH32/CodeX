# Custom Exceptions

In C++, we can create our own exception classes by deriving from the standard exception classes provided by the `<stdexcept>` library. Custom exceptions allow for more specific error handling and can provide additional information about the error that occurred.

## Why Create Custom Exceptions?

Custom exceptions are beneficial when you want to:

1. **Categorize errors into more specific types** beyond the general exceptions provided by the standard library. This can make your code more readable and your error handling more tailored to specific problems.
2. **Carry more information** about the error. You can add more data members to provide details like error codes, timestamps, or context-specific messages.
3. **Enforce a certain style of exception handling** within your application or library, ensuring that all parts of your program handle errors consistently.
4. **Distinguish between internal and external library errors**, which can aid in better debugging and maintenance.

## Defining a Custom Exception

Custom exceptions are defined like any other class. They should inherit from an appropriate standard exception class, typically `std::exception` or one of its derived classes like `std::runtime_error`.

~~~admonish example title="A Custom `DivisionException` class"
```cpp
#include <stdexcept>
#include <string>

class DivisionException : public std::runtime_error {
public:
    DivisionException(const std::string& message)
        : std::runtime_error(message) {}
};
```
~~~

## Throwing a Custom Exception

To throw a custom exception, you simply `throw` an instance of your custom exception class, just like you would with a standard exception.

~~~admonish example
```cpp
throw DivisionException("Attempted division by zero");
```
~~~

## Catching a Custom Exception

Catching a custom exception is identical to catching a standard exception. You use a `catch` block that specifies the type of the custom exception.

~~~admonish example
```cpp,editable
#include <iostream>
#include <string>

class DivisionException : public std::runtime_error {
public:
    DivisionException(const std::string& message)
        : std::runtime_error(message) {}
};

int divide(int numerator, int denominator) {
    if (denominator == 0) {
        throw DivisionException("Division by zero detected");
    }
    return numerator / denominator;
}

int main() {
    try {
        int result = divide(10, 0);
        std::cout << "Result is: " << result << std::endl;
    } catch (const DivisionException& e) {
        std::cerr << "Caught a division exception: " << e.what() << std::endl;
    } catch (const std::exception& e) {
        std::cerr << "Caught a standard exception: " << e.what() << std::endl;
    }

    return 0;
}
```
In this example, if division by zero is attempted, a `DivisionException` is thrown. The `catch` block for `DivisionException` will handle this specific exception, providing a clear message about the error. If another type of exception is thrown, the more generic `std::exception` catch block can handle it.

Custom exceptions can greatly enhance the exception handling capability of your C++ application, making it easier to understand, debug, and maintain your error-handling code.