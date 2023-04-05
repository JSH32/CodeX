# Vectors

Vectors are a powerful data structure provided by the C++ Standard Library. They can be thought of as dynamic arrays, allowing you to store elements in a linear fashion while offering the ability to easily resize them during runtime.

## Why Use Vectors?

Imagine you have a collection of items (e.g., grades of students) that needs to be stored in memory. You could use an array, but arrays have a fixed size, which means you need to know the number of elements beforehand. What if you don't know how many elements there will be? This is where vectors come into play. They automatically manage their size and can grow or shrink as needed.

Some advantages of using vectors over built-in arrays:
- Dynamic resizing
- Bounds checking (avoiding buffer overflows)
- Easy insertion and removal of elements

~~~admonish tip title="Buffer Overflows"
Buffer overflows are a type of programming error that occurs when a program writes more data to a fixed-size buffer (usually an array) than it can hold. This excess data may "overflow" into the adjacent memory locations, causing unintended consequences such as data corruption, application crashes, or even security vulnerabilities.

In C and C++, buffer overflows often result from unsafe operations on arrays or pointers without proper bounds checking. When the program attempts to write beyond the allocated space for the buffer, it may overwrite other important data in memory.
~~~

## Basic Usage

To use vectors in your program, first include the `<vector>` header:

```cpp
#include <vector>
```

Now you can create a vector by specifying its type within angle brackets `<>`:

```cpp
std::vector<int> intVector;
```

This creates an empty vector capable of storing integers.

### Adding Elements

You can add elements to the end of the vector using the `push_back()` method:

```cpp
intVector.push_back(42);
```

### Accessing Elements

To access an element at a specific index, use the `[]` operator, just like with arrays:

```cpp
int value = intVector[0]; // Accesses the first element.
```

Keep in mind that accessing an out-of-bounds index results in undefined behavior. To avoid this, use the `at()` method which throws an exception if the index is invalid

```cpp,editable
#include <iostream>
#include <vector>

int main() {
    std::vector<int> intVector;

    try {
        int value = intVector.at(5); // Throws std::out_of_range if index is invalid.
    } catch (const std::out_of_range& e) {
        std::cerr << "Invalid index: " << e.what() << std::endl;
    }
    
    return 0;
}
```

~~~admonish
Exceptions will be explained in a later section. All you need to know for now is when an exception is "thrown" or "raised" in a `try` block it needs to be caught with `catch` as shown above.
~~~

### Removing Elements

You can remove the last element of a vector by calling `pop_back()`:

```cpp
intVector.pop_back();
```

### Vector Size

To get the number of elements in a vector, use the `size()` method:

```cpp
size_t size = intVector.size(); // Returns the number of elements.
```

## Example: Storing and Displaying Grades

~~~admonish example title="Storing Grades"
```cpp,editable
#include <iostream>
#include <vector>

int main() {
    std::vector<int> grades;

    // Add some grades to the vector
    grades.push_back(85);
    grades.push_back(90);
    grades.push_back(78);

    // Print out all the grades
    for (int i = 0; i < grades.size(); ++i) {
        std::cout << "Grade " << i+1 << ": " << grades[i] << std::endl;
    }

    return 0;
}
```
In this example, we created a vector to store integer values representing student grades. We then added three sample grades using `push_back()` and printed them using a standard loop.
~~~

Remember that vectors are just one type of data structure, but they offer several advantages over built-in arrays.