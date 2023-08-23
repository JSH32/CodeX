# Operator Overloading

Operator overloading is another way of achieving polymorphism in C++. It allows you to redefine or overload most of the built-in operators available in C++. This means that operators can function in a way that is intuitive or makes more sense for a particular class.

When we use an operator on built-in data types, the compiler knows what mathematical operation is meant to be performed. But when we use them for objects, it is not clear what operation to perform unless we define these operations. That's when we overload the operators depending upon our needs. 

C++ allows you to specify more than one definition for a function name in the same scope, which is the ability of functions with the same name functioning in different ways.

~~~admonish example title="Operator Overloading"
```cpp,editable
#include <iostream>

class Complex {
public:
    int real, imag;

    Complex(int r = 0, int i = 0) {
        this->real = r;
        this->imag = i;
    }

    // Overloading the + operator
    Complex operator + (Complex const &obj) {
        Complex result;
        result.real = real + obj.real;
        result.imag = imag + obj.imag;
        return result;
    }

    void print() {
        std::cout << this->real << " + i" << this->imag << "\n";
    }
};

int main() {
    Complex c1(10, 5);
    Complex c2(2, 4);

    // An example call to "operator+"
    Complex c3 = c1 + c2;

    c3.print();

    return 0;
}
```
~~~

In the above example, the `+` operator is overloaded to perform addition on two objects of `Complex` class. We return a new object which contains the result, and then we call the `print` method to display the result.

Operator overloading makes the code more readable and writable, but misuse of it can lead to code that's challenging to understand and debug. It's essential to use it with caution and keep your overloaded operators intuitive and predictable.

## Additional Operators that can be Overloaded

Other than the addition operator we discussed earlier, C++ allows overloading of a wide range of operators such as subtraction `-`, multiplication `*`, division `/`, comparison `==` `!=` `<` `>`, increment `++`, decrement `--`, and more. Here is a selection of commonly overloaded operators and their signatures.

### Subtraction Operator `-`

Subtracts one object from another of the same class.

```cpp
ClassName operator -(const ClassName& rightOperand);
```

### Multiplication Operator `*`

Multiplies the contents of an object with another of the same class.

```cpp
ClassName operator *(const ClassName& rightOperand);
```

### Division Operator `/`

Divides the contents of one object by another of the same class.

```cpp
ClassName operator /(const ClassName& rightOperand);
```

### Equality Operator `==`

Compares one object to another and returns `true` if they are equal.

```cpp
bool operator ==(const ClassName& rightOperand);
```

### Inequality Operator `!=`

Compares one object to another and returns `true` if they are not equal.

```cpp
bool operator !=(const ClassName& rightOperand);
```

### Less Than Operator `<`

Compares one object to another and returns `true` if the left-hand side object is less than the right-hand side object.

```cpp
bool operator <(const ClassName& rightOperand);
```

### Greater Than Operator `>`

Compares one object to another and returns `true` if the left-hand side object is greater than the right-hand side object.

```cpp
bool operator >(const ClassName& rightOperand);
```

### Increment Operator `++`

Increases the value of an object.

```cpp
ClassName& operator ++(); // Prefix increment operator
ClassName operator ++(int); // Postfix increment operator
```

### Decrement Operator `--`

Decreases the value of an object.

```cpp
ClassName& operator --(); // Prefix decrement operator
ClassName operator --(int); // Postfix decrement operator
```

### Array Subscript Operator `[]`

Accesses a specific object within a collection, such as an array or list.

```cpp
ClassName& operator [](int index);
```

The operator receives an index and returns a reference to the object at the specific index in the collection.

### Dereference Operator `*`

Provides a reference to an object when we have a pointer to the object.

```cpp
ClassName& operator *();
```

The operator does not take any parameters, but it returns a reference to the object it points to. This allows it to be used in contexts where a reference to the object is required, rather than the pointer itself. 

### Dot Operator `.`

Accesses a member of an object.

```cpp
ClassName& operator .();
```
This operator is unique because it cannot be overloaded directly in a class. However, it can be effectively "overloaded" via a member function designated to handle its behavior on specific types.

### Arrow Operator `->`

Accesses a member of an object through a pointer.

```cpp
ClassName* operator ->();
```

The operator returns a pointer to a member of the object it points to, allowing it that member to be accessed directly via a pointer to an object instance. 

Remember to only overload operators where it makes logical sense in your code and can improve code readability. Overloading operators improperly can cause confusion and create bugs that are hard to trace.

Remember, when overloading operators, always make sure that the overloaded operator behaves in a meaningful way that's intuitive and consistent with the rest of your code. Improper use of operator overloading can lead to code that's confusing and hard to debug.

~~~admonish note title="Dot and arrow operators"
It should be noted, in C++, the dot operator `.` and arrow operator `->` are not directly overloadable. But we can achieve the effect of overloading the arrow operator with a smart pointer or proxy class, depending upon the context. The behavior of the dot operator can't be directly changed, but can be manipulated indirectly with the user of operator overloading on a returned object.

Here is an example of creating an overloaded arrow operator `->` by creating a smart pointer class:

```cpp,editable
#include <iostream>

class Test {
public:
    void func() {
        std::cout << "func() called" << std::endl;
    }
};

// A Smart Pointer: Overloading operators using Arrow Operator
class SmartPtr {
    Test* ptr;  // Actual pointer
public:
    SmartPtr(Test* p = nullptr) {
        ptr = p;
    }

    // Overloading dereferencing operator
    Test& operator *() {
        return *ptr;
    }

    // Overloading arrow operator so that members of Test can be accessed
    // like a pointer (useful if Test has public data members)
    Test* operator -> () {
        return ptr;
    }
};

int main() {
    SmartPtr ptr(new Test());
    ptr->func();
   
    return 0;
}
```

In the `SmartPtr` class, we overloaded the arrow operator. When we create an object of this proxy class and access the member function `func()`, it essentially provides access to the `Test` class member function, allowing it to be used like the traditional dereference-and-dot (`->`) operator.
~~~