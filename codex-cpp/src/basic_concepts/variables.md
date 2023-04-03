# Variables

Think of a variable as a container or a box that can store a specific type of data. This data can be a number (integer or decimal), a character, or any other data type. In C++, variables are used to store and manipulate data that can be used in various parts of a program.

Let's use an analogy to understand variables better. Imagine you are running a store, and you have several shelves to store different types of items. Each shelf is labeled with a unique name, and you can only store items of a specific type on that shelf. In the world of programming, each shelf represents a variable, the unique name is the variable's name, and the type of items that can be stored represents the data type of that variable.

## Declaring Variables

Before we can use a variable in a C++ program, we need to declare it. Declaring a variable involves specifying its data type and giving it a name. The general syntax for declaring a variable is as follows:

```cpp
data_type variable_name;
```

Data types have been explained the [data types section](./data_types.md), so you should have a basic understanding of them. Here's a quick example of declaring an integer variable called `age`:

```cpp
int age;
```

In this example, `int` is the data type, and `age` is the variable name. This declaration tells the compiler that we have created a variable named `age` that can store integer values.

You can also declare multiple variables of the same data type on a single line by separating them with commas:

```cpp
int x, y, z;
```

This line declares three integer variables: `x`, `y`, and `z`.

## Assigning Values to Variables

After declaring a variable, we can assign a value to it using the assignment operator `=`. Here's an example of assigning the value 25 to the previously declared `age` variable:

```cpp
age = 25;
```

Now the variable `age` contains the value 25. It's also possible to declare a variable and assign a value to it in the same line:

```cpp
int age = 25;
```

This line declares an integer variable called `age` and assigns the value 25 to it.

## Using Variables

Once a variable has been declared and assigned a value, you can use it in various ways in your program. For example, you can perform calculations with it, use it in conditional statements, or display its value on the screen.

Here's an example of using the `age` variable to calculate the number of days someone has lived:

```cpp
int age = 25;
int days_lived = age * 365;
```

```admonish
As you can see above, you can combine the declaration and assignment in one line.
```

In this example, we multiply the value of `age` by 365 to calculate the number of days someone has lived and store the result in a new variable called `days_lived`.
