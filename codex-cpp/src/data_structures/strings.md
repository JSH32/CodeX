# Strings & String Functions

`std::string` is a powerful class in the C++ Standard Library that represents a sequence of characters. It's an alternative to C-style character arrays (like `char[]`) and provides many helpful functions for string manipulation.

To use `std::string`, you need to include the `<string>` header file:

```cpp,editable
#include <iostream>
#include <string>

int main() {
    std::string hello = "Hello world!";
    std::cout << hello << std::endl;

    return 0;
}
```

~~~admonish warning title="Custom Operators"
In C++, custom operators, also known as operator overloading, allow us to define how built-in operators like `+`, `-`, `*`, `/`, and `[]` will work with our user-defined types. Simply put, we can create our own implementation of these operators to make them behave the way we want when used with our custom objects.

In the `std::string` class, you may see custom operators. In the upcoming sections, we will dive deeper into the concept of custom operators and explore how to implement them in various scenarios.
~~~

## Common String Methods

### Length and Capacity

**Length or Size**: `length()` or `size()` returns the number of characters in the string.
```cpp,editable
#include <iostream>
#include <string>

int main() {
    std::string s = "hello";
    std::cout << s.length();  // Output: 5

    return 0;
}
```

**Empty**: `empty()` returns `true` if the string has no characters, otherwise `false`.
```cpp,editable
#include <iostream>
#include <string>

int main() {
    std::string emptyString = "";
    if (emptyString.empty()) {
        std::cout << "The string is empty!" << std::endl;
    }

    return 0;
}
```

### Accessing Characters

**Indexing characters**: `at(index)` or `operator[](index)` returns a reference to the character at a given position. Indices start from 0, just like arrays.
```cpp,editable
#include <iostream>
#include <string>

int main() {
    std::string str = "hello";
    char first = str.at(0);        // 'h'
    char second = str.operator[](1); // 'e'
    char third = str[2];             // 'l'

    std::cout << first << std::endl;
    std::cout << second << std::endl;
    std::cout << third << std::endl;

    return 0;
}
```
*Note: Using an index out of bounds will result in undefined behavior.*

### Modifying Strings

**Appending strings**: `append(std::string)` or `operator+=(std::string)` appends another string or character to the end of the current string.
```cpp,editable
#include <iostream>
#include <string>

int main() {
    std::string greeting = "Hello ";
    greeting.append("world!");          // "Hello world!"
    greeting += "! How are you today?"; // "Hello world! How are you today?"

    std::cout << greeting << std::endl;

    return 0;
}
```

**Inserting characters**: `insert(pos, std::string)` inserts a string or character at a specified position.

```cpp,editable
#include <iostream>
#include <string>

int main() {
    std::string message = "We love C";
    message.insert(7, "++"); // "We love C++"

    std::cout << message << std::endl;

    return 0;
}
```

**Erasing characters**: `erase(pos, count)` Erases `count` characters from the position `pos`. If `count` is not provided, it erases all characters until the end of the string.

```cpp,editable
#include <iostream>
#include <string>

int main() {
    std::string text = "I like bananas";
    text.erase(7, 8); // "I like"

    std::cout << text << std::endl;

    return 0;
}
```

### Searching and Comparing

**Finding occurrences**: `find(std::string)` Searches for the first occurrence of a substring and returns its starting position. If not found, it returns the `std::string::npos` constant (or `-1`).

```cpp,editable
#include <iostream>
#include <string>

int main() {
    std::string sentence = "C++ is fun!";
    size_t pos = sentence.find("fun");
    if (pos != std::string::npos) {
        std::cout << "Found 'fun' at position: " << pos << std::endl;
    }

    return 0;
}
```

**Comparing strings**: `compare(std::string)` Compares two strings. Returns 0 if they're equal, a positive value if the first string is greater than the second one, and a negative value otherwise.

```cpp,editable
#include <iostream>
#include <string>

int main() {
    std::string s1 = "apple", s2 = "banana";
    int result = s1.compare(s2);
    if (result == 0) {
        std::cout << "s1 equals s2" << std::endl;
    } else if (result > 0) {
        std::cout << "s1 is greater than s2" << std::endl;
    } else {
        std::cout << "s1 is less than s2" << std::endl;
    }

    return 0;
}
```

## C-style Strings and String Functions

C-style strings are a way to represent character sequences in C++ using arrays of characters. These strings are terminated by a special character called the null terminator (`\0`). The null terminator indicates the end of the string and is essential for various string manipulation functions.

