import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutPage from "../components/AboutPage";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Project CyberShield</title>
        <meta
          name="description"
          content="Learn about Project CyberShield, our mission, approach, and the people behind India’s cyber awareness initiative."
        />
      </Head>

      <Navbar />
      <AboutPage />
      <Footer />
    </>
  );
}
