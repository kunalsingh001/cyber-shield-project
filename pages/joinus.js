import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/join-us.module.css";
import { useState } from "react";

export default function JoinUs() {
  const [role, setRole] = useState("Cyber Trainer");

  return (
    <>
      <Navbar />

            {/* HERO */}
     <section className="heros">
  <div className="hero-grid">
    <div className="headline">
      <div className="kicker">Join CyberShield · VOLUNTEER WITH PURPOSE</div>

      <h1>
        Be the Shield. <br />
        <span>Be the Change.</span>
      </h1>

      <p className="tagline">
        Become a part of Project CyberShield and help build a cyber-safe,
          digitally responsible society. Whether you lead, support, or guide —
          your contribution matters.
      </p>
    </div>
  </div>
</section>

      {/* ROLES */}
      <section className={styles.section}>
        <div className={styles.panel}>
          <h2 className={styles.heading}>Volunteering Roles</h2>
          <p className={styles.muted}>
            You can contribute to Project CyberShield through one of the
            following roles based on your skills, interests, and availability.
          </p>

          <div className={styles.rolesGrid}>
            {/* CYBER TRAINER */}
            <div className={styles.roleCard}>
              <h3>Cyber Trainer</h3>
              <p>
                Lead cyber awareness programs and mentor volunteers across
                schools, colleges, and communities.
              </p>
            </div>

            {/* CYBER WARRIOR */}
            <div className={styles.roleCard}>
              <h3>Cyber Warrior</h3>
              <p>
                Support awareness campaigns, create content, and help spread
                cyber safety practices at the grassroots level.
              </p>
            </div>

            {/* CYBER SAATHI */}
            <div className={styles.roleCard}>
              <h3>Cyber Saathi</h3>
              <p>
                Act as a digital support companion, guiding individuals with
                safe online practices and basic cyber awareness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROLE DETAILS */}
     <section className={styles.section}>
  <div className={styles.grid}>

    {/* ================= CYBER TRAINER ================= */}
    <div className={styles.roleCard}>
      <h2 className={styles.heading}>Cyber Trainer</h2>
      <p className={styles.subtitle}>Lead • Educate • Empower</p>

      <p className={styles.intro}>
        Cyber Trainers are the leadership force of Project CyberShield,
        responsible for delivering structured awareness, mentoring volunteers,
        and representing the initiative at institutional and public platforms.
      </p>

      <ul className={styles.list}>
        <li>Lead cyber safety workshops in schools, colleges & communities</li>
        <li>Train and mentor Cyber Warriors and volunteers</li>
        <li>Develop learning material, presentations & guides</li>
        <li>Represent CyberShield in webinars & collaborations</li>
        <li>Coordinate with NGOs, institutions & partners</li>
        <li>Collect feedback and report program impact</li>
      </ul>

      <p className={styles.meta}>
        <strong>Eligibility:</strong> Open to all (legal/technical background
        preferred)
      </p>

      <p className={styles.time}>
        ⏱ 3–4 hours/week • 3 months (flexible during exams)
      </p>
    </div>

    {/* ================= CYBER WARRIOR ================= */}
    <div className={styles.roleCard}>
      <h2 className={styles.heading}>Cyber Warrior</h2>
      <p className={styles.subtitle}>Support • Spread • Strengthen</p>

      <p className={styles.intro}>
        Cyber Warriors form the operational core of CyberShield, assisting
        trainers, running campaigns, and driving cyber awareness at the
        grassroots level.
      </p>

      <ul className={styles.list}>
        <li>Assist in workshops and awareness drives</li>
        <li>Engage new volunteers and expand outreach</li>
        <li>Create posters, reels & digital campaign content</li>
        <li>Support cybercrime victims with guidance</li>
        <li>Coordinate local outreach with communities</li>
        <li>Document campaigns and collect feedback</li>
      </ul>

      <p className={styles.meta}>
        <strong>Eligibility:</strong> Open to all students & social impact
        enthusiasts
      </p>

      <p className={styles.time}>
        ⏱ 3–4 hours/week • 3 months (flexible during exams)
      </p>
    </div>

    {/* ================= CYBER SAATHI ================= */}
    <div className={styles.roleCard}>
      <h2 className={styles.heading}>Cyber Saathi</h2>
      <p className={styles.subtitle}>Guide • Support • Protect</p>

      <p className={styles.intro}>
        Cyber Saathis act as friendly cyber guides within families and
        communities, helping people adopt safe digital habits and avoid cyber
        risks.
      </p>

      <ul className={styles.list}>
        <li>Guide individuals on safe online practices</li>
        <li>Support first-time internet users & senior citizens</li>
        <li>Promote cyber hygiene in families & neighborhoods</li>
        <li>Identify risks and escalate serious issues</li>
        <li>Act as a trusted local cyber support volunteer</li>
      </ul>

      <p className={styles.meta}>
        <strong>Eligibility:</strong> Open to everyone • No technical background
        required
      </p>

      <p className={styles.time}>
        ⏱ Flexible commitment • Minimum involvement encouraged
      </p>
    </div>

  </div>
</section>



      {/* APPLICATION FORM */}
     <section className={styles.section}>
  <div className={styles.formPanel}>
    <h2 className={styles.heading}>Apply to Join Project CyberShield</h2>

    <p className={styles.formIntro}>
      Share a few details with us — our team will review your application and
      reach out to you shortly.
    </p>

    <form className={styles.joinForm}>
      <div className={styles.field}>
        <label>Full Name</label>
        <input placeholder="Enter your full name" />
      </div>

      <div className={styles.field}>
        <label>Email Address</label>
        <input type="email" placeholder="your@email.com" />
      </div>

      <div className={styles.field}>
        <label>Preferred Role</label>
        <select>
          <option value="">Select a role</option>
          <option>Cyber Trainer</option>
          <option>Cyber Warrior</option>
          <option>Cyber Saathi</option>
        </select>
      </div>

      <div className={styles.field}>
        <label>Why do you want to join?</label>
        <textarea placeholder="Tell us about your motivation, skills, or interests…" />
      </div>

      <div className={styles.formActions}>
        <button type="submit" className={styles.submitBtn}>
          Submit Application
        </button>
      </div>
    </form>
  </div>
</section>


      <Footer />
    </>
  );
}
