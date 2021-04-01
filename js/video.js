var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video")
 	video.play()
 	document.querySelector("#volume").innerHTML = video.volume * 100 +"%"

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
 video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video")
 video.playbackRate = video.playbackRate *=.95
 console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video")
 video.playbackRate = video.playbackRate /=.95
 console.log(video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime < video.duration -15){
	console.log("Skip Video")
	video.currentTime += 15
	video.play()
	} else {
		// resets the video back to 0
		video.currentTime = 0
		// plays video from beginning
		video.play()
	}
});

document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted){
		console.log("unmute")
		this.innerHTML = "Unmute"
		video.muted = false
	} else {
		console.log("muted")
		this.innerHTML = "Mute"
		video.muted = true
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing Volume")
 	console.log(this.value)
	video.volume = this.value / 100
	document.querySelector("#volume").innerHTML = video.volume * 100 +"%"
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Changing CSS")
 	video.play()
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Removing CSS")
 	video.play()
	video.classList.remove("oldSchool")
});