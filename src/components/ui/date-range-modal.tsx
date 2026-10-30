"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Calendar, ArrowRight } from "lucide-react";

interface DateRangeModalProps {
  isOpen: boolean;
  onClose: () => void;
  checkIn: string; // YYYY-MM-DD
  checkOut: string; // YYYY-MM-DD
  onSelectDates: (checkIn: string, checkOut: string) => void;
  initialTarget?: "checkIn" | "checkOut";
}

const MONTHS_PT = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const MONTHS_SHORT = [
  "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
  "Jul", "Ago", "Set", "Out", "Nov", "Dez"
];

const WEEKDAYS_SHORT = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

function toIsoDate(d: Date): string {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseIsoDate(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d, 12, 0, 0);
}

export function formatReadableDate(iso: string): string {
  if (!iso) return "";
  const parts = iso.split("-");
  if (parts.length < 3) return iso;
  const day = parts[2];
  const mIndex = parseInt(parts[1], 10) - 1;
  return `${day} ${MONTHS_SHORT[mIndex] || ""}`;
}

export function formatWithWeekday(iso: string): string {
  if (!iso) return "--";
  try {
    const d = parseIsoDate(iso);
    const day = partsDay(iso);
    const month = MONTHS_SHORT[d.getMonth()] || "";
    const weekday = WEEKDAYS_SHORT[d.getDay()] || "";
    return `${weekday}, ${day} ${month}`;
  } catch {
    return iso;
  }
}

function partsDay(iso: string): string {
  const parts = iso.split("-");
  return parts[2] || "";
}

