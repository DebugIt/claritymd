import { AISection } from "@/components/AISection";
import { Footer } from "@/components/common/Footer";
import { Navbar } from "@/components/common/Navbar";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Problem } from "@/components/Problem";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Waitlist } from "@/components/Waitlist";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <ProductShowcase />
      <AISection />
      <Waitlist />
      <Footer />
    </main>
  );
}