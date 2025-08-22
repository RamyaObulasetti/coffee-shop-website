

function addReview(reviewText, rating) {
    const reviewSection = document.querySelector('.reviews-section');
    const newReview = document.createElement('div');
    newReview.classList.add('review');
    
    newReview.innerHTML = `
        <p>${reviewText}</p>
        <div class="rating">${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</div>
    `;
    
    reviewSection.appendChild(newReview);
}


addReview('"Fantastic place to unwind!" - Emily Rose', 5);
