const heading = document.getElementById("heading");
const image = document.getElementById("image");
const paragraph = document.getElementById("paragraph");
const sound = document.getElementById("sound");
const video = document.getElementById("video");

heading.innerText = "My Creative Heading";
image.src = "creative-image.jpg";
paragraph.innerText = "My creative paragraph text goes here.";
sound.src = "creative-sound.mp3";
video.src = "creative-video.mp4";

video.addEventListener("play", () => {
	console.log("Video started playing.");
});

sound.addEventListener("play", () => {
	console.log("Sound started playing.");
});