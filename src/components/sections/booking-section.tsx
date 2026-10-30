"use client";

import React, { useState, useMemo } from "react";
import {
  ExternalLink,
  RotateCcw,
  Maximize2,
  Lock,
  Smartphone,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { BOOKING_EMBED_URL, TENANT_SLUG } from "@/lib/saas-rooms";
import { useBooking } from "@/context/booking-context";
import { BookingSkeleton } from "@/components/ui/booking-skeleton";

export function BookingSection() {
  const {
    openBooking,
    checkInDate,
    checkOutDate,
    guestsCount,
    selectedRoomId,
    selectedRoomName,
  } = useBooking();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [reloadKey, setReloadKey] = useState<number>(0);

  const handleReload = () => {
    setIsLoading(true);
    setReloadKey((k) => k + 1);
  };

  const embedUrl = useMemo(() => {
    const params = new URLSearchParams();
    params.set("theme", "dark");

    if (checkInDate && checkOutDate) {
      params.set("checkin", checkInDate);
      params.set("checkout", checkOutDate);
      params.set("check_in", checkInDate);
      params.set("check_out", checkOutDate);
      params.set("entrada", checkInDate);
      params.set("saida", checkOutDate);
      params.set("from", checkInDate);
      params.set("to", checkOutDate);
      params.set("startDate", checkInDate);
      params.set("endDate", checkOutDate);
      params.set("start", checkInDate);
      params.set("end", checkOutDate);
    }

    if (guestsCount) {
      const gClean = guestsCount.replace(/\D/g, "") || "2";
      params.set("hospedes", gClean);
      params.set("guests", gClean);
      params.set("adults", gClean);
    }

    if (selectedRoomId && selectedRoomId !== "all") {
      params.set("unitId", selectedRoomId);
      params.set("quarto", selectedRoomId);
      params.set("roomId", selectedRoomId);
      params.set("room", selectedRoomId);
      params.set("accommodationUnitId", selectedRoomId);
      if (selectedRoomName) {
        params.set("roomName", selectedRoomName);
        params.set("quartoNome", selectedRoomName);
      }
      // Enter directly to Step 3 with the room and dates locked in (zero re-entries)
      params.set("step", "3");
      params.set("etapa", "3");
    } else {
      params.set("step", "2");
      params.set("etapa", "2");
    }

    return `${BOOKING_EMBED_URL}?${params.toString()}`;
  }, [checkInDate, checkOutDate, guestsCount, selectedRoomId, selectedRoomName]);

  const WHATSAPP_URL =
    "https://wa.me/5522981054265?text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20para%20minha%20reserva%20na%20Pousada%20Recanto%20dos%20P%C3%A1ssaros.";

  return (
    <section
      id="secao-reservas"
      className="relative pt-4 sm:pt-8 lg:pt-10 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden"
    >
      {/* Warm ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[960px] h-[960px] bg-[radial-gradient(circle,rgba(194,157,89,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-[#C29D59]/40 text-[#E6C994] text-xs font-semibold tracking-wider uppercase mb-3 shadow-xs backdrop-blur-md">
            <span>Seu Retiro Particular no Sana</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Planeje seus dias de{" "}
            <span className="italic font-normal text-[#E6C994]">
              paz e romance na serra.
            </span>
          </h2>

          <p className="mt-2 text-zinc-300 text-[15px] sm:text-base font-light leading-relaxed max-w-[56ch] mx-auto">
            Consulte a disponibilidade ao vivo, escolha seu chalé e garanta sua reserva direta com confirmação imediata, café da roça incluso e todos os mimos da pousada.
          </p>
        </div>

        {/* Luxury App-Style Container Frame — Direct Booking Engine Target */}
        <div
          id="reservas"
          className="scroll-mt-20 sm:scroll-mt-24 rounded-[2rem] sm:rounded-[2.2rem] p-2 sm:p-3 bg-[#050B07]/90 border border-[#C29D59]/35 shadow-[0_25px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl overflow-hidden transition-all duration-300"
        >
          {/* App Chrome Top Bar */}
          <div className="rounded-t-2xl px-3.5 sm:px-4 py-2.5 sm:py-3 bg-[#0A140F] border-b border-white/10 flex items-center justify-between gap-2">
            {/* Left: Window Dots & Status */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#C29D59]/80 inline-block" />
              </div>

              {/* Secure App Address Chip */}
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[11px] text-zinc-300 font-mono">
                <Lock className="w-3 h-3 text-[#C29D59]" />
                <span>simplereservas.app/{TENANT_SLUG}</span>
              </div>
            </div>

            {/* Center: Live Status Indicator or Synchronized Filter */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1B3B2B] border border-[#C29D59]/35 text-[#E6C994] text-xs font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C29D59] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C29D59]" />
              </span>
              <span className="truncate max-w-[180px] sm:max-w-none">
                {selectedRoomName ? `Sincronizado: ${selectedRoomName}` : "Calendário & Reservas ao Vivo"}
              </span>
            </div>

            {/* Right: Actions (Reload & Expand Fullscreen) */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={handleReload}
                disabled={isLoading}
                className="min-h-[40px] min-w-[40px] px-2.5 sm:px-3.5 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] active:scale-95 text-zinc-300 hover:text-white border border-white/10 transition-all text-xs font-medium flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                title="Recarregar calendário"
                aria-label="Recarregar calendário"
              >
                <RotateCcw
                  className={`w-4 h-4 ${isLoading ? "animate-spin text-[#C29D59]" : ""}`}
                />
                <span className="hidden md:inline">Atualizar</span>
              </button>

              <button
                type="button"
                onClick={() => openBooking()}
                className="min-h-[40px] px-3 sm:px-3.5 py-2 rounded-xl bg-[#C29D59]/20 hover:bg-[#C29D59]/30 active:scale-95 text-[#E6C994] hover:text-white border border-[#C29D59]/40 transition-all text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                title="Abrir em tela cheia"
              >
                <Maximize2 className="w-4 h-4 text-[#C29D59]" />
                <span className="hidden sm:inline">Tela Cheia</span>
              </button>
            </div>
          </div>

          {/* Iframe Viewport Canvas with Skeleton */}
          <div className="relative w-full h-[760px] sm:h-[820px] lg:h-[860px] bg-[#050B07] rounded-b-2xl overflow-hidden">
            {isLoading && (
              <BookingSkeleton message="Conectando ao Motor de Reservas Oficial..." />
            )}

            <iframe
              key={`booking-embed-${reloadKey}-${embedUrl}`}
              src={embedUrl}
              className={`w-full h-full border-none transition-opacity duration-500 ${
                isLoading ? "opacity-0" : "opacity-100"
              }`}
              style={{
                border: "none",
                width: "100%",
                height: "100%",
              }}
              title="Reserva Direta Recanto dos Pássaros"
              onLoad={() => setIsLoading(false)}
            />
          </div>

          {/* Mobile Helper Tap Strip */}
          <div className="sm:hidden flex items-center justify-between px-3.5 py-2 bg-[#0A140F] border-t border-white/5 text-xs text-zinc-400">
            <div className="flex items-center gap-1.5 text-zinc-300">
              <Smartphone className="w-4 h-4 text-[#C29D59]" />
              <span>Motor Seguro Celular</span>
            </div>
            <button
              type="button"
              onClick={() => openBooking()}
              className="min-h-[40px] px-2 text-[#E6C994] font-semibold hover:underline flex items-center gap-1.5 text-xs cursor-pointer"
            >
              <span>Expandir tela</span>
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Quick Links & WhatsApp Support — 48px height touch targets */}
        <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
          <button
            type="button"
            onClick={() => openBooking()}
            className="min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#0A140F]/85 hover:bg-[#14221A] text-white border border-white/20 transition-all font-semibold cursor-pointer shadow-sm active:scale-95 backdrop-blur-md"
          >
            <span>Abrir motor em tela cheia</span>
            <ExternalLink className="w-4 h-4 text-[#C29D59]" />
          </button>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1B3B2B] hover:bg-[#234B37] text-white border border-[#C29D59]/45 hover:border-[#C29D59]/80 transition-all font-semibold group active:scale-95 shadow-[0_10px_25px_rgba(20,34,26,0.3)]"
            title="Falar com a recepção no WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#E6C994] group-hover:scale-110 transition-transform" />
            <span>Atendimento Concierge no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
