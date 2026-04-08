const imagesToPreload = [
    'media/astigmatism.jpg',
    'media/cataract.jpg',
    'media/clear.jpg',
    'media/glaucoma.jpg',
    'media/hyperopia.jpg',
    'media/macular_degeneration.jpg',
    'media/myopia.jpg',
    'media/retinopathy1.jpg',
    'media/retinopathy2.jpg',
    'media/visibility.svg'
];

async function changeImage(img) {
    document.querySelector('h1').style.opacity = 0;
    document.querySelector('a').style.opacity = 0;
    document.body.style.backgroundImage = "url('media/" + img + "')";
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