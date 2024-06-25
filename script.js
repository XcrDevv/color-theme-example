const themeButton = document.querySelector('.theme-button');
const body = document.body;

const handleToggleTheme = () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    if (body.classList.contains('dark-mode')) {
        themeButton.textContent = "Light Mode"
    } else {
        themeButton.textContent = "Dark Mode"
    }
}

themeButton.addEventListener('click', handleToggleTheme)