import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const isActive = (path) => router.pathname === path;

  return (
    <>
      <nav className="command-nav">
        <div className="nav-left">
          <div className="logo">
            <Image
              src="/images/logo.webp"
              alt="Cyber Shield Project Logo"
              width={40}
              height={40}
              priority
            />
          </div>

          <div className="system-status">
            <span className="status-dot"></span>
            <span>SYSTEM ONLINE</span>
          </div>
        </div>

        <div className="nav-links">
          <Link href="/" className={isActive("/") ? "active-link" : ""}>
            Home
          </Link>

          <Link
            href="/about"
            className={isActive("/about") ? "active-link" : ""}
          >
            About us
          </Link>
          <Link href="/wedo" className={isActive("/wedo") ? "active-link" : ""}>
            What We Do
          </Link>
          <Link
            href="/resources-events"
            className={isActive("/resources-events") ? "active-link" : ""}
          >
            Resources & Events
          </Link>

          <Link
            href="/contact"
            className={isActive("/contact") ? "active-link" : ""}
          >
            Contact Us
          </Link>
        </div>

        <div className="nav-actions">
          <button className="admin-btn">Donate Us</button>
          <Link
            href="/joinus"
            className="donate-btn"
          >
            
          Join Us
          </Link>
        </div>

        <div
          className="hamburger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {open && (
        <div className="mobile-menu">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            About us
          </Link>
          <Link href="/wedo" onClick={() => setOpen(false)}>
            What We Do
          </Link>
          <Link href="/resources-events" onClick={() => setOpen(false)}>
            Resources & Events
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact Us
          </Link>

          <button className="admin-btn">Donate Us</button>
          <button className="donate-btn"><Link
            href="/joinus"
            className="donate-btn"
          >
            
          Join Us
          </Link></button>
        </div>
      )}
    </>
  );
}
