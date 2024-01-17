import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/header.module.css";

function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={`contenido ${styles.barra}`}>
          <Link href={"/"}>
            <Image
              src="img/logo.svg"
              alt="Company logo"
              width={300}
              height={40}
              priority={true}
            />
          </Link>
          <nav className={styles.navegacion}>
            <Link href={"/"} legacyBehavior>
              <a className={router.pathname === "/" ? styles.active : ""}>
                Inicio
              </a>
            </Link>
            <Link href={"/nosotros"} legacyBehavior>
              <a
                className={router.pathname === "/nosotros" ? styles.active : ""}
              >
                Nosotros
              </a>
            </Link>
            <Link href={"/tienda"} legacyBehavior>
              <a className={router.pathname === "/tienda" ? styles.active : ""}>
                Tienda
              </a>
            </Link>
            <Link href={"/blog"} legacyBehavior>
              <a className={router.pathname === "/blog" ? styles.active : ""}>
                Blog
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
