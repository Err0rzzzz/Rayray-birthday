// 简单的播放/暂停音乐逻辑
document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('bg-music');
  const playButton = document.getElementById('play-button');
  let isPlaying = false;

  function togglePlay() {
    if (!isPlaying) {
      audio.play().catch(err => {
        // 浏览器可能因为未用户操作阻止播放
        console.warn('音频播放被阻止：', err);
      });
      playButton.innerHTML = '&#10074;&#10074; 暂停音乐';
    } else {
      audio.pause();
      playButton.innerHTML = '&#9658; 播放音乐';
    }
    isPlaying = !isPlaying;
  }

  playButton.addEventListener('click', togglePlay);
});