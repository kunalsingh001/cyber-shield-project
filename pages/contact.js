import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  useEffect(() => {
    document.querySelectorAll(".fade").forEach((el, i) => {
      setTimeout(() => el.classList.add("show"), 120 + i * 80);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const program = e.target.program.value;

    alert(
      `Thank you, ${name}.\n\nYour request regarding "${program}" has been received.\nOur team will respond at ${email} within 2 business days.`
    );

    e.target.reset();
  };

  return (
    <>
      <Navbar />

      <main className="page">
        {/* HERO */}
        <section className="heros fade">
          <div className="hero-grid">
            <div className="headline">
              <div className="kicker">Contact</div>

              <h1>Partner with us to strengthen digital safety.</h1>

              <div className="tagline">
                Project CyberShield works with schools, institutions, and
                community organizations to deliver structured cybersecurity
                awareness and training programs. Use the form below to request
                a program or initiate collaboration.
              </div>
            </div>

            <div className="hero-card">
              <h4>Program enquiries</h4>
              <p>
                Share your audience type and objectives. Our team will recommend
                a suitable workshop, bootcamp, event, or awareness campaign
                aligned with your needs.
              </p>
            </div>
          </div>
        </section>

        {/* MAIN GRID */}
        <div className="section">
          {/* LEFT */}
          <div className="content-panel fade">
            <h2>Request a program</h2>
            <p className="muted">
              Please provide accurate details to help us evaluate and respond
              effectively.
            </p>

            <div className="box">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="row-two">
                  <input
                    type="text"
                    name="name"
                    placeholder="Contact person name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Official email address"
                    required
                  />
                </div>

                <div className="row-two">
                  <select name="program" required>
                    <option value="">Select program type</option>
                    <option>Cyber Awareness Workshop (30–60 mins)</option>
                    <option>School / Institutional Event</option>
                    <option>Cybersecurity Bootcamp (2–6 weeks)</option>
                    <option>Community Awareness Campaign</option>
                  </select>

                  <input
                    type="text"
                    name="location"
                    placeholder="Institution / City (optional)"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Describe the audience, approximate size, preferred timeline, and specific objectives..."
                  required
                />

                <div className="form-footer">
                  <span className="muted">
                    By submitting this form, you consent to be contacted
                    regarding this request.
                  </span>
                  <button type="submit" className="submit-btn">
                    Submit request
                  </button>
                </div>
              </form>
            </div>

            <div className="cta-row">
              <div>
                <strong>Need clarification?</strong>
                <div className="small">
                  You may include a contact number in your message for follow-up
                  during working hours.
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <aside className="aside fade">
            <h4>Contact details</h4>
            <p className="muted">For official communication</p>

            <div className="info">
              <div className="item">
                <span>📧</span>
                <div>
                  <strong>Email</strong>
                  <p>team@projectcybershield.in</p>
                </div>
              </div>

              <div className="item">
                <span>📞</span>
                <div>
                  <strong>Phone</strong>
                  <p>+91 8750510387</p>
                </div>
              </div>

              <div className="item">
                <span>📍</span>
                <div>
                  <strong>Office</strong>
                  <p>New Delhi, India</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}
