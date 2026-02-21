import { useState, useEffect } from "react";
import appLogo from "/vm_logo_gradient.svg";
import ReactGA from "react-ga4";

import style from "./header.module.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateToSection = (idTag: string) => {
    // Track nav button click
    ReactGA.event({
      category: 'engagement',
      action: 'nav_click',
      label: idTag
    });
    window.location.href = `#${idTag}`;
    setIsMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${style.headerContainer} ${isScrolled ? style.scrolled : ""}`}>
      <div className={style.logoWrapper}>
        <img src={appLogo} alt="app Logo" className={style.appLogo} />
      </div>
      <div className={style.navLinksWrapper}>
        <button type="button" className={style.navLinkItem} onClick={() => navigateToSection("about")} aria-label="Go to About">About</button>
        <button type="button" className={style.navLinkItem} onClick={() => navigateToSection("experience")} aria-label="Go to Experience">Experience</button>
        <button type="button" className={style.navLinkItem} onClick={() => navigateToSection("resume")} aria-label="Go to Resume">Resume</button>
        <button type="button" className={style.navLinkItem} onClick={() => navigateToSection("contact")} aria-label="Go to Contact">Contact</button>
      </div>
      <button aria-label="Toggle navigation" aria-expanded={isMobileMenuOpen} className={style.hamburgerMenu} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
      {isMobileMenuOpen && (
        <div className={style.mobileNavLinksWrapper}>
          <button type="button" className={style.navLinkItem} onClick={() => navigateToSection("about")} aria-label="Go to About">About</button>
          <button type="button" className={style.navLinkItem} onClick={() => navigateToSection("experience")} aria-label="Go to Experience">Experience</button>
          <button type="button" className={style.navLinkItem} onClick={() => navigateToSection("resume")} aria-label="Go to Resume">Resume</button>
          <button type="button" className={style.navLinkItem} onClick={() => navigateToSection("contact")} aria-label="Go to Contact">Contact</button>
        </div>
      )}
    </header>
  );
};

export default Header;
