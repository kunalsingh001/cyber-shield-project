import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const logo = document.getElementById("footerTextLogo");

    const onScroll = () => {
      if (!logo) return;

      if (window.scrollY > lastScrollY) {
        // scrolling down
        logo.classList.add("show");
      } else {
        // scrolling up
        logo.classList.remove("show");
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* LOGO */}
        <div className="footer-logo">
          <div className="footer-text-logo" id="footerTextLogo">
            THE <span>CYBER</span> SHIELD <br /> <em>PROJECT</em>
          </div>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <div className="link-group">
            <h4>Home</h4>
            <Link href="/about">About us</Link>
            <Link href="/team">Team</Link>
            <Link href="/wedo">What we do</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="link-group">
            <h4>More</h4>
            <Link href="/projects">Projects</Link>
            <Link href="/events">Events</Link>
            <Link href="/donate">Donate</Link>
            <Link href="/blog">Blog</Link>
          </div>

          <div className="link-group">
            <h4>Connect</h4>
            {/* External links stay <a> */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* SUBSCRIBE */}
        <div className="subscribe-box">
          <h4>Subscribe to get latest updates</h4>
          <div className="subscribe-form">
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
