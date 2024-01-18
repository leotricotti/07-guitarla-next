import Image from "next/image";
import Link from "next/link";
import { formatearFecha } from "../utils/helpers";
import styles from "../styles/blog.module.css";

function Post({ post }) {
  const { titulo, url, publishedAt, contenido, imagen } = post.attributes;
  const length = contenido.length - 1;

  return (
    <article>
      <Image
        src={imagen.data.attributes.formats.medium.url}
        width={500}
        height={500}
        alt={"Guitar post image"}
      />
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{contenido[length].children[0].text}</p>
      </div>
      <Link href={`/blog/${url}`} legacyBehavior>
        <a className={styles.enlace}>Leer Post</a>
      </Link>
    </article>
  );
}

export default Post;
