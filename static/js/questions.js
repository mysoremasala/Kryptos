const quizQuestions = {
    cryptography: {
        name: "Cryptography",
        questions: [
            {
                "id": 1,
                "description": "What is the primary material used in the construction of the Kryptos sculpture?",
                "options": [
                    "Copper and granite",
                    "Steel and wood",
                    "Bronze and marble",
                    "Aluminum and glass"
                ],
                "correct": 0
            },
            {
                "id": 2,
                "description": "Who created the Kryptos sculpture?",
                "options": [
                    "Jim Sanborn",
                    "David Smith",
                    "Richard Serra",
                    "Alexander Calder"
                ],
                "correct": 0
            },
            {
                "id": 3,
                "description": "Which programming language is known for its use in artificial intelligence and machine learning?",
                "options": [
                    "C++",
                    "Java",
                    "Ruby",
                    "Python"
                ],
                "correct": 3
            },
            {
                "id": 4,
                "description": "Which planet in our solar system has the most moons?",
                "options": [
                    "Earth",
                    "Mars",
                    "Jupiter",
                    "Saturn"
                ],
                "correct": 3
            },
            {
                "id": 5,
                "description": "Which of these elements is a noble gas?",
                "options": [
                    "Oxygen",
                    "Hydrogen",
                    "Chlorine",
                    "Neon"
                ],
                "correct": 3
            }
        ]
    },
    
        quant_finance: {
           
            questions: [
                {
                    "id": 1,
                    "description": "What is the future value of $1,000 invested at an annual interest rate of 5% for 3 years, compounded annually?",
                    "options": [
                        "$1,150",
                        "$1,157.63",
                        "$1,200",
                        "$1,300"
                    ],
                    "correct": 1
                },
                {
                    "id": 2,
                    "description": "Which measure is commonly used to estimate the potential loss of a portfolio over a given time period with a specified confidence level?",
                    "options": [
                        "Value at Risk (VaR)",
                        "Beta",
                        "Sharpe Ratio",
                        "Sortino Ratio"
                    ],
                    "correct": 0
                },
                {
                    "id": 3,
                    "description": "What happens to the price of a bond when interest rates rise?",
                    "options": [
                        "The bond price increases",
                        "The bond price decreases",
                        "The bond price remains the same",
                        "The bond is unaffected"
                    ],
                    "correct": 1
                },
                {
                    "id": 4,
                    "description": "In the Black-Scholes model, which factor does NOT directly affect the price of a European call option?",
                    "options": [
                        "Stock price",
                        "Strike price",
                        "Dividend yield",
                        "The company's earnings"
                    ],
                    "correct": 3
                },
                {
                    "id": 5,
                    "description": "What does the Efficient Market Hypothesis (EMH) suggest?",
                    "options": [
                        "Stock prices reflect all available information",
                        "Investors can consistently beat the market",
                        "Market inefficiencies can always be exploited",
                        "Past prices can predict future returns"
                    ],
                    "correct": 0
                },
                {
                    "id": 6,
                    "description": "Which of the following is used to measure systematic risk?",
                    "options": [
                        "Alpha",
                        "Beta",
                        "Sharpe Ratio",
                        "Standard Deviation"
                    ],
                    "correct": 1
                },
                {
                    "id": 7,
                    "description": "What does a higher Sharpe Ratio indicate?",
                    "options": [
                        "Higher return per unit of risk",
                        "Lower return per unit of risk",
                        "Increased volatility",
                        "Decreased correlation with the market"
                    ],
                    "correct": 0
                },
                {
                    "id": 8,
                    "description": "Which pricing model is used to determine the expected return of an asset based on its risk?",
                    "options": [
                        "Black-Scholes Model",
                        "Capital Asset Pricing Model (CAPM)",
                        "Binomial Model",
                        "Monte Carlo Simulation"
                    ],
                    "correct": 1
                },
                {
                    "id": 9,
                    "description": "What is the formula for the present value of a perpetuity?",
                    "options": [
                        "PV = C / r",
                        "PV = C × r",
                        "PV = C × (1 + r)^t",
                        "PV = C / (1 + r)^t"
                    ],
                    "correct": 0
                },
                {
                    "id": 10,
                    "description": "Which of the following is NOT a common assumption in the Black-Scholes model?",
                    "options": [
                        "No arbitrage opportunities",
                        "Stock prices follow a normal distribution",
                        "Markets are perfectly liquid",
                        "Stock prices follow a geometric Brownian motion"
                    ],
                    "correct": 1
                },
                {
                    "id": 11,
                    "description": "What is the primary use of the Monte Carlo simulation in finance?",
                    "options": [
                        "Estimating risk and uncertainty in financial models",
                        "Predicting stock prices using historical data",
                        "Minimizing transaction costs",
                        "Maximizing high-frequency trading profits"
                    ],
                    "correct": 0
                },
                {
                    "id": 12,
                    "description": "What is the primary goal of portfolio diversification?",
                    "options": [
                        "Maximizing returns regardless of risk",
                        "Minimizing transaction costs",
                        "Reducing unsystematic risk",
                        "Increasing correlation between assets"
                    ],
                    "correct": 2
                },
                {
                    "id": 13,
                    "description": "Which of the following is a risk-free asset often used in portfolio management?",
                    "options": [
                        "Corporate Bonds",
                        "Gold",
                        "U.S. Treasury Bills",
                        "Real Estate"
                    ],
                    "correct": 2
                },
                {
                    "id": 14,
                    "description": "What is the primary determinant of bond duration?",
                    "options": [
                        "Coupon rate",
                        "Maturity",
                        "Interest rate sensitivity",
                        "All of the above"
                    ],
                    "correct": 3
                },
                {
                    "id": 15,
                    "description": "Which of the following measures the sensitivity of a bond’s price to changes in interest rates?",
                    "options": [
                        "Alpha",
                        "Beta",
                        "Modified Duration",
                        "Sharpe Ratio"
                    ],
                    "correct": 2
                },
                {
                    "id": 16,
                    "description": "A trader buys a call option with a strike price of $50 when the stock is trading at $45. What is the intrinsic value of the option?",
                    "options": [
                        "$0",
                        "$5",
                        "-$5",
                        "$10"
                    ],
                    "correct": 0
                },
                {
                    "id": 17,
                    "description": "Which of the following pricing models is most commonly used for pricing European options?",
                    "options": [
                        "Capital Asset Pricing Model (CAPM)",
                        "Binomial Model",
                        "Black-Scholes Model",
                        "Monte Carlo Simulation"
                    ],
                    "correct": 2
                },
                {
                    "id": 18,
                    "description": "In a risk-neutral world, expected returns on all assets should be equal to:",
                    "options": [
                        "The risk-free rate",
                        "The expected return of the market",
                        "The historical return of the asset",
                        "The company's earnings per share growth rate"
                    ],
                    "correct": 0
                },
                {
                    "id": 19,
                    "description": "What is the main purpose of the Kelly Criterion in trading?",
                    "options": [
                        "Minimizing risk",
                        "Maximizing growth rate of capital",
                        "Determining the risk-free rate",
                        "Reducing tax liabilities"
                    ],
                    "correct": 1
                },
                {
                    "id": 20,
                    "description": "Which of the following terms describes the risk that an asset cannot be sold quickly at market price?",
                    "options": [
                        "Market Risk",
                        "Liquidity Risk",
                        "Credit Risk",
                        "Operational Risk"
                    ],
                    "correct": 1
                }
            ]
        },
    
    
    logicBasedHardQuiz : {
        name: "Advanced Logic Puzzles",
        questions: [
            {
                id: 1,
                description: "A farmer is going to the market with a fox, a chicken, and a sack of grain. He needs to cross a river, but he can only carry one item at a time. If left together, the fox will eat the chicken, and the chicken will eat the grain. What should the farmer do first?",
                options: [
                    "Take the fox across first",
                    "Take the chicken across first",
                    "Take the grain across first",
                    "Leave everything and swim across"
                ],
                correct: 1
            },
            {
                id: 2,
                description: "You have a 3-liter jug and a 5-liter jug. How can you measure exactly 4 liters of water?",
                options: [
                    "Fill the 3-liter jug twice and pour it into the 5-liter jug",
                    "Fill the 5-liter jug, pour into the 3-liter jug, empty the 3-liter, and transfer again",
                    "Fill the 5-liter jug, empty it, and fill it halfway",
                    "It's not possible with these jugs"
                ],
                correct: 1
            },
            {
                id: 3,
                description: "A man stands at one end of a bridge. He has a wolf, a goat, and a cabbage. He must get all three to the other side. If he leaves the wolf with the goat, the wolf will eat the goat. If he leaves the goat with the cabbage, the goat will eat the cabbage. How does he get them all across safely?",
                options: [
                    "Take the wolf first, come back, take the goat, bring the wolf back, take the cabbage, then return for the wolf",
                    "Take the cabbage first, then the goat, and then the wolf",
                    "Take the wolf first, then the cabbage, then the goat",
                    "Take the goat first, come back, take the wolf, bring the goat back, take the cabbage, then take the goat"
                ],
                correct: 3
            },
            {
                id: 4,
                description: "A clock shows 3:15. The minute hand is pointing at the 3, and the hour hand is slightly past the 3. What is the exact angle between the two hands?",
                options: [
                    "0 degrees",
                    "7.5 degrees",
                    "15 degrees",
                    "22.5 degrees"
                ],
                correct: 1
            },
            {
                id: 5,
                description: "There are three doors. Behind one door is a car, behind the others are goats. You choose a door. The host, who knows what’s behind the doors, opens another door that has a goat. You are given a chance to switch your choice. Should you switch?",
                options: [
                    "Yes, it increases your chances of winning the car",
                    "No, the probability stays the same",
                    "It doesn’t matter; the car’s position is already fixed",
                    "No, because the host is tricking you"
                ],
                correct: 0
            },
            {
                id: 6,
                description: "A rope is 30 meters long. If you cut it into pieces of 1.5 meters each, how many pieces do you get?",
                options: [
                    "15",
                    "20",
                    "25",
                    "30"
                ],
                correct: 1
            },
            {
                id: 7,
                description: "A person has to build a 100-meter-long wall with 1-meter bricks. He can lay only 10 bricks per minute. How much time will he take to complete the wall?",
                options: [
                    "10 minutes",
                    "9 minutes",
                    "11 minutes",
                    "Impossible to determine"
                ],
                correct: 0
            },
            {
                id: 8,
                description: "If a bat and a ball cost $1.10 together, and the bat costs $1 more than the ball, how much does the ball cost?",
                options: [
                    "$0.05",
                    "$0.10",
                    "$0.15",
                    "$0.20"
                ],
                correct: 0
            },
            {
                id: 9,
                description: "A snail climbs a well that is 30 meters deep. Each day it climbs 3 meters but slips back 2 meters at night. How many days will it take to climb out?",
                options: [
                    "28",
                    "27",
                    "29",
                    "30"
                ],
                correct: 2
            },
            {
                id: 10,
                description: "What comes next in the sequence? 2, 6, 12, 20, 30, ...",
                options: [
                    "38",
                    "40",
                    "42",
                    "44"
                ],
                correct: 2
            },
            {
                id: 11,
                description: "If 5 cats can catch 5 mice in 5 minutes, how long will it take 100 cats to catch 100 mice?",
                options: [
                    "5 minutes",
                    "10 minutes",
                    "50 minutes",
                    "100 minutes"
                ],
                correct: 0
            },
            {
                id: 12,
                description: "How many times do the hands of a clock overlap in a 12-hour period?",
                options: [
                    "11",
                    "12",
                    "10",
                    "13"
                ],
                correct: 0
            },
            {
                id: 13,
                description: "What is the next number in the Fibonacci sequence? 1, 1, 2, 3, 5, 8, ...",
                options: [
                    "11",
                    "13",
                    "14",
                    "15"
                ],
                correct: 1
            },
            {
                id: 14,
                description: "How many squares are there in a 3x3 grid?",
                options: [
                    "9",
                    "14",
                    "18",
                    "19"
                ],
                correct: 3
            },
            {
                id: 15,
                description: "You see a single footprint in the desert. The person who made it must have...",
                options: [
                    "Jumped and landed on one foot",
                    "Been carried and dropped",
                    "Walked backward and erased the rest",
                    "None of the above"
                ],
                correct: 0
            },
            {
                id: 16,
                description: "You are in a dark room with a candle, a match, and a kerosene lamp. What do you light first?",
                options: [
                    "The candle",
                    "The match",
                    "The lamp",
                    "None of the above"
                ],
                correct: 1
            },
            {
                id: 17,
                description: "I am always hungry, I must always be fed. The finger I touch will soon turn red. What am I?",
                options: [
                    "A fire",
                    "A vampire",
                    "A knife",
                    "A dragon"
                ],
                correct: 0
            },
            {
                id: 18,
                description: "A horse is tied to a 10-meter-long rope. There's a pile of hay 15 meters away. How can the horse reach the hay?",
                options: [
                    "The rope stretches",
                    "The horse jumps",
                    "The rope isn't tied to anything",
                    "It's impossible"
                ],
                correct: 2
            },
            {
                id: 19,
                description: "What weighs more: a kilogram of iron or a kilogram of feathers?",
                options: [
                    "Iron",
                    "Feathers",
                    "Both are equal",
                    "Depends on gravity"
                ],
                correct: 2
            },
            {
                id: 20,
                description: "A man is looking at a photo of someone. His friend asks, 'Who is it?' He replies, 'Brothers and sisters, I have none. But that man's father is my father's son.' Who is in the picture?",
                options: [
                    "His father",
                    "His son",
                    "His uncle",
                    "Himself"
                ],
                correct: 1
            }
        ]
    },
    
    webDevelopment: {
        name: "Web Development",
        questions: [
            {
                id: 1,
                description: "What does HTML stand for?",
                options: [
                    "Hyper Text Markup Language",
                    "High Tech Modern Language",
                    "Hyper Transfer Markup Language",
                    "Hybrid Text Making Language"
                ],
                correct: 0
            },
            {
                id: 2,
                description: "Which language is used for styling web pages?",
                options: [
                    "JavaScript",
                    "Python",
                    "CSS",
                    "PHP"
                ],
                correct: 2
            },
            {
                id: 3,
                description: "Which of the following is a JavaScript framework?",
                options: [
                    "React",
                    "Laravel",
                    "Django",
                    "Flask"
                ],
                correct: 0
            },
            {
                id: 4,
                description: "What does CSS stand for?",
                options: [
                    "Cascading Style Sheets",
                    "Computer Style Sheets",
                    "Creative Style System",
                    "Colorful Style Sheets"
                ],
                correct: 0
            },
            {
                id: 5,
                description: "Which HTML tag is used to create a hyperlink?",
                options: [
                    "<a>",
                    "<link>",
                    "<href>",
                    "<url>"
                ],
                correct: 0
            },
            {
                id: 6,
                description: "Which of the following is NOT a valid CSS selector?",
                options: [
                    "@element",
                    "#element",
                    ".element",
                    "*"
                ],
                correct: 0
            },
            {
                id: 7,
                description: "What is the correct way to include an external JavaScript file?",
                options: [
                    "<script src='script.js'>",
                    "<javascript src='script.js'>",
                    "<js src='script.js'>",
                    "<link href='script.js'>"
                ],
                correct: 0
            },
            {
                id: 8,
                description: "Which HTTP method is used to update data on a server?",
                options: [
                    "PUT",
                    "GET",
                    "POST",
                    "DELETE"
                ],
                correct: 0
            },
            {
                id: 9,
                description: "What does API stand for in web development?",
                options: [
                    "Application Programming Interface",
                    "Advanced Programming Integration",
                    "Application Protocol Interface",
                    "Automated Programming Interface"
                ],
                correct: 0
            },
            {
                id: 10,
                description: "Which of the following is a NoSQL database?",
                options: [
                    "MongoDB",
                    "MySQL",
                    "PostgreSQL",
                    "Oracle"
                ],
                correct: 0
            },
            {
                id: 11,
                description: "What is the purpose of the 'viewport' meta tag in responsive web design?",
                options: [
                    "To control the layout on mobile browsers",
                    "To define the document's title",
                    "To specify the character set",
                    "To import external CSS files"
                ],
                correct: 0
            },
            {
                id: 12,
                description: "Which CSS property is used to make text bold?",
                options: [
                    "font-weight",
                    "text-weight",
                    "font-style",
                    "text-decoration"
                ],
                correct: 0
            },
            {
                id: 13,
                description: "What does JSON stand for?",
                options: [
                    "JavaScript Object Notation",
                    "Java Structured Object Notation",
                    "JavaScript Oriented Notation",
                    "JavaScript Object Naming"
                ],
                correct: 0
            },
            {
                id: 14,
                description: "Which of the following is used to store client-side data in web applications?",
                options: [
                    "localStorage",
                    "ServerStorage",
                    "DatabaseStorage",
                    "CloudStorage"
                ],
                correct: 0
            },
            {
                id: 15,
                description: "Which property changes the background color in CSS?",
                options: [
                    "background-color",
                    "bgcolor",
                    "color-background",
                    "bg-color"
                ],
                correct: 0
            },
            {
                id: 16,
                description: "What is AJAX used for?",
                options: [
                    "To update parts of a web page without reloading the whole page",
                    "To create animations in web pages",
                    "To enhance website security",
                    "To optimize database queries"
                ],
                correct: 0
            },
            {
                id: 17,
                description: "Which HTML element is used to create a dropdown list?",
                options: [
                    "<select>",
                    "<dropdown>",
                    "<option>",
                    "<list>"
                ],
                correct: 0
            },
            {
                id: 18,
                description: "Which of the following is a CSS preprocessor?",
                options: [
                    "SASS",
                    "jQuery",
                    "Angular",
                    "Node.js"
                ],
                correct: 0
            },
            {
                id: 19,
                description: "Which technology is used to make web applications function in real-time?",
                options: [
                    "WebSockets",
                    "HTTP",
                    "FTP",
                    "SMTP"
                ],
                correct: 0
            },
            {
                id: 20,
                description: "What is the purpose of a content delivery network (CDN) in web development?",
                options: [
                    "To deliver content quickly to users regardless of geographic location",
                    "To encrypt website data",
                    "To generate dynamic web content",
                    "To optimize database performance"
                ],
                correct: 0
            }
        ]
    },
    logicMaths: {
        name: "Logic-Based Mathematics",
        questions: [
            {
                id: 1,
                description: "If a car travels 60 km in 1 hour, how long will it take to travel 150 km at the same speed?",
                options: [
                    "2 hours",
                    "2.5 hours",
                    "3 hours",
                    "3.5 hours"
                ],
                correct: 2
            },
            {
                id: 2,
                description: "A number is doubled and then increased by 10 to become 50. What is the original number?",
                options: [
                    "15",
                    "20",
                    "25",
                    "30"
                ],
                correct: 1
            },
            {
                id: 3,
                description: "What comes next in the sequence: 2, 6, 12, 20, __?",
                options: [
                    "28",
                    "30",
                    "32",
                    "34"
                ],
                correct: 2
            },
            {
                id: 4,
                description: "A train is moving at 80 km/h. How far will it travel in 45 minutes?",
                options: [
                    "40 km",
                    "50 km",
                    "60 km",
                    "70 km"
                ],
                correct: 0
            },
            {
                id: 5,
                description: "Find the missing number in the pattern: 3, 9, 27, __, 243",
                options: [
                    "54",
                    "81",
                    "108",
                    "162"
                ],
                correct: 1
            },
            {
                id: 6,
                description: "A clock shows 4:15. What is the angle between the hour and minute hands?",
                options: [
                    "30°",
                    "45°",
                    "52.5°",
                    "60°"
                ],
                correct: 2
            },
            {
                id: 7,
                description: "A number is multiplied by 3 and then reduced by 5 to become 16. What is the number?",
                options: [
                    "5",
                    "6",
                    "7",
                    "8"
                ],
                correct: 3
            },
            {
                id: 8,
                description: "If 5 apples cost ₹20, how much do 8 apples cost?",
                options: [
                    "₹28",
                    "₹30",
                    "₹32",
                    "₹35"
                ],
                correct: 2
            },
            {
                id: 9,
                description: "What is the missing number in the series: 4, 9, 16, 25, __?",
                options: [
                    "30",
                    "35",
                    "36",
                    "49"
                ],
                correct: 2
            },
            {
                id: 10,
                description: "A rectangle has a length of 10 cm and width of 5 cm. What is its area?",
                options: [
                    "50 cm²",
                    "25 cm²",
                    "40 cm²",
                    "60 cm²"
                ],
                correct: 0
            },
            {
                id: 11,
                description: "What is the next number in the pattern: 1, 1, 2, 3, 5, 8, __?",
                options: [
                    "10",
                    "11",
                    "12",
                    "13"
                ],
                correct: 3
            },
            {
                id: 12,
                description: "A book costs ₹120 after a 20% discount. What was the original price?",
                options: [
                    "₹140",
                    "₹150",
                    "₹160",
                    "₹180"
                ],
                correct: 1
            },
            {
                id: 13,
                description: "The sum of two consecutive even numbers is 34. What are the numbers?",
                options: [
                    "16 and 18",
                    "14 and 16",
                    "12 and 14",
                    "10 and 12"
                ],
                correct: 1
            },
            {
                id: 14,
                description: "If 3x + 2 = 11, what is the value of x?",
                options: [
                    "2",
                    "3",
                    "4",
                    "5"
                ],
                correct: 1
            },
            {
                id: 15,
                description: "A cube has a volume of 64 cm³. What is the length of one side?",
                options: [
                    "2 cm",
                    "3 cm",
                    "4 cm",
                    "5 cm"
                ],
                correct: 2
            },
            {
                id: 16,
                description: "What comes next in the pattern: 2, 4, 8, 16, __?",
                options: [
                    "24",
                    "32",
                    "48",
                    "64"
                ],
                correct: 1
            },
            {
                id: 17,
                description: "A shopkeeper gives a 10% discount on a ₹500 item. What is the final price?",
                options: [
                    "₹400",
                    "₹450",
                    "₹475",
                    "₹490"
                ],
                correct: 2
            },
            {
                id: 18,
                description: "The sum of the angles in a triangle is always:",
                options: [
                    "90°",
                    "120°",
                    "180°",
                    "360°"
                ],
                correct: 2
            },
            {
                id: 19,
                description: "If a person walks 5 km in 1 hour, how far will they walk in 3.5 hours?",
                options: [
                    "15 km",
                    "17.5 km",
                    "20 km",
                    "22.5 km"
                ],
                correct: 1
            },
            {
                id: 20,
                description: "A number is reduced by 25% and becomes 75. What was the original number?",
                options: [
                    "90",
                    "95",
                    "100",
                    "105"
                ],
                correct: 2
            }
        ]
    },
    morse_code: {
        "name": "Morse Code",
        questions: [
            {
                "id": 1,
                "description": "What is the Morse code representation for the letter 'S'?",
                "options": [
                    "_ _ _",
                    ". . .",
                    "_ . _",
                    ". _ ."
                ],
                "correct": 1
            },
            {
                "id": 2,
                "description": "Which famous distress signal is represented by '... --- ...' in Morse code?",
                "options": [
                    "MAYDAY",
                    "HELP",
                    "SOS",
                    "ALERT"
                ],
                "correct": 2
            },
            {
                "id": 3,
                "description": "In Morse code, what is the duration of a dash relative to a dot?",
                "options": [
                    "Two times as long",
                    "Three times as long",
                    "Four times as long",
                    "Five times as long"
                ],
                "correct": 1
            },
            {
                "id": 4,
                "description": "Who is credited with developing the Morse code system?",
                "options": [
                    "Alexander Graham Bell",
                    "Thomas Edison",
                    "Samuel Morse",
                    "Guglielmo Marconi"
                ],
                "correct": 2
            },
            {
                "id": 5,
                "description": "What is the Morse code representation for the digit '0'?",
                "options": [
                    "_ _ _ _ _",
                    ". . . . .",
                    "_ . _ . _",
                    ". _ . _ ."
                ],
                "correct": 0
            },
            {
                "id": 6,
                "description": "Which of the following is NOT a standard element in Morse code?",
                "options": [
                    "Dot",
                    "Dash",
                    "Space between letters",
                    "Semi-dash"
                ],
                "correct": 3
            },
            {
                "id": 7,
                "description": "What is the recommended space duration between letters in Morse code?",
                "options": [
                    "Equal to one dot",
                    "Equal to one dash",
                    "Equal to three dots",
                    "Equal to five dots"
                ],
                "correct": 2
            },
            {
                "id": 8,
                "description": "Which character in Morse code has the unique pattern '.-.-.-'?",
                "options": [
                    "Question mark",
                    "Period/Full stop",
                    "Comma",
                    "Semicolon"
                ],
                "correct": 1
            },
            {
                "id": 9,
                "description": "In which year was the original Morse code system first demonstrated publicly?",
                "options": [
                    "1824",
                    "1844",
                    "1864",
                    "1884"
                ],
                "correct": 1
            },
            {
                "id": 10,
                "description": "What is the Morse code representation for the letter 'A'?",
                "options": [
                    ". _",
                    "_ .",
                    ". . .",
                    "_ _ _"
                ],
                "correct": 0
            },
            {
                "id": 11,
                "description": "Which Morse code character requires the longest time to transmit?",
                "options": [
                    "The digit 0",
                    "The digit 9",
                    "The letter Q",
                    "The letter Y"
                ],
                "correct": 0
            },
            {
                "id": 12,
                "description": "What is the international standard version of Morse code known as?",
                "options": [
                    "American Morse Code",
                    "Continental Morse Code",
                    "International Morse Code",
                    "Universal Morse Code"
                ],
                "correct": 2
            },
            {
                "id": 13,
                "description": "Which statement about Morse code is TRUE?",
                "options": [
                    "Letters used more frequently in English tend to have longer codes",
                    "Letters used more frequently in English tend to have shorter codes",
                    "All letters have the same code length regardless of frequency",
                    "Code length is determined alphabetically"
                ],
                "correct": 1
            },
            {
                "id": 14,
                "description": "What is the recommended space duration between words in Morse code?",
                "options": [
                    "Equal to three dots",
                    "Equal to five dots",
                    "Equal to seven dots",
                    "Equal to nine dots"
                ],
                "correct": 2
            },
            {
                "id": 15,
                "description": "Which of these professions historically required proficiency in Morse code?",
                "options": [
                    "Telephone operators",
                    "Newspaper editors",
                    "Radio operators",
                    "Postal clerks"
                ],
                "correct": 2
            },
            {
                "id": 16,
                "description": "What is the Morse code for 'CQ', which is used to initiate a conversation?",
                "options": [
                    "_ . _ . _ _ . _",
                    "_ . _ .   _ _ . _",
                    "_ . _ .   . _ _ .",
                    "_ _ _   _ _ _"
                ],
                "correct": 0
            },
            {
                "id": 17,
                "description": "In what year did the International Maritime Organization officially stop requiring ships to monitor Morse code distress frequencies?",
                "options": [
                    "1979",
                    "1989",
                    "1999",
                    "2009"
                ],
                "correct": 2
            },
            {
                "id": 18,
                "description": "What is the term for the speed at which Morse code is transmitted?",
                "options": [
                    "Bits per second",
                    "Words per minute",
                    "Dots per second",
                    "Characters per minute"
                ],
                "correct": 1
            },
            {
                "id": 19,
                "description": "Which of these Morse code representations is correct for the word 'HELLO'?",
                "options": [
                    ". . . .   .   . _ . .   . _ . .   _ _ _",
                    ". . . .   .   . _ . .   . _ . .   . _ . .",
                    ". . . .   .   . . . .   . . . .   _ _ _",
                    ". . . .   .   . . . .   . . . .   . . . ."
                ],
                "correct": 0
            },
            {
                "id": 20,
                "description": "Which of these technologies contributed most directly to the decline of Morse code usage?",
                "options": [
                    "Radio telephones",
                    "Cell phones",
                    "The internet",
                    "Satellite communications"
                ],
                "correct": 0
            }
        ]
    },
    coding_sequences: {
        "name": "Coding Sequences",
        "questions": [
            {
                "id": 1,
                "description": "What is the missing step in this loop?\n\nfor (int i = 0; i < 10; ?) { \n    printf(\"%d\\n\", i);\n}",
                "options": [
                    "i++",
                    "i--",
                    "i += 2",
                    "i = i * 2"
                ],
                "correct": 0
            },
            {
                "id": 2,
                "description": "What is the missing condition in this binary search implementation?\n\nwhile (low <= high) {\n    int mid = (low + high) / 2;\n    if (arr[mid] == target) {\n        return mid;\n    }\n    else if (arr[mid] < target) {\n        ?\n    }\n    else {\n        high = mid - 1;\n    }\n}",
                "options": [
                    "low = mid + 1",
                    "low = mid - 1",
                    "high = mid + 1",
                    "return mid + 1"
                ],
                "correct": 0
            },
            {
                "id": 3,
                "description": "What is the missing return statement in this factorial function?\n\nint factorial(int n) {\n    if (n == 0) {\n        return ?;\n    }\n    return n * factorial(n - 1);\n}",
                "options": [
                    "1",
                    "0",
                    "n",
                    "n-1"
                ],
                "correct": 0
            },
            {
                "id": 4,
                "description": "In a function that swaps two variables using pointers, what should be the missing step?\n\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    ?\n    *b = temp;\n}",
                "options": [
                    "*a = *b",
                    "*b = *a",
                    "a = b",
                    "b = a"
                ],
                "correct": 0
            },
            {
                "id": 5,
                "description": "What is the missing step in this Fibonacci sequence implementation?\n\nfor (int i = 2; i < n; i++) {\n    fib[i] = fib[i - 1] + ?;\n}",
                "options": [
                    "fib[i - 2]",
                    "fib[i]",
                    "fib[i + 1]",
                    "fib[i - 3]"
                ],
                "correct": 0
            },
            {
                "id": 6,
                "description": "Which missing function call correctly reverses a string using recursion?\n\nvoid reverse(char str[], int start, int end) {\n    if (start >= end) return;\n    char temp = str[start];\n    str[start] = str[end];\n    str[end] = temp;\n    ?\n}",
                "options": [
                    "reverse(str, start + 1, end - 1);",
                    "reverse(str, start, end);",
                    "reverse(str, start - 1, end + 1);",
                    "reverse(str, start + 2, end - 2);"
                ],
                "correct": 0
            },
            {
                "id": 7,
                "description": "What should replace '?' in this selection sort step?\n\nfor (int i = 0; i < n-1; i++) {\n    int minIdx = i;\n    for (int j = i+1; j < n; j++) {\n        if (arr[j] < arr[minIdx]) {\n            ?;\n        }\n    }\n}",
                "options": [
                    "minIdx = j",
                    "swap(arr[j], arr[minIdx])",
                    "minIdx = i + 1",
                    "arr[j] = arr[minIdx]"
                ],
                "correct": 0
            },
            {
                "id": 8,
                "description": "What is missing in this function to check if a number is prime?\n\nbool isPrime(int n) {\n    if (n < 2) return false;\n    for (int i = 2; ?; i++) {\n        if (n % i == 0) return false;\n    }\n    return true;\n}",
                "options": [
                    "i * i <= n",
                    "i <= n",
                    "i < n",
                    "i < n / 2"
                ],
                "correct": 0
            },
            {
                "id": 9,
                "description": "What is the missing base case in this recursive power function?\n\ndouble power(double x, int n) {\n    if (?) return 1;\n    return x * power(x, n - 1);\n}",
                "options": [
                    "n == 0",
                    "x == 1",
                    "n == 1",
                    "x == 0"
                ],
                "correct": 0
            },
            {
                "id": 10,
                "description": "What is the missing sorting technique used in this algorithm?\n\nfor (int i = 1; i < n; i++) {\n    int key = arr[i];\n    int j = i - 1;\n    while (j >= 0 && arr[j] > key) {\n        arr[j + 1] = arr[j];\n        j--;\n    }\n    arr[j + 1] = key;\n}",
                "options": [
                    "Insertion Sort",
                    "Bubble Sort",
                    "Selection Sort",
                    "Merge Sort"
                ],
                "correct": 0
            },
            {
                "id": 11,
                "description": "What is the missing step in this loop?\n\nfor (int i = 0; i < 10; ?) { \n    printf(\"%d\\n\", i);\n}",
                "options": ["i++", "i--", "i += 2", "i = i * 2"],
                "correct": 0
            },
            {
                "id": 12,
                "description": "What is the missing condition in this binary search implementation?\n\nwhile (low <= high) {\n    int mid = (low + high) / 2;\n    if (arr[mid] == target) {\n        return mid;\n    }\n    else if (arr[mid] < target) {\n        ?\n    }\n    else {\n        high = mid - 1;\n    }\n}",
                "options": ["low = mid + 1", "low = mid - 1", "high = mid + 1", "return mid + 1"],
                "correct": 0
            },
            {
                "id": 13,
                "description": "What is the missing return statement in this factorial function?\n\nint factorial(int n) {\n    if (n == 0) {\n        return ?;\n    }\n    return n * factorial(n - 1);\n}",
                "options": ["1", "0", "n", "n-1"],
                "correct": 0
            },
            {
                "id": 14,
                "description": "In a function that swaps two variables using pointers, what should be the missing step?\n\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    ?\n    *b = temp;\n}",
                "options": ["*a = *b", "*b = *a", "a = b", "b = a"],
                "correct": 0
            },
            {
                "id": 15,
                "description": "What is the missing step in this Fibonacci sequence implementation?\n\nfor (int i = 2; i < n; i++) {\n    fib[i] = fib[i - 1] + ?;\n}",
                "options": ["fib[i - 2]", "fib[i]", "fib[i + 1]", "fib[i - 3]"],
                "correct": 0
            },
            {
                "id": 16,
                "description": "Which missing function call correctly reverses a string using recursion?\n\nvoid reverse(char str[], int start, int end) {\n    if (start >= end) return;\n    char temp = str[start];\n    str[start] = str[end];\n    str[end] = temp;\n    ?\n}",
                "options": ["reverse(str, start + 1, end - 1);", "reverse(str, start, end);", "reverse(str, start - 1, end + 1);", "reverse(str, start + 2, end - 2);"],
                "correct": 0
            },
            {
                "id": 17,
                "description": "What should replace '?' in this selection sort step?\n\nfor (int i = 0; i < n-1; i++) {\n    int minIdx = i;\n    for (int j = i+1; j < n; j++) {\n        if (arr[j] < arr[minIdx]) {\n            ?;\n        }\n    }\n}",
                "options": ["minIdx = j", "swap(arr[j], arr[minIdx])", "minIdx = i + 1", "arr[j] = arr[minIdx]"],
                "correct": 0
            },
            {
                "id": 18,
                "description": "What is missing in this function to check if a number is prime?\n\nbool isPrime(int n) {\n    if (n < 2) return false;\n    for (int i = 2; ?; i++) {\n        if (n % i == 0) return false;\n    }\n    return true;\n}",
                "options": ["i * i <= n", "i <= n", "i < n", "i < n / 2"],
                "correct": 0
            },
            {
                "id": 19,
                "description": "What is the missing base case in this recursive power function?\n\ndouble power(double x, int n) {\n    if (?) return 1;\n    return x * power(x, n - 1);\n}",
                "options": ["n == 0", "x == 1", "n == 1", "x == 0"],
                "correct": 0
            },
            {
                "id": 20,
                "description": "What is the missing sorting technique used in this algorithm?\n\nfor (int i = 1; i < n; i++) {\n    int key = arr[i];\n    int j = i - 1;\n    while (j >= 0 && arr[j] > key) {\n        arr[j + 1] = arr[j];\n        j--;\n    }\n    arr[j + 1] = key;\n}",
                "options": ["Insertion Sort", "Bubble Sort", "Selection Sort", "Merge Sort"],
                "correct": 0
            }
            
        ]
    },
    cybersecurity: {
        name: "Cybersecurity",
       "questions": [
            {
                "id": 1,
                "description": "What does the acronym 'VPN' stand for?",
                "options": [
                    "Virtual Private Network",
                    "Verified Protection Node",
                    "Virtual Processing Network",
                    "Virus Prevention Network"
                ],
                "correct": 0
            },
            {
                "id": 2,
                "description": "Which of the following is NOT a form of malware?",
                "options": [
                    "Firewall",
                    "Trojan Horse",
                    "Ransomware",
                    "Spyware"
                ],
                "correct": 0
            },
            {
                "id": 3,
                "description": "What is the primary purpose of a firewall?",
                "options": [
                    "To block unauthorized access to or from a network",
                    "To clean a computer of viruses",
                    "To store passwords securely",
                    "To increase internet speed"
                ],
                "correct": 0
            },
            {
                "id": 4,
                "description": "Which type of attack tricks users into providing sensitive information by pretending to be a trusted entity?",
                "options": [
                    "Phishing",
                    "Man-in-the-Middle",
                    "Denial-of-Service (DoS)",
                    "Brute Force Attack"
                ],
                "correct": 0
            },
            {
                "id": 5,
                "description": "What is two-factor authentication (2FA)?",
                "options": [
                    "A security process requiring two different types of authentication",
                    "A type of malware attack",
                    "A method to speed up internet access",
                    "An advanced form of CAPTCHA"
                ],
                "correct": 0
            },
            {
                "id": 6,
                "description": "What is the strongest type of password?",
                "options": [
                    "A long, random mix of letters, numbers, and symbols",
                    "Your birthdate and pet’s name",
                    "A single dictionary word",
                    "Your phone number"
                ],
                "correct": 0
            },
            {
                "id": 7,
                "description": "Which of the following is an example of social engineering?",
                "options": [
                    "Tricking an employee into revealing their password over the phone",
                    "Exploiting a software vulnerability",
                    "Installing a keylogger on a victim’s computer",
                    "Using encryption to protect data"
                ],
                "correct": 0
            },
            {
                "id": 8,
                "description": "What does 'DDoS' stand for in cybersecurity?",
                "options": [
                    "Distributed Denial of Service",
                    "Data Duplication over Secure Servers",
                    "Dynamic Domain of Security",
                    "Decentralized Data Operations System"
                ],
                "correct": 0
            },
            {
                "id": 9,
                "description": "What should you do if you suspect a phishing email?",
                "options": [
                    "Do not click on any links and report it",
                    "Reply to verify if it’s legitimate",
                    "Open the attachment to see what it is",
                    "Ignore it and delete it without reporting"
                ],
                "correct": 0
            },
            {
                "id": 10,
                "description": "Which of the following best describes a 'zero-day' vulnerability?",
                "options": [
                    "A security flaw that is exploited before it is discovered and patched",
                    "A virus that is detected the same day it is released",
                    "A security measure that prevents attacks for 24 hours",
                    "A type of malware that spreads in one day"
                ],
                "correct": 0
            }
        ]
    },
    // Add more categories as needed
};

// Helper functions for quiz management
const QuizManager = {
    // Get questions for a specific category
    getQuestionsByCategory: function(category) {
        return quizQuestions[category]?.questions || [];
    },

    // Get all available categories
    getCategories: function() {
        return Object.keys(quizQuestions).map(key => ({
            id: key,
            name: quizQuestions[key].name
        }));
    },

    // Get category name
    getCategoryName: function(category) {
        return quizQuestions[category]?.name || '';
    },

    // Get total questions in a category
    getQuestionCount: function(category) {
        return quizQuestions[category]?.questions.length || 0;
    }
}; 