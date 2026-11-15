"use client";

import React from "react";
import Image from "next/image";
import { Waves, Coffee, Heart, Car, Wifi } from "lucide-react";
import { QuickBookingBar } from "@/components/ui/quick-booking-bar";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[92dvh] flex flex-col justify-between pt-24 sm:pt-32 lg:pt-36 pb-20 sm:pb-28 lg:pb-32 px-4 sm:px-6 lg:px-8 bg-transparent overflow-visible">
      {/* Background Subtle Gradient & Light safely confined to avoid horizontal scroll without clipping dropdowns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[850px] h-[850px] bg-[radial-gradient(circle,rgba(194,157,89,0.15)_0%,transparent_70%)] -mr-48 -mt-32" />
        <div className="absolute bottom-0 left-0 w-[750px] h-[750px] bg-[radial-gradient(circle,rgba(27,59,43,0.28)_0%,transparent_70%)] -ml-48 -mb-32" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto">
        {/* Main Grid: Editorial Typography Left + Cinematic Photography Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Storytelling for Couples, Pets & Pure Relaxation */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            {/* Top Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-black/50 border border-[#C29D59]/40 text-[#E6C994] text-xs font-semibold tracking-wide backdrop-blur-xl shadow-lg"
            >
              <span>Pousada de Charme & Relaxamento • Sana, RJ</span>
            </motion.div>

            {/* Monumental Headline with Fluid Scaling */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="font-serif text-[clamp(2.1rem,4.5vw+0.85rem,4.25rem)] font-bold tracking-tight text-white leading-[1.08] drop-shadow-md"
            >
              Onde o amor encontra calma, o rio dita o tempo e{" "}
              <span className="italic font-normal text-[#E6C994]">seu pet é família.</span>
            </motion.h1>

            {/* Subhead capped at 62ch for optimal desktop & mobile legibility */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.16 }}
              className="text-[15px] sm:text-lg text-zinc-200 font-light leading-relaxed max-w-[62ch] drop-shadow-sm"
            >
              Chalés privativos com varanda e rede na Mata Atlântica do Sana. O silêncio para viver a dois, o aroma inesquecível de café passado com bolo quentinho pela manhã e um rio cristalino de nascente correndo dentro do quintal.
            </motion.p>

            {/* Trust & Amenities Group: Clean & Symmetrical */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="space-y-3 pt-2"
            >
              {/* Primary Trust Badge (Booking Award) */}
              <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 px-3.5 py-2 sm:py-1.5 rounded-2xl sm:rounded-full bg-black/60 border border-[#C29D59]/45 shadow-xl text-xs text-white backdrop-blur-xl max-w-full">
                <div className="flex text-amber-400 text-xs tracking-tighter shrink-0" aria-hidden="true">
                  {"★".repeat(5)}
                </div>
                <span className="font-bold text-[#E6C994] whitespace-nowrap">9,4 para Casais</span>
                <span className="text-zinc-500 hidden sm:inline">•</span>
                <span className="text-zinc-200 font-medium whitespace-nowrap">9.1 no Booking</span>
                <span className="text-zinc-400 text-[11px] font-normal whitespace-nowrap">(+400 avaliações)</span>
              </div>

              {/* 4 Pillars Grid: 4 in a line on desktop, 2x2 on mobile */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-xl">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.06] border border-white/10 text-xs font-medium text-zinc-200 backdrop-blur-md">
                  <Waves className="w-3.5 h-3.5 text-[#C29D59] shrink-0" />
                  <span className="truncate">Rio no Quintal</span>
                </div>

                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.06] border border-white/10 text-xs font-medium text-zinc-200 backdrop-blur-md">
                  <Coffee className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">Café Incluso</span>
                </div>

                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.06] border border-white/10 text-xs font-medium text-zinc-200 backdrop-blur-md">
                  <Heart className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span className="truncate">Pet Friendly VIP</span>
                </div>

                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.06] border border-white/10 text-xs font-medium text-zinc-200 backdrop-blur-md">
                  <Wifi className="w-3.5 h-3.5 text-[#C29D59] shrink-0" />
                  <span className="truncate">Wi-Fi & Parking</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Luxury Asymmetrical Photo Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="lg:col-span-5 relative"
          >
            {/* Primary Main Image Frame */}
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)] border-2 border-white/25 aspect-[4/3] sm:aspect-[4/5] max-h-[420px] sm:max-h-[560px] w-full">
              <Image
                src="/recanto/hero-pousada-real.jpg"
                alt="Chalés e quiosque em meio à natureza na Pousada Recanto dos Pássaros no Sana"
                fill
                priority
                className="object-cover object-center hover:scale-105 transition-transform duration-1000"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B07]/90 via-transparent to-transparent" />
              
              {/* Couple Romance Badge on Image */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 text-white text-left">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 text-[#E6C994] border border-[#C29D59]/40 backdrop-blur-md shadow-md inline-block mb-2">
                  Chalés para Casais & Famílias
                </span>
                <p className="font-serif text-lg sm:text-2xl font-bold leading-snug drop-shadow-sm">
                  Acorde com a brisa da serra e a melodia das águas.
                </p>
              </div>
            </div>

            {/* Breakfast Floating Pill Tag (Contained inside mobile viewport) */}
            <div className="absolute top-3 right-3 sm:top-6 sm:-right-4 lg:-right-6 bg-[#0D1812]/90 backdrop-blur-xl border border-[#C29D59]/35 py-2 px-3 sm:py-2.5 sm:px-4 rounded-2xl shadow-2xl flex items-center gap-2.5 sm:gap-3 text-white">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-[#C29D59]/60 shadow-md shrink-0">
                <Image
                  src="/recanto/xicara-cafe.jpg"
                  alt="Xícara de café colonial quentinho"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#E6C994]">Café da Roça</span>
                <span className="text-[11px] sm:text-xs font-bold text-white">Incluso na diária</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Quick Search Bar in Warm Luxury Tone */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 sm:mt-14 lg:mt-16 w-full max-w-4xl mx-auto"
        >
          <QuickBookingBar />
        </motion.div>
      </div>
    </section>
  );
}
