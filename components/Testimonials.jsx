import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "College Faculty",
    review:
      "CyberShield sessions helped our students understand real cyber threats.",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Anita Verma",
    role: "School Principal",
    review: "A highly professional cyber awareness initiative.",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "Vikram Singh",
    role: "IT Professional",
    review: "CyberShield is building real digital defense culture.",
    img: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    name: "Pooja Mehta",
    role: "University Student",
    review: "The Cyber Warrior program is truly impactful.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Arjun Patel",
    role: "Cyber Volunteer",
    review: "Proud to be part of this national cyber mission.",
    img: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    name: "Sneha Kapoor",
    role: "Campus Ambassador",
    review: "Cyber Sathi program empowered our entire college.",
    img: "https://randomuser.me/api/portraits/women/61.jpg",
  },
];

export default function Testimonials() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(Math.floor(testimonials.length / 2));

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.children);
    const card = cards[0];
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const cardWidth = card.offsetWidth + gap;
    const center = track.parentElement.offsetWidth / 2;

    cards.forEach((c, i) => {
      c.classList.remove("is-center", "is-near");
      const d = Math.abs(i - index);
      if (d === 0) c.classList.add("is-center");
      else if (d === 1) c.classList.add("is-near");
    });

    const offset = center - (index * cardWidth + cardWidth / 2);
    track.style.transform = `translate3d(${offset}px,0,0)`;
  }, [index]);

  return (
    <section className="testimonials">
      <h4 className="subtitle">TESTIMONIALS</h4>
      <h2 className="title">Feedback & Review</h2>

      <div className="testimonial-carousel">
        <div className="carousel-track" ref={trackRef}>
          {testimonials.map((t, i) => (
            <div className="card" key={i}>
              <img src={t.img} className="bg-img" />
              <div className="card-content">
                <h3>{t.name}</h3>
                <p className="role">{t.role}</p>
                <p className="review">{t.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
