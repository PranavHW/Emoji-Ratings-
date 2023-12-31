let selectedRating = 0;

function setRating(rating) {
  selectedRating = rating;
  updateSelectedRating();
}

function updateSelectedRating() {
  const selectedRatingElement = document.getElementById('selected-rating');
  selectedRatingElement.textContent = `Selected Rating: ${selectedRating}`;
}
