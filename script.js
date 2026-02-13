document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  const response = document.getElementById('responseMessage');
  response.classList.remove('hidden');
  response.style.color = '#ffaf36';
  response.textContent = `Thanks ${name}, your message has been sent! 🎉`;
  this.reset();
});
