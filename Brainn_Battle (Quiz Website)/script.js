const questions = {
    math: [
        { question: " Which of the following is used to assign a value to a variable in R?",
             options: ["A) =", "B) :=", "C) ->", "D) Both A and C"], 
             correctAnswer: "D) Both A and C" },
        { question: "What is the function used to check the structure of an object in R?",
             options: ["A) str()", "B) summary()", "C) head()", "D) length()"], 
             correctAnswer: "A) str()" },
        { question: "How would you access the first element of a vector v in R?",
            options: ["A) v[1]", "B) v(1)", "C) v[2]","D) v.first()"],
            correctAnswer: "A) v[1]"},
        { question: " What is the primary purpose of the R programming language?",
            options: ["A) Data Visualization", "B) Statistical Analysis", "C) Web development","D) Machine learning"],
            correctAnswer: "B) Statistical Analysis"},
        { question: "  Which of the following is a valid R data type?",
            options: ["A) Integer", "B) Float", "C) Character", "D) All of the above"], 
            correctAnswer: "D) All of the above" },
        { question: "What is the command to print output in R?",
            options: ["A) print()", "B) cat()", "C) echo()", "D) output()"], 
            correctAnswer: "A) print()" },
        { question: "What is the data type of the value 'Hello' in R?",
            options: ["A) Numeric", "B) Integer", "C) Character","D) Logical"],
            correctAnswer: "C) Character"},
        { question: "What is the command to create a function in R?",
            options: ["A) function()", "B) func()", "C) f()","D) create.function()"],
            correctAnswer: "A) function()"},
         ],
    science: [
        { question: "What is the primary goal of software engineering?",
             options: ["A) To develop software quickly", "B) To develop software cheaply", "C) To develop software that meets requirements", "D) To develop software that is easy to maintain"], 
             correctAnswer: "C) To develop software that meets requirements" },
        { question: "What is SDLC?", 
            options: ["A) Software Development Life Cycle", "B) Software Design Life Cycle", "C) Software Testing Life Cycle", "D) Software Implementation Life Cycle"], 
            correctAnswer: "A) Software Development Life Cycle" },
        { question: "Which method is used for software testing?",
            options: ["A) Unit testing", "B) Integration testing", "C) System testing", "D) All of the above"], 
            correctAnswer: "D) All of the above" },
        { question: "What is a bug?", 
            options: ["A) An error in software code", "B) A feature in software code", "C) A requirement in software code", "D) A design in software code"], 
            correctAnswer: "A) An error in software code" },
        { question: "What is the full form of API?",
            options: ["A) Application Programming Interface", "B) Application Process Interface", "C) Application Protocol Interface", "D) Application Platform Interface"], 
            correctAnswer: "A) Application Programming Interface" },
        { question: " What is the full form of DBMS?", 
            options: ["A) Database Management System", "B) Data Base Management System", "C) Database Management Software", "D) Data Base Management Software"], 
            correctAnswer: "A) Database Management System" },
       { question: "What is the full form of GUI?",
            options: ["A) Graphical Utility Interface", "B) Graphical User Interface", "C) Graphical User Interaction", "D) Graphical Utility Interaction"], 
            correctAnswer: "B) Graphical User Interface" },
       { question: "What is the full form of OOP?", 
           options: ["A) Object-Oriented Process", "B) Object-Oriented Planning", "C) Object-Oriented Programming", "D) Object-Oriented Platform"], 
           correctAnswer: "C) Object-Oriented Programming" },
    ],
    history: [
        { question: "What is the purpose of meta tags?",
            options: ["A) SEO", "B) Accessibility", "C) Navigation", "D) Information"], 
            correctAnswer: "B) Accessibility" },
       { question: "What is the full form of HTML?", 
           options: ["A) HyperText Markup Language", "B) HyperText Meta Language", "C) HyperText Modeling Language", "D) HyperText Management Language"], 
           correctAnswer: "A) HyperText Markup Language" },
       { question: "What is the full form of CSS?",
           options: ["A) Cascading Style Sheets", "B) Cascading Style Systems ", "C) Cascading Style Syntax", "D) Cascading Style Standards"], 
           correctAnswer: "A) Cascading Style Sheets" },
       { question: " What is the full form of SEO?", 
           options: ["A) Search Engine Orientation", "B) Search Engine Operation", "C) Search Engine Organization", "D) Search Engine Optimization"], 
           correctAnswer: "D) Search Engine Optimization" },
       { question: "What is the full form of CMS?",
           options: ["A) Content Management System", "B) Content Management Service", "C) Content Management Solution", "D) Content Management Software"], 
           correctAnswer: "A) Content Management System" },
       { question: "What is the full form of XML?", 
           options: ["A) Extensible Meta Language", "B) Extensible Modeling Language", "C) Extensible Markup Language", "D) Extensible Management Language"], 
           correctAnswer: "C) Extensible Markup Language" },
      { question: "What is the full form of GUI?",
           options: ["A) Graphical Utility Interface", "B) Graphical User Interface", "C) Graphical User Interaction", "D) Graphical Utility Interaction"], 
           correctAnswer: "B) Graphical User Interface" },
      { question: "What is the full form of FTP?", 
          options: ["A) File Transfer Process", "B) File Transfer Program", "C) File Transfer Protocol", "D) File Transfer Procedure"], 
          correctAnswer: "C) File Transfer Protocol" },
      
    ],
    gk:[
     
        { 
            question: "Which planet is known as the Red Planet?", 
            options: ["A) Earth", "B) Mars", "C) Venus", "D) Jupiter"], 
            correctAnswer: "B) Mars" 
          },
          { 
            question: "Who wrote the play 'Romeo and Juliet'?", 
            options: ["A) Charles Dickens", "B) William Shakespeare", "C) Jane Austen", "D) Mark Twain"], 
            correctAnswer: "B) William Shakespeare" 
          },
          { 
            question: "What is the capital of France?", 
            options: ["A) Berlin", "B) Madrid", "C) Paris", "D) Rome"], 
            correctAnswer: "C) Paris" 
          },
          { 
            question: "Which element has the chemical symbol 'O'?", 
            options: ["A) Oxygen", "B) Gold", "C) Carbon", "D) Hydrogen"], 
            correctAnswer: "A) Oxygen" 
          },
          { 
            question: "Which country is the largest by land area?", 
            options: ["A) United States", "B) China", "C) Canada", "D) Russia"], 
            correctAnswer: "D) Russia" 
          },
          { 
            question: "What is the smallest continent?", 
            options: ["A) Europe", "B) Africa", "C) Australia", "D) Antarctica"], 
            correctAnswer: "C) Australia" 
          },
          { 
            question: "Which famous scientist developed the theory of relativity?", 
            options: ["A) Isaac Newton", "B) Albert Einstein", "C) Nikola Tesla", "D) Galileo Galilei"], 
            correctAnswer: "B) Albert Einstein" 
          },
          { 
            question: "Which animal is known as the king of the jungle?", 
            options: ["A) Tiger", "B) Elephant", "C) Lion", "D) Bear"], 
            correctAnswer: "C) Lion" 
          },
          { 
            question: "How many continents are there in the world?", 
            options: ["A) 5", "B) 6", "C) 7", "D) 8"], 
            correctAnswer: "C) 7" 
          },
          
    ]
};

