import { Saiyajin, Humano } from './clases/razas.js'

let participantes = []

document.getElementById('btnRegistrar').addEventListener('click', ()=> {

    let nombre = document.getElementById('nombre')
    let raza = document.getElementById('raza')
    let previewElement = document.getElementById('preview')
    let imagenSrc = previewElement.style.backgroundImage
    let imgSrc = imagenSrc.slice(5, imagenSrc.length -2 )
    let ki = document.getElementById('poderPelea')

    let nuevoParticipante;

    if (raza.value == 'Saiyajin'){
        nuevoParticipante = new Saiyajin(
            nombre.value, 
            imgSrc, 
            ki.value, 
            raza.value
        )
    } else if ( raza.value == 'Humano'){
        nuevoParticipante = new Humano(
            nombre.value, 
            imgSrc, 
            ki.value, 
            raza.value
        )
    }

    if( raza.value && nombre.value && ki.value && imgSrc){
        participantes.push(nuevoParticipante)
        //reset formulario
        nombre.selectedIndex = 0
        raza.selectedIndex = 0
        previewElement.style.backgroundImage = 'none'
        imagenSrc = previewElement.style.backgroundColor = '#f0f0f0'
        ki.value = ""
        //funcion reloadTable
        reloadTable()
    }else{
        alert('Faltan datos por llenar')
    }
    
})

const reloadTable = () => {
    const participantesTemplate = document.getElementById('Participantes')
    participantesTemplate.innerHTML = " "
    participantes.forEach( (p,i) => {
        participantesTemplate.innerHTML += `
            <div class="px-3 pb-2 participante" data-fighter="${p.getNombre()}">
                <div class="card">
                    <img src="${p.getImg()}" class="card-img-top">
                    <div class="card-body">
                      <h4 class="card-title">${p.getNombre()}</h5>
                      <hr class="w-50 mx-auto">
                      <h6 class="card-text">Raza: ${p.getRaza()}</h6>
                      <h6 class="card-text">Poder de pelea: <span class="text-danger">${p.getPoder()}</span></h6>
                      <button class="btn btn-outline-warning" onclick="activarHabilidad('${i}')">Habilidad especial </button>
                    </div>
                </div>
            </div>
        `
    })
}

window.activarHabilidad = (i) => {
    const participante = participantes[i]
    if(participante.getRaza() == 'Saiyajin'){
        participante.Transformacion()
    } else if (participante.getRaza() == 'Humano'){
        participante.Coraje()
    }
    reloadTable()
}

document.getElementById('btnMasFuerte').addEventListener('click', ()=>{
    const masFuerte = participantes.sort((a,b) => b.getPoder() - a.getPoder())[0]
    const nombre = masFuerte.getNombre()

    document.querySelector(`[data-fighter= '${nombre}'] div`).style.boxShadow = "0px 0px 5px 2px yellow"
})