import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const data = {
  trainer: {
    title: "Cyber Trainer",
    description:
      "Cyber Trainers are trained educators and volunteers who conduct structured cyber awareness sessions in schools, colleges, and community spaces. They educate participants on cyber safety, online fraud prevention, cyber hygiene, digital rights, and responsible internet usage. Trainers play a frontline role in spreading digital literacy and building a cyber-safe culture at the grassroots level.",
  },

  warrior: {
    title: "Cyber Warrior",
    description:
      "Cyber Warriors support Project CyberShield from the backend by assisting in cyber incident awareness, research, documentation, and victim guidance. They help identify emerging cyber threats, support reporting mechanisms, and strengthen digital defense initiatives. Though they may not always be visible, Cyber Warriors form the backbone of CyberShield’s operational impact.",
  },

  sathi: {
    title: "Cyber Sathi",
    description:
      "Cyber Sathi acts as a campus or institutional ambassador of Project CyberShield. They coordinate awareness activities, mobilize student participation, and act as a bridge between CyberShield and educational institutions. Cyber Sathi helps create sustainable, peer-driven cyber awareness ecosystems within colleges and universities.",
  },
};

export default function Opportunities() {
  const [modal, setModal] = useState(null);
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "";
  }, [modal]);

  const handleJoinUs = () => {
    setModal(null);
    router.push("/joinus");
  };

  return (
    <>
      <section className="cyber-opportunities">
        <div className="cyber-header">
          <p className="cyber-subtitle">JOIN THE NETWORK</p>
          <h2 className="cyber-title">
            Opportunities with Project CyberShield
          </h2>
        </div>

        <div className="cyber-cards">
          {["trainer", "warrior", "sathi"].map((role) => (
            <div className="cyber-card" key={role}>
              <h3>{data[role].title}</h3>
              <p>{data[role].description.slice(0, 90)}...</p>
              <button onClick={() => setModal(role)}>Learn more</button>
            </div>
          ))}
        </div>
      </section>

      {modal && (
        <div className="opportunity-modal" onClick={() => setModal(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="modal-close"
              onClick={() => setModal(null)}
            >
              &times;
            </span>

            <h3>{data[modal].title}</h3>
            <p>{data[modal].description}</p>
            <br/>
            {/* ACTIONS */}
            <div className="modal-actions">
              <button className="secondary-btn" onClick={handleJoinUs}>
                Join Us
              </button>

              
            </div>
          </div>
        </div>
      )}
    </>
  );
}
