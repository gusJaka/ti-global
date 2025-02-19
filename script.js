  function handleScroll() {
    const cardContainer = document.querySelector('.card-container');
    const triggerPoint = window.innerHeight * 0.6;
    const elementTop = cardContainer.getBoundingClientRect().top;

    if (elementTop < triggerPoint) {
      cardContainer.classList.remove('opacity-0', 'translate-y-25'); // Show
    } // Optional: else { cardContainer.classList.add('opacity-0', 'translate-y-25'); } // Hide on scroll up
  }

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll); // For elements visible on page load