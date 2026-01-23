import { useEffect } from "react";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { auth } from "../../lib/firebase";


export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    if (!auth.currentUser) {
      router.replace("/admin/login");
    }
  }, []);

  const logout = async () => {
    await signOut(auth);
    router.push("/admin/login");
  };

  return (
    <>

      <main className="page admin-page">
        <section className="admin-header">
          <h1>Admin Dashboard</h1>
          <p className="muted">
            Manage CyberShield resources, events and content
          </p>
        </section>

        <section className="admin-grid">
          <div
            className="admin-card"
            onClick={() => router.push("/admin/create-blog")}
          >
            <h3>✍️ Create Blog</h3>
            <p>
              Publish a new <strong>Resource</strong> or <strong>Event</strong>
            </p>
          </div>

          <div
            className="admin-card"
            onClick={() => router.push("/admin/manage-blogs")}
          >
            <h3>📚 Manage Blogs</h3>
            <p>Edit or delete existing blogs</p>
          </div>

          <div
            className="admin-card"
            onClick={() => router.push("/resources-events")}
          >
            <h3>🌐 View Public Content</h3>
            <p>See how blogs appear to users</p>
          </div>

          <div className="admin-card danger" onClick={logout}>
            <h3>🚪 Logout</h3>
            <p>Securely exit admin session</p>
          </div>
        </section>
      </main>
      
    </>
  );
}
