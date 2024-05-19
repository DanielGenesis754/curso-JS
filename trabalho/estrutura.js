// Array com os URLs dos vídeos
const videos = [
    "https://www.youtube.com/embed/6he_c73pwjg?autoplay=1",
    "https://www.youtube.com/embed/LC_MAVPZ_w8?autoplay=1",
    "https://www.youtube.com/embed/drwS88sV6C4?autoplay=1",
    "https://www.youtube.com/embed/-DFXhXvjK6g?autoplay=1",
    "https://www.youtube.com/embed/OZ_q_ikyIUw?autoplay=1"
]

// Índice atual do vídeo
let currentVideoIndex = 0;

// Função para reproduzir o próximo vídeo
function playNextVideo() {
    const videoFrame = document.getElementById('video-frame');
    
    // Verifica se há mais vídeos para reproduzir
    if (currentVideoIndex < videos.length) {
        // Carrega o próximo vídeo
        videoFrame.innerHTML = `<iframe width="560" height="315" src="${videos[currentVideoIndex]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
        
        // Incrementa o índice para o próximo vídeo
        currentVideoIndex++;
    }
}

// Função para iniciar a reprodução dos vídeos
function playVideos() {
    // Reproduz o primeiro vídeo
    playNextVideo();
    
    // Configura um intervalo para reproduzir os vídeos subsequentes
    setInterval(playNextVideo, 10000); // Altere o intervalo conforme necessário (em milissegundos)
}

// Chama a função playVideos() quando o botão for clicado
document.getElementById('startPlayback').addEventListener('click', playVideos);

// Marca as caixas de marcação quando as seções são clicadas
document.getElementById('programas').addEventListener('click', function() {
    document.getElementById('programasCheckbox').checked = true;
});
document.getElementById('desenhos').addEventListener('click', function() {
    document.getElementById('desenhosCheckbox').checked = true;
});