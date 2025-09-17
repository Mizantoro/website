const imagesToPreload = [
    'media/pictures/vision/astigmatism.jpg',
    'media/pictures/vision/cataract.jpg',
    'media/pictures/vision/clear.jpg',
    'media/pictures/vision/glaucoma.jpg',
    'media/pictures/vision/hyperopia.jpg',
    'media/pictures/vision/macular_degeneration.jpg',
    'media/pictures/vision/myopia.jpg',
    'media/pictures/vision/retinopathy1.jpg',
    'media/pictures/vision/retinopathy2.jpg',
    'media/pictures/vision/visibility.svg'
];

async function changeImage(img) {
    document.querySelector('h1').style.opacity = 0;
    document.querySelector('a').style.opacity = 0;
    document.body.style.backgroundImage = "url('media/pictures/vision/" + img + "')";
}

window.onload = function preloadImages() {
    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
    });
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