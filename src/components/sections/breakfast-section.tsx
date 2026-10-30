"use client";

import React from "react";
import Image from "next/image";
import { Coffee, Clock, Sparkles, Utensils, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function BreakfastSection() {
  const highlights = [
    {
      icon: Coffee,
      title: "Café Excepcional",
      badge: "Nota 9.4",
      desc: "Classificado como excepcional pelos hóspedes no Booking: buffet completo farto e opções continentais frescas.",
    },
    {
      icon: Clock,
      title: "Sem Hora Marcada",
      badge: "Ritmo Natural",
      desc: "Servido com calma e fartura até mais tarde para você acordar no ritmo sereno do seu corpo, sem despertador.",
    },
    {
      icon: Utensils,
      title: "Fornadas da Roça",
      badge: "Feito no Dia",
      desc: "Bolos caseiros de fubá, cenoura com cobertura e milho saindo quentinhos do forno todas as manhãs.",
    },
    {
      icon: Sparkles,
      title: "Sabor da Serra",
      badge: "Artesanal",
      desc: "Pães artesanais macios, queijos da região, frutas da estação e aquele café coado acolhendo sua manhã ao som do rio.",
    },
  ];

  const handleScrollToRooms = () => {
    const el = document.getElementById("chales");
    if (el) {
      const yOffset = -75;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="cafe"
      className="py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden"
    >
      {/* Warm morning sun ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(194,157,89,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Text, Booking Score & Sensory Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Header Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C29D59]/40 text-[#E6C994] text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-xs">
                <Coffee className="w-3.5 h-3.5 text-[#C29D59]" />
                <span>O Grande Destaque do Recanto</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#C29D59]/20 text-[#E6C994] border border-[#C29D59]/45">
                <div className="flex text-[#C29D59]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#C29D59]" />
                  ))}
                </div>
                <span>9.4 no Booking.com</span>
              </div>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              O despertar com o perfume acolhedor do{" "}
              <span className="italic font-normal text-[#E6C994]">café da roça.</span>
            </h2>

            <p className="text-zinc-300 text-[15px] sm:text-lg font-light leading-relaxed max-w-[60ch]">
              Acreditamos que a melhor parte de viajar a dois ou em família é acordar sem hora marcada. Nosso café colonial é um ritual diário de afeto: uma mesa farta e colorida com receitas caseiras de família, bolos quentinhos que perfumam o salão e o privilégio de saborear tudo com calma ouvindo o canto dos passarinhos da serra.
            </p>

            {/* 4 Feature Cards with Golden Accents */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <div
                    key={i}
                    className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#0A140F]/90 to-[#050B07]/90 border border-[#C29D59]/30 shadow-xl hover:border-[#C29D59]/60 hover:-translate-y-0.5 transition-all backdrop-blur-xl group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-xl bg-[#C29D59]/15 border border-[#C29D59]/30 flex items-center justify-center text-[#E6C994] group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4 text-[#C29D59]" />
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#E6C994] bg-[#C29D59]/10 px-2 py-0.5 rounded-full border border-[#C29D59]/25">
                        {h.badge}
                      </span>
                    </div>
                    <span className="font-serif font-bold text-base sm:text-lg text-white block mb-1 group-hover:text-[#E6C994] transition-colors">
                      {h.title}
                    </span>
                    <span className="text-xs sm:text-[13px] text-zinc-300 font-light leading-relaxed block">
                      {h.desc}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Direct CTA to Accommodations with Breakfast Included */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleScrollToRooms}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#C29D59] hover:bg-[#D4AF67] text-[#050B07] font-bold text-sm shadow-[0_0_25px_rgba(194,157,89,0.35)] hover:shadow-[0_0_35px_rgba(194,157,89,0.55)] transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <span>Ver Chalés com Café Colonial Incluso</span>
                <ArrowRight className="w-4 h-4 text-[#050B07]" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Editorial Photo Canvas with Floating Guest Praise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 relative"
          >
            {/* Main Picture Frame */}
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden aspect-[4/3] sm:aspect-[4/5] min-h-[440px] sm:min-h-[540px] shadow-[0_25px_60px_rgba(0,0,0,0.65)] border-2 border-white/20 group bg-black/40">
              <Image
                src="/recanto/cafe-roca-buffet.jpg"
                alt="Buffet completo de café da manhã colonial na Pousada Recanto dos Pássaros no Sana"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/20" />

              {/* Top Pill: Included in all stays */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#0A140F]/90 text-[#E6C994] border border-[#C29D59]/45 shadow-lg backdrop-blur-md">
                  Incluso em Todas as Diárias
                </span>
              </div>

              {/* Bottom Card: Sensory Quote */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white text-left z-10">
                <div className="p-4 sm:p-5 rounded-2xl bg-[#0A140F]/85 backdrop-blur-xl border border-[#C29D59]/35 shadow-xl">
                  <div className="flex items-center gap-1.5 text-[#E6C994] mb-1.5 text-xs font-semibold">
                    <Coffee className="w-3.5 h-3.5" />
                    <span>Experiência Matinal Inesquecível</span>
                  </div>
                  <p className="font-serif text-base sm:text-lg font-bold text-white leading-snug drop-shadow-sm">
                    &ldquo;O bolo de milho quentinho saindo do forno e o café no bule ouvindo o som do rio não têm preço.&rdquo;
                  </p>
                  <span className="text-[11px] text-zinc-300 mt-1.5 block font-light">
                    Avaliação 10/10 no Booking.com • Casal de hóspedes
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
