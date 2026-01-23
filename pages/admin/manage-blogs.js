import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  orderBy,
  query,
} from "firebase/firestore";
import { auth, db } from "../../lib/firebase";

export default function ManageBlogs() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth.currentUser) {
      router.replace("/admin/login");
      return;
    }
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
      const snap = await getDocs(q);

      const list = snap.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));

      setBlogs(list);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const ok = confirm("Delete this blog permanently?");
    if (!ok) return;

    try {
      await deleteDoc(doc(db, "blogs", id));
      setBlogs((prev) => prev.filter((b) => b.id !== id));
    } catch (err) {
      alert("Failed to delete blog");
    }
  };

  return (
    <>
  <main className="page admin-page">
        <section className="admin-header">
          <h1>Manage Blogs</h1>
          <p className="muted">
            Edit or delete CyberShield resources & events
          </p>
        </section>

        <section className="manage-list">
          {loading && <p className="muted">Loading blogs…</p>}

          {!loading && blogs.length === 0 && (
            <p className="muted">No blogs found.</p>
          )}

          {blogs.map((blog) => (
            <div key={blog.id} className="manage-row">
              <div className="manage-main">
                <h3>{blog.title || "Untitled"}</h3>
                <div className="manage-meta">
                  <span className={`badge ${blog.category}`}>
                    {blog.category === "event" ? "Event" : "Resource"}
                  </span>
                  <span className="date">
                    {blog.createdAtLocal || "—"}
                  </span>
                </div>
              </div>

              <div className="manage-actions">
                <button
                  className="btn edit"
                  onClick={() =>
                    router.push(`/admin/edit-blog?id=${blog.id}`)
                  }
                >
                  Edit
                </button>
                <button
                  className="btn delete"
                  onClick={() => handleDelete(blog.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>

    </>
  );
}