export function calculateNights(startIso: string, endIso: string): number {
  if (!startIso || !endIso) return 1;
  const start = parseIsoDate(startIso);
  const end = parseIsoDate(endIso);
  const diffTime = end.getTime() - start.getTime();
  const days = Math.round(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(1, days);
}

export function DateRangeModal({
  isOpen,
  onClose,
  checkIn,
  checkOut,
  onSelectDates,
  initialTarget = "checkIn",
}: DateRangeModalProps) {
  const [mounted, setMounted] = useState(false);
  const [tempCheckIn, setTempCheckIn] = useState<string>(checkIn);
  const [tempCheckOut, setTempCheckOut] = useState<string>(checkOut);
  const [targetStep, setTargetStep] = useState<"checkIn" | "checkOut">(initialTarget);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Month being viewed
  const [viewDate, setViewDate] = useState<Date>(() => {
    return checkIn ? parseIsoDate(checkIn) : new Date();
  });

  useEffect(() => {
    if (isOpen) {
      setTempCheckIn(checkIn);
      setTempCheckOut(checkOut);
      setTargetStep(initialTarget);
      if (checkIn) {
        setViewDate(parseIsoDate(checkIn));
      }
    }
  }, [isOpen, checkIn, checkOut, initialTarget]);

  const todayIso = toIsoDate(new Date());

  const handlePrevMonth = () => {
    setViewDate((prev) => {
      const next = new Date(prev);
      next.setMonth(next.getMonth() - 1);
      return next;
    });
  };

  const handleNextMonth = () => {
    setViewDate((prev) => {
      const next = new Date(prev);
      next.setMonth(next.getMonth() + 1);
      return next;
    });
  };

  // Day Click Logic
  const handleDayClick = (iso: string) => {
    if (iso < todayIso) return; // Cannot select past dates

    if (targetStep === "checkIn") {
      setTempCheckIn(iso);
      if (!tempCheckOut || tempCheckOut <= iso) {
        const nextDay = parseIsoDate(iso);
        nextDay.setDate(nextDay.getDate() + 2); // 2 nights default for weekend getaway
        setTempCheckOut(toIsoDate(nextDay));
      }
      setTargetStep("checkOut");
    } else {
      if (iso <= tempCheckIn) {
        setTempCheckIn(iso);
        const nextDay = parseIsoDate(iso);
        nextDay.setDate(nextDay.getDate() + 2);
        setTempCheckOut(toIsoDate(nextDay));
        setTargetStep("checkOut");
      } else {
        setTempCheckOut(iso);
      }
    }
  };

  // Quick Presets
  const handlePresetWeekend = (offsetWeeks = 0) => {
    const now = new Date();
    const dayOfWeek = now.getDay();
    let daysUntilFriday = (5 - dayOfWeek + 7) % 7;
    if (daysUntilFriday === 0 && offsetWeeks === 0) {
      daysUntilFriday = 0; // Today is Friday
    }
    daysUntilFriday += offsetWeeks * 7;

    const friday = new Date(now);
    friday.setDate(now.getDate() + daysUntilFriday);

    const sunday = new Date(friday);
    sunday.setDate(friday.getDate() + 2);

    const fIso = toIsoDate(friday);
    const sIso = toIsoDate(sunday);

    setTempCheckIn(fIso);
    setTempCheckOut(sIso);
    setViewDate(friday);
  };

  const handlePresetWeek = () => {
    const start = tempCheckIn && tempCheckIn >= todayIso ? parseIsoDate(tempCheckIn) : new Date();
    const end = new Date(start);
    end.setDate(start.getDate() + 7);

    setTempCheckIn(toIsoDate(start));
    setTempCheckOut(toIsoDate(end));
    setViewDate(start);
  };

  const handleConfirm = () => {
    onSelectDates(tempCheckIn, tempCheckOut);
    onClose();
  };

  // Build Month Calendar Matrix
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const startingDayOfWeek = firstDayOfMonth.getDay(); // 0 is Sunday
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonthLastDate = new Date(year, month, 0).getDate();
  const daysArray: { day: number; iso: string; isCurrentMonth: boolean }[] = [];

  // Previous month trailing days
  for (let i = startingDayOfWeek - 1; i >= 0; i--) {
    const d = prevMonthLastDate - i;
    const prevDate = new Date(year, month - 1, d);
    daysArray.push({
      day: d,
      iso: toIsoDate(prevDate),
      isCurrentMonth: false,
    });
  }

  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    const currDate = new Date(year, month, d);
    daysArray.push({
      day: d,
      iso: toIsoDate(currDate),
      isCurrentMonth: true,
    });
  }

  // Next month leading days (fill 35 or 42 slots)
  const totalSlots = daysArray.length > 35 ? 42 : 35;
  const remaining = totalSlots - daysArray.length;
  for (let d = 1; d <= remaining; d++) {
    const nextDate = new Date(year, month + 1, d);
    daysArray.push({
      day: d,
      iso: toIsoDate(nextDate),
      isCurrentMonth: false,
    });
  }

  const nightsCount = calculateNights(tempCheckIn, tempCheckOut);

  // Disable navigating to past months
  const now = new Date();
  const isCurrentMonthOrPast = year < now.getFullYear() || (year === now.getFullYear() && month <= now.getMonth());

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-hidden overscroll-contain">
          {/* Warm deep overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity overscroll-contain"
            aria-hidden="true"
          />

          {/* Modal Container in Dark Luxury Palette (matching SaaS Booking theme=dark) */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="date-modal-title"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="relative w-full max-w-md mx-auto bg-gradient-to-b from-[#0B140F] via-[#070D09] to-[#040805] border-t sm:border border-[#C29D59]/40 rounded-t-[2.2rem] sm:rounded-3xl p-5 sm:p-7 shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_40px_rgba(194,157,89,0.15)] z-10 max-h-[90dvh] flex flex-col overflow-y-auto overscroll-contain pb-[max(1.25rem,env(safe-area-inset-bottom))]"
          >
            {/* Mobile Drag Indicator */}
            <div className="w-full flex sm:hidden justify-center pb-2.5 -mt-1" aria-hidden="true">
              <div className="w-12 h-1 rounded-full bg-white/20" />
            </div>

            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1B3B2B]/60 border border-[#C29D59]/35 flex items-center justify-center text-[#E6C994] shrink-0 shadow-xs">
                  <Calendar className="w-4 h-4 text-[#C29D59]" />
                </div>
                <div>
                  <h3 id="date-modal-title" className="font-serif text-lg sm:text-xl font-bold text-white leading-tight">
                    Selecionar Datas
                  </h3>
                  <p className="text-xs text-[#E6C994]/80">
                    Pousada Recanto dos Pássaros • Sana RJ
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="min-w-[44px] min-h-[44px] p-2.5 rounded-full bg-white/5 hover:bg-white/15 active:bg-white/20 text-zinc-300 hover:text-white flex items-center justify-center transition-all active:scale-95 cursor-pointer border border-white/10"
                aria-label="Fechar calendário"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Range Indicator Cards (Dark Luxury Tabs) */}
            <div className="grid grid-cols-2 gap-2.5 mt-4">
              <button
                type="button"
                onClick={() => setTargetStep("checkIn")}
                className={`min-h-[58px] p-3 sm:p-3.5 rounded-2xl border text-left transition-all cursor-pointer active:scale-[0.98] ${
                  targetStep === "checkIn"
                    ? "bg-[#1B3B2B]/80 border-[#C29D59] shadow-md ring-2 ring-[#C29D59]/30"
                    : "bg-white/[0.04] border-white/10 text-zinc-300 hover:bg-white/[0.08] hover:border-white/20"
                }`}
              >
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#E6C994] block mb-0.5">
                  Check-in (Entrada)
                </span>
                <span className="font-serif text-sm sm:text-base font-bold text-white block truncate">
                  {formatWithWeekday(tempCheckIn)}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setTargetStep("checkOut")}
                className={`min-h-[58px] p-3 sm:p-3.5 rounded-2xl border text-left transition-all cursor-pointer active:scale-[0.98] ${
                  targetStep === "checkOut"
                    ? "bg-[#1B3B2B]/80 border-[#C29D59] shadow-md ring-2 ring-[#C29D59]/30"
                    : "bg-white/[0.04] border-white/10 text-zinc-300 hover:bg-white/[0.08] hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#E6C994] block">
                    Check-out (Saída)
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#C29D59]/20 text-[#E6C994] font-bold border border-[#C29D59]/30">
                    {nightsCount} {nightsCount === 1 ? "noite" : "noites"}
                  </span>
                </div>
                <span className="font-serif text-sm sm:text-base font-bold text-white block truncate">
                  {formatWithWeekday(tempCheckOut)}
                </span>
              </button>
            </div>

            {/* Quick Presets */}
            <div className="flex items-center gap-2 overflow-x-auto py-2.5 mt-1 no-scrollbar text-xs">
              <button
                type="button"
                onClick={() => handlePresetWeekend(0)}
                className="min-h-[36px] px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 hover:border-[#C29D59] hover:bg-[#1B3B2B]/40 active:scale-95 text-zinc-300 hover:text-white transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 text-xs font-medium shadow-2xs"
              >
                <span>Este Fim de Semana</span>
              </button>

              <button
                type="button"
                onClick={() => handlePresetWeekend(1)}
                className="min-h-[36px] px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 hover:border-[#C29D59] hover:bg-[#1B3B2B]/40 active:scale-95 text-zinc-300 hover:text-white transition-all whitespace-nowrap cursor-pointer text-xs font-medium shadow-2xs"
              >
                Próximo Fim de Semana
              </button>

              <button
                type="button"
                onClick={handlePresetWeek}
                className="min-h-[36px] px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 hover:border-[#C29D59] hover:bg-[#1B3B2B]/40 active:scale-95 text-zinc-300 hover:text-white transition-all whitespace-nowrap cursor-pointer text-xs font-medium shadow-2xs"
              >
                7 Noites
              </button>
            </div>

            {/* Calendar Controls */}
            <div className="flex items-center justify-between mt-2.5 mb-2 px-1">
              <button
                type="button"
                onClick={handlePrevMonth}
                disabled={isCurrentMonthOrPast}
                className={`min-w-[44px] min-h-[44px] p-2.5 rounded-xl border border-white/10 flex items-center justify-center transition-all ${
                  isCurrentMonthOrPast
                    ? "opacity-25 cursor-not-allowed bg-transparent text-zinc-600"
                    : "bg-white/[0.06] hover:bg-[#1B3B2B] hover:border-[#C29D59]/50 active:scale-95 text-white cursor-pointer shadow-2xs"
                }`}
                aria-label="Mês anterior"
              >
                <ChevronLeft className="w-4.5 h-4.5" />
              </button>

              <div className="text-center font-serif text-base sm:text-lg font-bold text-white capitalize">
                {MONTHS_PT[month]} <span className="text-[#E6C994] font-sans font-semibold text-sm">{year}</span>
              </div>

              <button
                type="button"
                onClick={handleNextMonth}
                className="min-w-[44px] min-h-[44px] p-2.5 rounded-xl bg-white/[0.06] hover:bg-[#1B3B2B] hover:border-[#C29D59]/50 active:scale-95 text-white border border-white/10 flex items-center justify-center transition-all cursor-pointer shadow-2xs"
                aria-label="Próximo mês"
              >
                <ChevronRight className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Weekdays Header */}
            <div className="grid grid-cols-7 gap-1 text-center py-1 text-[11px] font-semibold text-zinc-400 uppercase">
              {["D", "S", "T", "Q", "Q", "S", "S"].map((wd, i) => (
                <div key={i} className="py-1">
                  {wd}
                </div>
              ))}
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-y-1 gap-x-0 text-center mt-1">
              {daysArray.map(({ day, iso, isCurrentMonth }, idx) => {
                const isPast = iso < todayIso;
                const isCheckIn = iso === tempCheckIn;
                const isCheckOut = iso === tempCheckOut;
                const isInRange = iso > tempCheckIn && iso < tempCheckOut;

                if (!isCurrentMonth) {
                  return (
                    <div
                      key={idx}
                      className="h-10 flex items-center justify-center text-zinc-700 text-xs select-none"
                    >
                      {day}
                    </div>
                  );
                }

                if (isPast) {
                  return (
                    <div
                      key={idx}
                      className="h-10 flex items-center justify-center text-zinc-600/40 text-xs select-none cursor-not-allowed"
                    >
                      {day}
                    </div>
                  );
                }

                return (
                  <div key={idx} className="relative h-10 p-0 flex items-center justify-center">
                    {/* Continuous range highlight background strip */}
                    {isInRange && (
                      <div className="absolute inset-y-1 inset-x-0 bg-[#C29D59]/20 z-0" />
                    )}
                    {isCheckIn && !isCheckOut && (
                      <div className="absolute inset-y-1 left-1/2 right-0 bg-[#C29D59]/20 z-0" />
                    )}
                    {isCheckOut && !isCheckIn && (
                      <div className="absolute inset-y-1 left-0 right-1/2 bg-[#C29D59]/20 z-0" />
                    )}

                    {/* Day button */}
                    <button
                      type="button"
                      onClick={() => handleDayClick(iso)}
                      className={`relative z-10 w-9.5 h-9.5 rounded-full flex items-center justify-center text-xs transition-all cursor-pointer active:scale-90 ${
                        isCheckIn || isCheckOut
                          ? "bg-[#C29D59] text-[#050B07] font-extrabold shadow-lg scale-105 ring-2 ring-[#E6C994]"
                          : isInRange
                          ? "text-[#E6C994] font-bold hover:bg-[#C29D59]/30"
                          : "text-zinc-200 font-medium hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {day}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Confirm CTA Button in Gold Accent */}
            <div className="mt-5 pt-3.5 border-t border-white/10">
              <button
                type="button"
                onClick={handleConfirm}
                className="w-full min-h-[48px] flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#C29D59] hover:bg-[#D4AF67] active:bg-[#B38F4D] text-[#050B07] font-bold text-sm shadow-[0_10px_30px_rgba(194,157,89,0.35)] hover:shadow-[0_15px_40px_rgba(194,157,89,0.5)] transition-all cursor-pointer active:scale-[0.98]"
              >
                <span>Confirmar Datas ({formatReadableDate(tempCheckIn)} — {formatReadableDate(tempCheckOut)})</span>
                <ArrowRight className="w-4 h-4 text-[#050B07] stroke-[2.5]" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
