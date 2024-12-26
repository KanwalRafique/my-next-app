import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <h1 className="logo">My Website</h1>
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </footer>
  );
}
