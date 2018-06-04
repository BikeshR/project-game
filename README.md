# Sparta Core Project 1

## Instruction
The goal is to make the sum of numbers in each row and column be equal to the number outside them. Game starts with all numbers selected. Deselect a number to remove it from the sum. The outermost number is the current sum of selected numbers.

## Implementation
- HTML5
- CSS3
- Bootstrap 3.3.7
- jQuery
- Math.js

## Scope
- Have a 5x5 of 1-9 and numbers.
- Have 2 or 3 states of the number (selected/deselected/deselected(highlighted))
- Generate grid randomly

## Sprint 1 (Due Wednesday 10am)
- Added the 9x9 table on HTML with hardcoded number entries
- Added the classes of each cell
- Added CSS styling on the table
- Added states of select/deselect using CSS
- Added DOM manipulation and DOM events
- Added checksum on outside-sum of the current numbers
- Made the outside-sum only equal to the selected numbers
- Made a function to check for two outside numbers to be equal
  - if equal, border color changes to green
- Make a function to check if all of the rows and columns are solved
- MVP done

## Sprint 2 (Due Friday 11:30am)
- Added win dialog
- Added instructions
- Added sound effect for select
- Added a start button and new game button on win dialog
- Added randomness. Steps:
  - Pick a random number between 1 and 9
  - Repeat it 25 times
  - Replace the inside 5x5 table with the 25 randomly generated numbers
  - Make the table into array of columns (multi-dimensional array)
  - Randomly remove 1 to 4 numbers from a column
  - Get the sum of the remaining numbers to create outsideAim (column-wise)
  - Use the transpose of the array of columns to get the sum of the remaining numbers to create outsideAim (row-wise)
