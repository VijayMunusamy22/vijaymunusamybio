import { useState, useEffect } from "react";
import appLogo from "/vm_logo_gradient.svg";

import style from "./header.module.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateToSection = (idTag: string) => {
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
        <span className={style.navLinkItem} onClick={() => navigateToSection("about")}>About</span>
        <span className={style.navLinkItem} onClick={() => navigateToSection("experience")}>Experience</span>
        <span className={style.navLinkItem} onClick={() => navigateToSection("resume")}>Resume</span>
        <span className={style.navLinkItem} onClick={() => navigateToSection("contact")}>Contact</span>
      </div>
      <div className={style.hamburgerMenu} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </div>
      {isMobileMenuOpen && (
        <div className={style.mobileNavLinksWrapper}>
          <span className={style.navLinkItem} onClick={() => navigateToSection("about")}>About</span>
          <span className={style.navLinkItem} onClick={() => navigateToSection("experience")}>Experience</span>
          <span className={style.navLinkItem} onClick={() => navigateToSection("resume")}>Resume</span>
          <span className={style.navLinkItem} onClick={() => navigateToSection("contact")}>Contact</span>
        </div>
      )}
    </header>
  );
};

export default Header;
