// Personajes
let personajes = (()=>{

    const url = 'http://localhost:5500/dbz.json'
    const getData = async() => {
        const res = await fetch(url)
        const data = res.json()
        return data
    }

    return { getData }
})()

export default personajes;