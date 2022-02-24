import Personajes from "./consulta.js";

document.getElementById('buttonImages').addEventListener('click', async()=>{

    //recibimos la data desde Personajes
    const { personajes } = await Personajes.getData()
    console.log(personajes)
    //seleccionamos e igualamos el valor del form con el json
    const pj = document.getElementById('nombre').value 
    const imagenesPjTemplate = personajes
        .find( (p) => p.name == pj)
        .imagenes.map( (i) => `<img width="200" src="/assets/imgs/${pj}/${i}"/>`).join('');
    //llenamos el html con la seleccion de imagenes
    document.getElementsByClassName('personajes')[0].innerHTML = imagenesPjTemplate

    //evento clic en la imagen
    document.querySelectorAll(".personajes img").forEach( i => {
        i.addEventListener('click', (e) =>{
            $('#imagenModal').modal("toggle")
            const imgSrc = e.target.src
            document.getElementById('preview').style.backgroundImage = `url(${imgSrc})`
        })
    })
})