let currentQuestionIndex = 0, currentCategory = 'math', userAnswers = [], score = 0;
let highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const elements = {
    categoriesSelect: document.getElementById('categories'),
    questionElement: document.getElementById('question'),
    optionsList: document.getElementById('options-list'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    submitBtn: document.getElementById('submit-btn'),
    answersSection: document.getElementById('answers-section'),
    answersList: document.getElementById('answers-list'),
    highScoresSection: document.getElementById('high-scores-section'),
    highScoresList: document.getElementById('high-scores-list')
};

function displayHighScores() {
    elements.highScoresList.innerHTML = highScores.map((score, index) => `<li>Rank ${index + 1}: ${score}</li>`).join('');
}

function loadQuestion() {
    const { question, options } = questions[currentCategory][currentQuestionIndex];
    elements.questionElement.innerText = question;
    elements.optionsList.innerHTML = options.map(option => 
        `<li onclick="selectAnswer('${option}')">${option}</li>`).join('');
    elements.prevBtn.disabled = currentQuestionIndex === 0;
    elements.nextBtn.disabled = currentQuestionIndex === questions[currentCategory].length - 1;
    elements.submitBtn.style.display = currentQuestionIndex === questions[currentCategory].length - 1 ? 'inline-block' : 'none';
}

function selectAnswer(answer) {
    userAnswers[currentQuestionIndex] = answer;
    Array.from(elements.optionsList.children).forEach(option => {
        option.style.backgroundColor = option.innerText === answer ? '#0047AB' : '';
    });
}

function changeQuestion(offset) {
    if (currentQuestionIndex + offset >= 0 && currentQuestionIndex + offset < questions[currentCategory].length) {
        currentQuestionIndex += offset;
        loadQuestion();
    }
}

function calculateScore() {
    score = userAnswers.filter((answer, index) => answer === questions[currentCategory][index].correctAnswer).length;
}

function showAnswers() {
    calculateScore();
    if (highScores.length < 5 || score > Math.min(...highScores)) {
        highScores = [...highScores, score].sort((a, b) => b - a).slice(0, 5);
        localStorage.setItem('highScores', JSON.stringify(highScores));
    }

    elements.answersSection.style.display = 'block';
    elements.answersList.innerHTML = userAnswers.map((answer, index) => {
        const { question, correctAnswer } = questions[currentCategory][index];
        return `<li><strong>${question}</strong><br>Your answer: ${answer}<br>Correct answer: ${correctAnswer}<br>
                <span style="color: ${answer === correctAnswer ? 'green' : 'red'}">${answer === correctAnswer ? 'Correct' : 'Incorrect'}</span></li>`;
    }).join('');
    
    elements.highScoresSection.style.display = 'block';
    displayHighScores();
}

elements.categoriesSelect.addEventListener('change', () => {
    currentCategory = elements.categoriesSelect.value;
    currentQuestionIndex = 0;
    userAnswers = [];
    score = 0;
    loadQuestion();
    elements.answersSection.style.display = 'none';
    elements.highScoresSection.style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
});

document.getElementById('next-btn').addEventListener('click', () => changeQuestion(1));
document.getElementById('prev-btn').addEventListener('click', () => changeQuestion(-1));
document.getElementById('submit-btn').addEventListener('click', showAnswers);

// Load the first question on page load
loadQuestion();

