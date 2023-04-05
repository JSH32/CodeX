# Input/Output

## Streams: The Rivers of Data

Imagine your program as an island surrounded by streams (rivers) that bring data to it and take data away from it. These rivers are like communication channels between your program and the outer world, including devices such as keyboards, monitors, files, and more! In C++, these "rivers" are called **streams**.

There are three main types of streams:

1. **Input Stream (`istream`)** - Brings data into your program from various sources.
2. **Output Stream (`ostream`)** - Takes data from your program and sends it to different destinations.
3. **I/O Stream (`iostream`)** - A combination of input and output streams for bidirectional communication.

## The Journey Begins: `iostream`

Before we dive into the fun part (coding), let's understand some essential tools for I/O operations in C++. We need two magical keys from the `iostream` library:

- `cin`: Our trusty friend for reading input data.
- `cout`: Our reliable companion for displaying output data.

> You may have seen this in previous chapters. 

To include these keys in our program, simply add this line at the beginning:

```cpp
#include <iostream>
```

## Talking to Your Program: Reading Input

Let's start by making our program ask for our name! To do that, we use `cin`, followed by the extraction operator (`>>`).

Here's how you can read a user's name:

```cpp
#include <iostream>
#include <string>

int main() {
    std::string name;
    
    std::cout << "What is your name? ";
    std::cin >> name;

    return 0;
}
```

In this example, we first declared a variable `name` of type `std::string`. Then, using `cin`, we read the input and stored it in the `name` variable.

## Sharing Your Thoughts: Displaying Output

Now that we have our user's name, let's greet them! This time, we'll use `cout` followed by the insertion operator (`<<`).

Here's how you can display a greeting message:

```cpp
#include <iostream>
#include <string>

int main() {
    std::string name;
    
    std::cout << "What is your name? ";
    std::cin >> name;

    std::cout << "Hello, " << name << "! Nice to meet you!" << std::endl;

    return 0;
}
```

In this example, we used `cout` to display a greeting message containing the user's name. We also added `std::endl`, which creates a newline character, making our output more organized.

## Putting It All Together: Let's Chat!

Congratulations! You've learned the basics of Input/Output in C++. As a reward for your efforts, let's create a mini-chat program where users can send messages and receive automatic responses:

```cpp
#include <iostream>
#include <string>

int main() {
    std::string username;
    std::string message;

    // Introduce ourselves and ask for their username
    std::cout << "Welcome to C++ Chatbot!" << std::endl;
    std::cout << "Please enter your username: ";
    std::cin >> username;

    // Start the chat loop
    while (true) {
        // Read user's message
        std::cout << username << ": ";
        std::cin.ignore();
        std::getline(std::cin, message);

        // Exit the chat if they type "bye"
        if (message == "bye") {
            break;
        }

        // Generate an automatic response
        std::cout << "Chatbot: I hear you, " << username << "! You said: \"" 
                  << message << "\"." << std::endl;
    }

    return 0;
}
```

And there you have it! A simple chatbot using C++.

## C-style Input/Output

C-style input/output (I/O) refers to the methods of handling data input and output in C++, derived from the C programming language. These I/O functions are provided by the `cstdio` library, which is a part of the C++ Standard Library. In this section, we will explore two basic functions for reading and writing data: `printf` for output and `scanf` for input.

### Output with printf

`printf` is a function used to print formatted text to the console. It takes a format string as its first argument, followed by a variable number of additional arguments (if needed). The format string contains placeholders that are replaced by the corresponding values specified in the additional arguments.

~~~admonish example
```cpp
#include <cstdio>

int main() {
  int age = 25;
  double height = 6.1;

  // Printing an integer value
  printf("I am %d years old.\n", age);

  // Printing a floating-point value with one decimal place
  printf("I am %.1f feet tall.\n", height);

  return 0;
}
```
In this example, `%d` is used as a placeholder for an integer value, while `%.1f` is used as a placeholder for a floating-point value rounded to one decimal place.
~~~

### Input with scanf

`scanf` is a function used to read formatted data from the console. Like `printf`, it takes a format string as its first argument; however, instead of printing values, it reads them from user input and stores them into specified variables.

It's essential to use the address-of operator (`&`) when passing variables to `scanf`, because it needs memory addresses in order to store values properly.

~~~admonish example
```cpp,editable
#include <cstdio>

int main() {
  int age;
  double height;

  // Reading an integer value
  printf("Enter your age: ");
  scanf("%d", &age);

  // Reading a floating-point value
  printf("Enter your height (in feet): ");
  scanf("%lf", &height);

  // Printing the entered values
  printf("You are %d years old and %.1f feet tall.\n", age, height);

  return 0;
}
```
In this example, `%d` is used as a placeholder for reading an integer value, while `%lf` is used as a placeholder for reading a floating-point value, `%s` is a string placeholder.
~~~
