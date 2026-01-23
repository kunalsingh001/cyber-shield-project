import { useRouter } from "next/router";

/* ===============================
   STATIC BLOG DATA
================================ */

const BLOGS = [
  {
    id: "r1",
    type: "resource",
    title:
      "The Price of Privacy: Rethinking Data Governance under India’s DPDP Act, 2023",
    date: "January 2026",
    cover: "/images/blogs/b01.jpeg",
    excerpt:
      "This article examines India’s Digital Personal Data Protection Act, 2023, exploring its scope, challenges, and compliance framework while questioning who truly controls personal data in an increasingly digital democracy.",
  },
  {
    id: "r2",
    type: "resource",
    title:
      "Whether the Digital Personal Data Protection Act, 2023 should to be revised?",
    date: "January 2026",
    cover: "/images/blogs/b1.jpeg",
    excerpt:
      "This article examines whether India’s Digital Personal Data Protection Act, 2023 requires revision, analysing its constitutional foundation, key provisions, compliance framework, and major concerns related to transparency, accountability, and individual privacy.",
  },
  {
    id: "r3",
    type: "resource",
    title:
      "Cross Border Cybercrime & International Legal Cooperation",
    date: "January 2026",
    cover: "/images/blogs/b02.jpeg",
    excerpt:
      "This article explores the rise of cross-border cybercrime, the jurisdictional challenges it poses, existing international legal cooperation frameworks, their inadequacies, and the roadmap toward effective global collaboration in combating cyber threats.",
  },
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

export default function Blogs() {
  const router = useRouter();

  return (
    <section className="blog-section">
      <div className="blog-header">
        <p className="blog-subtitle">BLOGS WE POST</p>
        <h2 className="blog-title">Our Latest Blog Posts</h2>
      </div>

      <div className="blog-cards">
        {BLOGS.map((blog) => (
          <div
            className="blog-card"
            key={blog.id}
            onClick={() => router.push(`/blog/${blog.id}`)}
          >
            <img src={blog.cover} alt={blog.title} />

            <div className="blog-content">
              <p className="category">
                {blog.type === "resource" ? "Resource" : "Event"}
              </p>

              <h3 className="blog-heading">
                {blog.title}
              </h3>


            </div>
          </div>
        ))}
      </div>

      <div className="load-more">
        <button
          id="loadMoreBtn"
          className="load-more-btn"
          onClick={() => router.push("/resources-events")}
        >
          ↓ Load more
        </button>
      </div>
    </section>
  );
}
