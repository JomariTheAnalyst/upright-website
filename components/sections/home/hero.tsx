"use client";

import { useCallback, useRef, useState, type KeyboardEvent } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";

import { TransparentNavbar } from "@/components/layout/navbar-transparent";
import { useLenisScrollLock } from "@/components/providers/smooth-scroll-provider";

import styles from "./hero.module.css";

gsap.registerPlugin(useGSAP, SplitText, CustomEase);
CustomEase.create("upright-slideshow-wipe", "0.625, 0.05, 0, 1");

const SLIDES = [
  {
    src: "/images/services-tabs/building-upright.png",
    alt: "Upright headquarters concept overlooking a city skyline",
    label: "Upright headquarters",
    position: "center center",
  },
  {
    src: "/images/services-tabs/itconsultancy.jpg",
    alt: "IT professional planning a digital product with research and diagrams",
    label: "IT consultancy",
    position: "center center",
  },
  {
    src: "/images/services-tabs/systemdesign.jpg",
    alt: "System design roadmap arranged across a planning wall",
    label: "System design",
    position: "center center",
  },
  {
    src: "/images/homepage/team.jpg",
    alt: "A diverse team joining hands in a circle",
    label: "People working together",
    position: "center center",
  },
  {
    src: "/images/services-tabs/learningcontentdevelopment.jpg",
    alt: "Learning tiles spelling lifelong learning beside a word game",
    label: "Learning content development",
    position: "center center",
  },
] as const;

const LOADER_ORDER = [3, 4, 0, 1, 2] as const;

