Overview
The Wunderlust Footprints Quiz is an interactive web application that allows users to take a quiz on capital cities around the world. The application includes a login form, a quiz with multiple-choice questions, and displays the results upon completion.

File Structure
index.html - The main HTML file that structures the webpage.
quiz.css - The CSS file for styling the webpage.
quiz.js - The JavaScript file for handling interactivity and quiz logic.
HTML (index.html)
The HTML file sets up the structure of the webpage, including the login form and quiz container.

Key Components:
Login Form:
Inputs for username and password.
A login button that triggers authentication.
A message area for displaying login errors.
Username: user
Password: password
Quiz Container:
Initially hidden and displayed after a successful login.
Contains the quiz questions and answer choices.
Navigation buttons (Next and Get Results) to proceed through the quiz and view results.

CSS (quiz.css)
The CSS file styles the webpage with a neutral color palette and centers the content on the page.

Key Styles:
Body: Centered content with a neutral background color.
Container: Styling for the quiz container, including padding, borders, and shadows.
Login Form and Quiz Elements: Specific styles for inputs, buttons, and other elements to ensure a cohesive look.

JavaScript (quiz.js)
The JavaScript file handles the interactivity and logic of the quiz.

Key Functions:
Login Authentication: Validates username and password against predefined values.
Question Navigation: Displays questions one at a time and tracks user answers.
Results Calculation: Computes the final score and displays the results.
Progress Bar: Updates the progress bar as the user answers questions.
JavaScript Code:

Usage
Open the HTML file in a web browser.
Login using the credentials username: user and password: password.
Take the quiz by selecting answers and clicking the Next button.
View the results after completing the quiz.