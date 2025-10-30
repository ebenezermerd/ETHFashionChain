import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-ethiopian-brown relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(106.07%_106.07%_at_25%_25%,rgba(218,2,14,0.2)_0%,rgba(218,2,14,0)_50%),radial-gradient(106.07%_106.07%_at_75%_75%,rgba(255,205,0,0.2)_0%,rgba(255,205,0,0)_50%),radial-gradient(106.07%_106.07%_at_75%_25%,rgba(0,122,61,0.15)_0%,rgba(0,122,61,0)_50%),radial-gradient(106.07%_106.07%_at_25%_75%,rgba(139,69,19,0.1)_0%,rgba(139,69,19,0)_50%)]"></div>
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(0deg,#DA020E_0%,#DA020E_12.5%,rgba(218,2,14,0)_12.5%,rgba(218,2,14,0)_100%),linear-gradient(90deg,#DA020E_0%,#DA020E_12.5%,rgba(218,2,14,0)_12.5%,rgba(218,2,14,0)_100%),linear-gradient(45deg,#FFCD00_0%,#FFCD00_5.89%,rgba(255,205,0,0)_5.89%,rgba(255,205,0,0)_70.71%),linear-gradient(315deg,#FFCD00_0%,#FFCD00_5.89%,rgba(255,205,0,0)_5.89%,rgba(255,205,0,0)_70.71%)]"></div>
      
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-ethiopian-red via-ethiopian-yellow to-ethiopian-green">
                <div className="absolute inset-0 rounded-full opacity-30 bg-[linear-gradient(0deg,#DA020E_0%,#DA020E_12.5%,rgba(218,2,14,0)_12.5%,rgba(218,2,14,0)_100%),linear-gradient(90deg,#DA020E_0%,#DA020E_12.5%,rgba(218,2,14,0)_12.5%,rgba(218,2,14,0)_100%),linear-gradient(45deg,#FFCD00_0%,#FFCD00_5.89%,rgba(255,205,0,0)_5.89%,rgba(255,205,0,0)_70.71%),linear-gradient(315deg,#FFCD00_0%,#FFCD00_5.89%,rgba(255,205,0,0)_5.89%,rgba(255,205,0,0)_70.71%)]"></div>
              </div>
              <h3 className="text-2xl font-playfair font-bold text-ethiopian-yellow">
                ETHFashionChain
              </h3>
            </div>
            <p className="text-ethiopian-cream text-opacity-80 leading-relaxed mb-4 max-w-md">
              Bridging Ethiopia's rich textile heritage with blockchain technology to create a transparent, empowering platform for designers, artisans, and fashion lovers worldwide.
            </p>
            <p className="text-ethiopian-cream text-opacity-60 text-sm font-amiri">
              የኢትዮጵያ ባህል መጠበቂያ - Preserving Ethiopian Culture
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-lg font-playfair font-bold text-ethiopian-yellow mb-4">
              Platform
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/design-registry" className="text-ethiopian-cream text-opacity-80 hover:text-ethiopian-yellow transition-colors">
                  Design Registry
                </Link>
              </li>
              <li>
                <Link to="/marketplace" className="text-ethiopian-cream text-opacity-80 hover:text-ethiopian-yellow transition-colors">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link to="/supply-chain" className="text-ethiopian-cream text-opacity-80 hover:text-ethiopian-yellow transition-colors">
                  Supply Chain
                </Link>
              </li>
              <li>
                <Link to="/cultural-archive" className="text-ethiopian-cream text-opacity-80 hover:text-ethiopian-yellow transition-colors">
                  Cultural Archive
                </Link>
              </li>
              <li>
                <Link to="/fashion-dao" className="text-ethiopian-cream text-opacity-80 hover:text-ethiopian-yellow transition-colors">
                  Fashion DAO
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-lg font-playfair font-bold text-ethiopian-yellow mb-4">
              Community
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-ethiopian-cream text-opacity-80 hover:text-ethiopian-yellow transition-colors">
                  Join Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-ethiopian-cream text-opacity-80 hover:text-ethiopian-yellow transition-colors">
                  Follow Twitter
                </a>
              </li>
              <li>
                <Link to="/artisan-network" className="text-ethiopian-cream text-opacity-80 hover:text-ethiopian-yellow transition-colors">
                  Artisan Network
                </Link>
              </li>
              <li>
                <a href="#" className="text-ethiopian-cream text-opacity-80 hover:text-ethiopian-yellow transition-colors">
                  Developer Docs
                </a>
              </li>
              <li>
                <Link to="/support" className="text-ethiopian-cream text-opacity-80 hover:text-ethiopian-yellow transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ethiopian-yellow border-opacity-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ethiopian-cream text-opacity-60 text-sm">
            © 2024 ETHFashionChain. Preserving Ethiopian heritage through technology.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-ethiopian-cream text-opacity-60 text-sm hover:text-ethiopian-yellow transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-ethiopian-cream text-opacity-60 text-sm hover:text-ethiopian-yellow transition-colors">
              Terms of Service
            </Link>
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-ethiopian-red via-ethiopian-yellow via-ethiopian-green to-ethiopian-saddle opacity-80"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
