async function changeImage(img) {
    document.querySelector('h1').style.opacity = 0;
    document.querySelector('a').style.opacity = 0;
    document.body.style.backgroundImage = "url('media/pictures/vision/" + img + "')";
}

async function hideButtons() {
    const elements = document.getElementsByClassName('select');

    if (elements[0].style.display === 'none') {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = 'inline-block';
        }
    }
    else {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = 'none';
        }
    }
}