const delay = ms => new Promise(res => setTimeout(res, ms)); // https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line

function readMetaData(files) {
    let str = '';
    let FirstHalfDuration = 0;
    let SecondHalfDuration = 0;

    document.getElementById('disk').style.display = 'block';
    document.getElementById('container').style.display = 'flex';
    document.querySelector('h1').style.display = 'none';
    document.getElementById('text').style.display = 'none';

    // Get the artwork
    jsmediatags.read(files[0], { // https://stackoverflow.com/questions/45385981/how-to-get-album-art-from-mp3-using-jsmediatags
        onSuccess: tag => {
            let picture = tag.tags.picture;
            if (picture) {
                let base64String = "";
                for (let i = 0; i < picture.data.length; i++) {
                    base64String += String.fromCharCode(picture.data[i]);
                }
                let imageUri = "data:" + picture.format + ";base64," + window.btoa(base64String);

                let img = document.getElementById("cover");
                if (img) {
                    img.src = imageUri;
                }
            }
        },
    });

    // Display Artist
    jsmediatags.read(files[0], {
        onSuccess: function(tag) {
            document.getElementById('label_paragraph').innerHTML = tag.tags.artist;
        },
        onError: function(error) {
            console.log('Display artist error:', error);
        }
    });

    async function getTotalDuration() {
        let total = 0;
        for (let i = 0; i < files.length; i++) {
            if(i === files.length / 2 && files.length > 1) {
                FirstHalfDuration = Math.round(total * 1000);
                total = 0;
            }
            total += await new Promise(resolve => {
                let audio = document.createElement('audio');
                audio.src = URL.createObjectURL(files[i]);
                audio.addEventListener('loadedmetadata', () => {
                    resolve(audio.duration);
                });
            });
        }
        SecondHalfDuration = Math.round(total * 1000);
    }

    async function displayTitles() {
        for (let i = 0; i < files.length; i++) { // reading songs
            jsmediatags.read(files[i], {
                onSuccess: tag => {
                    str += tag.tags.title + '<br>';
                    document.getElementById('list').innerHTML = str;
                },
            });
        }
    }

    async function playAudio() {
        let audio = document.getElementById('audio');
        await delay (1500);

        document.getElementById('audio2').play();
        for (let i = 0; i < files.length; i++) {
            if(i === files.length / 2 && files.length > 1) {
                await delay (2000);
            }
            audio.src = URL.createObjectURL(files[i]);
            await audio.play();
            await new Promise(resolve => {
                audio.onended = resolve;
            });
        }
    }

    async function animate() {
        document.getElementById('stylus').style.transform = 'rotate(14deg)';
        await delay (1500);
        if (files.length > 1) {
            document.getElementById('stylus').style.transition = 'transform ' + FirstHalfDuration + 'ms';
            document.getElementById('stylus').style.transform = 'rotate(46deg)';
            await delay (FirstHalfDuration);
            document.getElementById('stylus').style.transition = 'transform 1500ms';
            document.getElementById('stylus').style.transform = 'rotate(14deg)';
            document.getElementById('disk').style.animationName = 'none';
            await delay (500);
            document.getElementById('disk').style.transform = 'translate(-50%, -50%) rotateY(180deg)';
            await delay (1500);
            document.getElementById('disk').style.animationName = 'spin';
        }
        document.getElementById('stylus').style.transition = 'transform ' + SecondHalfDuration + 'ms';
        document.getElementById('stylus').style.transform = 'rotate(46deg)';
        await delay (SecondHalfDuration);
        document.getElementById('stylus').style.transition = 'transform 1500ms';
        document.getElementById('stylus').style.transform = 'rotate(14deg)';
    }

    displayTitles();
    getTotalDuration();
    playAudio();
    animate();
}

// https://stackoverflow.com/questions/6756583/prevent-browser-from-loading-a-drag-and-dropped-file
window.addEventListener("dragover",function(e){
    e = e || event;
    e.preventDefault();
},false);
window.addEventListener("drop",function(e){
    e = e || event;
    e.preventDefault();
},false);
