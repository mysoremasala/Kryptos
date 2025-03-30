const quizCategories = {
    cryptography: {
        title: "The Unbreakable Kryptos Code",
        date: "May 4, 2024",
        image: "/static/questionhq.png",
        description: "Test your cryptography skills with CIA's unsolved puzzle",
        link: "/quiz/cryptography"
    },
    quant_finance: {
        title: "Quantitative Finance Challenge",
        date: "May 4, 2024",
        image: "/static/quant.jpg",
        description: "Test your knowledge of financial models, risk management, and quantitative analysis",
        link: "/quiz/quant_finance"
    },
    coding_sequences: {
        "title": "Coding Sequences Challenge",
        "date": "May 4, 2024",
        "image": "/static/coding1.jpg",
        "description": "Test your ability to debug logic.",
        "link": "/quiz/coding_sequences"
    },   
    morse_code: {
        "title": "Morse Code Challenge",
        "date": "May 4, 2024",
        "image": "/static/morse1.jpg",
        "description": "Test your knowledge of Morse code, and how it is used for communication.",
        "link": "/quiz/morse_code"
    },
    
    logicMaths: {
        title: "Logic & Mathematics Challenge",
        date: "May 4, 2024",
        image: "/static/cross.png",
        description: "Solve complex mathematical puzzles and logical problems",
        link: "/quiz/logicMaths"
    },
    webDevelopment: {
        title: "Web Development Mastery",
        date: "May 4, 2024",
        image: "/static/webdev.png",
        description: "Test your knowledge of modern web technologies",
        link: "quiz.html?category=webDevelopment"
    },
    cybersecurity: {
        title: "Cybersecurity Challenge",
        date: "May 4, 2024",
        image: "/static/cyber.png",
        description: "Explore the world of digital security",
        link: "quiz.html?category=cybersecurity"
    },
    logicBasedHardQuiz: {
        title: "Advanced Logic Puzzles",
        date: "March 16, 2025",
        image: "/static/advanced.jpg",
        description: "Challenge your problem-solving skills .",
        link: "quiz.html?category=logicBasedHardQuiz"
    },
 

    
};

const HomeLoader = {
    loadQuizCards: function(container, startIndex = 0, count = 3) {
        const categories = Object.values(quizCategories);
        const endIndex = Math.min(startIndex + count, categories.length);
        
        for (let i = startIndex; i < endIndex; i++) {
            const category = categories[i];
            const card = this.createQuizCard(category, Object.keys(quizCategories)[i]);
            container.appendChild(card);
        }
        
        return endIndex;
    },

    createQuizCard: function(category, categoryId) {
        const box = document.createElement('div');
        box.className = 'box relative w-[90%] max-w-[800px] my-[70px]';
        
        box.innerHTML = `
            <div class="caption absolute left-[175px] mt-[410px] w-1/2 bg-[#333] p-4 border-4 border-white text-center z-10">
                <div class="text-base font-bold">${category.title}</div>
                <div class="text-base font-bold">${category.date}</div>
                <div class="text-sm text-gray-300 mt-2">${category.description}</div>
            </div>
            <a class="card block w-full border-[5px] border-white py-6" href="/quiz/${categoryId}">
                <img src="${category.image}" alt="${category.title}" class="w-full h-auto">
            </a>
        `;
        
        return box;
    }
};

// Remove or comment out the old createQuizCard function if it exists
// function createQuizCard(category, title, description, image) { ... } 