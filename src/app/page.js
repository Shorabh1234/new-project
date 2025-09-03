import Herosection from "@/components/hero/Herosection";
import Navbar from "../components/common/Navbar";
import PastelCards from "@/components/PastelCards";
import PastelBanner from "@/components/PastelBanner";
import SummerBanner from "@/components/SummerBanner";
import SummerCards from "@/components/SummerCards";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/common/Footer";
import Softer from "@/components/Softer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <PastelCards />
      <SummerCards />
      <PastelBanner />
      <Softer />
      <SummerBanner />
      <FeatureSection />
      <Footer />
      
    </>
  );
}