function HeroImage({
  slide,
  className,
  priority = false,
}: {
  slide: (typeof SLIDES)[number];
  className: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={slide.src}
      alt={slide.alt}
      fill
      priority={priority}
      unoptimized
      draggable={false}
      sizes="100vw"
      className={className}
      style={{ objectPosition: slide.position }}
    />
  );
}

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const currentSlideRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const slideshowReadyRef = useRef(false);
  const slideshowTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const [introActive, setIntroActive] = useState(true);

  useLenisScrollLock(introActive);

  useGSAP(
    () => {
      const hero = heroRef.current;
      if (!hero) return;

      const loader = hero.querySelector<HTMLElement>("[data-hero-loader]");
      const loaderTiles = gsap.utils.toArray<HTMLElement>(
        "[data-loader-tile]",
        hero
      );
      const loaderMedia = gsap.utils.toArray<HTMLElement>(
        "[data-loader-media]",
        hero
      );
      const scaleDownTargets = gsap.utils.toArray<HTMLElement>(
        "[data-scale-down]",
        hero
      );
      const currentLoaderTile = hero.querySelector<HTMLElement>(
        "[data-loader-current]"
      );
      const heading = hero.querySelector<HTMLElement>("[data-hero-heading]");
      const eyebrow = hero.querySelector<HTMLElement>("[data-hero-eyebrow]");
      const nav = hero.querySelector<HTMLElement>("[data-hero-nav]");
      const support = hero.querySelector<HTMLElement>("[data-hero-support]");
      const thumbnails = gsap.utils.toArray<HTMLElement>(
        "[data-hero-thumbnail]",
        hero
      );
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        gsap.set(loader, { display: "none" });
        gsap.set([heading, eyebrow, nav, support, ...thumbnails], {
          autoAlpha: 1,
          yPercent: 0,
          pointerEvents: "auto",
        });
        hero.dataset.introComplete = "true";
        slideshowReadyRef.current = true;
        setIntroActive(false);
        return () => {
          slideshowTimelineRef.current?.kill();
          slideshowTimelineRef.current = null;
          slideshowReadyRef.current = false;
        };
      }

      if (
        !loader ||
        !currentLoaderTile ||
        !heading
      ) {
        return;
      }

      const split = SplitText.create(heading, {
        type: "words",
        mask: "words",
        wordsClass: styles.headingWord,
      });

      gsap.set(split.words, { yPercent: 110 });
      gsap.set(heading, { autoAlpha: 1 });
      gsap.set([eyebrow, nav, support], { autoAlpha: 0 });
      gsap.set(nav, { pointerEvents: "none" });
      gsap.set(thumbnails, { autoAlpha: 0, yPercent: 150 });

      const timeline = gsap.timeline({
        defaults: { ease: "expo.inOut" },
        onComplete: () => {
          gsap.set(loader, { display: "none" });
          hero.dataset.introComplete = "true";
          slideshowReadyRef.current = true;
          setIntroActive(false);
        },
      });

      timeline
        .fromTo(
          loaderTiles,
          { xPercent: 500 },
          { xPercent: -500, duration: 2.5, stagger: 0.05 }
        )
        .to(
          scaleDownTargets,
          {
            scale: 0.5,
            duration: 2,
            stagger: {
              each: 0.05,
              from: "edges",
              ease: "none",
            },
            onComplete: () => {
              currentLoaderTile.classList.remove(styles.loaderMediaRadius);
            },
          },
          "-=0.1"
        )
        .fromTo(
          loaderMedia,
          { width: "10em", height: "10em" },
          { width: "100vw", height: "100dvh", duration: 2 },
          "<0.5"
        )
        .to(
          thumbnails,
          {
            autoAlpha: 1,
            yPercent: 0,
            stagger: 0.05,
            ease: "expo.out",
            duration: 1,
          },
          "-=0.9"
        )
        .to(
          split.words,
          {
            yPercent: 0,
            stagger: 0.075,
            ease: "expo.out",
            duration: 1,
          },
          "<0.1"
        )
        .to(
          eyebrow,
          { autoAlpha: 1, ease: "power1.inOut", duration: 0.2 },
          "<"
        )
        .to(
          nav,
          {
            autoAlpha: 1,
            pointerEvents: "auto",
            ease: "power1.inOut",
            duration: 0.2,
          },
          "<0.15"
        )
        .to(
          support,
          { autoAlpha: 1, ease: "power1.inOut", duration: 0.2 },
          "<0.15"
        )
        .to(loader, { autoAlpha: 0, duration: 0.15, ease: "power1.out" }, "+=0.3");

      return () => {
        timeline.kill();
        slideshowTimelineRef.current?.kill();
        slideshowTimelineRef.current = null;
        split.revert();
        slideshowReadyRef.current = false;
      };
    },
    { scope: heroRef }
  );

  const navigateToSlide = useCallback((targetIndex: number) => {
    const hero = heroRef.current;
    if (
      !hero ||
      !slideshowReadyRef.current ||
      isAnimatingRef.current ||
      targetIndex === currentSlideRef.current
    ) {
      return;
    }

    const slides = Array.from(
      hero.querySelectorAll<HTMLElement>("[data-hero-slide]")
    );
    const inners = Array.from(
      hero.querySelectorAll<HTMLElement>("[data-slide-inner]")
    );
    const thumbnails = Array.from(
      hero.querySelectorAll<HTMLButtonElement>("[data-hero-thumbnail]")
    );
    const previousIndex = currentSlideRef.current;
    const direction = targetIndex > previousIndex ? 1 : -1;
    const outgoingSlide = slides[previousIndex];
    const outgoingInner = inners[previousIndex];
    const incomingSlide = slides[targetIndex];
    const incomingInner = inners[targetIndex];

    if (!outgoingSlide || !outgoingInner || !incomingSlide || !incomingInner) {
      return;
    }

    isAnimatingRef.current = true;
    currentSlideRef.current = targetIndex;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    slideshowTimelineRef.current = gsap
      .timeline({
        defaults: {
          duration: reduceMotion ? 0.01 : 1.5,
          ease: "upright-slideshow-wipe",
        },
        onStart: () => {
          incomingSlide.dataset.active = "true";
          incomingSlide.removeAttribute("aria-hidden");
          gsap.set(outgoingSlide, { zIndex: 1 });
          gsap.set(incomingSlide, { zIndex: 2 });

          thumbnails.forEach((thumbnail, index) => {
            const active = index === targetIndex;
            thumbnail.dataset.active = active ? "true" : "false";
            if (active) {
              thumbnail.setAttribute("aria-current", "true");
            } else {
              thumbnail.removeAttribute("aria-current");
            }
          });
        },
        onComplete: () => {
          outgoingSlide.dataset.active = "false";
          outgoingSlide.setAttribute("aria-hidden", "true");
          gsap.set(outgoingSlide, { zIndex: 0 });
          gsap.set(incomingSlide, { zIndex: 1 });
          isAnimatingRef.current = false;
        },
        onInterrupt: () => {
          isAnimatingRef.current = false;
        },
      })
      .to(outgoingSlide, { xPercent: -direction * 100 }, 0)
      .to(outgoingInner, { xPercent: direction * 75 }, 0)
      .fromTo(
        incomingSlide,
        { xPercent: direction * 100 },
        { xPercent: 0 },
        0
      )
      .fromTo(
        incomingInner,
        { xPercent: -direction * 75 },
        { xPercent: 0 },
        0
      );
  }, []);

  const handleThumbnailKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    let targetIndex: number | null = null;

    if (event.key === "ArrowRight") {
      targetIndex = (index + 1) % SLIDES.length;
    } else if (event.key === "ArrowLeft") {
      targetIndex = (index - 1 + SLIDES.length) % SLIDES.length;
    } else if (event.key === "Home") {
      targetIndex = 0;
    } else if (event.key === "End") {
      targetIndex = SLIDES.length - 1;
    }

    if (targetIndex === null) return;

    event.preventDefault();
    const buttons = heroRef.current?.querySelectorAll<HTMLButtonElement>(
      "[data-hero-thumbnail]"
    );
    buttons?.[targetIndex]?.focus();
    navigateToSlide(targetIndex);
  };

  return (
    <section
      ref={heroRef}
      className={styles.hero}
      aria-label="Upright introduction"
    >
      <div className={styles.slideshow} aria-live="polite">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.src}
            className={styles.slide}
            data-hero-slide
            data-active={index === 0 ? "true" : "false"}
            aria-hidden={index === 0 ? undefined : true}
          >
            <div className={styles.slideInner} data-slide-inner>
              <HeroImage
                slide={slide}
                className={styles.coverImage}
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.scrim} aria-hidden="true" />

      <div className={styles.navReveal} data-hero-nav>
        <TransparentNavbar />
      </div>

      <div className={styles.content}>
        <div className={styles.centerContent}>
          <p className={styles.eyebrow} data-hero-eyebrow>
            Philippine-Based IT Solutions Company
          </p>
          <h1 className={styles.heading} data-hero-heading>
            <span>Transforming</span>{" "}
            <span className={styles.headingAccent}>Businesses</span>
          </h1>
        </div>

        <div className={styles.bottomContent}>
          <div
            className={styles.thumbnailRow}
            role="group"
            aria-label="Choose a hero image"
          >
            {SLIDES.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                className={styles.thumbnailButton}
                data-hero-thumbnail
                data-active={index === 0 ? "true" : "false"}
                aria-label={`Show ${slide.label}`}
                aria-current={index === 0 ? "true" : undefined}
                onClick={() => navigateToSlide(index)}
                onKeyDown={(event) => handleThumbnailKeyDown(event, index)}
              >
                <span className={styles.thumbnailImage}>
                  <HeroImage slide={slide} className={styles.coverImage} />
                </span>
              </button>
            ))}
          </div>

          <p className={styles.support} data-hero-support>
            <span>Providing World-class Solutions</span>
            <span>Fueled by Local Insights.</span>
          </p>
        </div>
      </div>

      <div className={styles.loader} data-hero-loader aria-hidden="true">
        <div className={styles.loaderWrap}>
          <div className={styles.loaderGroups} data-loader-groups>
            <div className={`${styles.loaderGroup} ${styles.loaderDuplicate}`}>
              {LOADER_ORDER.map((slideIndex) => {
                const slide = SLIDES[slideIndex];
                return (
                  <div
                    className={styles.loaderSingle}
                    data-loader-tile
                    key={`duplicate-${slide.src}`}
                  >
                    <div className={styles.loaderMedia} data-loader-media>
                      <HeroImage slide={slide} className={styles.coverImage} />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={`${styles.loaderGroup} ${styles.loaderRelative}`}>
              {LOADER_ORDER.map((slideIndex, position) => {
                const slide = SLIDES[slideIndex];
                const current = position === 2;
                return (
                  <div
                    className={styles.loaderSingle}
                    data-loader-tile
                    key={`primary-${slide.src}`}
                  >
                    <div
                      className={`${styles.loaderMedia} ${
                        current
                          ? `${styles.loaderMediaCurrent} ${styles.loaderMediaRadius}`
                          : ""
                      }`}
                      data-loader-media
                      data-loader-current={current ? "true" : undefined}
                    >
                      {current ? (
                        <HeroImage
                          slide={slide}
                          className={styles.coverImage}
                        />
                      ) : (
                        <span
                          className={styles.loaderImageScale}
                          data-scale-down
                        >
                          <HeroImage
                            slide={slide}
                            className={styles.coverImage}
                          />
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className={`${styles.loaderFade} ${styles.loaderFadeStart}`}
            data-loader-fade
          />
          <div
            className={`${styles.loaderFade} ${styles.loaderFadeEnd}`}
            data-loader-fade
          />
        </div>
      </div>
    </section>
  );
}
