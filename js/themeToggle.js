const body = document.querySelector('body');
const toggleButton = document.getElementById("toggleButton");
const menu__items = document.querySelectorAll('.menu__item');

const darkModeButton = document.getElementById("darkModeButton");
const lightModeButton = document.getElementById("lightModeButton");

export function toggleButtonStyle() {
    toggleButton.addEventListener('click', () => {

        toggleButton.style.justifyContent = isToggleButtonFlexEnd() ? "flex-start" : "flex-end";
        toggleDarkMode();
    });
}

function isToggleButtonFlexEnd() {
    return toggleButton.style.justifyContent === "flex-end";
}

function toggleDarkMode() {

    toggleBodyDarkMode();
    toggleMenuItemsDarkMode();
    toggleButtonDarkMode();

}

function toggleBodyDarkMode() {
    body.classList.toggle('darkMode');
}

function toggleMenuItemsDarkMode() {
    
    menu__items.forEach(menu__item => {
        menu__item.classList.toggle('darkMode');
    });
}

function toggleButtonDarkMode() {
    lightModeButton.classList.toggle('darkMode');
    darkModeButton.classList.toggle('darkMode');
}