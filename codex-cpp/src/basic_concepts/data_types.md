# Data Types

Imagine you're a chef in the kitchen, and you have many ingredients to cook with. These ingredients are like the basic building blocks for your dish. Similarly, in C++, data types are the basic building blocks for your program. They are the way we represent different kinds of data in our code, like numbers, characters, and strings (text).

## Fundamental Data Types

C++ provides several fundamental data types that can be used to represent different kinds of data. These data types can be broadly categorized into the following groups:

1. **Integer types**: These data types are used to represent integer values (whole numbers). Some examples are `int`, `short`, `long`, and `long long`.
2. **Floating-point types**: These data types are used to represent real numbers (numbers with a fractional/decimal part). Examples include `float` and `double`.
3. **Character types**: These data types are used to represent single characters, like 'a' or '7'. The most common character type is `char`.
4. **Boolean type**: This data type is used to represent true or false values. It is called `bool`.

### Integer Types

Think of integer types as the different sizes of measuring cups. They can hold varying amounts of data (or numbers). The most commonly used integer types in C++ are:

- `byte`: Can only store `0` or `1`, the smallest possible data type.
- `short`: Can store small integer values, typically between `-32,768` and `32,767`.
- `int`: Can store a wide range of integer values, typically between `-2,147,483,648` and `2,147,483,647`.
- `long`: Can store large integer values, typically between `-9,223,372,036,854,775,808` and `9,223,372,036,854,775,807`.
- `long long`: Can store very large integer values, with at least the same range as `long`.

Each of these types has an unsigned version (e.g., `unsigned int`) that can only store positive numbers and zero. The range of unsigned types is double that of their signed counterparts because they don't need to store negative values.

### Floating-Point Types

Floating-point types are like measuring cups with a built-in scale – they can hold both whole numbers and decimals. C++ provides two floating-point types:

- `float`: Can store single-precision floating-point numbers (about 7 decimal digits of accuracy).
- `double`: Can store double-precision floating-point numbers (about 15 decimal digits of accuracy).

`double` provides greater precision than `float`, but it also consumes more memory.

### Character Types

Character types are like individual letters or symbols that you can use to form words and sentences. In C++, the most common character type is `char`. It can store a single character, like `A`, `z`, or `#`.

Characters in C++ are encoded using the ASCII (American Standard Code for Information Interchange) system, which assigns a unique number to each character. This means that, under the hood, a `char` is actually an integer type that can store values between `0` and `255`.

### Boolean Type

The boolean type is like a simple light switch – it can be either on (`true`) or off (`false`). In C++, the boolean type is called `bool`.

`bool` variables can only store two values: `true` or `false`. They are commonly used to represent the outcome of a condition or to control the flow of a program. Booleans are also stored the same way as bytes.

### Strings and Arrays
Arrays are a list type that stores multiples of the same item. For example, strings are an array of `char` which you would use for storing words or sentances.
This will be explored in a [later chapter](./strings_and_arrays.md), but it is reccomended to read [variables](./variables.md) first.
