import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative min-h-[900px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(0deg,#DA020E_0%,#DA020E_12.5%,rgba(218,2,14,0)_12.5%,rgba(218,2,14,0)_100%),linear-gradient(90deg,#DA020E_0%,#DA020E_12.5%,rgba(218,2,14,0)_12.5%,rgba(218,2,14,0)_100%),linear-gradient(45deg,#FFCD00_0%,#FFCD00_5.89%,rgba(255,205,0,0)_5.89%,rgba(255,205,0,0)_70.71%),linear-gradient(315deg,#FFCD00_0%,#FFCD00_5.89%,rgba(255,205,0,0)_5.89%,rgba(255,205,0,0)_70.71%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-ethiopian-cream/80 via-white/90 to-ethiopian-yellow/20"></div>
        
        <div className="absolute top-56 left-10 w-8 h-8 rounded-full opacity-60 bg-[linear-gradient(0deg,#DA020E_0%,#DA020E_25%,rgba(218,2,14,0)_25%,rgba(218,2,14,0)_100%),linear-gradient(90deg,#DA020E_0%,#DA020E_25%,rgba(218,2,14,0)_25%,rgba(218,2,14,0)_100%),linear-gradient(45deg,#FFCD00_0%,#FFCD00_4.42%,rgba(255,205,0,0)_4.42%,rgba(255,205,0,0)_70.71%),linear-gradient(315deg,#007A3D_0%,#007A3D_4.42%,rgba(0,122,61,0)_4.42%,rgba(0,122,61,0)_70.71%)]"></div>
        <div className="absolute bottom-80 right-16 w-6 h-6 rounded-full opacity-60 bg-[linear-gradient(0deg,#DA020E_0%,#DA020E_16.67%,#FFCD00_16.67%,#FFCD00_33.33%,#007A3D_33.33%,#007A3D_50%,rgba(0,122,61,0)_50%,rgba(0,122,61,0)_66.67%),linear-gradient(90deg,rgba(218,2,14,0.3)_0%,rgba(218,2,14,0.3)_6.25%,rgba(218,2,14,0)_6.25%,rgba(218,2,14,0)_100%)]"></div>
        <div className="absolute top-[450px] left-[360px] w-4 h-4 rounded-full opacity-60 bg-[linear-gradient(0deg,#DA020E_0%,#DA020E_12.5%,rgba(218,2,14,0)_12.5%,rgba(218,2,14,0)_100%),linear-gradient(90deg,#DA020E_0%,#DA020E_12.5%,rgba(218,2,14,0)_12.5%,rgba(218,2,14,0)_100%),linear-gradient(45deg,#FFCD00_0%,#FFCD00_5.89%,rgba(255,205,0,0)_5.89%,rgba(255,205,0,0)_70.71%),linear-gradient(315deg,#FFCD00_0%,#FFCD00_5.89%,rgba(255,205,0,0)_5.89%,rgba(255,205,0,0)_70.71%)]"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-32 text-center">
          <p className="text-ethiopian-brown font-amiri mb-3">
            ሰላም - Welcome
          </p>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-ethiopian-red via-ethiopian-yellow to-ethiopian-green mx-auto mb-12"></div>
          
          <h1 className="text-5xl md:text-7xl font-playfair font-bold leading-tight mb-8">
            <span className="bg-gradient-to-r from-ethiopian-red via-ethiopian-yellow to-ethiopian-green bg-clip-text text-transparent">
              Ethiopian Fashion
            </span>
            <br />
            <span className="text-ethiopian-brown">
              Heritage on Blockchain
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-ethiopian-brown text-opacity-80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Preserving <span className="font-bold text-ethiopian-red">traditional patterns</span>, empowering artisans, and connecting Ethiopian fashion to the world through Web3 technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="inline-flex items-center justify-center gap-4 px-8 py-3 bg-ethiopian-red text-white rounded-md font-semibold hover:bg-opacity-90 transition-colors">
              Explore Marketplace
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-3 border-2 border-ethiopian-yellow bg-white text-ethiopian-brown rounded-md font-semibold hover:bg-ethiopian-yellow hover:bg-opacity-10 transition-colors">
              Register Your Design
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="relative w-16 h-16 mb-4">
                <div className="w-16 h-16 rounded-full bg-ethiopian-red bg-opacity-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[linear-gradient(0deg,#DA020E_0%,#DA020E_12.5%,rgba(218,2,14,0)_12.5%,rgba(218,2,14,0)_100%),linear-gradient(90deg,#DA020E_0%,#DA020E_12.5%,rgba(218,2,14,0)_12.5%,rgba(218,2,14,0)_100%),linear-gradient(45deg,#FFCD00_0%,#FFCD00_5.89%,rgba(255,205,0,0)_5.89%,rgba(255,205,0,0)_70.71%),linear-gradient(315deg,#FFCD00_0%,#FFCD00_5.89%,rgba(255,205,0,0)_5.89%,rgba(255,205,0,0)_70.71%)]"></div>
              </div>
              <p className="text-sm font-bold text-ethiopian-brown">Traditional Patterns</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative w-16 h-16 mb-4">
                <div className="w-16 h-16 rounded-full bg-ethiopian-yellow bg-opacity-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[linear-gradient(0deg,#DA020E_0%,#DA020E_25%,rgba(218,2,14,0)_25%,rgba(218,2,14,0)_100%),linear-gradient(90deg,#DA020E_0%,#DA020E_25%,rgba(218,2,14,0)_25%,rgba(218,2,14,0)_100%),linear-gradient(45deg,#FFCD00_0%,#FFCD00_4.42%,rgba(255,205,0,0)_4.42%,rgba(255,205,0,0)_70.71%),linear-gradient(315deg,#007A3D_0%,#007A3D_4.42%,rgba(0,122,61,0)_4.42%,rgba(0,122,61,0)_70.71%)]"></div>
              </div>
              <p className="text-sm font-bold text-ethiopian-brown">Artisan Crafts</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative w-16 h-16 mb-4">
                <div className="w-16 h-16 rounded-full bg-ethiopian-green bg-opacity-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-ethiopian-red via-ethiopian-yellow to-ethiopian-green"></div>
              </div>
              <p className="text-sm font-bold text-ethiopian-brown">Blockchain Tech</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative w-16 h-16 mb-4">
                <div className="w-16 h-16 rounded-full bg-ethiopian-orange bg-opacity-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-ethiopian-orange"></div>
              </div>
              <p className="text-sm font-bold text-ethiopian-brown">Global Market</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-ethiopian-cream/30 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-4 bg-gradient-to-r from-ethiopian-red via-ethiopian-yellow to-ethiopian-green bg-clip-text text-transparent">
            Platform Features
          </h2>
          <p className="text-center text-lg md:text-xl text-ethiopian-brown text-opacity-80 max-w-3xl mx-auto mb-16">
            Empowering Ethiopian fashion creators with cutting-edge blockchain technology while preserving our rich <span className="font-bold text-ethiopian-red">textile heritage</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
            <div className="bg-white border-2 border-ethiopian-yellow border-opacity-20 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-ethiopian-red to-ethiopian-orange mx-auto mb-6">
                <div className="absolute inset-0 rounded-full opacity-30 bg-[linear-gradient(0deg,#DA020E_0%,#DA020E_12.5%,rgba(218,2,14,0)_12.5%,rgba(218,2,14,0)_100%),linear-gradient(90deg,#DA020E_0%,#DA020E_12.5%,rgba(218,2,14,0)_12.5%,rgba(218,2,14,0)_100%),linear-gradient(45deg,#FFCD00_0%,#FFCD00_5.89%,rgba(255,205,0,0)_5.89%,rgba(255,205,0,0)_70.71%),linear-gradient(315deg,#FFCD00_0%,#FFCD00_5.89%,rgba(255,205,0,0)_5.89%,rgba(255,205,0,0)_70.71%)]"></div>
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-playfair font-bold text-ethiopian-brown text-center mb-4">
                Design Registry
              </h3>
              <p className="text-center text-ethiopian-brown text-opacity-80">
                Protect your traditional patterns and fashion designs with blockchain-verified IP registration.
              </p>
            </div>

            <div className="bg-white border-2 border-ethiopian-yellow border-opacity-20 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-ethiopian-yellow to-ethiopian-green mx-auto mb-6">
                <div className="absolute inset-0 rounded-full opacity-30 bg-[linear-gradient(45deg,rgba(218,2,14,0.1)_0%,rgba(218,2,14,0.1)_35.36%,rgba(218,2,14,0)_35.36%,rgba(218,2,14,0)_70.71%),linear-gradient(315deg,rgba(255,205,0,0.1)_0%,rgba(255,205,0,0.1)_35.36%,rgba(255,205,0,0)_35.36%,rgba(255,205,0,0)_70.71%),linear-gradient(0deg,#DA020E_0%,#DA020E_2.5%,rgba(218,2,14,0)_2.5%,rgba(218,2,14,0)_50%,#FFCD00_50%,#FFCD00_52.5%,rgba(255,205,0,0)_52.5%,rgba(255,205,0,0)_100%)]"></div>
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl">🔗</span>
              </div>
              <h3 className="text-xl font-playfair font-bold text-ethiopian-brown text-center mb-4">
                Supply Chain Tracker
              </h3>
              <p className="text-center text-ethiopian-brown text-opacity-80">
                Track Ethiopian cotton from farm to finished habesha kemis with full transparency.
              </p>
            </div>

            <div className="bg-white border-2 border-ethiopian-yellow border-opacity-20 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-ethiopian-green to-ethiopian-brown mx-auto mb-6">
                <div className="absolute inset-0 rounded-full opacity-30 bg-[linear-gradient(0deg,#DA020E_0%,#DA020E_25%,rgba(218,2,14,0)_25%,rgba(218,2,14,0)_100%),linear-gradient(90deg,#DA020E_0%,#DA020E_25%,rgba(218,2,14,0)_25%,rgba(218,2,14,0)_100%),linear-gradient(45deg,#FFCD00_0%,#FFCD00_4.42%,rgba(255,205,0,0)_4.42%,rgba(255,205,0,0)_70.71%),linear-gradient(315deg,#007A3D_0%,#007A3D_4.42%,rgba(0,122,61,0)_4.42%,rgba(0,122,61,0)_70.71%)]"></div>
              </div>
              <h3 className="text-xl font-playfair font-bold text-ethiopian-brown text-center mb-4">
                Web3 Marketplace
              </h3>
              <p className="text-center text-ethiopian-brown text-opacity-80">
                Buy and sell authentic Ethiopian fashion with crypto payments and smart contracts.
              </p>
            </div>

            <div className="bg-white border-2 border-ethiopian-yellow border-opacity-20 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-ethiopian-brown to-ethiopian-terracotta mx-auto mb-6">
                <div className="absolute inset-0 rounded-full opacity-30 bg-[linear-gradient(0deg,#DA020E_0%,#DA020E_25%,rgba(218,2,14,0)_25%,rgba(218,2,14,0)_50%,#FFCD00_50%,#FFCD00_75%,rgba(255,205,0,0)_75%,rgba(255,205,0,0)_100%),linear-gradient(90deg,rgba(0,122,61,0.3)_0%,rgba(0,122,61,0.3)_10%,rgba(0,122,61,0)_10%,rgba(0,122,61,0)_100%)]"></div>
              </div>
              <h3 className="text-xl font-playfair font-bold text-ethiopian-brown text-center mb-4">
                Cultural Archive
              </h3>
              <p className="text-center text-ethiopian-brown text-opacity-80">
                Preserve Ethiopian textile heritage through our NFT museum and digital archive.
              </p>
            </div>

            <div className="bg-white border-2 border-ethiopian-yellow border-opacity-20 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-ethiopian-terracotta to-[#CC7722] mx-auto mb-6">
                <div className="absolute inset-0 rounded-full opacity-30 bg-[linear-gradient(0deg,#DA020E_0%,#DA020E_6.25%,#FFCD00_6.25%,#FFCD00_12.5%,#007A3D_12.5%,#007A3D_18.75%,rgba(0,122,61,0)_18.75%,rgba(0,122,61,0)_25%),linear-gradient(90deg,rgba(218,2,14,0.3)_0%,rgba(218,2,14,0.3)_6.25%,rgba(218,2,14,0)_6.25%,rgba(218,2,14,0)_100%)]"></div>
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-playfair font-bold text-ethiopian-brown text-center mb-4">
                Artisan Community
              </h3>
              <p className="text-center text-ethiopian-brown text-opacity-80">
                Connect with master weavers and support traditional Ethiopian craftsmanship.
              </p>
            </div>

            <div className="bg-white border-2 border-ethiopian-yellow border-opacity-20 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-[#CC7722] to-ethiopian-red mx-auto mb-6">
                <div className="absolute inset-0 rounded-full opacity-30 bg-[radial-gradient(106.07%_106.07%_at_25%_25%,rgba(218,2,14,0.2)_0%,rgba(218,2,14,0)_50%),radial-gradient(106.07%_106.07%_at_75%_75%,rgba(255,205,0,0.2)_0%,rgba(255,205,0,0)_50%),radial-gradient(106.07%_106.07%_at_75%_25%,rgba(0,122,61,0.15)_0%,rgba(0,122,61,0)_50%),radial-gradient(106.07%_106.07%_at_25%_75%,rgba(139,69,19,0.1)_0%,rgba(139,69,19,0)_50%)]"></div>
              </div>
              <h3 className="text-xl font-playfair font-bold text-ethiopian-brown text-center mb-4">
                Fashion DAO
              </h3>
              <p className="text-center text-ethiopian-brown text-opacity-80">
                Participate in community governance and fund emerging Ethiopian designers.
              </p>
            </div>
          </div>

          <div className="w-32 h-1 rounded-full bg-gradient-to-r from-ethiopian-red via-ethiopian-yellow via-ethiopian-green to-ethiopian-saddle mx-auto mt-8"></div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
