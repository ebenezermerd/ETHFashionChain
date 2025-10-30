import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";

export default function PlaceholderPage() {
  const location = useLocation();
  const pageName = location.pathname.slice(1).replace(/-/g, " ");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-6 py-32">
        <div className="max-w-2xl text-center">
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-ethiopian-red via-ethiopian-yellow to-ethiopian-green opacity-20"></div>
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-ethiopian-red via-ethiopian-yellow to-ethiopian-green"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4 bg-gradient-to-r from-ethiopian-red via-ethiopian-yellow to-ethiopian-green bg-clip-text text-transparent capitalize">
            {pageName || "Page"}
          </h1>
          
          <p className="text-xl text-ethiopian-brown text-opacity-80 mb-8">
            This page is coming soon. We're working on bringing you the best Ethiopian fashion heritage experience.
          </p>
          
          <p className="text-ethiopian-brown text-opacity-60">
            Continue prompting to help us build out this section, or explore other areas of the platform.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
