import Layout from "../componentes/layout";
import Post from "../componentes/post";

function Blog({ posts }) {
  console.log(posts);
  return (
    <div>
      <Layout
        title={"Blog"}
        description={
          "Blog de música, venta de guitarras, instrumentos, GuitarLA"
        }
      >
        <main className="contenedor">
          <h1 className="heading">Blog</h1>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </Layout>
    </div>
  );
}

export default Blog;

export async function getStaticProps() {
  const respuesta = await fetch(
    `${process.env.API_URL}/api/posts?populate=imagen`
  );

  const { data: posts } = await respuesta.json();

  return {
    props: {
      posts,
    },
  };
}
