"use client";

import React, { useRef, useEffect, useState } from "react";

const VIDEO_SRC = "/videos/cachoeira-estatica.mp4?v=1";
const POSTER_SRC = "/videos/cachoeira-poster.jpg?v=1";

export function GlobalVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const motionLayerRef = useRef<HTMLDivElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const layer = motionLayerRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let prefersReducedMotion = reducedMotionQuery.matches;

    const tryPlay = () => {
      if (prefersReducedMotion || !video) return;
      if (video.paused) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Gracefully keep poster/current frame if autoplay is blocked by Low Power Mode
          });
        }
      }
    };

    // Smooth GPU scroll-depth parallax without any 360° camera rotation
    let maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    let targetProgress = Math.max(0, Math.min(1, window.scrollY / maxScroll));
    let currentProgress = targetProgress;
    let rafId: number | null = null;

    const applyTransform = (progress: number) => {
      if (!layer) return;
      if (prefersReducedMotion) {
        layer.style.transform = "translate3d(0, 0, 0) scale(1.04)";
        return;
      }
      // Subtle vertical glide (+2.5% -> -3.5%) + gentle depth zoom (1.02 -> 1.07) as user scrolls
      const translateY = 2.5 - progress * 6.0;
      const scale = 1.02 + progress * 0.05;
      layer.style.transform = `translate3d(0, ${translateY.toFixed(3)}%, 0) scale(${scale.toFixed(4)})`;
    };

    const tick = () => {
      const diff = targetProgress - currentProgress;
      if (Math.abs(diff) > 0.0005) {
        currentProgress += diff * 0.12;
        applyTransform(currentProgress);
        rafId = requestAnimationFrame(tick);
      } else {
        currentProgress = targetProgress;
        applyTransform(currentProgress);
        rafId = null;
      }
    };

    const startScrollAnimation = () => {
      if (rafId === null && !prefersReducedMotion) {
        rafId = requestAnimationFrame(tick);
      }
    };

    const updateBounds = () => {
      maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      targetProgress = Math.max(0, Math.min(1, window.scrollY / maxScroll));
      applyTransform(targetProgress);
    };

    const handleScroll = () => {
      targetProgress = Math.max(0, Math.min(1, window.scrollY / maxScroll));
      startScrollAnimation();
    };

    const handleLoaded = () => {
      setIsVideoLoaded(true);
      tryPlay();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        tryPlay();
      }
    };

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
      if (prefersReducedMotion) {
        video.pause();
        if (rafId !== null) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
        applyTransform(0);
      } else {
        tryPlay();
      }
    };

    applyTransform(targetProgress);
    if (video.readyState >= 1) {
      handleLoaded();
    } else {
      tryPlay();
    }

    video.addEventListener("loadedmetadata", handleLoaded);
    video.addEventListener("canplay", handleLoaded);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateBounds, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);
    reducedMotionQuery.addEventListener("change", handleReducedMotionChange);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(updateBounds);
      resizeObserver.observe(document.documentElement);
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoaded);
      video.removeEventListener("canplay", handleLoaded);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateBounds);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      reducedMotionQuery.removeEventListener("change", handleReducedMotionChange);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden bg-[#050B07]"
      style={{
        transform: "translate3d(0,0,0)",
        backfaceVisibility: "hidden",
        contain: "strict",
      }}
    >
      {/* Oversized GPU-composited motion wrapper for smooth scroll parallax without exposing edges */}
      <div
        ref={motionLayerRef}
        className="absolute inset-x-0 -top-[5%] h-[110%] will-change-transform"
        style={{
          transform: "translate3d(0, 2.5%, 0) scale(1.02)",
          backfaceVisibility: "hidden",
        }}
      >
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          poster={POSTER_SRC}
          width={1440}
          height={2560}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          className={`w-full h-full object-cover object-[50%_40%] transition-opacity duration-700 ${
            isVideoLoaded ? "opacity-100" : "opacity-85"
          }`}
          style={{
            transform: "translate3d(0,0,0)",
            backfaceVisibility: "hidden",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Cinematic Vignettes & Biophilic Depth Gradients for WCAG AAA text contrast */}
      {/* 1. Top gradient for navbar legibility */}
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#050B07]/90 via-[#050B07]/60 to-transparent pointer-events-none" />

      {/* 2. Global cinematic ambient tint */}
      <div className="absolute inset-0 bg-[#050B07]/38 pointer-events-none" />

      {/* 3. Radial vignette keeping the center vivid and corners focused */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_28%,#050B07_92%)] pointer-events-none" />

      {/* 4. Bottom shadow for footer seamless blending */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#050B07] via-[#050B07]/75 to-transparent pointer-events-none" />

      {/* 5. Static biophilic mist tint */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(16,185,129,0.04),transparent_60%),radial-gradient(circle_at_80%_50%,rgba(6,182,212,0.04),transparent_60%)] pointer-events-none" />
    </div>
  );
}
