import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function WhatWeDo() {
  useEffect(() => {
    document.querySelectorAll(".fade").forEach((el, i) => {
      setTimeout(() => el.classList.add("show"), 120 + i * 80);
    });

    const nums = Array.from(document.querySelectorAll(".num"));
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            const el = en.target;
            const target = parseInt(el.dataset.target || "0", 10);
            let cur = 0;
            const step = Math.max(1, Math.floor(target / 60));
            const t = setInterval(() => {
              cur += step;
              if (cur >= target) {
                el.textContent = target.toLocaleString();
                clearInterval(t);
              } else {
                el.textContent = cur.toLocaleString();
              }
            }, 18);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );
    nums.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <main className="page">
        {/* HERO */}
        <section className="heros fade">
          <div className="hero-grid">
            <div className="headline">
              <div className="kicker">What We Do</div>

              <h1>
                Building Awareness for a
                <br /> Safer Digital Society
              </h1>

              <div className="tagline">
                Project CyberShield conducts structured cyber awareness and
                training programs for schools, colleges, and communities,
                focusing on safe, responsible, and lawful digital practices.
              </div>

              <div className="keyword-row">
                <div className="kw">Awareness</div>
                <div className="kw">Training</div>
                <div className="kw">Cyber Safety</div>
                <div className="kw">Education</div>
              </div>

              <span className="underline" />
            </div>

            <div className="hero-card">
              <h4>Focus Areas</h4>
              <p>
                Workshops, institutional programs, skill training, and community
                outreach — designed for easy adoption.
              </p>
            </div>
          </div>
        </section>

        {/* MAIN GRID */}
        <div className="section">
          {/* LEFT */}
          <div className="content-panel fade">
            {/* CORE PROGRAMS */}
            <div className="box">
              <h3>Core Programs</h3>
              <p className="muted">Practical and audience-ready initiatives.</p>

              <div className="offer-grid">
                <Offer
                  icon="🧑‍🏫"
                  title="Awareness Workshops"
                  text="Sessions on cyber threats, privacy, scams, and online safety."
                />
                <Offer
                  icon="🎓"
                  title="School & College Programs"
                  text="Assemblies, seminars, and cyber awareness drives."
                />
                <Offer
                  icon="🛡️"
                  title="Skill Training"
                  text="Introductory cybersecurity and digital hygiene training."
                />
                <Offer
                  icon="📣"
                  title="Community Outreach"
                  text="Campaigns for parents, youth, and educators."
                />
              </div>
            </div>

            {/* HIGHLIGHTS */}
            <div className="box box2">
              <h3>Program Highlights</h3>
              <p className="muted">Designed for impact and accessibility.</p>

              <Program num="1" title="Easy to adopt" />
              <Program num="2" title="Educator-friendly" />
              <Program num="3" title="Ethical & safe delivery" />
            </div>

            {/* CTA */}
            <div className="cta-row">
              <div>
                <strong>Bring Cyber Awareness to Your Institution</strong>
                <div className="small">Customised programs on request.</div>
              </div>
              <Link href="/contact">
                <button className="donate-btn donate-btn1">
                  Request a program
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <aside className="aside fade">
            <h4>Impact</h4>
            <p className="muted">Program reach so far</p>

            <div className="stats">
              <Stat value="120" label="Workshops" />
              <Stat value="8500" label="Students" />
              <Stat value="45" label="Institutions" />
            </div>

            <div className="get-involved">
              <h4>Get involved</h4>
              <p className="muted">
                Join us as a volunteer or institutional partner.
              </p>
              <Link href="/contact">
                <button
                  className="donate-btn donate-btn1"
                  style={{ width: "100%" }}
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}

/* ---------- COMPONENTS ---------- */

function Offer({ icon, title, text }) {
  return (
    <div className="offer-card">
      <div className="offer-icon">{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function Program({ num, title }) {
  return (
    <div className="prog">
      <div className="badge">{num}</div>
      <strong>{title}</strong>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="stat">
      <div className="num" data-target={value}>0</div>
      <div className="label">{label}</div>
    </div>
  );
}
