# Shared Pointers

`std::shared_ptr` is another type of smart pointer provided by the C++ standard library to manage dynamically allocated objects. Unlike `std::unique_ptr`, `std::shared_ptr` allows multiple shared pointers to point to the same object. The object is automatically destroyed and its memory deallocated when the last `std::shared_ptr` owning it is destroyed or reset.

## The Concept of Reference Counting

`std::shared_ptr` uses an internal reference count mechanism to keep track of how many `std::shared_ptr` instances own the same resource. When a new `std::shared_ptr` is created from another, the reference count is incremented. When a `std::shared_ptr` is destructed, the count is decremented. Once the count reaches zero, meaning no `std::shared_ptr` owns the resource, the resource is destroyed.

## Advantages of `std::shared_ptr`

- **Shared Ownership**: The resource can be shared by multiple `std::shared_ptr` instances, enabling more flexible memory management.
- **Automatic Memory Management**: Like `std::unique_ptr`, `std::shared_ptr` automatically releases the memory when no longer needed.
- **Thread Safe**: The reference count mechanism is thread-safe (except for simultaneous reads and writes to the same `std::shared_ptr`).

## Usage of `std::shared_ptr`

Use `std::make_shared` to create a `std::shared_ptr`. This function will allocate the object and initialize the reference count.

~~~admonish example title="Creating a `std::shared_ptr`"
```cpp,editable
#include <iostream>
#include <memory>

int main() {
    std::shared_ptr<int> sharedPtr1 = std::make_shared<int>(10);
    std::cout << "sharedPtr1 Value: " << *sharedPtr1 << std::endl;

    {
        // Create another shared pointer sharing ownership of the same int
        std::shared_ptr<int> sharedPtr2 = sharedPtr1;
        std::cout << "sharedPtr2 Value: " << *sharedPtr2 << std::endl;
        // Both sharedPtr1 and sharedPtr2 are owners now
    }

    // sharedPtr2 is out of scope and is destroyed, but the int remains as sharedPtr1 still owns it

    std::cout << "sharedPtr1 Value after sharedPtr2 is destroyed: " << *sharedPtr1 << std::endl;
    // When main exits, sharedPtr1 is also destroyed, and the managed int is deallocated
    return 0;
}
```
~~~

It's important to note that `std::make_shared` is more efficient than separately allocating the object and the internal control block because it can perform a single heap allocation for both, reducing the overhead and improving performance.

## Caveats with `std::shared_ptr`

While `std::shared_ptr` is quite powerful, it's important to be aware of potential pitfalls:

- **Cyclic References**: If circular references are created (e.g., two or more `std::shared_ptr` instances own each other directly or indirectly), the reference count can't reach zero, leading to memory leaks.
- **Performance Overhead**: The extra control block, reference counting, and thread-safe increment/decrement operations introduce overhead compared to `std::unique_ptr`.

## Using Custom Deleters

`std::shared_ptr` and `std::unique_ptr` can both be used with a custom deleter.

~~~admonish example title="Custom Deleter with `std::shared_ptr`"
```cpp,editable
#include <iostream>
#include <memory>

struct Resource {
    ~Resource() { std::cout << "Resource freed." << std::endl; }
};

int main() {
    auto deleter = [](Resource* r) {
        std::cout << "Custom deleter called." << std::endl;
        delete r;
    };

    std::shared_ptr<Resource> sharedPtr1(new Resource, deleter);
    std::shared_ptr<Resource> sharedPtr2 = sharedPtr1; // sharedPtr2 shares ownership
    // Resources are freed when the last shared_ptr (sharedPtr2) goes out of scope.
    return 0;
}
```
This example will call the deleter when the `std::shared_ptr` goes out of scope. By default it will just call the desctructor.
~~~

`std::shared_ptr` is an incredibly versatile tool. By understanding how to properly create, use, and avoid pitfalls with `std::shared_ptr`, you can safely manage shared resources in complex C++ applications.