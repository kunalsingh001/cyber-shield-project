import { useEffect } from "react";

export default function IntroAnimation({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="intro-screen">
      <div className="intro-content">
        <span className="intro-line">THE</span>

        <h1 className="intro-title glitch" data-text="CYBERSHIELD">
          Cyber<span>Shield</span>
        </h1>

        <span className="intro-line">PROJECT</span>
      </div>
    </div>
  );
}
