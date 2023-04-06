# Multiple Inheritances

Multiple inheritance is a feature that allows a class to inherit properties and behaviors from more than one parent class. In other words, a derived class can have multiple base classes. This concept is quite similar to how an individual can inherit traits from both their mother and father.

## Basic Syntax

The syntax for multiple inheritance is quite simple; you just need to separate the base classes with commas while declaring the derived class.

```cpp
class DerivedClass: public BaseClass1, public BaseClass2 {
    // Class body
};
```

In this example, `DerivedClass` inherits from both `BaseClass1` and `BaseClass2`.

## Example

Let's create a simple program to demonstrate multiple inheritance. Suppose we want to model animals in our program, specifically birds and mammals. We'll create two base classes (`Bird` and `Mammal`) and then create a derived class called `Bat`, which is both a bird (it can fly) and a mammal (it feeds its young with milk).

~~~admonish example title="Example"
> NOTE: Bats are not *actually* birds, this is just an example.
```cpp,editable
#include <iostream>

// Base class Bird
class Bird {
public:
    void canFly() {
        std::cout << "I can fly." << std::endl;
    }
};

// Base class Mammal
class Mammal {
public:
    void canFeedMilk() {
        std::cout << "I can feed milk." << std::endl;
    }
};

// Derived class Bat inheriting from Bird and Mammal
class Bat: public Bird, public Mammal {
};

int main() {
    Bat bat;

    // Calling methods inherited from both base classes
    bat.canFly();
    bat.canFeedMilk();

    return 0;
}
```
As you can see, the `Bat` class inherited methods from both `Bird` and `Mammal`.
~~~

## Ambiguity in Multiple Inheritance

One issue that may arise with multiple inheritance is ambiguity when two or more base classes have methods with the same name. In such cases, the compiler won't know which method to call from the derived class object.

~~~admonish error title="Example"
```cpp,editable
#include <iostream>

// Base class A
class A {
public:
    void display() {
        std::cout << "Base class A" << std::endl;
    }
};

// Base class B
class B {
public:
    void display() {
        std::cout << "Base class B" << std::endl;
    }
};

// Derived class C inheriting from A and B
class C: public A, public B {
};

int main() {
    C c;

    // This line will cause a compilation error due to ambiguity
    c.display();

    return 0;
}
```
~~~

### Resolving the ambiguity
To resolve this ambiguity, you can use scope resolution operator `::` while calling the method to specify which base class method should be called:

```cpp
c.A::display(); // Calls display() method of base class A
c.B::display(); // Calls display() method of base class B
```

By using the scope resolution operator in our previous example, we can now call both `display()` methods without any ambiguity.
