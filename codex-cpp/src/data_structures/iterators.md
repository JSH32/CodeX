# Iterators

Iterators allow us to access and navigate through elements in various container classes, such as arrays, vectors, and maps. You can think of an iterator as a cursor that points to an element within a container, allowing you to access its value or even modify it.

## Basic Usage

The most common way to use iterators is with loops. Let's say we have a vector of integers and want to print each element:

```cpp,editable
#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    
    for (std::vector<int>::iterator it = numbers.begin(); it != numbers.end(); ++it) {
        std::cout << *it << " ";
    }
    
    return 0;
}
```

Here we are using an iterator `it` of type `std::vector<int>`. We initialize the iterator with `numbers.begin()` which returns an iterator pointing to the first element in the vector. The loop then continues until the iterator reaches `numbers.end()`, which represents one past the last element of the vector. You can also do this with a range based for loop.

Inside the loop body, we use `*it` (dereference operator) to access the value pointed by the iterator. This prints out each integer separated by a space: `1 2 3 4 5`.

~~~admonish tip title="Auto Keyword"
C++11 introduced the `auto` keyword which allows us to simplify our code by automatically deducing variable types based on their return type.
```cpp,editable
#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};

    for (auto it = numbers.begin(); it != numbers.end(); ++it) {
        std::cout << *it << " ";
    }

    return 0;
}
```
~~~

## Conclusion

Iterators provide a consistent way to interface with different container types while maintaining code readability and simplicity. They are not limited to vectors and can be used with other containers which we will explain in future sections.