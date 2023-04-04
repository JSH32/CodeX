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

**Appending strings**: `append(str)` or `operator+=(str)` appends another string or character to the end of the current string.
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

**Inserting characters**: `insert(pos, str)` inserts a string or character at a specified position.

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

**Finding occurrences**: `find(str)` Searches for the first occurrence of a substring and returns its starting position. If not found, it returns the `std::string::npos` constant (or `-1`).

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

**Comparing strings**: `compare(str)` Compares two strings. Returns 0 if they're equal, a positive value if the first string is greater than the second one, and a negative value otherwise.

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

## Conclusion

`std::string` is a versatile and easy-to-use class for string manipulation in C++. It provides many functions to access, modify, search, and compare strings. Using `std::string` instead of C-style character arrays can make your code safer and more readable.