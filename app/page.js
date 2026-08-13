import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import Product from "@/components/Product";
import WhatsApp from "@/components/WhatsApp";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Problem />
      <Features />
      <Product />
      <WhatsApp />
      <WhyUs />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
