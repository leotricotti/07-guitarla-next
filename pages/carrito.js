import Layout from "../componentes/layout";
import styles from "../styles/carrito.modules.css";

function Carrito() {
  return (
    <Layout title={"Carrito de Compras"}>
      <main className="contenedor">
        <h1 className="heading">Carrito</h1>

        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Artículos</h2>
          </div>

          <aside>
            <h3>Resumen del Pedido</h3>
            <p>Total a pagar:</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
}

export default Carrito;
