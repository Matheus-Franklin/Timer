let darkMode = true 
const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', (event) => {
  if (event) {
    document.documentElement.classList.toggle('light');
  } 
})