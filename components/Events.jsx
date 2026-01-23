export default function Events() {
  return (
    <section className="events-section">
      <h2 className="section-title">Upcoming Events</h2>

      <div className="events-split">
        <div className="events-column">
          <h3 className="events-column-title">Training Programs</h3>

          <Event date="13" month="APR" title="Cyber Safety Training for College Students" />
          <Event date="22" month="MAY" title="Digital Awareness Workshop for Schools" />
        </div>

        <div className="events-column">
          <h3 className="events-column-title">Competitions</h3>

          <Event date="05" month="JUN" title="National Cyber Quiz Challenge" />
          <Event date="18" month="JUN" title="Capture The Flag (CTF) – College Level" />
        </div>
      </div>

      <section className="cta-section">
        <h3>
          You can contribute to build a safer digital society with Project
          CyberShield!
        </h3>
        <div className="cta-buttons">
          <button className="volunteer-btn">Join as a volunteer</button>
          <button className="donate-btn">Donate</button>
        </div>
      </section>
    </section>
  );
}

function Event({ date, month, title }) {
  return (
    <div className="event-card small">
      <div className="date-box">
        <h3>{date}</h3>
        <p>{month}</p>
      </div>
      <div className="event-details">
        <p className="event-subtitle">EVENT</p>
        <h4 className="event-title">{title}</h4>
      </div>
    </div>
  );
}
