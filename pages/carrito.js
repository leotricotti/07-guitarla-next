import { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "../componentes/layout";
import styles from "../styles/carrito.module.css";

function Carrito({ carrito, actualizarCantidad, eliminarProducto }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const subtotal = carrito.map(
      (producto) => producto.precio * producto.cantidad
    );
    const total = subtotal.reduce((acc, curr) => acc + curr, 0);

    console.log(subtotal);

    setTotal(total);
  }, [carrito]);

  return (
    <Layout title={"Carrito de Compras"}>
      <main className="contenedor">
        <h1 className="heading">Carrito</h1>

        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Artículos</h2>

            {carrito?.length === 0
              ? "Carrito Vacio"
              : carrito?.map((producto) => (
                  <div key={producto.id} className={styles.producto}>
                    <div>
                      <Image
                        width={250}
                        height={480}
                        src={producto.imagen}
                        alt={producto.nombre}
                      />
                    </div>

                    <div>
                      <p className={styles.nombre}>{producto.nombre}</p>

                      <div className={styles.cantidad}>
                        <p>Cantidad:</p>
                        <select
                          className={styles.select}
                          onChange={(e) =>
                            actualizarCantidad({
                              id: producto.id,
                              cantidad: e.target.value,
                            })
                          }
                          value={producto.cantidad}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                      </div>

                      <p className={styles.precio}>
                        $<span>{producto.precio}</span>
                      </p>
                      <p className={styles.subtotal}>
                        {" "}
                        Subtotal: ${" "}
                        <span>{producto.precio * producto.cantidad}</span>
                      </p>
                      <button
                        className={styles.eliminar}
                        onClick={() => eliminarProducto(producto.id)}
                      >
                        x
                      </button>
                    </div>
                  </div>
                ))}
          </div>

          <aside className={styles.resumen}>
            <h3>Resumen del Pedido</h3>
            <p>
              Total a pagar:$ <span>{total}</span>
            </p>
          </aside>
        </div>
      </main>
    </Layout>
  );
}

export default Carrito;
