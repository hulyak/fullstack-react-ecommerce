import Link from "next/link";

const Nav = () => (
  <nav>
    <Link href="/products">products</Link>
    <Link href="/sell">sell</Link>
    <Link href="/orders">orders</Link>
    <Link href="/account">account</Link>
  </nav>
);

export default Nav;
