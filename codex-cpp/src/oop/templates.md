# Templates


One of the powerful features of C++ is its support for templates. Templates are a tool for generic programming, which allows the programmer to write code that can handle any type, not just a single, predetermined type.

Consider a situation where you want to create a function to compare two integers, and another function to compare two floats. Though the logic would exactly be the same, due to the difference in data type, we will need two functions. This leads to redundant code. Here is where Templates step-in.

A template is a blueprint or formula for creating a generic class or a function. The library containers like iterators and algorithms are examples of generic programming and have been developed using template concept. There is a single definition of each container, such as vector, but we can define many different kinds of vectors for example, vector <int> or vector <T>.

## Function templates

Function templates allow you to create a single function that can be used with different types of data. Let's say you're writing a function to find the maximum of two numbers, you'd likely start with an integer function:

```cpp
int max(int a, int b) {
    return (a > b)? a : b;
}
```

But what if you want to find the maximum of two floating-point numbers or even two characters? One approach could be writing separate functions for each type, but it's not practical. Instead, you could use a function template!

~~~admonish example title="Template function example"
```cpp,editable
#include <iostream>

// template function max
template <typename T>
T max(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    int i1 = 5;
    int i2 = 10;

    float f1 = 5.5;
    float f2 = 10.5;

    char c1 = 'a';
    char c2 = 's';

    // call function template with int, float and char types
    std::cout << "Max of " << i1 << " and " << i2 << " is " << max(i1,i2) << std::endl;
    std::cout << "Max of " << f1 << " and " << f2 << " is " << max(f1,f2) << std::endl;
    std::cout << "Max of " << c1 << " and " << c2 << " is " << max(c1,c2) << std::endl;

    return 0;
}
```
In this example, the word `template` introduces a template function. `T` is a placeholder for data type - it represents whatever type you will use when you call the function. Note, that `T` is by convention, you could use any valid placeholder naming.
To use this function, you just call it with the data type replaced with `T`:
~~~

## Class templates

Just like function templates, class templates allow you to create a single class definition that works with different data types.

Let's say you want to create a simple `Box` class that stores items of any type:

```cpp
template <typename T>
class Box {
    T item;

public:
    void setItem(T newItem) {
        item = newItem;
    }

    T getItem() {
        return item;
    }
};
```

You can then create objects of various 'types' from this class:

~~~admonish example title="Template class example"
```cpp,editable
#include <iostream>
#include <string>

// template class Box
template <typename T>
class Box {
    T item;

public:
    void setItem(T newItem) {
        item = newItem;
    }

    T getItem() {
        return item;
    }
};

int main() {
    // Box that stores integer
    Box<int> intBox;
    intBox.setItem(123);
    std::cout << "Integer stored in box: " << intBox.getItem() << std::endl;

    // Box that stores string
    Box<std::string> stringBox;
    stringBox.setItem("Hello World");
    std::cout << "String stored in box: " << stringBox.getItem() << std::endl;

    return 0;
}
```
~~~

A key thing to remember here is templates are expanded at compile time like macros. The compiler does type checking before template expansion, i.e., at compile time.

Templates provide a way to re-use your code with both built-in types (like `int`, `float`, etc.) and user-defined types. They're a powerful tool for saving time and reducing code redundancy, but also require careful use due to increased compilation time.