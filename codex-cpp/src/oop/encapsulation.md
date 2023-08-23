# Encapsulation and Abstraction

## Encapsulation

Encapsulation is one of the key characteristics of object-oriented programming. It refers to the bundling of data, and the methods that operate on that data, into a single unit or 'capsule'. This way, the data is not accessed directly; it is accessed through the functions present inside the class. As a result, it provides a layer of security to the data. 

Consider the analogy of a pill in which the medicine (data) is encapsulated and is not directly accessible. The coating of the pill (class methods) controls the release of medicine. You cannot take the medicine directly; you must take it through the pill(A pill with a coating that lets it dissolve slowly).

~~~admonish example title="Simple abstraction"
```cpp
class BankAccount {
private:
    int balance;
    
public:
    void deposit(int amount) {
        if (amount > 0)
            balance += amount;
    }

    void withdraw(int amount) {
        if (amount > 0 && balance > amount)
            balance -= amount;
    }

    int getBalance() {
        return balance;
    }
};
```
In the above example, the `balance` data member is private and cannot be directly manipulated. It can only be accessed and manipulated through the public methods: `deposit()`, `withdraw()`, and `getBalance()`. If attempted directly, the program will result in compile error. This is the power of Encapsulation.
~~~

## Abstraction

Abstraction is about reducing the complexity by hiding unnecessary details from the user. This allows the user to implement more complex logic while keeping things simple.

Consider a real-world example of a car. To operate a car, you need to know how to manipulate the brakes, gas pedal and steering wheel (interfaces). You do not need to know how the transmission, engine, and brakes (hidden parts) function internally. They can change and evolve independently of the person who drives the car. This concept of keeping what is necessary and hiding the inner details is called Abstraction.

In terms of programming, we achieve abstraction using interfaces and abstract classes.

Interfaces give a contract for a class to fulfill without bothering HOW it will be achieved. Just the outline of the methods is provided by the interface and the actual implementation is done in the classes.

Objects in C++ are never of an abstract class type, because such classes are meant to be inherited by other classes that implement the pure virtual function, thereby making them non-abstract.

~~~admonish example
```cpp,editable
#include <iostream>

// Abstract class
class AbstractEmployee {
    virtual void askForPromotion() = 0;
};

class Employee : AbstractEmployee {
private:
    std::string name;
    std::string company;
    int age;
public:
    void setName(std::string name) {
        this->name = name;
    }

    std::string getName() {
        return name;
    }

    void setCompany(std::string company) {
        this->company = company;
    }

    std::string getCompany() {
        return company;
    }

    void setAge(int age) {
        if (age >= 18)
            this->age = age;
    }

    int getAge() {
        return age;
    }

    // Implementation of pure virtual function.
    // Override keyword from before isn't needed
    void askForPromotion() {
        if (age > 30)
            std::cout << getName() << " got promoted!" << std::endl;
        else
            std::cout << "Sorry, No promotion for " << getName() << std::endl;;
    }

    Employee(std::string name, std::string company, int age) {
        this->name = name;
        this->company = company;
        this->age = age;
    }

};

int main() {
    Employee employee1 = Employee("Josh", "Google", 18);
    Employee employee2 = Employee("Angelina", "Google", 31);

    employee1.askForPromotion();
    employee2.askForPromotion();

    return 0;
}
```
In this example, `Employee` is the concrete class that provides the implementation for the pure virtual function in the `AbstractEmployee` abstract class.
~~~

Understanding encapsulation and abstraction can help you design your code in a better and more effective way by providing security to your data and reducing complexity.