// components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="navbar">
      <h1 className="navbar-title">My Website</h1>
      <nav>
        <ul className="navbar-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/services">Services</Link></li>

        </ul>
      </nav>
    </header>
  );
}
