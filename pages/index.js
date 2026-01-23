import Head from "next/head";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Blogs from "../components/Blogs";
import Stories from "../components/Stories";
import Opportunities from "../components/Opportunities";
import Testimonials from "../components/Testimonials";
import Events from "../components/Events";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* SEO */}
      <Head>
        <title>Project CyberShield | Securing Digital Safety</title>

        <meta
          name="description"
          content="Project CyberShield is a national initiative dedicated to combating cybercrime, spreading cyber awareness, and securing digital safety across India."
        />

        <meta
          name="keywords"
          content="Cyber security, CyberShield, cyber awareness, digital safety, cybercrime prevention"
        />

        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Project CyberShield" />
        <meta
          property="og:description"
          content="Combating cybercrime and securing digital safety through awareness and training."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/logo.webp" />
      </Head>

      {/* PAGE CONTENT */}
      <Navbar />
      <Hero />
      <About />
      <Blogs />
      {/* <Stories /> */}
      <Opportunities />
      <Testimonials />
      {/* <Events /> */}
      <Footer />
    </>
  );
}
