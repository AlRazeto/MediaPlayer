interface Observer {
    update : (data :any ) => void
}

interface Subject{
    subscribe:  (observer : Observer) => void
    unsubscribe:(observer : Observer) => void 
}

class webSub implements Subject{
    observers : Observer[] =[]
    subscribe(observer: Observer) 
    {this.observers.push(observer)}
    
    unsubscribe (observer: Observer)
    {let inx = this.observers.findIndex(o => o===observer)
    this.observers.splice(inx , 1)}
    notify(data : any){
        this.observers.forEach(obs =>obs.update(data))
    }
}

