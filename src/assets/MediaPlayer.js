function MediaPlayer(config) {
    this.media = config.el; 
    this.plugin= config.pl || []
    this.initPlugin()
}
MediaPlayer.prototype.initPlugin=function(){
    this.plugin.forEach(element => {
        element.run()
    });
}

MediaPlayer.prototype.toggle = function()
{
    if (this.media.paused){this.play()}
    else {this.pause()}
    
}
MediaPlayer.prototype.play= function ()
{this.media.play()}
MediaPlayer.prototype.pause= function ()
{this.media.pause()}

export default MediaPlayer