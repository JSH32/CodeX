## Header Files

While learning C++, you'll often come across the term "header files." In this section, we will discuss what header files are, why they are essential, and how to use them effectively in your C++ programs.

### What are header files?

Header files are simply text files with the extension `.h` or `.hpp` that contain declarations of functions, classes, variables, constants, and other elements that you want to share across multiple source files (`.cpp` files) in your program. They allow you to separate the implementation (the actual code) from the interface (the declarations) of your program.

In other words, header files act as an interface that tells the compiler what functions, classes, and other elements are available for use without actually providing the implementation. This makes your code more organized, modular, and easier to maintain.

### Why are header files important?

Header files play a crucial role in C++ programming for several reasons:

1. **Modularity**: By separating the declarations and implementations, you can create more maintainable and reusable code. Other developers can easily understand and use your code by looking at the header files without going through the entire implementation.

2. **Code Sharing**: Header files allow you to share code between multiple source files, reducing code duplication and making your program more efficient.

3. **Easier Compilation**: When you modify a source file, only that file needs to be recompiled, not the entire program. If you didn't use header files, any change to a function or class would require recompiling every file that uses it.

### How to use header files in C++?

To use header files in your C++ program, you need to follow these steps:

1. **Create a header file**: Create a new text file with the extension `.h` or `.hpp`. You can use any text editor to create a header file.

2. **Add declarations**: Add the declarations of the functions, classes, variables, and other elements that you want to share across multiple source files in your program.

3. **Include the header file**: In the source files (`.cpp` files) where you want to use the elements declared in the header file, use the `#include` directive followed by the name of the header file enclosed in double quotes (`"`) or angle brackets (`< >`). For example:

   ```cpp
   #include "my_header_file.h"
   ```

   or

   ```cpp
   #include <my_header_file.hpp>
   ```

   The double quotes are used for including custom header files that you create, while the angle brackets are mainly used for including standard library header files.

4. **Implement the declared elements**: In a separate source file (`.cpp` file), provide the implementation for the elements declared in the header file.

### Example

> `my_math_functions.h` (header file)
> 
> ```cpp
> // Function declarations
> int add(int a, int b);
> int subtract(int a, int b);
> ```

> `my_math_functions.cpp` (source file with implementation)
> 
> ```cpp
> #include "my_math_functions.h"
>
> // Function implementations
> int add(int a, int b) {
>     return a + b;
> }
>
> int subtract(int a, int b) {
>     return a - b;
> }
> ```

> `main.cpp` (source file that uses the functions)
>
> ```cpp
> #include <iostream>
> #include "my_math_functions.h"
>
> int main() {
>     int a = 10, b = 5;
>     std::cout << "Sum: " << add(a, b) << std::endl;
>     std::cout << "Difference: " << subtract(a, b) << std::endl;
>     return 0;
> }
> ```

In this example, we have created a header file `my_math_functions.h` that contains the declarations for two functions `add` and `subtract`. We include this header file in both the implementation file `my_math_functions.cpp` and the `main.cpp` file, which uses the functions.

By using header files, we have separated the declarations and implementations of the functions, making our code more organized and easier to maintain.