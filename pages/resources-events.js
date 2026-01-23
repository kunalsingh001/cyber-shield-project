import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/resources-events.module.css";

/* ===============================
   STATIC BLOG DATA (FINAL – NO BACKEND)
================================ */

const BLOGS = [
  {
  id: "r1",
  type: "resource",
  title: "The Price of Privacy: Rethinking Data Governance under India’s DPDP Act, 2023",
  date: "January 2026",
  cover: "/images/blogs/b01.jpeg",
  excerpt:
    "This article examines India’s Digital Personal Data Protection Act, 2023, exploring its scope, challenges, and compliance framework while questioning who truly controls personal data in an increasingly digital democracy.",
}
,
  {
  id: "r2",
  type: "resource",
  title: "Whether the Digital Personal Data Protection Act, 2023 should to be revised?",
  date: "January 2026",
  cover: "/images/blogs/b1.jpeg",
  excerpt:
    "This article examines whether India’s Digital Personal Data Protection Act, 2023 requires revision, analysing its constitutional foundation, key provisions, compliance framework, and major concerns related to transparency, accountability, and individual privacy.",
}
,

 {
  id: "r3",
  type: "resource",
  title: "Cross Border Cybercrime & International Legal Cooperation",
  date: "January 2026",
  cover: "/images/blogs/b02.jpeg",
  excerpt:
    "This article explores the rise of cross-border cybercrime, the jurisdictional challenges it poses, existing international legal cooperation frameworks, their inadequacies, and the roadmap toward effective global collaboration in combating cyber threats.",
}
,
 
  {
    id: "e1",
    type: "event",
    title: "CyberShield Case Quest 2026",
    date: "January 25–26, 2026",
    cover: "/images/blogs/e1.jpeg",
    excerpt:
      "CyberShield CaseQuest 2026 is an inter-project case analysis competition under Naksh Foundation’s flagship initiative, Project CyberShield. Open for present and former volunteers, the event will be conducted online via Google Meet with free registration, cash prizes for top teams, and certificates for participants.",
  },
];

/* ===============================
   PAGE
================================ */

export default function ResourcesEvents() {
  const [activeTab, setActiveTab] = useState("resource");

  const filteredBlogs = BLOGS.filter((blog) => blog.type === activeTab);

  return (
    <>
      <Navbar />

      <main className="page">
        {/* HERO */}
        <section className="heros">
          <div className="hero-grid">
            <div className="headline">
              <div className="kicker">Resources & Events</div>

              <h1>Knowledge, awareness & cyber safety initiatives</h1>

              <p className="tagline">
                Carefully curated resources and impactful initiatives by Project
                CyberShield to build a safer and more responsible digital
                society.
              </p>

              {/* TABS */}
              <div className="tab-row">
                <button
                  className={activeTab === "resource" ? "tab active" : "tab"}
                  onClick={() => setActiveTab("resource")}
                >
                  Resources
                </button>

                <button
                  className={activeTab === "event" ? "tab active" : "tab"}
                  onClick={() => setActiveTab("event")}
                >
                  Events
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* LIST */}
        <section className={styles.section}>
          <div className="content-panel">
            <div className={styles.list}>
              {filteredBlogs.map((blog) => (
                <article
                  key={blog.id}
                  className={styles.card}
                  onClick={() => (window.location.href = `/blog/${blog.id}`)}
                >
                  <img
                    src={blog.cover}
                    alt={blog.title}
                    className={styles.cover}
                  />

                  <div className={styles.body}>
                    <span className={styles.pill}>
                      {blog.type === "resource"
                        ? "CyberShield Resource"
                        : "CyberShield Event"}
                    </span>

                    <h3 className={styles.title}>{blog.title}</h3>

                    <p className={styles.meta}>{blog.date}</p>

                    <p className={styles.excerpt}>{blog.excerpt}</p>

                    <span
                      className={styles.readMore}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = `/blog/${blog.id}`;
                      }}
                    >
                      Read more →
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
