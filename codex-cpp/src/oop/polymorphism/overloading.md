# Method Overloading

Method Overloading is a type of static or compile-time polymorphism. It allows multiple functions with the same name but different parameters, to be defined within the same scope. When you call an overloaded function, the compiler determines the most appropriate function to execute by examining the number, types and order of the arguments. 

~~~admonish note title="Remember"
Method overloading differs from a function. Overloaded methods must reside within the same class.
~~~

Here is how we achieve method overloading

~~~admonish example title="Method Overloading"
```cpp,editable
#include <iostream>

class Rectangle {
public:
    // Method with no parameters
    void display() {
        std::cout << "Displaying Rectangle" << std::endl;
    }

    // Method with 1 parameter
    void display(int a) {
        std::cout << "Displaying Square: " << a << std::endl;
    }

    // Method with 2 parameters
    void display(int a, int b) {
        std::cout << "Displaying Rectangle: " << a << " and " << b << std::endl;
    }
};

int main() {
    Rectangle r;

    // Calling the display method without parameters
    r.display();

    // Calling the display method with 1 parameter
    r.display(10);

    // Calling the display method with 2 parameters
    r.display(10, 5);

    return 0;
}
```
~~~

In the above example, the first `display()` method is called when there are no parameters, the second `display(int a)` method is called when there is one integer parameter, and the third `display(int a, int b)` method is called when there are two integer parameters.

This is how method overloading helps to implement polymorphism in C++.
