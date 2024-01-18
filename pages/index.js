import Layout from "../componentes/layout";
import Guitarra from "../componentes/guitarra";
import Post from "../componentes/post";
import Curso from "../componentes/curso";
import styles from "../styles/grid.module.css";

export default function Home({ guitarras, posts, curso }) {
  return (
    <>
      <Layout
        title={"Inicio"}
        description={"GuitarLA - Venta de guitarras, blog de música y más"}
      >
        <main className="contenedor">
          <h1 className="heading">Nuestra Colección</h1>
          <div className={styles.grid}>
            {guitarras?.map((guitarra) => (
              <Guitarra key={guitarra.id} guitarra={guitarra} />
            ))}
          </div>
        </main>
        <section className="contenedor">
          <h2 className="heading">Nuestros Cursos</h2>
        </section>
        <section className="contenedor">
          <h2 className="heading">Blog</h2>
          <div className={styles.grid}>
            {posts?.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const guitarraUrl = `${process.env.API_URL}/api/guitars?populate=imagen`;
  const postsUrl = `${process.env.API_URL}/api/posts?populate=imagen`;
  const cursoUrl = `${process.env.API_URL}/api/curso?populate=imagen`;

  const [resGuitarras, resPosts, resCurso] = await Promise.all([
    fetch(guitarraUrl),
    fetch(postsUrl),
    fetch(cursoUrl),
  ]);

  const [{ data: guitarras }, { data: posts }, { data: curso }] =
    await Promise.all([resGuitarras.json(), resPosts.json(), resCurso.json()]);

  console.log(curso);

  return {
    props: {
      guitarras,
      posts,
      curso,
    },
  };
}
