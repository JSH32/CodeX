# Loops

Loops allow you to execute a block of code repeatedly, making them perfect for repetitive tasks and reducing code duplication.

In C++, we mainly use three types of loops:

1. `for` loop
2. `while` loop
3. `do-while` loop

Let's explore each one in more detail!

## The `for` Loop

The `for` loop is ideal when you know how many times you want the loop to run. Its syntax includes an initialization, a condition, and an update statement.

~~~admonish example
```cpp
#include <iostream>

int main() {
    for (int i = 0; i < 5; i++) {
        std::cout << "Iteration: " << i << std::endl;
    }
}
```
This loop will print the numbers from 0 to 4. The variable `i` is initialized with a value of `0`, and as long as `i < 5`, the code inside the loop will execute, incrementing `i` by one after each iteration (using `i++`).
~~~

### The `while` Loop

The `while` loop is great when you don't know how many times the loop should run, but you do have a condition that determines when it should stop.

~~~admonish example
```cpp
#include <iostream>

int main() {
    int number = 1;

    while (number <= 10) {
        std::cout << "Number: " << number << std::endl;
        number++;
    }
    
    return 0;
}
```
This loop prints the numbers from 1 to 10. As long as the condition `number <= 10` is true, the loop will keep executing and incrementing `number`.
~~~

### The `do-while` Loop

The `do-while` loop is similar to the `while` loop, but with one key difference: it always executes the code inside the loop at least once, even if the condition is false from the start.

~~~admonish example
```cpp
#include <iostream>

int main() {
    int number;

    do {
        std::cout << "Enter a number between 1 and 10: ";
        std::cin >> number;
    } while (number < 1 || number > 10);

    std::cout << "You entered a valid number: " << number << std::endl;

    return 0;
}
```
In this example, we prompt the user for a number between 1 and 10. If they enter an invalid value, we continue asking until they provide a valid one. The code inside the loop will always execute at least once, ensuring that we have a valid input before moving on.
~~~

Go ahead and experiment with different types of loops to find out which one works best for your specific needs.