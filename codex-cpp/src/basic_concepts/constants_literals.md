# Constants and Literals

## Constants

Constants are like unwavering pillars that hold up your code structure. They are fixed values that never change throughout the execution of a program. Once you declare a constant, it remains steady and immovable.

You might wonder why we need constants when we have variables. Well, imagine if all the pillars in your building were made out of shape-shifting material! Sounds chaotic, right? In programming too, sometimes you want to ensure that certain values remain steadfast and unaffected by any changes during runtime.

To create a constant in C++, you use the `const` keyword before declaring a variable:

```cpp
const int speedOfLight = 299792;
```

Now you can be confident that `speedOfLight` will always remain constant at `299792 km/s` throughout your program!

## Literals

Literals are like the most basic units in our construction analogy - think of them as individual bricks or planks of wood. They represent fixed values directly written into your code without any accompanying names or identifiers.

Literals can be classified into several categories based on their data types:

1. **Integer literals**: These are whole numbers without any decimal points or fractional parts.
   ```cpp
   42    // An integer literal (the meaning of life)
   -100  // Another integer literal
   ```

2. **Floating-point literals**: These represent real numbers with decimal points or exponents.
   ```cpp
   3.14        // A floating-point literal
   -0.001      // Another floating-point literal
   6.022e23    // Scientific notation for large/small numbers (Avogadro's number!)
   ```

3. **Character literals**: These are single characters enclosed within single quotes.
   ```cpp
   'A'     // A character literal
   '9'     // Another character literal (yes, even digits can be characters!)
   '\n'    // An escape sequence representing a newline character
   ```

4. **String literals**: These are sequences of characters enclosed within double quotes.
   ```cpp
   "Hello, World!"          // A string literal
   "C++ is awesome!"        // Another string literal
   "I'm Craving nachos\n"   // String literals can also contain escape sequences!
   ```

5. **Boolean literals**: There are only two Boolean literals: `true` and `false`.
   ```cpp
   true     // A Boolean literal representing truthiness!
   false    // A Boolean literal representing falseness :(
   ```

```admonish warning
Depending on your experience level, the last two below may not make any sense. We will talk more about this in future chapters.
```

6. **Pointer literals**: A pointer literal represents a null pointer value, which is a special value indicating that the pointer isn't pointing to any valid memory location. This will be explored more in future chapters.
   ```cpp
   nullptr    // A pointer literal in C++11 and later
   NULL       // A pointer literal in older C++ versions (defined as 0)
   ```

7. **User-defined literals**: Starting from C++11, you can create your own custom literals using user-defined literal operators.
   ```cpp
   constexpr long double operator"" _cm(long double x) { return x * 10; }
   constexpr long double operator"" _m(long double x) { return x * 1000; }

   int main() {
     long double height = 3.4_cm; // User-defined literal for centimeters
     long double length = 1.2_m;  // User-defined literal for meters

     std::cout << "Height: " << height << " mm" << std::endl;
     std::cout << "Length: " << length << " mm" << std::endl;

     return 0;
   }
   ```
    In this example, we've defined two user-defined literals `_cm` and `_m` to convert distances into millimeters.