### Declaring C-style Strings

You can declare and initialize a C-style string in several ways:

1. Using an array with size specification:
```cpp
char str[6] = "Hello";
```

2. Without specifying the size, let the compiler determine it:
```cpp
char str[] = "Hello";
```

3. As a pointer to a constant character sequence (not modifiable):
```cpp
const char* str = "Hello";
```

Remember that when declaring an array, one extra space is needed for the null terminator.

### Basic String Functions

C++ provides several useful functions for manipulating C-style strings, which are available by including the `<cstring>` header file.

Here are some common string functions:

- `strlen(str)`: returns the length of `str` (excluding the null terminator).
- `strcpy(dest, src)`: copies the contents of `src` (including null terminator) into `dest`.
- `strcat(dest, src)`: appends `src` at the end of `dest`.
- `strcmp(str1, str2)`: compares two strings lexicographically; returns 0 if equal, <0 if `str1` comes before `str2`, >0 otherwise.

~~~admonish example
```cpp,editable
#include <iostream>
#include <cstring>

int main() {
    const char* greeting = "Hello";
    char name[] = "Alice";

    // Calculate lengths
    std::cout << "Length of greeting: " << strlen(greeting) << std::endl;
    std::cout << "Length of name: " << strlen(name) << std::endl;

    // Concatenate strings
    char combined[12];
    strcpy(combined, greeting);
    strcat(combined, ", ");
    strcat(combined, name);
    std::cout << "Combined: " << combined << std::endl;

    // Compare strings
    if (strcmp(name, "Alice") == 0) {
        std::cout << "Name is Alice" << std::endl;
    } else {
        std::cout << "Name is not Alice" << std::endl;
    }

    return 0;
}
```
~~~

## String Views

### What is std::string_view?

`std::string_view` is a lightweight, read-only view into a sequence of characters (i.e., a string). It was introduced in C++17 as an efficient way to work with strings without creating copies or modifying the original string. You can think of `std::string_view` as a window that allows you to look into a string and perform various operations on it without actually making any changes.

### Why use std::string_view?

1. **Performance**: Since `std::string_view` does not own its data and only provides a view into the underlying string, no memory allocation or deallocation is involved when working with it. This makes it faster than using `std::string` in many cases.
2. **Flexibility**: `std::string_view` can work with different types of strings like null-terminated C-style strings, `std::string`, or even custom string classes.
3. **Read-only**: As `std::string_view` is read-only, it ensures that the original string remains unmodified during operations. This allows it to cache it's length instead of calling `strlen` repeatedly.

### How to use std::string_view?

To use `std::string_view`, you need to include the `<string_view>` header:

~~~admonish example
```cpp,editable
#include <iostream>
#include <string>
#include <string_view>

int main() {
    std::string myString = "Hello, World!";
    std::string_view myStringView(myString);

    // Print both the original string and the string view
    std::cout << "Original String: " << myString << std::endl;
    std::cout << "String View: " << myStringView << std::endl;

    return 0;
}
```
In this example, we create a `std::string`, and then create a `std::string_view` that refers to the same sequence of characters. When we print both the original string and the string view, they display the same content.
~~~

### Using std::string_view with functions

You can use `std::string_view` as an parameter in a function that works with strings. This makes your code more efficient and flexible

~~~admonish example
```cpp,editable
#include <iostream>
#include <string>
#include <string_view>

// Function that takes a std::string_view an argument.
void printLength(std::string_view str) {
    std::cout << "Length of '" << str << "' is: " << str.length() << std::endl;
}

int main() {
    std::string myString = "Hello, World!";
    const char* myCString = "Hello, C++!";
    
    // Call the function with different types of strings
    printLength(myString);
    printLength(myCString);
    printLength("This is a literal");

    return 0;
}
```
In this example, we define a function `print_length()` that accepts a `std::string_view` and prints its length. We then call this function using both `std::string` and a C-style string (null-terminated character array). The output shows the correct length for both types of strings without owning or copying the memory holding the string's data.
~~~

Remember that since `std::string_view` is read-only, you should not use it if you need to modify the string or if you need to store it beyond the lifetime of the original string. In those cases, you should stick to using `std::string`. Primarily, `std::string_view` is used for consuming the content of a string (eg. string arguments). However, it also plays a crucial role in manipulating the string's view by performing complex substring-like operations. This becomes particularly relevant in parsing tasks where expensive string operations are carried out, such as removing prefixes or utilizing indices. By using `std::string_view`, one can efficiently abstract these calculations without creating new strings in the process.