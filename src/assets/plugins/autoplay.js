function Autoplay(config){
    this.media= config.el
}
Autoplay.prototype.run=function(){
    this.media.play()
}


export default Autoplay