document.addEventListener('DOMContentLoaded', function () {
  const likeButton = document.getElementById('likeButton');
  const likeCount = document.getElementById('likeCount');

  // Get likes from localStorage
  let likes = parseInt(localStorage.getItem('portfolioLikes')) || 0;
  likeCount.textContent = likes;
  if (likes > 0) {
    likeButton.classList.add('liked');
  }

  likeButton.addEventListener('click', function () {
    if (likes === 0) {
      likeButton.classList.add('liked');
    }
    likes++;
    likeCount.textContent = likes;
    localStorage.setItem('portfolioLikes', likes);

    // Add animation
    likeButton.classList.add('pulse');
    setTimeout(() => {
      likeButton.classList.remove('pulse');
    }, 300);
  });
});
