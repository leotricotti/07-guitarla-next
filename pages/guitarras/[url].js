import Layout from "../../componentes/layout";
import Image from "next/image";
import styles from "../../styles/guitarra.module.css";

function Producto({ guitarra }) {
  const { nombre, descripcion, precio, imagen } = guitarra[0].attributes;

  return (
    <Layout
      title={`Guitara ${nombre}`}
      descripcion={"Guitarras, blog de música, instrumentos"}
    >
      <div className={styles.guitarra}>
        <Image
          src={imagen.data.attributes.formats.medium.url}
          alt={`Imagen de guitarra ${nombre}`}
          width={500}
          height={500}
        />
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>
            {descripcion[0].children[0].text}
          </p>
          <p className={styles.precio}>
            ${precio}.<sup>99</sup>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Producto;

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/api/guitars`);
  const { data } = await respuesta.json();

  const paths = data.map((guitarra) => ({
    params: {
      url: guitarra.attributes.url,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  console.log(url);

  const respuesta = await fetch(
    `${process.env.API_URL}/api/guitars?filters[url]=${url}&populate=imagen`
  );
  const { data: guitarra } = await respuesta.json();

  return {
    props: {
      guitarra,
    },
  };
}

// export async function getServerSideProps({ query: { url } }) {
//   console.log(url);

//   const respuesta = await fetch(
//     `${process.env.API_URL}/api/guitars?filters[url]=${url}&populate=imagen`
//   );
//   const { data: guitarra } = await respuesta.json();

//   return {
//     props: {
//       guitarra,
//     },
//   };
// }