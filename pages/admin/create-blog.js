import { useRef, useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Firebase
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

/* ================= FIREBASE ================= */

const firebaseConfig = {
  apiKey: "AIzaSyDRiTQzAtFNYFKYwUGnxvtMtmeUxrsCsBg",
  authDomain: "cyber-shield-6cd3b.firebaseapp.com",
  projectId: "cyber-shield-6cd3b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/* ================= PAGE ================= */

export default function CreateBlog() {
  const editorRef = useRef(null);
  const coverInputRef = useRef(null);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("resource");
  const [coverPreview, setCoverPreview] = useState(null);
  const [coverFile, setCoverFile] = useState(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // inline feedback

  /* ---------- Fade animation (same as other pages) ---------- */
  useEffect(() => {
    document.querySelectorAll(".fade").forEach((el, i) => {
      setTimeout(() => el.classList.add("show"), 120 + i * 80);
    });
  }, []);

  /* ---------- Editor helpers ---------- */

  const exec = (cmd, value = null) =>
    document.execCommand(cmd, false, value);

  const insertImage = (file) => {
    if (!file || !editorRef.current) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = document.createElement("img");
      img.src = e.target.result;
      img.style.maxWidth = "100%";
      img.style.borderRadius = "8px";
      img.style.margin = "10px 0";
      editorRef.current.appendChild(img);
    };
    reader.readAsDataURL(file);
  };

  /* ---------- Cover handling ---------- */

  const handleCoverSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setCoverFile(file);
    setCoverPreview(URL.createObjectURL(file));
  };

  const uploadCoverImage = async () => {
    if (!coverFile) return null;

    const formData = new FormData();
    formData.append("file", coverFile);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) throw new Error("Upload failed");

    const data = await res.json();
    return data.url;
  };

  /* ---------- Publish ---------- */

  const publishBlog = async () => {
    const content = editorRef.current?.innerHTML.trim();

    if (!title || !content) {
      setStatus("⚠️ Title and content are required.");
      return;
    }

    setLoading(true);
    setStatus("Publishing…");

    try {
      const coverUrl = await uploadCoverImage();

      await addDoc(collection(db, "blogs"), {
        title,
        category, // resource | event
        content,
        coverImage: coverUrl || null,
        createdAt: serverTimestamp(),
        createdAtLocal: new Date().toLocaleString(),
      });

      setStatus("✅ Blog published successfully.");

      // reset
      setTitle("");
      setCategory("resource");
      setCoverPreview(null);
      setCoverFile(null);
      if (editorRef.current) editorRef.current.innerHTML = "";
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to publish blog.");
    } finally {
      setLoading(false);
    }
  };

  /* ================= RENDER ================= */

  return (
    <>
      <Navbar />

      <main className="page">
        {/* HERO-LIKE HEADER */}
        <section className="heros fade">
          <div className="hero-grid">
            <div className="headline">
              <div className="kicker">Admin</div>
              <h1>Create a new post</h1>
              <p className="tagline">
                Resources and event updates for Project CyberShield.
              </p>
            </div>
          </div>
        </section>

        {/* MAIN */}
        <section className="section section2">
          <div className="content-panel fade">
            {/* META */}
            <div className="row">
              <label>Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="resource">📚 Resource</option>
                <option value="event">🎟️ Event</option>
              </select>
            </div>

            <input
              className="title-input"
              placeholder="Blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            {/* COVER */}
            <div className="cover-box">
              {coverPreview ? (
                <img src={coverPreview} alt="Cover preview" />
              ) : (
                <span className="muted">No cover image selected</span>
              )}

              <button
                type="button"
                onClick={() => coverInputRef.current.click()}
              >
                Upload cover image
              </button>

              <input
                ref={coverInputRef}
                type="file"
                accept="image/*"
                hidden
                onChange={handleCoverSelect}
              />
            </div>

            {/* TOOLBAR */}
            <div className="toolbar">
              <button onClick={() => exec("bold")}>B</button>
              <button onClick={() => exec("italic")}>I</button>
              <button onClick={() => exec("underline")}>U</button>
              <button onClick={() => exec("insertUnorderedList")}>
                • List
              </button>
              <button onClick={() => exec("formatBlock", "h2")}>H2</button>

              <input
                type="file"
                accept="image/*"
                onChange={(e) => insertImage(e.target.files[0])}
              />
            </div>

            {/* EDITOR */}
            <div
              ref={editorRef}
              className="editor"
              contentEditable
              suppressContentEditableWarning
            />

            {/* STATUS */}
            {status && <p className="muted">{status}</p>}

            {/* ACTION */}
            <button
              className="publish-btn"
              onClick={publishBlog}
              disabled={loading}
            >
              {loading ? "Publishing…" : "🚀 Publish"}
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
