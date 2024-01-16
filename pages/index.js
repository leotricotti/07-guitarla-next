import Link from "next/link";
import Layout from "../componentes/layout";

export default function Home() {
  return (
    <>
      <Layout>
        <h1>Hola mundo desde Next</h1>
        <Link href={"/nosotros"}>Ir a nosotros</Link>
      </Layout>
    </>
  );
}
