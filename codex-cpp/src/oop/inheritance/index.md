# Inheritance

Inheritance is a fundamental concept in object-oriented programming (OOP) that allows you to create a new class (called the derived class) from an existing class (called the base class). The derived class inherits properties and behavior from the base class, allowing you to reuse code and model real-world relationships between objects.

~~~admonish tip title="The `protected` keyword"
The `protected` keyword is one of the access specifiers used in C++ to control the visibility and accessibility of class members (variables, methods, etc.). It lies between `public` and `private` access specifiers in terms of accessibility. A protected member can be accessed within its own class and inherited classes (derived from it).
~~~

Imagine a simple example with animals. All animals share some common characteristics like eating, sleeping, and moving. So, we can create a base class called `Animal` that contains these common behaviors. Then, if we want to create specific animal classes like `Dog` or `Cat`, they can inherit from the `Animal` class and automatically have those common behaviors without needing to redefine them.

~~~admonish example
```cpp,editable
#include <iostream>

// Base class
class Animal {
public:
    void eat() {
        std::cout << "I can eat!" << std::endl;
    }

    void sleep() {
        std::cout << "I can sleep!" << std::endl;
    }
};

// Derived class
class Dog : public Animal {
public:
    void bark() {
        std::cout << "I can bark! Woof woof!" << std::endl;
    }
};

int main() {
    Dog dog1;

    // Calling base class function using derived class object
    dog1.eat();
    dog1.sleep();

    // Calling derived class function
    dog1.bark();

    return 0;
}
```
This example demonstrates how the `Dog` derived class inherits the `eat()` and `sleep()` functions from the `Animal` base class. You don't need to define these functions again in the `Dog` class; they are automatically available through inheritance.
~~~

The `public` keyword is used before specifying the base class (`Animal`). This indicates how members of the base class are accessible in the derived class. There are three access specifiers:
1. `public`: Base class's public and protected members become public in the derived class.
2. `protected`: Base class's public and protected members become protected in the derived class.
3. `private` (default if not specified): Base class's public and protected members become private in the derived class.

## Overriding Methods in C++

In C++, method overriding is a feature that allows a derived class (child class) to provide a new implementation for an existing method declared in its base class (parent class). This concept is crucial when it comes to achieving polymorphism - one of the four fundamental principles of object-oriented programming.

### How to Override Methods

To override a method, simply declare and define it with the same name and parameters as in the base class but with different functionality inside the derived class.

~~~admonish example
```cpp,editable
#include <iostream>

// Base Class
class Animal {
public:
    void speak() {
        std::cout << "The animal makes a sound" << std::endl;
    }
};

// Derived Class
class Dog : public Animal {
public:
    // Override speak() function
    void speak() {
        std::cout << "The dog barks" << std::endl;
    }
};

int main() {
    Dog myDog;
    myDog.speak();  // Output: The dog barks

    return 0;
}
```
~~~