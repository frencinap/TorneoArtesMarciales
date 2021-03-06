import Personaje from './personaje.js'

class Saiyajin extends Personaje{
    constructor(nombre, img, poder, raza){
        super(nombre, img, poder, raza)
    }

    Transformacion(){
        let poder  = this.getPoder()
        this.setPoder( parseInt(poder * 2))
    }
}

class Humano extends Personaje{
    constructor(nombre, img, poder, raza){
        super(nombre, img, poder, raza)
    }

    Coraje(){
        let poder  = this.getPoder()
        this.setPoder( parseInt(poder * 1.5))
    }
}

export { Saiyajin, Humano }