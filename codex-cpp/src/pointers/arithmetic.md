# Pointer Arithmetic

Pointer arithmetic allows you to perform operations on pointers to manipulate memory addresses directly. Although it may seem complicated at first, understanding the basics of pointer arithmetic can greatly improve your ability to work with arrays and memory in C++. In this section, we will discuss the basics of pointer arithmetic and provide some examples to help you understand the concept.

## What is Pointer Arithmetic?

In simple terms, pointer arithmetic is performing mathematical operations (addition or subtraction) on pointers. When you perform these operations on pointers, you're effectively changing the memory address the pointer points to.

Let's use an analogy to better understand this concept: Imagine that a street has houses numbered sequentially (e.g., 1001, 1002, 1003...). If you're standing in front of house number 1001 and take one step forward (pointer + 1), you'll be in front of house number 1002; if you take one step back (pointer - 1), you'll be back at house number 1000.

Similarly, when we add or subtract from a pointer, we're moving forward or backward in memory addresses.

~~~admonish
It's important to note that when performing pointer arithmetic, adding or subtracting a value `n` from a pointer will actually change its address by `n * sizeof(type)` bytes. This means that if your pointer is pointing to an integer (`int*`), and `sizeof(int)` is typically 4 bytes, adding `1` will increase the address by 4 bytes.
~~~

## Basic Pointer Arithmetic Operations

Here are some basic operations with examples:

### Addition

You can add an integer value to a pointer:

```cpp
int arr[] = {10, 20, 30};
int* ptr = arr; // Pointing to the first element of arr

ptr = ptr + 2; // Now pointing to the third element of arr (arr[2])
```

### Subtraction

You can subtract an integer value from a pointer:

```cpp
int arr[] = {10, 20, 30};
int* ptr = arr + 2; // Pointing to the third element of arr

ptr = ptr - 1; // Now pointing to the second element of arr (arr[1])
```

### Pointer Difference

You can find the difference between two pointers of the same type:

```cpp
int arr[] = {10, 20, 30};
int* start_ptr = &arr[0]; // Pointing to the first element of arr
int* end_ptr = &arr[2];   // Pointing to the third element of arr

ptrdiff_t diff = end_ptr - start_ptr; // diff is now equal to 2
```

~~~admonish title="What is `ptrdiff_t`?"
`ptrdiff_t` type is a base signed integer type of C/C++ language. The type's size is chosen so that it could store the maximum size of a theoretically possible array of any type. On a 32-bit system `ptrdiff_t` will take 32 bits, on a 64-bit one 64 bits.
Pointers are integers and their sizes depend on your system, similarly, `ptrdiff_t`'s size also depends on your system.
~~~

## Why Use Pointer Arithmetic?

One common use case for pointer arithmetic is working with arrays. Since an array in C++ is stored as a contiguous block of memory, you can use pointer arithmetic to iterate through it and access its elements more efficiently than using indexing.

~~~admonish example title="Iterating through an array using pointer arithmetic"
```cpp,editable
#include <iostream>

int main() {
    int arr[] = {10, 20, 30};
    int* ptr;

    for (ptr = &arr[0]; ptr != &arr[3]; ++ptr) {
        std::cout << *ptr << " ";
    }

    return 0;
}
```
In this example, we initialize `ptr` with the address of the first element in `arr`. Then, we loop until `ptr` reaches one past the last element (`&arr[3]`). Inside the loop, we print out each element by dereferencing `ptr`.
~~~

Understanding and utilizing pointer arithmetic in your programs will help you manage memory more effectively and write efficient code when dealing with arrays or other data structures.
