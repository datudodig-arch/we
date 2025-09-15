// Elements
// Upload images
const uploadInput = document.getElementById('uploadImages');
uploadInput.addEventListener('change', (e) => {
slides = Array.from(e.target.files).map(file => URL.createObjectURL(file));
slideIndex = 0;
showSlide(slideIndex);
});


// Love letter typing effect
const loveText = "My love, every moment with you is a blessing. Thank you for being my partner, my joy, and my forever ❤️";
let letterIndex = 0;
function typeLetter() {
if (letterIndex < loveText.length) {
loveLetterEl.textContent += loveText.charAt(letterIndex);
letterIndex++;
setTimeout(typeLetter, 70);
}
}


replayLetterBtn.addEventListener('click', () => {
loveLetterEl.textContent = '';
letterIndex = 0;
typeLetter();
});


typeLetter();


// Save her response
responseBox.value = localStorage.getItem('herResponse') || '';
responseBox.addEventListener('input', () => {
localStorage.setItem('herResponse', responseBox.value);
});


// Countdown setup
let targetDate = localStorage.getItem('targetDate');
if (!targetDate) {
targetDate = prompt("Enter our meetup date (YYYY-MM-DD):");
localStorage.setItem('targetDate', targetDate);
}


function updateCountdown() {
const now = new Date();
const eventDate = new Date(targetDate);
const diff = eventDate - now;


if (diff <= 0) {
countdownEl.textContent = "The day has arrived! ❤️";
return;
}


const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
const minutes = Math.floor((diff / (1000 * 60)) % 60);
const seconds = Math.floor((diff / 1000) % 60);


countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}


setInterval(updateCountdown, 1000);
updateCountdown();
