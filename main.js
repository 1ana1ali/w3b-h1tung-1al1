document.addEventListener('DOMContentLoaded', function () {
  // Set the date we're counting down to in local time for Morocco (GMT+1)
  const countDownDate = new Date('2025-06-04T00:00:00+01:00').getTime();

  // Update the countdown every 1 second
  const x = setInterval(function() {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the distance between now and the countdown date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with class "countdown"
    document.querySelector('.countdown').innerHTML =
      days + " : " + hours + " : " + minutes + " : " + seconds;

    // If the countdown is finished, display a message and show the button
    if (distance < 0) {
      clearInterval(x);
      document.querySelector('.countdown').innerHTML = ""; // Clear countdown display
      document.querySelector('#happyBirthdayMessage').classList.remove('hidden'); // Show message
      document.querySelector('#actionButton').classList.remove('hidden'); // Show button
    }
  }, 1000);

  // Add event listener to the button to redirect to a website
  document.querySelector('#actionButton').addEventListener('click', function() {
    window.location.href = 'https://www.google.com'; // Ganti dengan URL website yang ingin dikunjungi
  });
});
