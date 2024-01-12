# Stack vs Heap Memory Allocation

Understanding memory allocation is essential when diving into C++ programming. Let's explore two key areas where memory is allocated: the **stack** and the **heap**. Both serve different purposes in a program's life cycle and have various access patterns and management styles.

## Stack Memory Allocation

The stack is an area of memory that stores temporary data such as function parameters, return addresses, and local variables. It operates on a last-in, first-out (LIFO) model, which means that data added last will be the first to be removed when no longer needed.

~~~admonish example title="Local Variable on the Stack"
```cpp
void someFunction() {
    int localVar = 5; // Allocated on the stack
    // 'localVar' is only visible within 'someFunction'
} // 'localVar' is automatically deallocated when 'someFunction' returns
```
~~~


### Advantages of Stack Memory:

- **Fast Allocation**: Memory management on the stack is simple and thus very fast.
- **Automatic Memory Management**: Once the scope ends, variables on the stack are automatically deallocated.

### Disadvantages of Stack Memory:

- **Size Limitation**: Stack size is limited and can lead to stack overflow if exceeded.
- **Local Scope**: Memory on the stack can only be used within the function that allocated it.

## Heap Memory Allocation

The heap is a pool of memory used for dynamic allocation. Unlike stack variables, which are managed automatically, heap variables need to be explicitly allocated and deallocated by the programmer.

~~~admonish example title="Dynamic Allocation on the Heap"
```cpp
int* heapVar = new int; // Allocate memory for an integer on the heap
*heapVar = 5; // Store 5 in the allocated memory

// ... Use 'heapVar' as needed ...

delete heapVar; // Deallocate memory when done
```
~~~

### Advantages of Heap Memory:

- **Large Amounts of Memory**: The heap can provide large blocks of memory that would not fit on the stack.
- **Persistent until Deallocated**: Memory on the heap remains allocated until it is explicitly deallocated or the program ends.

### Disadvantages of Heap Memory:

- **Slower than Stack**: Accessing memory on the heap is slower than stack memory access.
- **Manual Management**: The programmer is responsible for allocating and deallocating heap memory, which can lead to errors.

## C-Style Memory Allocation with `malloc`

Before C++, the C language used `malloc()` to allocate memory dynamically. `malloc()` does not call constructors and therefore is not suitable for non-POD (plain old data) types in C++.

### Example: C-Style Allocation

~~~admonish example title="C-Style Allocation with malloc"
```cpp
#include <cstdlib> // Required for malloc and free

int* cStyleVar = (int*)malloc(sizeof(int)); // Allocates enough memory for an int
if (cStyleVar != nullptr) {
    *cStyleVar = 5; // Use the allocated memory to store the value 5
}

// ... Work with 'cStyleVar' ...

free(cStyleVar); // Deallocate memory with free
```
~~~

The `sizeof` operator in these examples is used to calculate the size in bytes of a type or object. In the above case, `sizeof(int)` provides the amount of memory required to store one integer.

~~~admonish info title="What does `malloc` do?"
The `malloc` function in C-style memory allocation is used for dynamically allocating a block of memory on the heap. It takes the size of the memory needed (in bytes) as a parameter, and it returns a pointer to the beginning of that block of memory.
~~~

In modern C++, `malloc` and `free` are generally discouraged. Instead, the language provides operators `new` and `delete` for dynamic memory allocation, which ensure that object constructors and destructors are properly called. For safer memory allocation, developers are further encouraged to use smart pointers which we will talk about in the next section.