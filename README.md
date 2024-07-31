# Tic Tac Toe with a Twist

### Live Game Link: https://harsh02it-tic-tac-toe.netlify.app/

## How to Play: Tic Tac Toe with a Twist

Welcome to our unique version of Tic Tac Toe! This game adds an exciting twist to the classic rules, making every move count.

### Basic Rules:

1. The game is played on a 3x3 grid.
2. Two players take turns: X (red) and O (blue).
3. The goal is to get three of your symbols in a row (horizontally, vertically, or diagonally).

### The Twist: Disappearing Moves

Here's where it gets interesting:

1. X's moves:

   - X's 1st move disappears after X's 4th move
   - X's 2nd move disappears after X's 5th move
   - This pattern continues for all of X's moves

2. O's moves:

   - O's 1st move disappears after O's 4th move
   - O's 2nd move disappears after O's 5th move
   - This pattern continues for all of O's moves

3. Watch for fading moves:
   - When a move turns gray or blurry, it will disappear on that player's next turn.

### Strategy Tips:

- Plan ahead! Your early moves won't stay on the board forever.
- Use disappearing moves to your advantage by setting up multiple winning possibilities.
- Pay attention to your opponent's fading moves - they might open up new opportunities.

### No Ties:

Unlike regular Tic Tac Toe, this version virtually eliminates ties. In a standard game, about 50% of perfectly played games end in a draw. Our twist keeps the game going until there's a winner!

Remember, the key to winning is thinking a few moves ahead and adapting your strategy as the board changes. Good luck, and may the best player win!

## Project Overview

This project is a unique take on the classic Tic Tac Toe game. It introduces an exciting twist where moves disappear over time, adding an extra layer of strategy to the gameplay.

## Features

- Classic 3x3 Tic Tac Toe board
- Two-player game: X (red) and O (blue)
- Disappearing moves
- Blurring effect on moves about to disappear
- Responsive design for various screen sizes
- Reset functionality
- "How to Play" modal with game instructions

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)

## What I Learned

### JavaScript Game Logic

Building this game deepened my understanding of JavaScript, particularly in these areas:

1. **DOM Manipulation**: I learned how to efficiently select and modify HTML elements using JavaScript, which was crucial for updating the game board and displaying messages.

2. **Event Handling**: Implementing click events for the cells and buttons improved my skills in creating interactive web applications.

3. **Array Methods**: The project helped me master array manipulation, especially when managing the move history and checking for winning combinations.

4. **Conditional Logic**: Implementing the game rules and win conditions enhanced my ability to write complex conditional statements.

### CSS Styling and Responsiveness

1. I gained experience in creating a visually appealing and responsive design using CSS Grid and Flexbox.
2. Implementing the modal and animation effects expanded my CSS skills beyond basic styling.

### HTML Structure

Structuring the HTML in a semantic and accessible way was a valuable learning experience, especially when creating the game board and modal.

## Challenges Faced and Solutions

### 1. Implementing the Disappearing Moves

**Challenge**: The core mechanic of making moves disappear after a certain number of turns was initially difficult to conceptualize and implement.

**Solution**: I solved this by maintaining a `moveHistory` array and using the `shift()` method to remove the oldest move when necessary. This approach allowed me to keep track of the order of moves and manage their disappearance effectively.

### 2. Creating a Responsive Design

**Challenge**: Ensuring the game looked good and was playable on various screen sizes was tricky, especially maintaining the square shape of cells.

**Solution**: I used CSS Grid for the game board layout and implemented media queries to adjust sizes and spacing for different screen widths. Using `aspect-ratio` for cells ensured they remained square across devices.

### 3. Optimizing Performance

**Challenge**: As the game progressed, frequent DOM updates for disappearing and blurring moves could potentially impact performance.

**Solution**: I optimized the code by minimizing DOM manipulations, updating only the necessary elements in each turn, and using efficient selectors.

## Future Improvements

- Implement an AI opponent using minimax algorithm
- Add sound effects for moves and wins
- Create a win streak counter for multiple games
- Implement online multiplayer functionality

## Conclusion

This project was an excellent opportunity to apply and expand my web development skills. It challenged me to think creatively about game logic and user experience, resulting in a unique and engaging version of a classic game.
