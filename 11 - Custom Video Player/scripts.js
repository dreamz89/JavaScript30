/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build out functions */
function togglePlay() {
  video.paused ? video.play() : video.pause();
}
function handleRange(){
  video[this.name] = this.value
}
video.addEventListener('click', togglePlay)
video.addEventListener('play', () => {
  toggle.textContent = video.paused ? '►' : '❚ ❚' })
video.addEventListener('pause', () => {
  toggle.textContent = video.paused ? '►' : '❚ ❚' })
video.addEventListener('timeupdate', () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = percent + '%'
})
progress.addEventListener('click', (e) => {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
})


toggle.addEventListener('click', togglePlay)
skipButtons.forEach(button => {
  button.addEventListener('click', () => {
    video.currentTime += parseFloat(button.dataset.skip)})
})
ranges.forEach(range => {
  range.addEventListener('click', handleRange);
  range.addEventListener('mousemove', handleRange);
})
