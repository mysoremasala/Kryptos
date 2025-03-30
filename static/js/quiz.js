function submitQuiz() {
    // Calculate the score based on correct answers
    let score = 0;
    // Add your score calculation logic here
    
    // Send the score to the server
    fetch('/submit_quiz', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            score: score
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert(`Quiz completed!\nScore: ${data.score}\nBananos earned: ${data.bananos_earned} 🍌\nTotal bananos: ${data.total_bananos} 🍌`);
            window.location.href = '/';  // Redirect to homepage
        } else {
            alert('Error submitting quiz: ' + data.error);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error submitting quiz');
    });
} 