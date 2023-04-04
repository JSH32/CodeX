# Arrays and Pointers

In C++, arrays and pointers are closely related, as they both deal with memory addresses. An array is a contiguous block of memory that stores multiple elements of the same data type, while a pointer is a variable that holds the address of another variable or an array element.

## Iterating through arrays
```admonish title="Calculating the size of an array"
In C++, `sizeof(arr) / sizeof(arr[0])` is a common method to calculate the number of elements in an array.

`sizeof(arr)` returns the total size (in bytes) of the array, while `sizeof(arr[0])` returns the size (in bytes) of a single element in the array.

By dividing the total size of the array by the size of a single element, you can obtain the number of elements in that array.
```

In C++, you can iterate through an arbitrary sized array using a for loop:


```cpp,editable
#include <iostream>

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int size = sizeof(arr) / sizeof(arr[0]); // Calculate the size of the array

    for (int i = 0; i < size; ++i) {
        std::cout << arr[i] << " ";
    }

    return 0;
}
```

## Relationship between Arrays and Pointers

Let's assume we have an integer array `arr`:

```cpp
int arr[5] = {1, 2, 3, 4, 5};
```

The name of the array `arr` itself points to the base address (i.e., starting address) of the array. This means that you can use a pointer to access the elements of this array.

To understand this better, consider an analogy where each element in the array is a room in a hotel. The hotel represents our memory, and each room (element) has its own unique room number (memory address). The name `arr` acts like the hotel's entrance - it tells us where the first room starts.

Now let's create an integer pointer `p` and assign it the base address of our `arr`.

```cpp
int* p = arr;
```

Here, we created a pointer `p` that points to the first element (room) in our array (hotel). Now we can use this pointer to access individual elements in the array just like using an index

## Full Example

~~~admonish example title="Putting it together"
```cpp,editable
#include <iostream>

int main() {
    int  arr[5] = {1, 2, 3, 4, 5};
    int* p = arr;

    std::cout << "First element: " << *p << std::endl;        // Output: First element: 1
    std::cout << "Second element: " << *(p + 1) << std::endl; // Output: Second element: 2

    return 0;
}
```
Notice how we used arithmetic operations on pointers (+1 for accessing next element). This brings us to our next topic, [Pointer Arithmetic](./arithmetic.md)
~~~