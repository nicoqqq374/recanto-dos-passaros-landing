"use client";

import React, { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { useBooking } from "@/context/booking-context";

export function FloatingBookingBar() {
  const { openBooking, rooms } = useBooking();
  const prices = rooms.map((room) => room.price).filter((price) => price > 0);
  const minimumPrice = prices.length ? Math.min(...prices) : 300;
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const target = document.getElementById("reservas");
    const footer = document.querySelector("footer");

    const observer = new IntersectionObserver(
      (entries) => {
        // When booking engine or footer enters the screen, hide the floating bar so it never covers forms or copyright/contact
        const isCovering = entries.some((entry) => entry.isIntersecting);
        setIsVisible(!isCovering);
      },
      { threshold: 0.01, rootMargin: "0px 0px 60px 0px" }
    );

    if (target) observer.observe(target);
    if (footer) observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  const handleBookingAction = () => {
    const el = document.getElementById("reservas");
    if (el) {
      const yOffset = -75;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      openBooking();
    }
  };

  return (
    <div
      role="region"
      aria-label="Barra de reserva rápida"
      className={`fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] sm:bottom-6 left-0 right-0 z-40 flex justify-center px-3 sm:px-4 pointer-events-none transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 pointer-events-none translate-y-8"
      }`}
    >
      <div className="pointer-events-auto w-full max-w-[430px] sm:w-auto sm:max-w-fit pl-4 pr-2.5 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#122218]/95 backdrop-blur-2xl border border-[#C29D59]/45 hover:border-[#C29D59]/70 shadow-[0_16px_42px_rgba(20,34,26,0.38)] flex items-center justify-between gap-3 sm:gap-5 text-white transition-all duration-300">
        
        {/* Left Side: Live Badge + Price Info (Clickable >= 44px height) */}
        <button
          type="button"
          onClick={handleBookingAction}
          className="min-h-[44px] flex flex-col justify-center text-left shrink-0 leading-tight cursor-pointer group/price select-none bg-transparent border-0 p-0 active:scale-[0.98] transition-transform"
          title="Clique para ver datas disponíveis"
        >
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C29D59] animate-pulse" />
            <span className="text-[10px] text-zinc-200 group-hover/price:text-[#E6C994] font-semibold uppercase tracking-wider transition-colors">
              Tarifa Oficial
            </span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-[11px] text-zinc-300 font-light">a partir de</span>
            <span className="text-[#E6C994] font-extrabold text-[15px] sm:text-base tracking-tight font-serif">
              R$ {minimumPrice.toLocaleString("pt-BR")}
            </span>
            <span className="text-[10px] text-zinc-300 font-normal">/noite</span>
          </div>
        </button>

        {/* Vertical divider */}
        <div className="h-7 w-px bg-white/15 shrink-0" aria-hidden="true" />

        {/* Action Buttons (>= 44x44px Touch Targets) */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* WhatsApp Direct Concierge */}
          <a
            href="https://wa.me/5522981054265?text=Ol%C3%A1%2C+gostaria+de+consultar+disponibilidade+na+Pousada+Recanto+dos+P%C3%A1ssaros"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-full bg-[#1B3B2B] hover:bg-[#234B37] active:scale-95 text-[#E6C994] hover:text-white border border-[#C29D59]/40 hover:border-[#C29D59]/80 shadow-[0_4px_16px_rgba(20,34,26,0.35)] flex items-center justify-center transition-all group cursor-pointer"
            aria-label="Falar no WhatsApp"
            title="Tirar dúvidas no WhatsApp"
          >
            <WhatsAppIcon className="w-5 h-5 text-[#E6C994] group-hover:text-white group-hover:scale-110 transition-all" />
          </a>

          {/* Reservar Agora Primary Button */}
          <button
            type="button"
            onClick={handleBookingAction}
            className="min-h-[44px] flex items-center justify-center gap-1.5 px-4.5 sm:px-5.5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-[#14221A] bg-[#C29D59] hover:bg-[#D4AF67] active:bg-[#B8924E] active:scale-95 shadow-[0_0_20px_rgba(194,157,89,0.35)] hover:shadow-[0_0_30px_rgba(194,157,89,0.55)] transition-all cursor-pointer whitespace-nowrap"
          >
            <Calendar className="w-4 h-4 shrink-0 text-[#14221A]" />
            <span>Reservar</span>
          </button>
        </div>

      </div>
    </div>
  );
}
