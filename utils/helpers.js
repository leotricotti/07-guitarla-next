export const formatearFecha = (fecha) => {
  const nuevaFecha = new Date(fecha);
  const opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return nuevaFecha.toLocaleDateString("es-ES", opciones);
};

export function randomUID() {
  const date = Date.now().toString(36);
  const number = Math.random().toString(36).substring(3);

  return number + date;
}
