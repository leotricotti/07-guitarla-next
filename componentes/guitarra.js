import Image from "next/image";
import Link from "next/link";
import styles from "../styles/guitarra.module.css";

function Guitarra({ guitarra }) {
  const { nombre, precio, descripcion, imagen, url } = guitarra;

  return (
    <div className={styles.guitarra}>
      <Image
        src={imagen.data.attributes.formats.medium.url}
        alt={`Imagen de guitarra ${nombre}`}
        width={500}
        height={500}
      />
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion[0].children[0].text}</p>
        <p className={styles.precio}>
          ${precio}.<sup>99</sup>
        </p>
        <Link href={`/guitarras/${url}`} legacyBehavior>
          <a className={styles.enlace}>Ver Producto</a>
        </Link>
      </div>
    </div>
  );
}

export default Guitarra;
