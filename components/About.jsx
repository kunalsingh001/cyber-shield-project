import { useEffect, useState } from "react";

const aboutImages = [
  "/images/about/img1.jpg",
  "/images/about/img2.jpg",
  "/images/about/img3.jpg",
  "/images/about/img4.jpg",
];

export default function About() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % aboutImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section">
      {/* LEFT CONTENT */}
      <div className="left-content">
        <h5>ABOUT THE INITIATIVE</h5>
        <h1>About Project CyberShield</h1>

        <p style={{ marginBottom: "40px" }}>
          Project CyberShield is a national cyber awareness and digital safety
          initiative by <strong>Naksh Foundation</strong>. It was created in
          response to the rapidly increasing cybercrime and the widespread lack
          of awareness about online safety, cyber laws, and digital rights.
        </p>

        <div className="items">
          <div className="item">
            <div className="icon-box">🏫</div>
            <div className="item-content">
              <h3>Cyber Awareness Programs</h3>
              <p>
                Interactive awareness sessions conducted in schools, colleges,
                universities, and community spaces across India.
              </p>
            </div>
          </div>

          <div className="item">
            <div className="icon-box">🛡️</div>
            <div className="item-content">
              <h3>Digital Safety & Cyber Hygiene</h3>
              <p>
                Training on safe online practices, fraud prevention, privacy
                protection, cyberbullying awareness, and identity theft.
              </p>
            </div>
          </div>

          <div className="item">
            <div className="icon-box">🤝</div>
            <div className="item-content">
              <h3>Community Outreach & Inclusion</h3>
              <p>
                Focused programs for women, children, senior citizens, and
                vulnerable communities to reduce digital risks and fear.
              </p>
            </div>
          </div>

          <div className="item">
            <div className="icon-box">⚖️</div>
            <div className="item-content">
              <h3>Cyber Law & Legal Literacy</h3>
              <p>
                Awareness about cyber laws, reporting mechanisms, and legal
                rights to help victims respond confidently to cyber incidents.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="right-box">
        <img
          key={active}
          src={aboutImages[active]}
          alt="CyberShield initiatives"
          className="about-right-image"
        />
      </div>
    </section>
  );
}
