const videos = [
    "https://www.youtube.com/embed/6he_c73pwjg?autoplay=1",
    "https://www.youtube.com/embed/LC_MAVPZ_w8?autoplay=1",
    "https://www.youtube.com/embed/drwS88sV6C4?autoplay=1",
    "https://www.youtube.com/embed/-DFXhXvjK6g?autoplay=1",
    "https://www.youtube.com/embed/OZ_q_ikyIUw?autoplay=1"
];

const desenhosVideos = [
    "https://www.youtube.com/embed/PsVVCilvVJE?autoplay=1",
    "https://www.youtube.com/embed/evvVvRTCcL4?autoplay=1",
    "https://www.youtube.com/embed/e5IUYHm78ts?autoplay=1"
];

let isPlaybackOn = false;
let lastVideoIndex = -1; // Variável para armazenar o índice do último vídeo

function getRandomVideo(videosArray, lastIndex) {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * videosArray.length);
    } while (randomIndex === lastIndex); // Garante que o índice seja diferente do último
    return { url: videosArray[randomIndex], index: randomIndex };
}

function getNextRandomVideo() {
    let videosArray = [];

    if (document.getElementById('programasCheckbox').checked) {
        videosArray = videosArray.concat(videos);
    }

    if (document.getElementById('desenhosCheckbox').checked) {
        videosArray = videosArray.concat(desenhosVideos);
    }

    if (videosArray.length === 0) {
        // Se nenhum checkbox estiver marcado, não há vídeos para reproduzir
        return { url: null, index: -1 };
    }

    return getRandomVideo(videosArray, lastVideoIndex);
}


function playNextVideo() {
    const videoFrame = document.getElementById('video-frame');
    const nextVideo = getNextRandomVideo();

    // Verifica se o próximo vídeo é o vídeo de transição
    if (nextVideo.url === transitionVideoUrl) {
        // Exibe o vídeo de transição
        videoFrame.innerHTML = `
            <iframe 
                width="560" 
                height="315" 
                src="${transitionVideoUrl}" 
                title="Vídeo de Transição" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
            ></iframe>`;
    } else {
        // Carrega o próximo vídeo principal
        if (nextVideo.url) {
            videoFrame.innerHTML = `
                <iframe 
                    width="560" 
                    height="315" 
                    src="${nextVideo.url}" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen
                ></iframe>`;
        }
    }
    // Atualiza o índice do último vídeo
    lastVideoIndex = nextVideo.index;
}

function togglePlayback() {
    if (isPlaybackOn) {
        const videoFrame = document.getElementById('video-frame');
        videoFrame.innerHTML = '';
        document.getElementById('togglePlayback').innerText = 'Ligar Reprodução';
        isPlaybackOn = false;
    } else {
        playNextVideo();
        document.getElementById('togglePlayback').innerText = 'Desligar Reprodução';
        isPlaybackOn = true;
    }
}

function updatePlaybackButtonVisibility() {
    const nextVideoButton = document.getElementById('togglePlayback');
    if (document.getElementById('programasCheckbox').checked || document.getElementById('desenhosCheckbox').checked) {
        nextVideoButton.removeAttribute('disabled'); // Remove o atributo disabled
    } else {
        nextVideoButton.setAttribute('disabled', true); // Adiciona o atributo disabled
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    updatePlaybackButtonVisibility(); // Atualiza a visibilidade do botão ao carregar a página
});

document.getElementById('programasCheckbox').addEventListener('change', updatePlaybackButtonVisibility);
document.getElementById('desenhosCheckbox').addEventListener('change', updatePlaybackButtonVisibility);

document.getElementById('togglePlayback').addEventListener('click', togglePlayback);

document.getElementById('nextVideo').addEventListener('click', function() {
    if (isPlaybackOn) {
        playNextVideo();
    }
});

document.querySelector('a[href="#programas"]').addEventListener('click', function() {
    document.getElementById('programasCheckbox').checked = true;
    updatePlaybackButtonVisibility();
});

document.querySelector('a[href="#desenhos"]').addEventListener('click', function() {
    document.getElementById('desenhosCheckbox').checked = true;
    updatePlaybackButtonVisibility();
});
