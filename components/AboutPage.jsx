import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    document.querySelectorAll(".fade").forEach((el, i) => {
      setTimeout(() => el.classList.add("show"), 120 + i * 80);
    });
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="heros fade">
        <div className="hero-grid">
          <div className="headline">
            <div className="kicker">About Project CyberShield</div>

            <h1>
              Building awareness, confidence, and responsibility for{" "}
              <span style={{ color: "var(--cyan-main)" }}>
                safer digital lives.
              </span>
            </h1>

            <div className="tagline">
              Project CyberShield is a national cyber awareness and digital safety
              initiative by <strong>Naksh Foundation</strong>. It focuses on
              educating students, educators, and communities about cyber risks,
              cyber laws, digital rights, and responsible online behavior—so
              people can use technology safely, confidently, and ethically.
            </div>

            <div className="keyword-row">
              <div className="kw">Cyber Awareness</div>
              <div className="kw">Legal Literacy</div>
              <div className="kw">Community Safety</div>
            </div>

            <span className="underline" />
          </div>

          <div className="hero-card">
            <h4>Snapshot</h4>
            <p>
              <strong>Awareness programs</strong> across schools & colleges •{" "}
              <strong>Legal literacy</strong> on cyber laws & reporting •{" "}
              <strong>Inclusive outreach</strong> for women, children & elderly.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN GRID */}
      <div className="section">
        {/* LEFT */}
        <div className="content-panel fade">
          <h2>Who we are</h2>
          <p className="muted">Our identity and purpose</p>

          <p style={{ marginTop: 8, lineHeight: 1.7 }}>
            Project CyberShield is an initiative of Naksh Foundation, established
            to address the growing challenges of cybercrime and digital misuse
            in India. The project brings together educators, legal experts,
            students, and volunteers to create practical, accessible, and
            community-driven cyber safety education.
          </p>

          <h2 style={{ marginTop: 18 }}>What we do</h2>
         <div className="offer-grid">
  <div className="offer-card">
    <div className="offer-icon">💻</div>
    <div>
      <h3>Cyber Awareness Workshops</h3>
      <p>
        Interactive sessions on online safety, scams, cyberbullying, and digital
        hygiene.
      </p>
    </div>
  </div>

  <div className="offer-card">
    <div className="offer-icon">⚖️</div>
    <div>
      <h3>Cyber Law & Legal Literacy</h3>
      <p>
        Awareness about cyber laws, reporting mechanisms, and digital rights.
      </p>
    </div>
  </div>

  <div className="offer-card">
    <div className="offer-icon">📣</div>
    <div>
      <h3>Community Outreach</h3>
      <p>
        Targeted programs for women, children, senior citizens, and vulnerable
        groups.
      </p>
    </div>
  </div>

  <div className="offer-card">
    <div className="offer-icon">📚</div>
    <div>
      <h3>Training & Resources</h3>
      <p>
        Open resources, workshops, and training modules for students and
        educators.
      </p>
    </div>
  </div>
</div>


          <h2 style={{ marginTop: 18 }}>Team</h2>
          <p className="muted">People behind CyberShield</p>

          <div className="team-grid">
            <TeamMember
              name="Rishabh Singh"
              role="Managing Director"
              img="/images/member/m2.jpeg"
            />
            <TeamMember
              name="Rashi Bhatia"
              role="Executive Director"
              img="/images/member/m1.jpeg"
            />
          </div>
        </div>

        {/* RIGHT */}
        <aside className="aside fade">
          <Stat number="100+" label="Awareness Programs" />
          <Stat number="10000+" label="Lives Impacted" />
          <Stat number="350+" label="Cyber Warriors Engaged" />
        </aside>
      </div>
    </>
  );
}

/* ---- SMALL COMPONENTS ---- */

function WhatCard({ icon, title, desc }) {
  return (
    <div className="what-card">
      <div className="icon">{icon}</div>
      <div>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}

function TeamMember({ img, name, role }) {
  return (
    <div className="member">
      <div className="avatar">
        <img src={img} alt={name} />
      </div>
      <div>
        <h5>{name}</h5>
        <p>{role}</p>
      </div>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div className="stat">
      <h3>{number}</h3>
      <p>{label}</p>
    </div>
  );
}
