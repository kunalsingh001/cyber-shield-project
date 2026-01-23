import { IncomingForm } from "formidable";
import fs from "fs";
import { bucket } from "./_firebaseAdmin";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const form = new IncomingForm({ keepExtensions: true });

  form.parse(req, async (err, fields, files) => {
    try {
      if (err) {
        console.error("Form parse error:", err);
        return res.status(500).json({ error: "Form parse failed" });
      }

      const uploaded = files.file;
      const file = Array.isArray(uploaded) ? uploaded[0] : uploaded;

      if (!file) {
        return res.status(400).json({ error: "No file received" });
      }

      const filePath = file.filepath;
      const fileName = `blog-covers/${Date.now()}-${file.originalFilename}`;

      await bucket.upload(filePath, {
        destination: fileName,
        metadata: {
          contentType: file.mimetype,
        },
        public: true,
      });

      fs.unlinkSync(filePath);

      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileName}`;

      return res.status(200).json({ url: publicUrl });
    } catch (error) {
      console.error("UPLOAD ERROR:", error);
      return res.status(500).json({ error: "Upload failed" });
    }
  });
}
