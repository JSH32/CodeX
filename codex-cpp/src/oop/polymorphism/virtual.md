# Virtual Functions

A critical characteristic of polymorphism in C++ is achieved through the use of virtual functions. A `virtual` function is a member function that we expect to be redefined in derived classes. When we refer to a derived class object using a pointer or a reference to the base class, we can call a virtual function for that object and execute the derived class's version of the function. This mechanism is commonly known as "late binding" or "dynamic binding".

Declare a function in the base class as `virtual` when it is intended to be overridden in any derived class.

~~~admonish example title="Virtual Function"
```cpp,editable
#include <iostream>

// Base class
class Base {
public:
    virtual void print() {
        std::cout << "This is base class print function." << std::endl;
    }
};

// Derived class
class Derived : public Base {
public:
    void print() override {
        std::cout << "This is derived class print function." << std::endl;
    }
};

int main() {
    Base* basePtr;
    Derived derivedObj;

    // Point base class pointer to derived class object
    basePtr = &derivedObj;

    // Call print function using base class pointer
    // It calls derived class print function due to virtual function
    basePtr->print();

    return 0;
}
```
~~~

In the above example, `print()` function is declared `virtual` in the base class and overridden in the derived class. When we use a base class pointer pointing to a derived class object and call the `print()` function, it runs the derived class's `print()` function. This is because the `print()` function is declared as `virtual` in the base class, which generates a late binding.

By marking a method as `virtual`, we signal the compiler to ensure that the correct method is called according to the actual type of the object, not the type of the pointer or reference that is used to call the function.

This powerful feature allows us to work abstractly with groups of related classes and permits the exact behavior to be determined by the dynamic type of the objects themselves. This is a central concept of many large-scale, OOP designs and frameworks.

## Abstract Functions and Polymorphism

An abstract function is a virtual function that we declare in the base class and has no definition relative to the base class. A class containing at least one abstract function also becomes abstract, and you cannot create objects from it.

Let's modify our previous code to demonstrate abstract functions and casting for polymorphism.

~~~admonish example
```cpp,editable
#include <iostream>

// Base class
class AbstractBase {
public:
    virtual void print() = 0; // Pure virtual function makes this class Abstract class
};

// Derived class
class Derived : public AbstractBase {
public:
    void print() override {
        std::cout << "This is derived class print function." << std::endl;
    }
};

int main() {
    // Pointers to abstract class type
    AbstractBase* basePtr;
    Derived derivedObj;

    // Point base class pointer to derived class object
    basePtr = &derivedObj;

    // Call print function using base class pointer - calls derived class function
    basePtr->print();

    // Now we use casting and you will see that dynamic binding still applies.
    basePtr = static_cast<AbstractBase*>(&derivedObj);
    basePtr->print(); // Still prints "This is derived class print function."

    return 0;
}
```
In this example, `print()` is a pure virtual function (or abstract function) in the `AbstractBase` class and overridden in the `Derived` class. We cannot create objects of an abstract class, but we can create pointers of the `AbstractBase` class type. When this pointer points to a `Derived` class object, and we call the `print()` function, it calls the `Derived` class's `print()` function, demonstrating the dynamic binding nature of virtual functions.

The casting does not change the dynamic binding. Even after casting the `derivedObj` into an `AbstractBase` type pointer, when we call the `print()` function via the `basePtr`, the derived class function is called. 
~~~

C++ Polymorphism allows us to use derived class objects just like their base class, making it easier to write more efficient code.