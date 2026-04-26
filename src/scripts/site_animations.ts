import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MOTION_CONTEXT_KEY = "__muestrateMotionContext";
const HEADER_CLEANUP_KEY = "__muestrateHeaderCleanup";

type MotionWindow = Window & {
  [MOTION_CONTEXT_KEY]?: gsap.Context;
  [HEADER_CLEANUP_KEY]?: () => void;
};

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const uniqueElements = (items: Element[]) =>
  Array.from(new Set(items)).filter((item): item is HTMLElement => item instanceof HTMLElement);

const scoped = (root: ParentNode, selector: string) =>
  uniqueElements(Array.from(root.querySelectorAll(selector)));

const getIntroTargets = (section: HTMLElement) => {
  const candidates = scoped(
    section,
    [
      ":scope > .container-shell > p",
      ":scope > .container-shell > h1",
      ":scope > .container-shell > h2",
      ":scope > .container-shell > div:first-child > p",
      ":scope > .container-shell > div:first-child > h1",
      ":scope > .container-shell > div:first-child > h2",
      ":scope > .container-shell > div:first-child > div > p",
      ":scope > .container-shell > div:first-child > div > h1",
      ":scope > .container-shell > div:first-child > div > h2",
    ].join(","),
  );

  return candidates.filter((item) => !item.closest("article"));
};

const getCards = (section: HTMLElement) =>
  scoped(
    section,
    [
      "article",
      "form",
      ".sticker-lift",
      ".brand-outline",
      ".grid > a",
      ".grid > div:not(.absolute)",
    ].join(","),
  ).filter((item) => item !== section && !item.closest("header") && !item.closest("footer"));

const animateHero = () => {
  const hero = document.querySelector<HTMLElement>("main > section:first-child");
  if (!hero) return;

  const badge = scoped(hero, ":scope > .container-shell > p:first-child");
  const heading = scoped(hero, ":scope h1");
  const lead = scoped(hero, ":scope h1 + p, :scope .container-shell > p:nth-of-type(2)");
  const buttons = scoped(hero, ":scope a");
  const stats = scoped(hero, ":scope .grid > div");

  const timeline = gsap.timeline({
    defaults: { duration: 0.72, ease: "power3.out" },
  });

  timeline
    .fromTo(badge, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0 })
    .fromTo(
      heading,
      { autoAlpha: 0, y: 44, filter: "blur(10px)" },
      { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.95 },
      "-=0.28",
    )
    .fromTo(
      lead,
      { autoAlpha: 0, y: 22 },
      { autoAlpha: 1, y: 0 },
      "-=0.4",
    )
    .fromTo(
      buttons,
      { autoAlpha: 0, y: 18 },
      { autoAlpha: 1, y: 0, stagger: 0.08 },
      "-=0.36",
    )
    .fromTo(
      stats,
      { autoAlpha: 0, y: 24 },
      { autoAlpha: 1, y: 0, stagger: 0.08 },
      "-=0.24",
    );
};

const animateSections = () => {
  const sections = scoped(document, "main > section");

  sections.slice(1).forEach((section) => {
    const introTargets = getIntroTargets(section);

    if (introTargets.length > 0) {
      gsap.fromTo(
        introTargets,
        { autoAlpha: 0, y: 34, filter: "blur(8px)" },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.72,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
        },
      );
    }

    const cards = getCards(section);
    if (cards.length > 0) {
      gsap.set(cards, { autoAlpha: 0, y: 34, rotateX: 2, transformPerspective: 700 });
      ScrollTrigger.batch(cards, {
        start: "top 88%",
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            duration: 0.62,
            ease: "power3.out",
            stagger: 0.08,
          });
        },
      });
    }
  });
};

const animateDecorations = () => {
  const decorativeItems = scoped(
    document,
    [
      "[aria-hidden='true']",
      ".sparkle-bg",
    ].join(","),
  ).filter((item) => item.textContent?.includes("✦") || item.className.toString().includes("spark"));

  decorativeItems.forEach((item, index) => {
    gsap.to(item, {
      y: index % 2 === 0 ? -14 : 14,
      rotate: index % 2 === 0 ? 4 : -4,
      duration: 4.5 + (index % 4),
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  });
};

const animateHeader = () => {
  const header = document.querySelector<HTMLElement>("header");
  if (!header) return;

  gsap.fromTo(
    header,
    { autoAlpha: 0 },
    { autoAlpha: 1, duration: 0.42, ease: "power2.out" },
  );
};

const setupSmartHeader = () => {
  const header = document.querySelector<HTMLElement>("header");
  const hero = document.querySelector<HTMLElement>("main > section:first-child");
  if (!header || !hero) return () => undefined;

  let lastScrollY = window.scrollY;
  let ticking = false;
  let isHidden = false;

  const showHeader = () => {
    if (!isHidden) return;
    isHidden = false;
    header.style.pointerEvents = "";
    gsap.to(header, {
      y: 0,
      yPercent: 0,
      autoAlpha: 1,
      duration: 0.38,
      ease: "power3.out",
      overwrite: true,
    });
  };

  const hideHeader = () => {
    if (isHidden) return;
    isHidden = true;
    header.style.pointerEvents = "none";
    gsap.to(header, {
      y: 0,
      yPercent: -105,
      autoAlpha: 0.98,
      duration: 0.34,
      ease: "power3.inOut",
      overwrite: true,
    });
  };

  const updateHeader = () => {
    ticking = false;

    const currentScrollY = Math.max(window.scrollY, 0);
    const delta = currentScrollY - lastScrollY;
    const heroRect = hero.getBoundingClientRect();
    const heroProtectedZone = heroRect.bottom > header.offsetHeight + 24;
    const nearTop = currentScrollY < 16;

    if (nearTop || heroProtectedZone) {
      showHeader();
    } else if (delta > 5) {
      hideHeader();
    } else if (delta < -5) {
      showHeader();
    }

    lastScrollY = currentScrollY;
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateHeader);
  };

  gsap.set(header, { y: 0, yPercent: 0, autoAlpha: 1, willChange: "transform" });
  updateHeader();

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);

  return () => {
    window.removeEventListener("scroll", requestUpdate);
    window.removeEventListener("resize", requestUpdate);
    gsap.killTweensOf(header);
    gsap.set(header, { clearProps: "transform,visibility,opacity,willChange" });
    header.style.pointerEvents = "";
  };
};

const initMotion = () => {
  const motionWindow = window as MotionWindow;
  motionWindow[HEADER_CLEANUP_KEY]?.();
  motionWindow[HEADER_CLEANUP_KEY] = undefined;
  motionWindow[MOTION_CONTEXT_KEY]?.revert();
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

  if (prefersReducedMotion()) {
    const header = document.querySelector<HTMLElement>("header");
    if (header) gsap.set(header, { clearProps: "transform,visibility,opacity,willChange" });
    return;
  }

  motionWindow[MOTION_CONTEXT_KEY] = gsap.context(() => {
    animateHeader();
    animateHero();
    animateSections();
    animateDecorations();
  });

  motionWindow[HEADER_CLEANUP_KEY] = setupSmartHeader();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initMotion, { once: true });
} else {
  initMotion();
}

document.addEventListener("astro:page-load", initMotion);
