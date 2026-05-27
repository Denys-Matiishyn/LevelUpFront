import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Testimonials } from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}
