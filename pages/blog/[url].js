import Image from "next/image";
import Layout from "../../componentes/layout";
import { formatearFecha, randomUID } from "../../utils/helpers";
import styles from "../../styles/blog.module.css";

function Post(post) {
  const { titulo, publishedAt, contenido, imagen } = post.post[0].attributes;

  return (
    <Layout title={titulo}>
      <article className={`${styles.post} ${styles["mt-3"]}`}>
        <Image
          src={imagen.data.attributes.formats.medium.url}
          width={1000}
          height={500}
          alt={"Guitar post image"}
        />
        <div className={styles.contenido}>
          <h3>{titulo}</h3>
          <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
          {contenido.map((text) => {
            return (
              <p key={randomUID()} className={styles.texto}>
                {text.children[0].text}
              </p>
            );
          })}
        </div>
      </article>
    </Layout>
  );
}

export default Post;

export async function getServerSideProps({ query }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/api/posts?filters[url]=${query.url}&populate=imagen`
  );

  const { data: post } = await respuesta.json();

  return {
    props: { post },
  };
}
