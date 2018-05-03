# Sparta Core Project 1

## Instruction

The goal is to select the numbers inside so that each row and column add up to the number next to it. Game starts with all numbers selected. Deselect a number to remove it from the sum.

## Task
- Consolidate all of the technology learnt in the 2 weeks.
- **Browser based game!** using html, css and javascript.
- Your game must have:
  - Instruction section explaining how to play the game.
  - Win Condition - display of user has won or score or **leaderboard (timed)**
  - Be styled.

## Bonus
- leaderboard
- Multiplayer
- animations
- HTML5 audio and sound effects

## Checklists
- ReadMe
  - document the project timeline
  - how to get the app up and running
- Git commits and pushes
  - commit on every function/object/if and so on
  - create branch on every new feature
  - push on every new feature
- Use all the technologies learnt in the 2 weeks
  - Agile Method
  - HTML5
  - CSS3
  - Responsive CSS
  - BootStrap 3.3.7
  - Markdown (for Readme)
  - Data Types
  - TDD
  - Control Flow
  - Truthy/Falsey
  - Loops
  - Functions
  - Scope
  - Closure
  - Debugging tools
  - Objects (Optional)
  - DOM Manipulation
  - DOM EVENTS
  - JQuery


## ReadMe
- Brief Description
- Purpose
- Functionality
- Implementation
- https://github.com/mcalthrop/angular-spa-demo

## Presentation
- 5 minute presentation
- 5 minute Q&A


# Planning

## Scope
- Rullo
- Have a 5x5 of 1-9 and numbers.
- Have 2 or 3 states of the number (selected/deselected/deselected(highlighted))
- Bonus - Generate grid randomly

## Sprint 1 (Due Wednesday 10am)
- 5x5 done for 1-9
- HTML done, CSS style done (Half day)
- Javascript done for 2 states (1.5 days)

## Sprint 2 (Due Friday 11:30am)
- Add Instructions, intro page/javascript layer
- Add win feedback
- Add sound for clicks
- Add start game and new game button
- Apply DRY, add comments
- Apply jQuery where possible
- Add randomness to new problems (BONUS)
- Add undo (BONUS)

## Steps
- Initial Setup
  - Added Bootstrap, jquery ...
- Added the 9x9 table
- Added the classes
- Adding the different states in CSS (inside/outside select/deselect)
- Doing javascript with DOM manipulation first and adding jquery later
- Added checksum of the 'current' numbers
- Made the sum only equal to the selected numbers
- Made a function to check for two outside numbers to be equal
  - if equal border color changes to green
- Make a function to check if all of the rows and columns are solved
- Added win dialog
- Added instructions
- Added sound effect for select
- Added a start button and new game button
- Adding randomness


## Things to keep in mind
Make sure that your code and files are:

* DRY.  Can I reuse parts of the code in different areas of the project?
* Well-commented. Will anyone else quickly understand what is going on in your application?
* Well-formatted. Write pretty code: indent properly, format consistently.
* Fully git tracked with dev and master branches with your trainers added as collaborators with an acceptable amount of git comments.

### Resources
* https://api.jquery.com/
* http://jqfundamentals.com/
* https://oscarotero.com/jquery/
