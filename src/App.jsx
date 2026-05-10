import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import MobileMenu from "./components/MobileMenu.jsx";
import Hero from "./components/Hero.jsx";
import SectionSobre from "./components/SectionSobre.jsx";
import SectionComoFunciona from "./components/SectionComoFunciona.jsx";
import SectionComunidades from "./components/SectionComunidades.jsx";
import SectionRedes from "./components/SectionRedes.jsx";
import SectionParceiros from "./components/SectionParceiros.jsx";
import SectionProfessores from "./components/SectionProfessores.jsx";
import SectionFaq from "./components/SectionFaq.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";
import SocialFab from "./components/SocialFab.jsx";
import SideNavbar from "./components/SideNavbar.jsx";

const HEADER_OFFSET = 80;

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add("js-enabled");
    return () => document.body.classList.remove("js-enabled");
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark-theme");
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.classList.remove("menu-open");
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleAnchorClick = (targetId) => {
    if (!targetId) return;
    const target = document.querySelector(targetId);
    if (!target) return;
    const top = target.offsetTop - HEADER_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const menuItems = useMemo(
    () => [
      { id: "#sobre", label: "Sobre o Plantel" },
      { id: "#comunidades", label: "Comunidades" },
      { id: "#redes", label: "Redes Sociais" },
      { id: "#parceiros", label: "Parceiros" },
      { id: "#professores", label: "Professores" },
    ],
    []
  );

  return (
    <>
      <Header
        menuItems={menuItems}
        onAnchorClick={handleAnchorClick}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode((prev) => !prev)}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
        isMenuOpen={isMenuOpen}
      />
      <MobileMenu
        menuItems={menuItems}
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onAnchorClick={handleAnchorClick}
      />
      <SocialFab />
      <Hero />

      <main>
        <SectionSobre />
        <SectionComoFunciona />
        <SectionComunidades />
        <SectionRedes />
        <SectionParceiros />
        <SectionProfessores />
        <SectionFaq />
      </main>

      <Footer menuItems={menuItems} onAnchorClick={handleAnchorClick} />
      <BackToTop />
      <SideNavbar />
    </>
  );
}
