async function switchTheme() {
    const root = document.documentElement;
    if (getComputedStyle(root).getPropertyValue('--background-color').trim()==="#090909") {
        root.style.setProperty('--background-color', '#FFFAFA');
        root.style.setProperty('--background-color-higher', '#ededed');
        root.style.setProperty('--text-color', 'black');
        document.getElementById("theme_toggle_img").src="media/pictures/index/ico/night.svg";
    }
    else {
        root.style.setProperty('--background-color', '#090909');
        root.style.setProperty('--background-color-higher', '#121212');
        root.style.setProperty('--text-color', '#fff');
        document.getElementById("theme_toggle_img").src="media/pictures/index/ico/day.svg";
    }
}
