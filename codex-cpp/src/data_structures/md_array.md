# Multi-Dimensional Arrays

In C++, multi-dimensional arrays are basically arrays of arrays. They are used to hold structured data, such as a table with rows and columns. A common example is an array that depicts a matrix, with multiple rows and columns of data.

## Two-Dimensional Arrays

The two-dimensional array (2D array) is the most simple type of multi-dimensional array. Consider it a grid or a table with rows and sections. You must indicate the number of rows and columns when declaring a 2D array:


```cpp
int myArray[3][4]; // This declares an integer 2D array with 3 rows and 4 columns
```

Each element in the 2D array can be accessed using its row and column index:

```cpp
myArray[0][0] = 1; // This sets the first row, first column element to the value 1
```

You can also initialize a 2D array when declaring it:

```cpp
// This initializes the elements of our 2D array
int myArray[3][4] = {
    {1, 2,  3,  4},
    {5, 6,  7,  8},
    {9, 10, 11, 12}
};
```

## Multi-Dimensional Arrays

C++ allows you to declare arrays with more than two dimensions by simply adding more square brackets '[]'. 

~~~admonish example title="Declaring a three-dimensional (3D) array"
```cpp
int my3dArray[2][3][4];
```
This declares an integer 3D array with dimensions
- "depth" or "layers" (size: `2`)
- "rows" (size: `3`)
- "columns" (size: `4`)

A 3D array can be thought of as a collection of tables or matrices. In this case, we have two layers, each with a table with three rows and four columns.

Just like with 2D arrays, you can access and modify the elements using their indices:

```cpp
// This sets the first layer, second row, third column element to the value 42
my3dArray[0][1][2] = 42;
```
~~~


You can initialize a multi-dimensional array when declaring it:

```cpp
// This initializes the elements of 3D array
int my3dArray[2][3][4] = {
    {
        {1, 2,  3,  4},
        {5, 6,  7,  8},
        {9, 10, 11, 12}
    },
    {
        {13, 14, 15, 16},
        {17, 18, 19, 20},
        {21, 22, 23, 24}
    }
};
```

## Looping over Multi-Dimensional Arrays

To iterate over all elements in a multi-dimensional array, you can use nested loops. The outer loop iterates over one dimension (e.g., rows), while an inner loop iterates over another (e.g., columns)

~~~admonish example
```cpp,editable
#include <iostream>

int main() {
    // Print all elements in a given two-dimensional integer array:
    int myArray[3][4] = {
        {1, 2,  3,  4},
        {5, 6,  7,  8},
        {9, 10, 11, 12}
    };

    for (int i = 0; i < 3; ++i) {
        for (int j = 0; j < 4; ++j) {
            std::cout << "Element at [" << i << "][" << j << "] is: " << myArray[i][j] << std::endl;
        }
    }
}
```
~~~


The same concept applies to arrays with more dimensions, simply add more nested loops as needed.

## Conclusion
Multi-dimensional arrays make it easy to work with structured data in C++. Using indices and loops, they are simple to access and manipulate. However, larger arrays may consume significant memory resources, so when working with multi-dimensional arrays, it is important to consider the size and efficiency.