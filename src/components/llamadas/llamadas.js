export async function getRick() {
    try {
        const res = await fetch("https://greftom4.github.io/apiEstaticaProds/r&mt7.json");
        const data = res.json();
        return data
    }
    catch (error) {
        console.log("tenemos un error con la carga: ", error);
        
    }
};