import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import ChatAdvisor from "./components/ChatAdvisor";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Hero />
      <HowItWorks />
      <ChatAdvisor />
      <Footer />
    </div>
  );
}
