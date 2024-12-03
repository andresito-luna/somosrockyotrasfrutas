function playAudio(url, imgSrc) {
  const audioPlayer = document.getElementById('audio-player');
  const albumArt = document.getElementById('album-art');
  audioPlayer.src = url;
  albumArt.src = imgSrc;
  audioPlayer.play();
}