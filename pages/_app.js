import { useState } from "react";
import "../styles/resources-events.css"
import "../styles/admin-auth.css"
import "../styles/editor.css"
import IntroAnimation from "../components/IntroAnimation";
import "@/styles/globals.css";
import "../styles/about.css";
import "../styles/wedo.css";
import "../styles/contact.css"


export default function App({ Component, pageProps }) {

  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <IntroAnimation onFinish={() => setShowIntro(false)} />}
      {!showIntro && <Component {...pageProps} />}
    </>
  );
}
