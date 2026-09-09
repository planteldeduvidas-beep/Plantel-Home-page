import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window)) return;

    const elements = Array.from(document.querySelectorAll([
      "main > section > h2",
      "main > section > .line",
      "main > section > .text-info-out",
      "main .container-numbers",
      "main .section-header",
      "main .timeline-item",
      "main .box-redes",
      "main .community-carousel",
      "main .efomm-section-heading",
      "main .efomm-card",
      "main .hero-parceiro",
      "main .parceria-convite",
      "main .parceria-whatsapp",
    ].join(",")));

    const reveal = (element) => {
      element.dataset.scrollReveal = "visible";
      observer.unobserve(element);
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) reveal(entry.target);
      });
    }, { threshold: 0, rootMargin: "0px 0px -32px 0px" });

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      // Preserve content already visible, including restored scroll positions.
      if (motion.matches || rect.top < window.innerHeight) return;
      element.dataset.scrollReveal = "pending";
      observer.observe(element);
    });

    const onFocus = (event) => {
      elements.forEach((element) => {
        if (element.contains(event.target)) reveal(element);
      });
    };
    const onMotionChange = () => {
      if (motion.matches) {
        observer.disconnect();
        elements.forEach((element) => delete element.dataset.scrollReveal);
      }
    };
    document.addEventListener("focusin", onFocus);
    motion.addEventListener("change", onMotionChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("focusin", onFocus);
      motion.removeEventListener("change", onMotionChange);
      elements.forEach((element) => delete element.dataset.scrollReveal);
    };
  }, []);
}
