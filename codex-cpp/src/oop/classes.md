# Classes and Objects

Classes and objects are the fundamental building blocks for object-oriented programming. A class is like a blueprint, which defines attributes (members) and behaviors (methods) for creating objects. An object is an instance of a class, which represents a specific entity with its own set of attributes and behaviors.

## Class

A class can be seen as a template or blueprint that defines the structure and behavior of objects created from it. You can think of a class as a cookie cutter and objects as the individual cookies made using that cutter.

To define a class, we use the `class` keyword followed by the name of the class, then enclose the definition within curly braces `{}`.

~~~admonish example title="The `Person` class"
```cpp
class Person {
public:
    // Members (attributes)
    std::string name;
    int age;

    // Methods (behaviors)
    void introduce() {
        std::cout << "Hello, my name is " << name << " and I am " << age << " years old." << std::endl;
    }
};
```
~~~

## Object

~~~admonish tip title="The `this` keyword"
The `this` keyword in C++ classes is a special pointer that points to the object for which a member function is called. It's used inside a class's methods to reference the current object instance itself.
~~~

An object is an instance of a class. It has its own state (values for its data members) and can perform actions defined by its member functions. We can create multiple objects from one class, each with different attribute values.

To create an object from a class, we simply declare it just like any other variable type followed by the object's name:

```cpp
Person person1;
```

We can now access this object's data members and member functions using the dot operator (`.`):

```cpp
person1.name = "John";
person1.age = 25;

person1.introduce();
```

~~~admonish example
```cpp,editable
#include <iostream>
#include <string>

class Person {
public:
    // Members (attributes)
    std::string name;
    int age;

    // Methods (behaviors)
    void introduce() {
        std::cout << "Hello, my name is " << this->name << " and I am " << this->age << " years old." << std::endl;
    }
};

int main() {
    // Create an object of the Person class
    Person person1;

    // Set the values for the data members
    person1.name = "John";
    person1.age = 25;

    // Call the member function using the object
    person1.introduce();

    return 0;
}
```
In this example, we defined a `Person` class with two members (`name` and `age`) and one method (`introduce`). We then created an object `person1`, set its attributes, and called its `introduce` method.
~~~

## Arrow Operator (->) vs Dot Operator (.)

In C++, we use the dot operator `.` to access members of an object and the arrow operator `->` to access members of an object through a pointer. The arrow operator is essentially a shorthand for dereferencing a pointer and then using the dot operator.

### When to Use Arrow Operator

You would use the arrow operator when you have a pointer to an object, rather than an actual object. This is quite common in situations where memory management or object manipulation through pointers is required.

~~~admonish example
```cpp,editable
#include <iostream>
#include <string>

class Person {
public:
    // Members (attributes)
    std::string name;
    int age;

    // Methods (behaviors)
    void introduce() {
        std::cout << "Hello, my name is " << this->name << " and I am " << this->age << " years old." << std::endl;
    }
};

int main() {
    // Create an object of the Person class
    Person person1;

    // Set the values for the members
    person1.name = "John";
    person1.age = 25;

    // Call the method using the dot operator
    person1.introduce();

    // Create a pointer to the Person class
    Person* ptrPerson = &person1;

    // Access members and methods using arrow operator "->"
    ptrPerson->name = "Jane";
    ptrPerson->age = 30;
    
	ptrPerson->introduce();

	return 0;
}
```
~~~
