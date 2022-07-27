# **Sudoku validator**

## **Sudoku Background**

Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
(More info at: http://en.wikipedia.org/wiki/Sudoku)

## **Sudoku Solution Validator**

Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

## **Examples:**

```
validSolution([
[5, 3, 4, 6, 7, 8, 9, 1, 2],
[6, 7, 2, 1, 9, 5, 3, 4, 8],
[1, 9, 8, 3, 4, 2, 5, 6, 7],
[8, 5, 9, 7, 6, 1, 4, 2, 3],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 6, 1, 5, 3, 7, 2, 8, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 4, 5, 2, 8, 6, 1, 7, 9]
]);
// => true
```

```
validSolution([
[5, 3, 4, 6, 7, 8, 9, 1, 2],
[6, 7, 2, 1, 9, 0, 3, 4, 8],
[1, 0, 0, 3, 4, 2, 5, 6, 0],
[8, 5, 9, 7, 6, 1, 0, 2, 0],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 0, 1, 5, 3, 7, 2, 1, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 0, 0, 4, 8, 1, 1, 7, 9]
]);
// => false
```

## **Code notes:**

- Check if the number is duplicated on the same array
- Check if the number is duplicated on the same index of other arrays

**If the test needs to check for every section**

- Make new arrays like:

```
// This will be the firs section (top left)
[a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2]],
// This will be the second section (top center)
[a[3], a[4], a[5], b[3], b[4], b[5], c[3], c[4], c[5]],
// This will be the third section (top right)
[a[6], a[7], a[8], b[6], b[7], b[8], c[6], c[7], c[8]],

      0  1  2  3  4  5  6  7  8
0 => [5, 3, 4, 6, 7, 8, 9, 1, 2],
1 => [6, 7, 2, 1, 9, 0, 3, 4, 8],
2 => [1, 0, 0, 3, 4, 2, 5, 6, 0],
3 => [8, 5, 9, 7, 6, 1, 0, 2, 0],
4 => [4, 2, 6, 8, 5, 3, 7, 9, 1],
5 => [7, 1, 3, 9, 2, 4, 8, 5, 6],
6 => [9, 0, 1, 5, 3, 7, 2, 1, 4],
7 => [2, 8, 7, 4, 1, 9, 6, 3, 5],
8 => [3, 0, 0, 4, 8, 1, 1, 7, 9],

```

# **NEW APPROACH**

- This is an array with 9 arrays inside

The sum of every line (horizontal/vertical) needs to be 45

To select the first array will be like

```
board[a]
```

To select an element of an array inside of an array is like:

```
board[a][b]
```

**ON LOOP**

- If the sum of the array (horizontal) === 45

  - Then

  ```
  board[a++]
  ```

  To move an index "bellow"
