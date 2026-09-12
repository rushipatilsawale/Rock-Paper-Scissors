# 🪨 Rock Paper Scissors Game

A simple and interactive **Rock Paper Scissors** game built using **HTML, CSS, and JavaScript**.

The player chooses Rock, Paper, or Scissors, and the computer randomly generates its choice. The game then determines the winner and updates the score accordingly.

## 🎮 Live Demo

You can play the game by opening the `index.html` file in your browser.

> You can add your GitHub Pages live demo link here later.

## 📌 Features

* 🪨 Rock, 📄 Paper, and ✌️ Scissors choices
* 🤖 Random computer choice generation
* 🏆 Automatic winner detection
* 📊 Player and computer score tracking
* 🤝 Draw detection
* 🎨 Different colors for win, loss, and draw messages
* 🖱️ Interactive buttons with hover effects
* 📱 Responsive layout using CSS viewport units
* ⭐ Font Awesome icons for game buttons

## 🛠️ Technologies Used

* **HTML5** – Structure of the webpage
* **CSS3** – Styling, layout, colors, and responsiveness
* **JavaScript** – Game logic, random computer choices, score tracking, and DOM manipulation
* **Font Awesome** – Rock, Paper, and Scissors icons

## 📂 Project Structure

```text
Rock-Paper-Scissors/
│
├── index.html
├── style.css
├── app.js
└── README.md
```

## 🧠 How the Game Works

### 1. Player selects a move

The game provides three buttons:

* Rock
* Paper
* Scissors

Each button has a unique `id` that is used by JavaScript to identify the player's choice.

### 2. Computer generates a choice

The computer randomly selects one of the three options using:

```javascript
const options = ["rock", "paper", "scissors"];
```

JavaScript uses `Math.random()` to generate a random index.

### 3. Winner is determined

The game compares the player's choice with the computer's choice.

The rules are:

| Player      | Computer    | Result         |
| ----------- | ----------- | -------------- |
| Rock        | Scissors    | 🏆 Player Wins |
| Paper       | Rock        | 🏆 Player Wins |
| Scissors    | Paper       | 🏆 Player Wins |
| Rock        | Paper       | ❌ Player Loses |
| Paper       | Scissors    | ❌ Player Loses |
| Scissors    | Rock        | ❌ Player Loses |
| Same choice | Same choice | 🤝 Draw        |

### 4. Score is updated

If the player wins, the player score increases.

If the computer wins, the computer score increases.

The score is displayed dynamically on the webpage using JavaScript DOM manipulation.

## 💻 JavaScript Concepts Used

This project helped practice several important JavaScript concepts:

* Variables
* Arrays
* Functions
* Arrow functions
* Conditional statements
* Ternary operators
* `Math.random()`
* `Math.floor()`
* DOM selection
* `querySelector()`
* `querySelectorAll()`
* `getAttribute()`
* `addEventListener()`
* Updating HTML using `innerText`
* Changing CSS using JavaScript

## 🎨 User Interface

The game contains:

### Header

A simple header displaying:

> Rock Paper Scissors

### Game Buttons

Three circular buttons are provided for:

* 🪨 Rock
* 📄 Paper
* ✌️ Scissors

### Scoreboard

The scoreboard displays:

```text
You       Comp
  0         0
```

### Game Message

Initially, the game displays:

```text
Pick your move
```

After every round, it displays whether the player won, lost, or the game was a draw.

## 🚀 How to Run Locally

### Step 1: Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/Rock-Paper-Scissors.git
```

### Step 2: Open the project

```bash
cd Rock-Paper-Scissors
```

### Step 3: Run the game

Open:

```text
index.html
```

in your web browser.

You can also use **Live Server** in VS Code for a better development experience.

## 📸 Screenshots

You can add screenshots of your game here.

Example:

```markdown
![Rock Paper Scissors Game](screenshots/game.png)
```

## 🔮 Future Improvements

Some improvements that can be added in future:

* 🔄 Add a **Reset Game** button
* 🏆 Add a **Best of 5** game mode
* 🔊 Add sound effects
* ✨ Add animations when selecting a move
* 📱 Improve mobile responsiveness
* 🌓 Add Dark/Light mode
* 📈 Add game statistics
* 🏅 Add a winning streak counter
* 💾 Store scores using Local Storage

## 👨‍💻 Author

**Rushikesh Sawale**

B.Tech Artificial Intelligence & Data Science Student

GitHub: `YOUR-GITHUB-USERNAME`

## 📄 License

This project is created for learning and educational purposes.
