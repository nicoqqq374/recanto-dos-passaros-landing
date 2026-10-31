"use client";

import React, { useState } from "react";
import {
  MapPin,
  Navigation,
  Compass,
  Car,
  Trees,
  Mountain,
  Waves,
  Copy,
  Check,
  Wifi,
  Star,
  ExternalLink,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

export function LocationSection() {
  const [copied, setCopied] = useState(false);
  const [mapMode, setMapMode] = useState<"standard" | "satellite">("standard");

  const addressText =
    "Pousada Recanto dos Pássaros, Estrada Principal do Sana, s/n (Boa Sorte), Sana, Macaé - RJ, CEP 27995-000";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(addressText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Official Google Maps Embed with exact hex Place ID 0x97c0f5dbf00e93:0x40f34c550278aa0f
  const mapEmbedUrl =
    mapMode === "satellite"
      ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14742.0!2d-42.1946578!3d-22.3408868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x97c0f5dbf00e93%3A0x40f34c550278aa0f!2srecanto%20dos%20passaros%20sana!5e1!3m2!1spt-BR!2sbr"
      : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14742.0!2d-42.1946578!3d-22.3408868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x97c0f5dbf00e93%3A0x40f34c550278aa0f!2srecanto%20dos%20passaros%20sana!5e0!3m2!1spt-BR!2sbr";

  const GOOGLE_MAPS_OFFICIAL_URL =
    "https://www.google.com/maps/place/recanto+dos+passaros+sana/data=!4m2!3m1!1s0x97c0f5dbf00e93:0x40f34c550278aa0f?sa=X&ved=1t:242&ictx=111";

  const WAZE_URL =
    "https://waze.com/ul?ll=-22.3408868,-42.1946578&navigate=yes";

  const WHATSAPP_URL =
    "https://wa.me/5522981054265?text=Ol%C3%A1%2C%20gostaria%20de%20dicas%20sobre%20como%20chegar%20%C3%A0%20Pousada%20Recanto%20dos%20P%C3%A1ssaros%20no%20Sana.";

  const distances = [
    {
      label: "Centrinho do Sana",
      distance: "2.0 km",
      time: "4 a 5 min",
      icon: Trees,
      hint: "Praça, feirinha & gastronomia",
    },
    {
      label: "Cachoeiras & Poços",
      distance: "2.8 km",
      time: "7 min",
      icon: Waves,
      hint: "Sete Quedas, Andorinhas, Pai",
    },
    {
      label: "Acesso BR-101",
      distance: "25 km",
      time: "35 min",
      icon: Car,
      hint: "Via Casimiro de Abreu (RJ-142)",
    },
    {
      label: "Altitude da Serra",
      distance: "~420 m",
      time: "Ar Puro",
      icon: Mountain,
      hint: "Noites frescas de serra o ano todo",
    },
  ];

  return (
    <section
      id="localizacao"
      className="relative py-12 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden"
    >
      {/* Warm ambient glows for comfortable visual depth */}
      <div className="absolute top-1/4 -right-16 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(194,157,89,0.1)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-16 w-[740px] h-[740px] bg-[radial-gradient(circle,rgba(27,59,43,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C29D59]/40 text-[#E6C994] text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4 shadow-sm backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-[#C29D59]" />
            <span>Localização Oficial no Google Maps • Sana, RJ</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Do centrinho histórico ao refúgio{" "}
            <span className="italic font-normal text-[#E6C994]">na serra</span>
          </h2>

          <p className="mt-3.5 text-zinc-300 text-[15px] sm:text-base font-light leading-relaxed max-w-[62ch]">
            Localizada no Vale de Boa Sorte, a apenas 2 km da praça central do Sana. O equilíbrio ideal entre privacidade à beira do rio cristalino e acesso rápido às cachoeiras e restaurantes da serra.
          </p>

          {/* Google Ratings Pill */}
          <div className="mt-4 inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-[#0A140F]/90 border border-[#C29D59]/40 text-xs shadow-md backdrop-blur-md">
            <div className="flex items-center gap-1 text-[#E6C994]">
              <Star className="w-4 h-4 fill-[#C29D59] text-[#C29D59]" />
              <strong className="text-white font-bold text-sm">4.6</strong>
              <span className="text-zinc-400">/ 5.0</span>
            </div>
            <span className="w-px h-3.5 bg-white/15" />
            <span className="text-zinc-300">
              <strong className="text-[#E6C994]">191+ avaliações reais</strong> no Google Maps
            </span>
            <span className="w-px h-3.5 bg-white/15" />
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Ponto Verificado
            </span>
          </div>
        </div>

        {/* 4 Distance Bento Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 mb-10 sm:mb-14 text-left">
          {distances.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="relative p-5 sm:p-7 rounded-[1.8rem] sm:rounded-[2.2rem] bg-gradient-to-b from-[#0A140F]/90 via-[#0A140F]/80 to-[#050B07]/90 border border-[#C29D59]/30 hover:border-[#C29D59]/60 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_25px_50px_rgba(194,157,89,0.18)] hover:-translate-y-1 transition-all duration-400 group backdrop-blur-xl flex flex-col justify-between"
              >
                {/* Micro accent top bar */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#C29D59]/15 border border-[#C29D59]/30 flex items-center justify-center text-[#E6C994] group-hover:scale-110 group-hover:bg-[#C29D59] group-hover:text-[#050B07] transition-all duration-300 shadow-sm shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#1B3B2B]/60 text-[11px] font-bold text-[#E6C994] shrink-0 border border-[#C29D59]/30 shadow-xs">
                    {item.time}
                  </span>
                </div>

                <div>
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-white block tracking-tight">
                    {item.distance}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#E6C994] block mt-1">
                    {item.label}
                  </span>
                  <span className="text-xs text-zinc-300 block mt-0.5 font-light leading-snug">
                    {item.hint}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
          {/* Left Column: Route Guide & Direct GPS */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            {/* 1. Endereço Oficial Card */}
            <div className="p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-b from-[#0A140F]/90 via-[#0A140F]/85 to-[#050B07]/90 border border-[#C29D59]/35 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
              <div className="flex items-center justify-between gap-3 pb-5 border-b border-white/10">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#C29D59]/15 border border-[#C29D59]/30 flex items-center justify-center text-[#E6C994] shrink-0 shadow-inner">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#E6C994] block">
                      Endereço Oficial Cadastrado
                    </span>
                    <span className="text-xs sm:text-sm text-zinc-300 font-medium block truncate">
                      Distrito do Sana, Macaé — RJ
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="min-h-[44px] px-4 py-2.5 rounded-full bg-[#0A140F] hover:bg-white/10 border border-[#C29D59]/40 text-[#E6C994] transition-all text-xs font-bold flex items-center gap-1.5 cursor-pointer shrink-0 shadow-sm active:scale-95"
                  title="Copiar endereço completo"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#C29D59]" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              {/* Full-width address info */}
              <div className="pt-5 space-y-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-white tracking-tight">
                    Estrada Principal do Sana, s/n (Boa Sorte)
                  </h3>
                  <p className="text-sm text-zinc-300 mt-0.5 font-light">
                    Arraial do Sana, Macaé — RJ, CEP 27995-000
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 border border-white/10 text-xs text-zinc-300">
                    <Compass className="w-3.5 h-3.5 text-[#C29D59] shrink-0" />
                    <span>
                      GPS:{" "}
                      <strong className="text-[#E6C994] font-mono font-bold">
                        -22.340887, -42.194658
                      </strong>
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 border border-white/10 text-xs text-zinc-300 font-mono">
                    <span className="text-[#C29D59] font-bold">Plus Code:</span>
                    <strong className="text-white">MR54+J4 Sana</strong>
                  </div>
                </div>
              </div>

              {/* Reference note — Full width on mobile to avoid narrow squashed text */}
              <div className="mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2.5 text-xs sm:text-sm text-zinc-300">
                <span className="text-[#E6C994] font-bold shrink-0 inline-flex items-center gap-1.5">
                  <span>📌</span>
                  <span>Referência local:</span>
                </span>
                <p className="leading-relaxed font-light text-zinc-300">
                  Siga pela Estrada Principal do Sana no sentido Boa Sorte. Em apenas 2 km a partir do centrinho histórico você chega à pousada, com entrada privativa à beira do rio e estacionamento seguro.
                </p>
              </div>
            </div>

            {/* 2. Roteiro Passo a Passo */}
            <div className="p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-b from-[#0A140F]/90 via-[#0A140F]/85 to-[#050B07]/90 border border-[#C29D59]/35 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-[#C29D59]/15 border border-[#C29D59]/30 flex items-center justify-center text-[#E6C994] shrink-0">
                  <Navigation className="w-5 h-5 text-[#C29D59]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#E6C994]">
                    Roteiro de Viagem
                  </h4>
                  <p className="text-base sm:text-lg font-serif font-bold text-white">
                    Como Chegar Passo a Passo
                  </p>
                </div>
              </div>

              <div className="relative pl-8 space-y-5 before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-[#C29D59] before:via-[#1B3B2B] before:to-transparent">
                <div className="relative">
                  <div className="absolute -left-8 top-0.5 w-7 h-7 rounded-full bg-[#1B3B2B] text-[#E6C994] font-serif font-bold text-xs flex items-center justify-center shadow-md border-2 border-[#C29D59]/40">
                    01
                  </div>
                  <div>
                    <span className="text-sm sm:text-base font-bold text-white block">
                      BR-101 ➔ Trevo de Casimiro de Abreu
                    </span>
                    <p className="text-sm text-zinc-300 font-light leading-relaxed mt-0.5">
                      Acesso principal pela Rodovia BR-101. No trevo de Casimiro de Abreu (km 206), acesse a rodovia RJ-142 (Estrada Serramar) em direção ao Sana.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-8 top-0.5 w-7 h-7 rounded-full bg-[#1B3B2B] text-[#E6C994] font-serif font-bold text-xs flex items-center justify-center shadow-md border-2 border-[#C29D59]/40">
                    02
                  </div>
                  <div>
                    <span className="text-sm sm:text-base font-bold text-white block">
                      Subida da Serra (RJ-142 até o Portal do Sana)
                    </span>
                    <p className="text-sm text-zinc-300 font-light leading-relaxed mt-0.5">
                      São 25 km de trajeto cênico e asfaltado com vista exuberante das montanhas até a ponte e o portal oficial de entrada do distrito.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-8 top-0.5 w-7 h-7 rounded-full bg-[#C29D59] text-[#050B07] font-serif font-bold text-xs flex items-center justify-center shadow-md border-2 border-white/40">
                    03
                  </div>
                  <div>
                    <span className="text-sm sm:text-base font-bold text-white block">
                      Estrada Principal ➔ Boa Sorte (2 km)
                    </span>
                    <p className="text-sm text-zinc-300 font-light leading-relaxed mt-0.5">
                      Ao entrar no Sana, continue pela Estrada Principal sentido Boa Sorte. Em 4 a 5 minutos você chega ao portão da pousada, com vaga no estacionamento interno.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3 p-3.5 rounded-2xl bg-black/40 border border-white/10">
                <Wifi className="w-4 h-4 text-[#C29D59] shrink-0" />
                <p className="text-xs sm:text-sm text-zinc-300 leading-snug font-light">
                  <strong className="text-white font-semibold">Dica de Viagem:</strong> Baixe o mapa offline antes de subir a serra. Na pousada temos Wi-Fi de alta velocidade liberado em todos os chalés.
                </p>
              </div>
            </div>

            {/* Action buttons — 48px touch targets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <a
                href={GOOGLE_MAPS_OFFICIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full bg-[#C29D59] hover:bg-[#D4AF67] text-[#050B07] font-bold text-xs sm:text-sm shadow-lg transition-all active:scale-95 text-center group"
              >
                <Navigation className="w-4 h-4 text-[#050B07]" />
                <span>Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href={WAZE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-[#C29D59]/40 font-semibold text-xs sm:text-sm shadow-md transition-all active:scale-95 text-center group"
              >
                <Compass className="w-4 h-4 text-[#E6C994]" />
                <span>Abrir no Waze</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full bg-[#1B3B2B] hover:bg-[#234B37] text-white border border-[#C29D59]/40 font-semibold text-xs sm:text-sm shadow-md transition-all active:scale-95 text-center"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#E6C994]" />
                <span>Rota no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map Experience */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-[#C29D59]/35 shadow-[0_25px_60px_rgba(0,0,0,0.6)] bg-[#07100A] flex-1 flex flex-col h-[460px] sm:h-[520px] lg:h-full lg:min-h-[580px]">
              
              {/* App Chrome Top Header Bar — Integrated Clean Map View Mode Switcher */}
              <div className="px-3.5 sm:px-4 py-2 sm:py-2.5 bg-[#0A140F] border-b border-white/10 flex items-center justify-between gap-2 z-10 shrink-0">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="text-xs font-semibold text-[#E6C994] truncate">
                    GPS Interativo • Sana, RJ
                  </span>
                </div>

                {/* Segmented Switcher (Compact, No Collisions) */}
                <div className="flex items-center gap-1 p-0.5 rounded-xl bg-white/[0.06] border border-white/10 shrink-0 shadow-inner">
                  <button
                    type="button"
                    onClick={() => setMapMode("standard")}
                    className={`min-h-[30px] px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer active:scale-95 flex items-center gap-1 ${
                      mapMode === "standard"
                        ? "bg-[#C29D59] text-[#050B07] shadow-xs"
                        : "text-zinc-300 hover:text-white"
                    }`}
                  >
                    <span>🗺️</span>
                    <span>Mapa</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setMapMode("satellite")}
                    className={`min-h-[30px] px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer active:scale-95 flex items-center gap-1 ${
                      mapMode === "satellite"
                        ? "bg-[#C29D59] text-[#050B07] shadow-xs"
                        : "text-zinc-300 hover:text-white"
                    }`}
                  >
                    <span>🛰️</span>
                    <span>Satélite</span>
                  </button>
                </div>
              </div>

              {/* Map Frame */}
              <div className="w-full flex-1 relative bg-black/40 min-h-[260px]">
                <iframe
                  key={mapMode}
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  className="w-full h-full border-0 absolute inset-0"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Oficial da Pousada Recanto dos Pássaros no Sana"
                />
              </div>

              {/* Bottom HUD Bar — Compact Frosted Glass Footer */}
              <div className="p-3.5 sm:p-4 bg-gradient-to-r from-[#0A140F]/95 via-[#0A140F]/90 to-[#050B07]/95 backdrop-blur-xl border-t border-[#C29D59]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 shrink-0">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C29D59] animate-pulse shrink-0" />
                    <span className="text-xs sm:text-sm font-serif font-bold text-white truncate block">
                      Pousada Recanto dos Pássaros
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#1B3B2B] text-[10px] font-bold text-[#E6C994] border border-[#C29D59]/30 shrink-0">
                      ★ 4.6 no Google
                    </span>
                  </div>
                  <span className="text-[11px] sm:text-xs text-zinc-300 truncate block mt-0.5 font-light">
                    Estrada Principal do Sana, Boa Sorte · Macaé — RJ
                  </span>
                </div>

                <a
                  href={GOOGLE_MAPS_OFFICIAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[38px] px-4 py-2 rounded-full bg-[#C29D59] hover:bg-[#D4AF67] text-[#050B07] text-xs font-bold shadow-md transition-all flex items-center justify-center gap-1.5 shrink-0 active:scale-95"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#050B07]" />
                  <span>Traçar Rota Oficial</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
