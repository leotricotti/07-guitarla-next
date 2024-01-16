import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header>
      <div className="contenido">
        <Image
          src="img/logo.svg"
          alt="Company logo"
          width={300}
          height={40}
          priority={true}
        />
        <nav className="navegacion">
          <Link href={"/"}>Inicio</Link>
          <Link href={"/nosotros"}>Nosotros</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
