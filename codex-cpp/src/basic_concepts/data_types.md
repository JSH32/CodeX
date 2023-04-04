# Data Types

Imagine you're a chef in the kitchen, and you have many ingredients to cook with. These ingredients are like the basic building blocks for your dish. Similarly, in C++, data types are the basic building blocks for your program. They are the way we represent different kinds of data in our code, like numbers, characters, and strings (text).

## Fundamental Data Types

C++ provides several fundamental data types that can be used to represent different kinds of data. These data types can be broadly categorized into the following groups:

1. **Integer types**: These data types are used to represent integer values (whole numbers). Some examples are `int`, `short int`, `long int`, and `long long int`.
2. **Floating-point types**: These data types are used to represent real numbers (numbers with a fractional/decimal part). Examples include `float` and `double`.
3. **Character types**: These data types are used to represent single characters, like 'a' or '7'. The most common character type is `char`.
4. **Boolean type**: This data type is used to represent true or false values. It is called `bool`.

```admonish note
Each of these types has an unsigned version (e.g., `unsigned int`) that can only store positive numbers and zero. The range of unsigned types is double that of their signed counterparts because they don't need to store negative values.
```

### Integer Types

Think of integer types as the different sizes of measuring cups. They can hold varying amounts of data (or numbers). The most commonly used integer types in C++ are:

- `short int`: Can store small integer values, typically between `-32,768` and `32,767`.
- `int`: Can store a wide range of integer values, typically between `-2,147,483,648` and `2,147,483,647`.
- `long int`: Can store large integer values, typically between `-9,223,372,036,854,775,808` and `9,223,372,036,854,775,807`.
- `long long int`: Can store very large integer values, with at least the same range as `long`.

### Floating-Point Types

Floating-point types are like measuring cups with a built-in scale – they can hold both whole numbers and decimals. C++ provides two floating-point types:

- `float`: Can store single-precision floating-point numbers (about 7 decimal digits of accuracy).
- `double`: Can store double-precision floating-point numbers (about 15 decimal digits of accuracy).
- `long double`: Can store very large double-precision floating-point values.


`double` provides greater precision than `float`, but it also consumes more memory.

### Character Types

Character types are like individual letters or symbols that you can use to form words and sentences. In C++, the most common character type is `char`. It can store a single character, like `A`, `z`, or `#`.

Characters in C++ are encoded using the ASCII (American Standard Code for Information Interchange) system, which assigns a unique number to each character. This means that, under the hood, a `char` is actually an integer type that can store values between `0` and `255`.

### Boolean Type

The boolean type is like a simple light switch – it can be either on (`true`) or off (`false`). In C++, the boolean type is called `bool`.

`bool` variables can only store two values: `true` or `false`. They are commonly used to represent the outcome of a condition or to control the flow of a program.

### Pointer Types

In C++, pointers are a special type of data type that can store the memory address of another variable. They provide a way to indirectly access and manipulate the value stored at that memory address.

A pointer is declared by specifying the data type it points to, followed by an asterisk (`*`).

It is important to note that the data type specified when declaring a pointer is not the type of the pointer itself but rather the type of data it will point to. This means that `int*` is a pointer that can store the address of an `int` variable, while `char*` can store the address of a `char` variable.

We will discuss these more in a [later chapter](../pointers/index.md)


### Strings and Arrays
Arrays are a list type that stores multiples of the same item. For example, strings are an array of `char` which you would use for storing words or sentances.
This will be explored in a [later chapter](./strings_and_arrays.md), but it is reccomended to read [variables](./variables.md) first.
