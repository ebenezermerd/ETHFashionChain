import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ConnectWalletModal from "@/components/ConnectWalletModal";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Marketplace", to: "/marketplace" },
  { label: "Design Registry", to: "/design-registry" },
  { label: "Supply Chain", to: "/supply-chain" },
  { label: "Heritage", to: "/heritage" },
  { label: "Community", to: "/community" },
  { label: "About", to: "/about" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [walletOpen, setWalletOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const mobileRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Close mobile menu on route change
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("efc_wallet");
    if (stored) setWalletAddress(stored);
  }, []);

  // click outside to close mobile menu
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!mobileRef.current) return;
      if (mobileRef.current.contains(e.target as Node)) return;
      setMobileOpen(false);
    }
    if (mobileOpen) document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, [mobileOpen]);

  function handleConnect(address: string) {
    setWalletAddress(address);
    localStorage.setItem("efc_wallet", address);
    setWalletOpen(false);
  }

  function shorten(addr: string) {
    if (!addr) return "";
    return addr.slice(0, 6) + "..." + addr.slice(-4);
  }

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all backdrop-blur-sm ${
        scrolled ? "bg-white/60 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center" aria-hidden>
              <div className="w-full h-full bg-gradient-to-br from-ethiopian-red via-ethiopian-yellow to-ethiopian-green" />
            </div>
            <span className="text-lg font-playfair font-bold bg-clip-text text-transparent bg-gradient-to-r from-ethiopian-red via-ethiopian-yellow to-ethiopian-green">
              ETHFashionChain
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-1 py-1 text-sm font-medium transition-colors ${
                    isActive ? "text-ethiopian-red underline" : "text-ethiopian-brown hover:text-ethiopian-red"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setWalletOpen(true)}
              className="hidden md:inline-flex items-center gap-2 px-3 py-2 text-sm border border-ethiopian-red text-ethiopian-red rounded-md bg-white/80 hover:bg-ethiopian-red hover:text-white transition-colors"
            >
              {walletAddress ? shorten(walletAddress) : "Connect Wallet"}
            </button>

            <NavLink
              to="/join"
              className="hidden md:inline-flex items-center px-3 py-2 text-sm bg-ethiopian-red text-white rounded-md hover:opacity-95 transition-opacity"
            >
              Join Platform
            </NavLink>

            {/* Mobile Hamburger */}
            <button
              className="xl:hidden p-2 rounded-md focus:outline-none"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg
                className="w-6 h-6 text-ethiopian-brown"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile panel */}
      <div
        ref={mobileRef}
        className={`md:hidden fixed inset-x-4 top-20 z-40 rounded-xl bg-white/95 shadow-lg p-4 transition-transform transform origin-top ${
          mobileOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col gap-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md font-medium ${
                  isActive ? "bg-ethiopian-red/10 text-ethiopian-red" : "text-ethiopian-brown hover:bg-ethiopian-cream/50"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="pt-3 border-t border-t-ethiopian-cream/40 mt-2 flex flex-col gap-3">
            <button
              onClick={() => setWalletOpen(true)}
              className="w-full px-4 py-2 rounded-md border border-ethiopian-red text-ethiopian-red bg-white"
            >
              {walletAddress ? `Connected: ${shorten(walletAddress)}` : "Connect Wallet"}
            </button>
            <Link to="/join" className="w-full inline-flex items-center justify-center px-4 py-2 rounded-md bg-ethiopian-red text-white">
              Join Platform
            </Link>
          </div>
        </div>
      </div>

      <ConnectWalletModal open={walletOpen} onClose={() => setWalletOpen(false)} onConnect={handleConnect} currentAddress={walletAddress} />
    </header>
  );
}
