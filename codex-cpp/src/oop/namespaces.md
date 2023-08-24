# Namespaces

Just as we organize files in directories to avoid name clashes, we use namespaces in C++ to avoid name conflicts in our program. A namespace is a declarative region that provides a scope to the identifiers (the names of types, functions, variables, etc) inside it. They allow us to group named entities that otherwise would have global scope into narrower scopes, giving them namespace scope.

## Declaring Namespaces

To declare a namespace, we use the `namespace` keyword followed by the name we want for our namespace and a body enclosed in `{}`.

```cpp
namespace MyNamespace {
    // code declarations
}
```

Inside the namespace, you can declare variables, functions, classes and even another namespace, known as a nested namespace.

## Using Namespaces

To access the code inside a namespace, we use the scope resolution operator `::`. So, if we wanted to access a variable `x` inside `MyNamespace`, we would do `MyNamespace::x`.

~~~admonish example title="Example of using declared namespace"
```cpp,editable
#include <iostream>

namespace MyNamespace {
    int x = 5;
}

int main() {
    std::cout << MyNamespace::x << '\n';

    return 0;
}
```
~~~

## Using Directives

We can include an entire namespace in our code with using the `using` keyword. However, this approach is generally not recommended for large programs, as it can lead to name conflicts. Particularly, using `using namespace std;` is considered a bad practice, as it may lead to conflicts with names in the standard library.

```cpp
using namespace MyNamespace;
```

After doing above, you can access variables directly - `x` instead of `MyNamespace::x`.

## Using Declarations

If you only need one or two items from a namespace, you can introduce them into your code with `using` followed by the fully qualified name.

```cpp
using MyNamespace::x;
```

Just like with the using directive, you'd now be able to access `x` directly.

## Namespace Aliases
If you're working with namespaces that have long or complicated names, you can create an alias to make it easier to write:

```cpp
namespace MN = MyNamespace;
```
Now you can use `MN::x` instead of `MyNamespace::x`.

Namespaces are an effective way to avoid naming conflicts in large programs, especially when using multiple libraries. However, care should be taken when introducing entire namespaces into your program to avoid potential naming conflicts.