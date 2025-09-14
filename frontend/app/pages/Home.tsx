import Layout from "~/components/Layout";
import type { Route } from "./+types/Home";
import FeaturesSection from "~/components/FeatureSection";
import HeroSection from "~/components/HeroSection";
import WorkflowSection from "~/components/WorkflowSection";
import MapPreview from "~/components/MapPreview";
import PharmacyCarousel from "~/components/PharmacyCarousel";
import TestimonialsSection from "~/components/TestimonialsSection";
import CTABanner from "~/components/CTABanner";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pharmysense | Home" },
    { name: "description", content: "Welcome to Pharmysense" },
  ];
}

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <WorkflowSection />
      <FeaturesSection />
      <MapPreview /> 
      <PharmacyCarousel />  
      <TestimonialsSection /> 
      <CTABanner /> 
    </Layout>
  );
}
