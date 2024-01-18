import Layout from "../componentes/layout";
import Guitarra from "../componentes/guitarra";
import styles from "../styles/grid.module.css";

function Tienda({ guitarras }) {
  return (
    <Layout
      title={"Tienda Virtuañ"}
      description={"Tienda virtual, venta de guitarras, instrumentos, GuitarLA"}
    >
      <main className="contenido">
        <h1 className="heading">Nuestra Colección</h1>
        <div className={styles.grid}>
          {guitarras?.map((guitarra) => (
            <Guitarra key={guitarra.id} guitarra={guitarra} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default Tienda;

export async function getServerSideProps() {
  const respuesta = await fetch(
    `${process.env.API_URL}/api/guitars?populate=imagen`
  );
  const { data: guitarras } = await respuesta.json();

  return {
    props: {
      guitarras,
    },
  };
}
