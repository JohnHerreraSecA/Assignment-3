document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    const loginMessage = document.getElementById('loginMessage');
    const quizContainer = document.getElementById('quiz-container');
    const quiz = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const nextButton = document.getElementById('next');
    const submitButton = document.getElementById('submit');
    const progressBar = document.querySelector('.progress-bar div');

    // Fake authentication variables
    const validUsername = 'user';
    const validPassword = 'password';

    let currentQuestionIndex = 0;
    let numCorrect = 0;

    loginButton.addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === validUsername && password === validPassword) {
            document.getElementById('login').style.display = 'none';
            quizContainer.style.display = 'block';
            showQuestion(myQuestions[currentQuestionIndex]);
        } else {
            loginMessage.textContent = 'Invalid username or password';
        }
    });

    nextButton.addEventListener('click', () => {
        const answerContainers = quiz.querySelectorAll('.answers');
        const userAnswer = (answerContainers[0].querySelector('input[name=question]:checked') || {}).value;

        if (userAnswer === myQuestions[currentQuestionIndex].correctAnswer) {
            numCorrect++;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < myQuestions.length) {
            showQuestion(myQuestions[currentQuestionIndex]);
        } else {
            showResults();
        }
    });

    function showQuestion(question) {
        const output = [];
        const answers = [];
        
        for (letter in question.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question" value="${letter}">
                    ${letter} : ${question.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question">${question.question}</div>
            <div class="answers">${answers.join('')}</div>`
        );

        quiz.innerHTML = output.join('');
        updateProgressBar((currentQuestionIndex + 1) / myQuestions.length * 100);
    }

    function showResults() {
        quizContainer.innerHTML = `<div id="results">You got ${numCorrect} out of ${myQuestions.length} correct.</div>`;
        submitButton.style.display = 'none';
        nextButton.style.display = 'none';
    }

    function updateProgressBar(percentage) {
        progressBar.style.width = percentage + '%';
    }

    const myQuestions = [
        {
            question: "What is the capital of Canada?",
            answers: { a: 'Halifax', b: 'Edmonton', c: 'Vancouver', d: 'Ottawa' },
            correctAnswer: 'd'
        },
        {
            question: "What is the capital of Spain?",
            answers: { a: 'Barcelona', b: 'Madrid', c: 'Sevilla', d: 'Valencia' },
            correctAnswer: 'b'
        },
        {
            question: "What is the capital of Germany?",
            answers: { a: 'Munich', b: 'Cologne', c: 'Stuttgart', d: 'Berlin' },
            correctAnswer: 'd'
        },
        {
            question: "What is the capital of Romania?",
            answers: { a: 'Timisoara', b: 'Bucharest', c: 'Cluj Napoca', d: 'Deva' },
            correctAnswer: 'b'
        },
        {
            question: "What is the capital of France?",
            answers: { a: 'Paris', b: 'Lyon', c: 'Marseille', d: 'Nice' },
            correctAnswer: 'a'
        },
        {
            question: "What is the capital of USA?",
            answers: { a: 'Los Angeles', b: 'Miami', c: 'Washington D.C.', d: 'New York' },
            correctAnswer: 'c'
        },
        {
            question: "What is the capital of Czech Republic?",
            answers: { a: 'Prague', b: 'Pilsen', c: 'Karlovy Vary', d: 'Český Krumlov' },
            correctAnswer: 'a'
        },
        {
            question: "What is the capital of Poland?",
            answers: { a: 'Wrocław', b: 'Warsaw', c: 'Kraków', d: 'Poznań' },
            correctAnswer: 'b'
        }
    ];
});
