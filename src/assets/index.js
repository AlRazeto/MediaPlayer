import MediaPlayer from "./MediaPlayer.js"

const video=document.getElementById("video")
const btn = document.getElementById("btn")


const player = new MediaPlayer({el : video})
btn.onclick = ()=> player.toggle()