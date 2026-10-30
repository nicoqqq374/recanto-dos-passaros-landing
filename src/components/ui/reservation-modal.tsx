"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, ShieldCheck, Clock } from "lucide-react";
import { BOOKING_EMBED_URL } from "@/lib/saas-rooms";
import { useBooking } from "@/context/booking-context";
import { BookingSkeleton } from "@/components/ui/booking-skeleton";

export function ReservationModal() {
  const {
    isOpen,
    selectedRoomId,
    selectedRoomName,
    checkInDate,
    checkOutDate,
    guestsCount,
    closeBooking,
  } = useBooking();

  const [iframeKey, setIframeKey] = useState(0);
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsIframeLoading(true);
      setIframeKey((prev) => prev + 1);
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeBooking();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeBooking]);

  // Calculate number of nights and formatted date range
  const { nights, formattedRange } = useMemo(() => {
    if (!checkInDate || !checkOutDate) {
      return { nights: 0, formattedRange: null };
    }
    try {
      const d1 = new Date(checkInDate + "T00:00:00");
      const d2 = new Date(checkOutDate + "T00:00:00");
      const diffTime = Math.abs(d2.getTime() - d1.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      const formatBr = (d: Date) => {
        const day = String(d.getDate()).padStart(2, "0");
        const month = String(d.getMonth() + 1).padStart(2, "0");
        return `${day}/${month}`;
      };

      return {
        nights: diffDays > 0 ? diffDays : 1,
        formattedRange: `${formatBr(d1)} a ${formatBr(d2)}`,
      };
    } catch {
      return { nights: 0, formattedRange: null };
    }
  }, [checkInDate, checkOutDate]);

  if (!isOpen) return null;

  // Construct comprehensive URL query params so SaaS automatically jumps to Step 2 (Available Rooms)
  const baseUrl = BOOKING_EMBED_URL;
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
    params.set("step", "2");
    params.set("etapa", "2");
  }

  if (guestsCount) {
    params.set("hospedes", guestsCount);
    params.set("guests", guestsCount);
    params.set("adults", guestsCount);
  }

  if (selectedRoomId) {
    params.set("unitId", selectedRoomId);
    params.set("quarto", selectedRoomId);
    params.set("roomId", selectedRoomId);
    params.set("room_id", selectedRoomId);
    params.set("accommodationUnitId", selectedRoomId);
    params.set("step", "3");
    params.set("etapa", "3");
    if (selectedRoomName) {
      params.set("room", selectedRoomName);
      params.set("roomName", selectedRoomName);
    }
  } else {
    params.set("step", "2");
    params.set("etapa", "2");
  }

  const embedUrl = `${baseUrl}?${params.toString()}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 overflow-hidden overscroll-contain">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeBooking}
          className="fixed inset-0 bg-[#14221A]/70 backdrop-blur-md transition-opacity overscroll-contain"
          aria-hidden="true"
        />

        {/* Modal Container in Deep Forest Pine & Champagne Gold */}
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="reservation-modal-title"
          initial={{ y: "100%", opacity: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", damping: 28, stiffness: 280 }}
          className="relative z-10 w-full sm:max-w-4xl h-[92dvh] sm:h-[860px] sm:max-h-[92dvh] bg-[#14221A] border-t sm:border border-[#C29D59]/35 rounded-t-[2rem] sm:rounded-3xl shadow-[0_25px_70px_rgba(20,34,26,0.6),0_0_40px_rgba(194,157,89,0.15)] flex flex-col overflow-hidden overscroll-contain backdrop-blur-2xl"
        >
          {/* Mobile Drag Indicator Bar */}
          <div className="w-full flex sm:hidden justify-center pt-3 pb-1" aria-hidden="true">
            <div className="w-12 h-1.5 rounded-full bg-white/20" />
          </div>

          {/* Modal Header */}
          <div className="px-4 sm:px-8 py-3 sm:py-4 border-b border-white/10 flex items-center justify-between bg-[#0D1812] sticky top-0 z-20">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-[#1B3B2B] border border-[#C29D59]/30 flex items-center justify-center text-[#C29D59] shrink-0">
                <Calendar className="w-4.5 h-4.5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span id="reservation-modal-title" className="text-xs sm:text-sm font-bold text-white tracking-tight truncate">
                    {selectedRoomName ? `Reserva: ${selectedRoomName}` : "Reserva Direta ao Vivo"}
                  </span>
                  
                  {/* Selected Dates Summary Badge */}
                  {formattedRange && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C29D59]/15 border border-[#C29D59]/30 text-[#E6C994] text-[10px] sm:text-xs font-semibold">
                      <Clock className="w-3 h-3 text-[#C29D59]" />
                      <span>{formattedRange} ({nights} {nights > 1 ? "noites" : "noite"})</span>
                      {guestsCount && (
                        <>
                          <span>•</span>
                          <span>{guestsCount} {parseInt(guestsCount) > 1 ? "pessoas" : "pessoa"}</span>
                        </>
                      )}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-zinc-300 font-light truncate">
                  Pousada Recanto dos Pássaros • Tarifas com confirmação instantânea
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 ml-2">
              <button
                type="button"
                onClick={closeBooking}
                className="min-w-[44px] min-h-[44px] p-2.5 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-zinc-200 hover:text-white border border-white/15 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Fechar reserva"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body with Clean Full-Width Iframe & Luxury Skeleton */}
          <div className="flex-1 relative w-full h-full bg-[#0D1812] overflow-hidden">
            {isIframeLoading && (
              <BookingSkeleton
                message={
                  selectedRoomName
                    ? `Abrindo reserva para ${selectedRoomName}...`
                    : "Conectando ao Motor de Reservas Oficial..."
                }
              />
            )}
            <iframe
              key={iframeKey}
              src={embedUrl}
              className={`w-full h-full border-none transition-opacity duration-500 ${
                isIframeLoading ? "opacity-0" : "opacity-100"
              }`}
              style={{
                border: "none",
                width: "100%",
                height: "100%",
              }}
              title="Reserva Direta Recanto dos Pássaros"
              onLoad={() => setIsIframeLoading(false)}
            />
          </div>

          {/* Modal Footer Banner */}
          <div className="px-5 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] bg-[#0A120E] border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C29D59]" />
              <span className="hidden sm:inline">Ambiente seguro com criptografia direta</span>
              <span className="sm:hidden">Reserva 100% segura</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#94A3B8]">
              <span>Desenvolvido por</span>
              <a
                href="https://devisaostudio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-orange-500/40 transition-all font-bold cursor-pointer"
                title="DEVISÃO STUDIO — devisaostudio.com"
              >
                <span className="text-[11px] font-extrabold tracking-tight">
                  <span className="text-white">DE</span><span className="text-[#F97316] font-black drop-shadow-[0_0_6px_rgba(249,115,22,0.6)]">V</span><span className="text-white">ISÃO</span>
                </span>
                <span className="text-[#94A3B8] text-[9px] uppercase tracking-widest font-semibold group-hover:text-white transition-colors">
                  STUDIO
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
