import MediaPlayer from "/MediaPlayer.js"
import Autoplay from "/plugins/autoplay.js"

const video=document.getElementById("video")
const btn = document.getElementById("btn")

const player = new MediaPlayer({
    el : video,
    pl: [new Autoplay({el:video})]
})
btn.onclick = ()=> player.toggle()

if ("serviceWorker" in navigator)
{navigator.serviceWorker.register("./SW.js")
.catch(error=>console.log(error))
}