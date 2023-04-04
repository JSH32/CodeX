# Jump Statements

Jump statements allow you to control the flow of your program by transferring execution to another part of your code. They are especially useful when working with loops and conditional statements.

In C++, we have four main types of jump statements:

1. `break`
2. `continue`
3. `return`
4. `goto`

Let's jump into each one in more detail!

### The `break` Statement

The `break` statement is used to exit a loop or a `switch` statement prematurely, skipping any remaining iterations or cases.

~~~admonish example
```cpp
#include <iostream>

int main() {
    for (int i = 0; i < 10; i++) {
        if (i == 5) {
            break;
        }
        std::cout << "Iteration: " << i << std::coutendl;
    }

    return 0;
}
```
In this example, the loop will only print the numbers from 0 to 4. When `i` reaches `5`, the `break` statement will be executed, and the loop will terminate immediately.
~~~


### The `continue` Statement

The `continue` statement is used to skip the current iteration of a loop and move on to the next one, ignoring any code that comes after it in the loop body.

~~~admonish example
```cpp
#include <iostream>

int main() {
    for (int i = 0; i < 10; i++) {
        if (i % 2 == 1) {
            continue;
        }

        std::cout << "Even number: " << i <<std:: endl;
    }

    return 0;
}
```
In this example, we're printing even numbers between 0 and 9. When encountering an odd number (`i % 2 ==1`), the `continue` statement skips the rest of the code inside the loop and proceeds directly to the next iteration.
~~~

### The `return` Statement

The `return` statement is used to exit a function and return a value to the caller. It can also be used to jump out of loops and conditional statements within a function. You will become more familiar with `return` in the next section.

### The `goto` Statement

The `goto` statement is used to transfer control to another part of your code. While it can be useful in some cases, it's generally discouraged due to its potential to make code harder to read and maintain.

~~~admonish example
```cpp
#include <iostream>

int main() {
    int count = 0;

start:
    count++;
    std::cout << "Iteration: " << count << std::endl;
  
    if (count < 5) {
        goto start;
    }

    std::cout << "Finished!" << std::endl;
  
    return 0;
}
```
In this example, the `goto` statement transfers control back to the `start:` label after each iteration until `count` reaches `5`. It's essentially creating a loop without using regular loop constructs.
~~~

While jumps can be powerful tools when used effectively, remember that readability and maintainability should always be prioritized when writing code.