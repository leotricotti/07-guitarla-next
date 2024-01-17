import Image from "next/image";
import Layout from "../componentes/layout";
import styles from "../styles/nosotros.module.css";

function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description={"Sobre nosotros, GuitarLA, tienda de música"}
    >
      <main className="contenedor">
        <h2 className="headings">Nosotros</h2>

        <div className={styles.contenido}>
          <Image
            src="/img/nosotros.jpg"
            width={1000}
            height={800}
            alt="Imagen sobre nosotros"
          />
          <div>
            <p>
              Donec consequat sollicitudin massa, sed lacinia massa ultrices
              sed. Donec nec leo sagittis, convallis ipsum sed, viverra purus.
              Nulla facilisi. Duis in sodales tortor. Ut vel dignissim quam.
              Aenean posuere, lacus tristique condimentum lobortis, libero risus
              feugiat mi, ut condimentum magna lectus eget mi. Maecenas at
              tortor pharetra.
            </p>
            <p>
              Maximus ipsum sit amet, dignissim metus. Sed vitae turpis
              consectetur, lacinia est vel, accumsan lectus. Sed ac leo a leo
              convallis auctor eget id nisl. Sed bibendum ultrices fermentum.
              Pellentesque commodo quam sit amet enim auctor tincidunt in mollis
              tellus. Fusce libero quam, rutrum pellentesque mi in, tempus
              lobortis enim. Nunc lectus diam, varius nec sem ac, finibus
              bibendum elit.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Nosotros;
