# Weak Pointers

`std::weak_ptr` is a smart pointer that holds a non-owning ("weak") reference to an object that is managed by `std::shared_ptr`. It is designed to be used in conjunction with `std::shared_ptr` to overcome certain problems with shared ownership, particularly the issue of cyclic references.

## What is `std::weak_ptr`?

`std::weak_ptr` provides a way to reference an object managed by a `std::shared_ptr` without increasing its reference count. This is useful when you want to observe an object, but its existence should not influence its own lifetime.

## Key Features of `std::weak_ptr`

- **Cyclic References**: It helps to break cycles of `std::shared_ptr` that may lead to memory leaks.
- **Temporary Access**: It can be used to check if an object exists before accessing it through a `std::shared_ptr`.

## Using `std::weak_ptr`

To create a `std::weak_ptr`, you can construct it from a `std::shared_ptr`. To actually work with the underlying object, you must convert the `std::weak_ptr` to a `std::shared_ptr` using the `lock` method, which creates a shared ownership only if the managed object has not been deleted.

~~~admonish example title="Working with `std::weak_ptr`"
```cpp,editable
#include <iostream>
#include <memory>

class Example {
public:
    void showMessage() { std::cout << "Message from object." << std::endl; }
    ~Example() { std::cout << "Example object destroyed." << std::endl; }
};

int main() {
    std::weak_ptr<Example> weakPtr;

    {
        auto sharedPtr = std::make_shared<Example>();
        weakPtr = sharedPtr; // weakPtr points to "Example" object

        if (auto tempSharedPtr = weakPtr.lock()) {
            // Converts to shared_ptr to check and use the object
            tempSharedPtr->showMessage();
        } else {
            std::cout << "The object no longer exists." << std::endl;
        }
    }
    // sharedPtr goes out of scope, "Example" object is destroyed

    // Checks if the object weakPtr points to is already destroyed
    if (weakPtr.expired()) {
        std::cout << "The object has been destroyed." << std::endl;
    }

    return 0;
}
```
~~~

## Advantages of `std::weak_ptr`

- **Avoids Cyclical References**: By using `std::weak_ptr` for back-pointers, you can avoid cyclical references that cause memory leaks.
- **Safe Object Observers**: It provides a safe way to observe an object that might get deleted by another part of the program.

## Disadvantages of `std::weak_ptr`

- **No Direct Access**: You cannot directly access the object a `std::weak_ptr` refers to; you must convert it to a `std::shared_ptr` first.
- **Extra Check Required**: Before using the managed object, you have to perform an additional check to see if the object still exists.

Using `std::weak_ptr` can significantly increase the robustness of your programs when dealing with complex data structures that involve shared ownership. It is a powerful tool that should be understood and utilized to write high-quality C++ code without memory management issues.