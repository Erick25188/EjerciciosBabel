


export const fetchRazas = async(raza) => {
    let url = `https://dog.ceo/api/breed/${raza}/images/random/3`;
    const response = await fetch(url);
    const datos = await response.json();
    // console.log(datos.message);
    if (datos.code === 404 || datos.message.length === 0) {
     console.log(datos);
        return datos;
    } else {
        return datos;
    }
}
