import Image from "next/image";
import styles from "../styles/curso.module.css";

function Curso({ curso }) {
  const { titulo, contenido, imagen } = curso.attributes;
  console.log(imagen.data.attributes.formats.medium.url);

  return (
    <section className={`curso ${styles.curso}`}>
      <style jsx>
        {`
          .curso {
            background-image: linear-gradient(
                to right,
                rgba(0, 0, 0, 0.7),
                rgba(0, 0, 0, 0.8)
              ),
              url(${imagen.data.attributes.formats.medium.url});
          }
        `}
      </style>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2 className="heading">{titulo}</h2>
          <p>{contenido[0].children[0].text}</p>
        </div>
      </div>
    </section>
  );
}

export default Curso;
