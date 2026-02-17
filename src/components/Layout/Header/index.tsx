"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import { Menu, X, Phone } from "lucide-react";

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY >= 80);
    const handleHashChange = () => setActiveHash(window.location.hash);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Close mobile nav when route changes
  useEffect(() => {
    setNavbarOpen(false);
  }, [pathUrl]);

  return (
    <>
      <header
        className={`fixed top-0 z-40 w-full transition-all duration-300 ${
          sticky
            ? "shadow-lg bg-background/95 backdrop-blur-md pt-3 pb-3"
            : "shadow-none pt-5 pb-5"
        }`}
      >
        <div className="container px-4 flex items-center justify-between">
          {/* Logo */}
          <div onClick={() => setActiveHash("")} className="cursor-pointer">
            <Logo />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex grow items-center gap-6 justify-center" aria-label="Main navigation">
            {headerData.map((item, index) => (
              <HeaderLink
                key={index}
                item={item}
                activeHash={activeHash}
                setActiveHash={setActiveHash}
              />
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex gap-3 items-center">
            <a
              href="tel:+18005673700"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-700 transition-colors"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4" />
              (800) 567-3700
            </a>
            <a
              href="/#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-green-500/40 transition-all"
            >
              Free Quote
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="block lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label={navbarOpen ? "Close menu" : "Open menu"}
            aria-expanded={navbarOpen}
          >
            {navbarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      {navbarOpen && (
        <div
          className="fixed inset-0 z-30 lg:hidden"
          onClick={() => setNavbarOpen(false)}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-80 max-w-full z-40 bg-background border-l border-border transform transition-transform duration-300 lg:hidden ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div onClick={() => { setActiveHash(""); setNavbarOpen(false); }}>
            <Logo />
          </div>
          <button
            onClick={() => setNavbarOpen(false)}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col p-4 gap-1" aria-label="Mobile navigation">
          {headerData.map((item, index) => (
            <MobileHeaderLink
              key={index}
              item={item}
              activeHash={activeHash}
              setActiveHash={setActiveHash}
              onClick={() => setNavbarOpen(false)}
            />
          ))}

          <div className="mt-6 flex flex-col gap-3">
            <a
              href="tel:+18005673700"
              className="flex items-center justify-center gap-2 px-6 py-3 border border-green-500 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors font-medium"
              onClick={() => setNavbarOpen(false)}
            >
              <Phone className="w-4 h-4" />
              Call Us Now
            </a>
            <a
              href="/#contact"
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold text-center hover:shadow-lg transition-all"
              onClick={() => setNavbarOpen(false)}
            >
              Get Free Quote
            </a>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Header;
