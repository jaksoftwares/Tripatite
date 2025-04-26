// src/app/about-us/page.tsx

import { FC } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialSlider from "@/components/TestimonialsSlider";
import OurProcessSection from "@/components/OurProcessSection";
import CallToAction from "@/components/CallToAction";

const AboutUsPage: FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <AboutSection/>

      {/* Team Section */}
      <TeamSection/>

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Testimonial Slider */}
      <TestimonialSlider />

      {/* Our Process Section */}
      <OurProcessSection />

      {/* Call to Action Section */}
      <CallToAction />
    </div>
  );
};

export default AboutUsPage;
