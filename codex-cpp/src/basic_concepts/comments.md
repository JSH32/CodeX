# Comments in C++

Comments are an essential part of programming, as they allow you to insert notes, explanations or reminders directly into your code. In C++, there are two types of comments: single-line and multi-line comments.

## Single-line comments

Single-line comments begin with two forward slashes (`//`) and continue until the end of the line. Any text following the `//` on the same line will be considered a comment and will not be executed by the compiler.

~~~admonish example
```cpp
int main() {
    // This is a single-line comment
    return 0;
}
```
~~~

## Multi-line comments

Multi-line comments begin with a forward slash followed by an asterisk (`/*`) and end with an asterisk followed by a forward slash (`*/`). Any text between these delimiters will be considered a comment, even if it spans multiple lines.

~~~admonish example
```cpp
int main() {
    /*
    * This is a multi-line comment.
    * It can span multiple lines.
    */
    return 0;
}
```
~~~

Good commenting practices make your code more readable and maintainable, so always remember to include meaningful comments when writing your programs.