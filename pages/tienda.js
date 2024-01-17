import Layout from "../componentes/layout";
import Guitarra from "../componentes/guitarra";
import styles from "../styles/tienda.module.css";

function Tienda({ guitarras }) {
  return (
    <Layout
      title={"Tienda Virtuañ"}
      description={"Tienda virtual, venta de guitarras, instrumentos, GuitarLA"}
    >
      <main className="contenido">
        <h1 className="heading">Nuestra Colección</h1>
        <div className={styles.guitarraGrid}>
          {guitarras.map((guitarra) => (
            <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default Tienda;

// export async function getStaticProps() {
//   const respuesta = await fetch(
//     `${process.env.API_URL}/api/guitars?populate=imagen`
//   );
//   const { data: guitarras } = await respuesta.json();

//   console.log(guitarras);

//   return {
//     props: {
//       guitarras,
//     },
//   };
// }

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
