"use client";

import React from "react";
import Image from "next/image";
import { Heart, Check } from "lucide-react";
import { motion } from "framer-motion";

export function PetVipSection() {
  const perks = [
    {
      title: "Gramados Amplos e Seguros",
      desc: "Muito espaço verde livre de carros para passear, farejar e brincar em contato direto com a terra.",
    },
    {
      title: "Mergulho de Rio para Pets",
      desc: "Remansos rasos de águas cristalinas e limpas onde os cachorros adoram nadar e se refrescar nos dias de sol.",
    },
    {
      title: "Sem Restrição de Porte",
      desc: "Pequenos, médios ou grandes: cães dóceis e sociáveis de todos os tamanhos são recebidos de coração aberto.",
    },
    {
      title: "Paz para os Tutores",
      desc: "A tranquilidade de curtir sua estadia sabendo que seu parceiro de quatro patas é amado e bem-vindo em cada momento.",
    },
  ];

  return (
    <section
      id="pet-friendly"
      className="py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-transparent relative border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Pet Visual Collage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative order-2 lg:order-1 pb-6 sm:pb-8 pr-2 sm:pr-4"
          >
            {/* Main Visual Card */}
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden aspect-[4/3] sm:aspect-[16/11] shadow-[0_25px_60px_rgba(0,0,0,0.6)] border-2 border-white/20 bg-black/40">
              <Image
                src="/recanto/pet-friendly.jpg"
                alt="Cachorros felizes e relaxados na Pousada Recanto dos Pássaros no Sana"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10" />

              {/* Text Container — Restrained to left 52% on mobile so it NEVER overlaps with the floating photo */}
              <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 max-w-[52%] sm:max-w-[50%] z-10 text-white text-left">
                <span className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#C29D59]/40 text-[9px] sm:text-xs font-bold uppercase tracking-wider text-[#E6C994] mb-1.5 sm:mb-2 shadow-sm">
                  <Heart className="w-3 h-3 text-[#E6C994] fill-[#E6C994]" />
                  <span>100% Pet Friendly VIP</span>
                </span>
                <p className="font-serif text-[13px] xs:text-sm sm:text-xl lg:text-2xl font-bold leading-snug drop-shadow-md text-white">
                  Liberdade e ar puro para quem não viaja sem o pet
                </p>
                <p className="hidden md:block text-xs text-zinc-300 mt-1.5 font-light leading-relaxed">
                  Gramados verdes seguros e banho de rio para toda a família.
                </p>
              </div>
            </div>

            {/* Overlapping real photo: Dog with LOVE marquee — compact on mobile to never overlap copy */}
            <div className="absolute -bottom-3 -right-1 sm:-bottom-6 sm:-right-4 w-28 xs:w-32 sm:w-48 md:w-52 aspect-[3/4] rounded-xl sm:rounded-3xl overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.85)] border-2 border-[#C29D59]/50 group/pet hover:scale-105 transition-all duration-500 z-20 bg-[#050B07]">
              <Image
                src="/recanto/pet-love-jardim.jpg"
                alt="Cachorrinho descansando com almofada e letreiro LOVE no jardim da Pousada Recanto dos Pássaros"
                fill
                className="object-cover object-center group-hover/pet:scale-110 transition-transform duration-700"
                sizes="(max-width: 640px) 144px, 208px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 text-left">
                <span className="inline-block px-2 py-0.5 rounded-full bg-[#1B3B2B]/90 backdrop-blur-md border border-[#C29D59]/40 text-[9px] sm:text-[10px] font-bold text-[#E6C994] shadow-xs">
                  Sana com Amor ❤️
                </span>
                <p className="text-[10px] sm:text-xs font-serif font-bold text-white leading-tight mt-0.5 truncate drop-shadow-sm">
                  Cantinho do Pet
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copy & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C29D59]/40 text-[#E6C994] text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-xs">
              <Heart className="w-3.5 h-3.5 text-[#E6C994]" />
              <span>Amor de Quatro Patas • Família Completa</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Viajar com quem você ama por inteiro —{" "}
              <span className="italic font-normal text-[#E6C994]">sem culpa nem saudades.</span>
            </h2>

            <p className="text-zinc-300 text-[15px] sm:text-lg font-light leading-relaxed max-w-[60ch]">
              Sabemos a dor no peito que dá sair de férias e deixar o seu pet em um hotelzinho ou com parentes. Na Pousada Recanto dos Pássaros, ele é recebido como hóspede de honra: corre solto na grama fresca, nada feliz nas águas calmas do rio e descansa tranquilo aos seus pés na varanda do chalé.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {perks.map((p, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-gradient-to-b from-[#0A140F]/90 to-[#050B07]/90 border border-[#C29D59]/30 shadow-xl hover:border-[#C29D59]/60 transition-all backdrop-blur-xl"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <Check className="w-4 h-4 text-[#C29D59] shrink-0" />
                    <span className="font-serif font-bold text-base text-white">
                      {p.title}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-300 font-light leading-relaxed pl-6">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
