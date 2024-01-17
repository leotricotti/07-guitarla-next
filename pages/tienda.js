import Layout from "../componentes/layout";
import ListadoGuitarras from "../componentes/listado-guitarras";

function Tienda() {
  return (
    <Layout
      title={"Tienda Virtuañ"}
      description={"Tienda virtual, venta de guitarras, instrumentos, GuitarLA"}
    >
      <main className="contenido">
        <h1 className="heading">Nuestra Colección</h1>
        <ListadoGuitarras />
      </main>
    </Layout>
  );
}

export default Tienda;

export async function getStaticProps() {
  const respuesta = await fetch(
    "http://localhost.localdomain:1337/api/guitars"
  );
  const resultado = await respuesta.json();

  console.log(respuesta);
}

getStaticProps();
