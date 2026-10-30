"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Calendar, ChevronRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { useBooking } from "@/context/booking-context";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const { openBooking } = useBooking();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    {
      href: "#chales",
      shortLabel: "Chalés",
      fullLabel: "Chalés & Suítes",
      visibility: "flex",
    },
    {
      href: "#rio",
      shortLabel: "Rio & Piscinas",
      fullLabel: "O Rio & Piscinas",
      visibility: "flex",
    },
    {
      href: "#lazer",
      shortLabel: "Lazer",
      fullLabel: "Lazer & Day Use",
      visibility: "flex",
    },
    {
      href: "#cafe",
      shortLabel: "Café Colonial",
      fullLabel: "Café Colonial",
      visibility: "hidden 2xl:flex",
    },
    {
      href: "#pet-friendly",
      shortLabel: "Pet Friendly",
      fullLabel: "Pet Friendly",
      visibility: "hidden xl:flex",
    },
    {
      href: "#avaliacoes",
      shortLabel: "Avaliações",
      fullLabel: "Avaliações 9.1",
      visibility: "flex",
    },
  ];

  const WHATSAPP_URL =
    "https://wa.me/5522981054265?text=Ol%C3%A1%2C+gostaria+de+informa%C3%A7%C3%B5es+sobre+reservas+na+Pousada+Recanto+dos+P%C3%A1ssaros";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#050B07]/85 backdrop-blur-2xl border-b border-[#C29D59]/25 ${
        isScrolled
          ? "py-2 shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
          : "py-2.5 sm:py-3 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
      }`}
    >
      <div className="max-w-[1440px] w-full mx-auto px-3 sm:px-5 lg:px-6 xl:px-8 flex items-center justify-between gap-2 sm:gap-3 xl:gap-4">
        
        {/* Brand Logo & Wordmark */}
        <Link
          href="#"
          className="flex items-center gap-2 sm:gap-2.5 group shrink-0 select-none rounded-xl py-0.5"
        >
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 shrink-0 aspect-square overflow-hidden rounded-full shadow-xs group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/logo.png"
              alt="Logo Pousada Recanto dos Pássaros Sana Chalés"
              fill
              className="object-contain"
              sizes="44px"
              priority
            />
          </div>

          <div className="flex flex-col text-left">
            <span className="font-serif text-[14px] sm:text-base xl:text-lg 2xl:text-xl font-bold tracking-tight text-white group-hover:text-[#E6C994] transition-colors whitespace-nowrap leading-tight">
              Recanto dos Pássaros
            </span>
            <span className="text-[8.5px] sm:text-[9.5px] tracking-widest uppercase font-bold text-[#E6C994] whitespace-nowrap flex items-center gap-1.5 mt-0.5">
              <span>Sana Chalés</span>
              <span className="opacity-40">•</span>
              <span>Sana · Macaé RJ</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links (Responsive layout that never pushes buttons off) */}
        <nav
          aria-label="Principal"
          className="hidden lg:flex items-center gap-0.5 xl:gap-1 2xl:gap-2 text-[11.5px] xl:text-xs 2xl:text-sm font-medium text-zinc-200 shrink-0"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-all duration-200 relative min-h-[36px] xl:min-h-[38px] px-2 xl:px-2.5 2xl:px-3 py-1 rounded-full items-center text-zinc-300 hover:text-white hover:bg-white/10 active:scale-95 whitespace-nowrap ${link.visibility}`}
            >
              <span className="2xl:hidden">{link.shortLabel}</span>
              <span className="hidden 2xl:inline">{link.fullLabel}</span>
            </Link>
          ))}
        </nav>

        {/* Desktop Header Actions (Guaranteed 100% visible on all desktop viewports) */}
        <div className="hidden sm:flex items-center gap-1.5 xl:gap-2.5 shrink-0">
          {/* WhatsApp Direct — Luxury Editorial Palette */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 xl:gap-2 min-h-[36px] xl:min-h-[40px] px-2.5 xl:px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all hover:scale-[1.02] active:scale-95 bg-white/10 hover:bg-[#1B3B2B] text-white border border-[#C29D59]/35 hover:border-[#C29D59]/70 shadow-xs cursor-pointer group whitespace-nowrap"
            aria-label="Falar no WhatsApp"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#E6C994] group-hover:scale-110 transition-transform shrink-0" />
            <span>WhatsApp</span>
          </a>

          {/* Primary Booking Button */}
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById("reservas");
              if (el) {
                const yOffset = -75;
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              } else {
                openBooking();
              }
            }}
            className="flex items-center gap-1.5 xl:gap-2 min-h-[36px] xl:min-h-[40px] px-3.5 xl:px-4 py-1.5 rounded-full bg-[#C29D59] hover:bg-[#D4AF67] text-[#050B07] font-bold text-xs xl:text-sm shadow-[0_0_20px_rgba(194,157,89,0.35)] hover:shadow-[0_0_30px_rgba(194,157,89,0.55)] transition-all hover:scale-[1.02] cursor-pointer active:scale-95 whitespace-nowrap shrink-0"
          >
            <Calendar className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#050B07] shrink-0" />
            <span className="hidden 2xl:inline">Reservar Chalé</span>
            <span className="2xl:hidden">Reservar</span>
          </button>
        </div>

        {/* Mobile Controls (Ergonomic >= 44x44px Touch Targets) */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById("reservas");
              if (el) {
                const yOffset = -70;
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              } else {
                openBooking();
              }
            }}
            className="sm:hidden flex items-center justify-center gap-1.5 min-h-[44px] px-4 py-2 rounded-full bg-[#C29D59] hover:bg-[#D4AF67] text-[#050B07] font-bold text-xs shadow-md active:scale-95 transition-transform cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#050B07] shrink-0" />
            <span>Reservar</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            className="min-w-[44px] min-h-[44px] p-2.5 rounded-xl border border-white/20 bg-white/10 active:bg-white/20 text-white flex items-center justify-center transition-all active:scale-95 cursor-pointer"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu with Compositor-Smooth Animation & Light Dismiss */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop light dismiss */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-[60px] h-[calc(100dvh-60px)] bg-[#14221A]/35 backdrop-blur-xs z-40 lg:hidden overscroll-contain"
              aria-hidden="true"
            />

            <motion.div
              id="mobile-nav-drawer"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-50 lg:hidden bg-[#0A140F]/95 backdrop-blur-2xl border-b border-[#C29D59]/30 px-4 sm:px-6 py-5 shadow-[0_25px_50px_rgba(0,0,0,0.5)] max-h-[calc(100dvh-68px)] overflow-y-auto overscroll-contain"
            >
              <nav aria-label="Menu Mobile" className="flex flex-col space-y-1 text-left">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between min-h-[48px] px-3.5 py-3 rounded-xl text-[15px] font-semibold text-zinc-100 hover:bg-white/10 active:bg-white/15 active:scale-[0.99] transition-all border-b border-white/5 last:border-b-0"
                  >
                    <span>{link.fullLabel}</span>
                    <ChevronRight className="w-4 h-4 text-[#C29D59]" />
                  </Link>
                ))}

                <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2.5">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 min-h-[48px] py-3 px-4 rounded-xl bg-white/10 hover:bg-[#1B3B2B] text-white border border-[#C29D59]/40 font-semibold text-sm shadow-xs active:scale-[0.98] transition-all group"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-[#E6C994]" />
                    <span>Falar no WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      const el = document.getElementById("reservas");
                      if (el) {
                        const yOffset = -70;
                        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      } else {
                        openBooking();
                      }
                    }}
                    className="flex items-center justify-center gap-2 min-h-[48px] py-3 px-4 rounded-xl bg-[#C29D59] hover:bg-[#D4AF67] text-[#050B07] font-bold text-sm shadow-md active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-[#050B07]" />
                    <span>Consultar Disponibilidade</span>
                  </button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
