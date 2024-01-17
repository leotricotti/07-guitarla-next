import Link from "next/link";
import Layout from "../componentes/layout";

function Custom404() {
  return (
    <Layout title={"Página no encontrada"}>
      <p className="error">Página no encontrada</p>
      <Link href={"/"} legacyBehavior>
        <a className="error-enlace">Ir a Inicio</a>
      </Link>
    </Layout>
  );
}

export default Custom404;
