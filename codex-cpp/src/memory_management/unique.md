# Unique Pointers

Smart pointers are a key feature of modern C++ that handle the allocation and deallocation of memory for you. `std::unique_ptr` is particularly useful because it manages a dynamically allocated object and automatically deletes the object when the `std::unique_ptr` goes out of scope.

## Benefits of `std::unique_ptr`

- **Automatic Resource Management**: Automatically frees the associated memory without needing explicit `delete` calls.
- **Exclusive Ownership**: Ensures there's exactly one owner for the allocated memory, avoiding potential issues with multiple deletions.
- **Move Semantics**: Enables safe transfer of ownership from one `std::unique_ptr` to another.

## Creating and Using `std::unique_ptr`

Use `std::make_unique` to create a `std::unique_ptr` in a safe and convenient way.

### Example: Using `std::make_unique`

~~~admonish example title="Creating a `std::unique_ptr`"
```cpp,editable
#include <iostream>
#include <memory>

int main() {
    auto uniquePtr = std::make_unique<int>(10); // Create a unique_ptr managing an int
    std::cout << "Value: " << *uniquePtr << std::endl; // Use the managed object
    // uniquePtr is automatically freed when going out of scope
    return 0;
}
```
~~~

`std::make_unique` is the preferred method to create a `std::unique_ptr` because it ensures memory safety, even in cases where exceptions might occur.

## Transferring Ownership with Move Semantics

Since `std::unique_ptr` cannot be copied, the ownership of the managed memory can be transferred using move semantics, by using the `std::move` function.

### Example: Moving a `std::unique_ptr`

~~~admonish example title="Transferring Ownership"
```cpp,editable
#include <iostream>
#include <memory>

void processPointer(std::unique_ptr<int> ptr) {
    std::cout << "Processing value: " << *ptr << std::endl;
    // ptr will be automatically freed when the function scope ends
}

int main() {
    auto owner = std::make_unique<int>(20);
    processPointer(std::move(owner)); // Moves the ownership to processPointer

    if (owner) {
        std::cout << "Owner still has the unique_ptr." << std::endl;
    } else {
        std::cout << "Owner no longer has the unique_ptr." << std::endl;
    }

    // Safe to exit main, no manual delete needed
    return 0;
}
```
~~~

~~~admonish tip title="What Are Move Semantics?"
Move semantics in C++ allow you to efficiently transfer ownership of resources (like dynamically allocated memory) from one object to another. Instead of copying the data, moving an object transfers its internal data to a new object and leaves the original object in a valid but unspecified state (often empty or null). This process is especially important for managing resources in a safe and performance-optimized manner.
~~~

Remember, when using `std::unique_ptr`, no need to worry about `delete`, thanks to its automatic memory management. This smart pointer ensures that your dynamically allocated memory is released when it’s no longer needed, which helps you to avoid memory leaks and keep your resource management clean and straightforward.