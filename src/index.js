const video=document.getElementById("video")
const btn = document.getElementById("btn")

function MediaPlayer(config) {this.media = config.el; }

MediaPlayer.prototype.pp = function()
{
    if (this.media.paused){this.media.play()}
    else {this.media.pause()}
    
}
const player = new MediaPlayer({el : video})
btn.onclick = ()=> player.pp()