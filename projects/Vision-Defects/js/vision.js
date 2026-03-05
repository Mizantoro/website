const imagesToPreload = [
    'projects/Vision-Defects/media/astigmatism.jpg',
    'projects/Vision-Defects/media/cataract.jpg',
    'projects/Vision-Defects/media/clear.jpg',
    'projects/Vision-Defects/media/glaucoma.jpg',
    'projects/Vision-Defects/media/hyperopia.jpg',
    'projects/Vision-Defects/media/macular_degeneration.jpg',
    'projects/Vision-Defects/media/myopia.jpg',
    'projects/Vision-Defects/media/retinopathy1.jpg',
    'projects/Vision-Defects/media/retinopathy2.jpg',
    'projects/Vision-Defects/media/visibility.svg'
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