const btn = document.getElementById('learnMoreBtn');
const extraInfo = document.getElementById('extraInfo');

btn.addEventListener('click', () => {
  extraInfo.classList.toggle('show');
  btn.textContent = extraInfo.classList.contains('show') ? 'Show Less' : 'Learn More';
})
