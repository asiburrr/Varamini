    // Set the date and time for the countdown
const countdownDate = new Date('2023-03-05T00:00:00Z').getTime();

// Update the countdown every second
const countdownTimer = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // Calculate the remaining days,
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update the countdown numbers on the page
  document.querySelector('[data-number="days"]').textContent = days < 10 ? `0${days}` : days;
  document.querySelector('[data-number="hours"]').textContent = hours < 10 ? `0${hours}` : hours;
  document.querySelector('[data-number="minutes"]').textContent = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector('[data-number="seconds"]').textContent = seconds < 10 ? `0${seconds}` : seconds;

  // Flip the countdown numbers every second
  const countdownNumbers = document.querySelectorAll('.countdown-number');
  countdownNumbers.forEach(number => number.classList.toggle('flip', seconds % 2 === 0));

  // Stop the countdown when it reaches zero
  if (distance < 0) {
    clearInterval(countdownTimer);
    document.querySelector('.countdown-container').innerHTML = '<h2>Our next release is here!</h2>';
  }
}, 1000);
