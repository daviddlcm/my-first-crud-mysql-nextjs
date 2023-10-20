import Link from "next/link";
import "./styles.css"
function Nav() {
  return (
    <div className="nav__container">
      <Link href="/">
        <h1>Home</h1>
      </Link>
      <Link href="/new">
        <h1>Agregar producto</h1>
      </Link>
      <Link href="/about">
        <h1>About</h1>
      </Link>
    </div>
  );
}

export default Nav;
