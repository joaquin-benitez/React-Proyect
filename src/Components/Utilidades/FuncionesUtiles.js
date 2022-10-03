export const consultarBDD = async (ruta) => {
    const response = await fetch(ruta)
    const servicios = await response.json()
    return servicios
}
    