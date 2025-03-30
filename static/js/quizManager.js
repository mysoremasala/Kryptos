class Quiz {
    constructor(questions, timerDuration = 300) {
        this.questions = questions;
        this.currentQuestionIndex = 0;
        this.selectedAnswers = new Array(questions.length).fill(null);
        this.timeElapsed = 0;
        this.score = 0;
        this.timerInterval = null;
    }

    init() {
        document.getElementById('timer').textContent = '00:00';
        this.updateQuestion();
        this.startTimer();
    }

    startTimer() {
        // Clear any existing timer
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }

        this.timerInterval = setInterval(() => {
            const minutes = Math.floor(this.timeElapsed / 60);
            const seconds = this.timeElapsed % 60;
            document.getElementById('timer').textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            this.timeElapsed++;
        }, 1000);
    }

    updateQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        if (!question) {
            console.error('No question found at index:', this.currentQuestionIndex);
            return;
        }
        
        // Update question number and text
        document.getElementById('questionNumber').textContent = this.currentQuestionIndex + 1;
        document.getElementById('questionText').textContent = question.description;
        
        // Update options
        const optionsHTML = question.options.map((option, index) => `
            <button 
                class="option-btn w-full text-left p-4 bg-[#333] rounded-lg flex items-center gap-3 ${
                    this.selectedAnswers[this.currentQuestionIndex] === index ? 'selected' : ''
                }"
                onclick="quiz.selectOption(${index})"
            >
                <span class="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                    ${String.fromCharCode(65 + index)}
                </span>
                ${option}
            </button>
        `).join('');
        
        document.getElementById('optionsContainer').innerHTML = optionsHTML;
        
        // Update progress bar - calculate percentage based on current question
        const progressPercentage = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        document.getElementById('progressBar').style.width = `${progressPercentage}%`;
        
        // Show/hide submit button on last question
        document.getElementById('submitBtn').style.display = 
            this.currentQuestionIndex === this.questions.length - 1 ? 'flex' : 'none';
    }

    selectOption(index) {
        this.selectedAnswers[this.currentQuestionIndex] = index;
        this.updateQuestion();
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.updateQuestion();
        } else if (this.currentQuestionIndex === this.questions.length - 1) {
            // If on last question, submit the quiz
            this.submitQuiz();
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.updateQuestion();
            
            // Hide submit button when going back
            document.getElementById('submitBtn').style.display = 'none';
        }
    }

    submitQuiz() {
        clearInterval(this.timerInterval);
        
        // Calculate score
        const correctCount = this.selectedAnswers.reduce((count, answer, index) => {
            return count + (answer === this.questions[index].correct ? 1 : 0);
        }, 0);

        // Redirect to results page with score
        window.location.href = `/quiz-results?score=${correctCount}&total=${this.questions.length}`;
    }

    restart() {
        this.currentQuestionIndex = 0;
        this.selectedAnswers = new Array(this.questions.length).fill(null);
        this.timeElapsed = 0;
        this.score = 0;
        
        document.getElementById('scoreModal').classList.add('hidden');
        document.getElementById('score').textContent = '0';
        
        clearInterval(this.timerInterval);
        this.init();
    }

    setupEventListeners() {
        // Option selection
        document.getElementById('optionsContainer').addEventListener('click', (e) => {
            const optionBtn = e.target.closest('.option-btn');
            if (optionBtn) {
                const index = parseInt(optionBtn.dataset.option);
                this.selectOption(index);
            }
        });

        // Navigation buttons
        document.querySelector('button[onclick="previousQuestion()"]').onclick = 
            () => this.previousQuestion();
        document.querySelector('button[onclick="nextQuestion()"]').onclick = 
            () => this.nextQuestion();
        document.querySelector('button[onclick="submitQuiz()"]').onclick = 
            () => this.submitQuiz();
        document.querySelector('button[onclick="restartQuiz()"]').onclick = 
            () => this.restart();
    }
} 