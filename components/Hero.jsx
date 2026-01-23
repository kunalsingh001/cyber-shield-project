import { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";
import { useRouter } from "next/router";

const images = [
  "/images/hero/img1.jpg",
  "/images/hero/img2.jpg",
  "/images/hero/img3.jpg",
  "/images/hero/img4.jpg",
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="heroes">
      {/* SOCIAL LINKS */}
      <div className="hero-socials">
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn whatsapp"
        >
          <span className="icon">
            <i className="ri-whatsapp-fill whatsapp"></i>
          </span>
          <span className="label">WhatsApp Channel</span>
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn facebook"
        >
          <span className="icon">
            <i className="ri-linkedin-box-fill linkedin"></i>
          </span>
          <span className="label">LinkedIn</span>
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn twitter"
        >
          <span className="icon">
            <i className="ri-instagram-fill instagram"></i>
          </span>
          <span className="label">Instagram</span>
        </a>

        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn twitter"
        >
          <span className="icon">
            <i className="ri-youtube-fill youtube"></i>
          </span>
          <span className="label">YouTube</span>
        </a>
      </div>

      {/* LEFT CONTENT */}
      <div className="hero-left">
        <span className="hero-badge">A NAKSH FOUNDATION INITIATIVE</span>

        <h1>
          Building a Cyber-Safe <br />
          <span>Digitally Responsible Society</span>
        </h1>

        <p>
          Project CyberShield is a national cyber awareness and digital safety
          initiative by Naksh Foundation, dedicated to empowering students,
          educators, and communities with practical cyber knowledge, legal
          awareness, and responsible digital practices.
        </p>

        <div className="hero-actions">
          <button className="primary-btn" onClick={() => router.push("/wedo")}>Explore Our Mission</button>
          <button className="secondary-btn" onClick={() => router.push("/joinus")}>Join the Movement</button>
        </div>

        <div className="hero-stats">
          <strong>10,000+</strong> Lives Impacted Through Cyber Awareness
        </div>
      </div>

      {/* RIGHT VISUAL */}
      {/* RIGHT VISUAL */}
      <div className="hero-right">
        <div className="cyber-circle">
          <span className="pulse" />

          <div className="circle-image">
            <img key={active} src={images[active]} alt="CyberShield Impact" />
          </div>
        </div>
      </div>
    </section>
  );
}
