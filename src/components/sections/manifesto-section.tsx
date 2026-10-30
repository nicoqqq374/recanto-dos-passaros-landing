"use client";

import React from "react";
import Image from "next/image";
import { Heart, Waves, Trees } from "lucide-react";
import { motion } from "framer-motion";

export function ManifestoSection() {
  const pillars = [
    {
      icon: Heart,
      title: "Intimidade & Conexão a Dois",
      tag: "Para Casais",
      description:
        "Chalés individuais afastados uns dos outros, sem paredes compartilhadas. Cama espaçosa e macia, varanda privativa com rede de casal voltada para a copa das árvores, banho quente demorado e noites frescas sob o céu estrelado da serra.",
      image: "/recanto/chales-individuais-jardim.jpg",
      highlight: "Privacidade absoluta para namorar e descansar",
    },
    {
      icon: Waves,
      title: "O Rio que Cura a Rotina",
      tag: "Terapia da Natureza",
      description:
        "Um rio cristalino que nasce na serra corta o terreno da pousada. Deitar à beira d'água sob a sombra das árvores, mergulhar nas piscinas naturais de pedra ou brindar o entardecer com uma taça de vinho ouvindo apenas o som da correnteza.",
      image: "/recanto/rio-privado.jpg",
      highlight: "Bica d'água natural e remansos cristalinos na pousada",
    },
    {
      icon: Trees,
      title: "Seu Pet Livre e sem Culpa",
      tag: "Hóspede de Honra",
      description:
        "Viajar por inteiro, sem a dor de deixar ninguém para trás. Gramados amplos para farejar e correr solto, ambiente seguro longe de carros e remansos de água rasa no rio onde os cachorros nadam felizes ao seu lado.",
      image: "/recanto/pet-natureza-fofo.jpg",
      highlight: "Muito verde e acolhimento sincero para o seu pet",
    },
  ];

  return (
    <section id="refugio" className="py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C29D59]/40 text-[#E6C994] text-xs font-semibold uppercase tracking-wider shadow-xs backdrop-blur-md">
            <span>A Filosofia do Recanto</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Esqueça o relógio. Aqui o único compromisso é{" "}
            <span className="italic font-normal text-[#E6C994]">estar presente.</span>
          </h2>

          <p className="text-zinc-300 text-[15px] sm:text-lg font-light leading-relaxed max-w-[62ch] mx-auto">
            Deixe o estresse da cidade e as notificações para trás. Na Pousada Recanto dos Pássaros, o luxo é o ar puro da montanha, a água corrente no quintal e a tranquilidade de estar junto de quem você mais ama.
          </p>
        </div>

        {/* 3 Pillars Editorial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.12 }}
                className="rounded-[2rem] sm:rounded-[2.4rem] bg-gradient-to-b from-[#0A140F]/90 via-[#0A140F]/80 to-[#050B07]/90 border border-[#C29D59]/30 hover:border-[#C29D59]/60 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_25px_50px_rgba(194,157,89,0.18)] hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between group backdrop-blur-2xl"
              >
                {/* Photo Frame */}
                <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-black/40">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-[#0A140F]/90 text-[#E6C994] border border-[#C29D59]/40 shadow-sm backdrop-blur-md">
                      {pillar.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#C29D59] shrink-0" />
                    <span className="text-zinc-200">{pillar.highlight}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4 text-left">
                  <div className="space-y-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-[#C29D59]/15 border border-[#C29D59]/30 flex items-center justify-center text-[#E6C994] mb-3">
                      <Icon className="w-5 h-5 text-[#C29D59]" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#E6C994] transition-colors leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-zinc-300 text-sm sm:text-[15px] font-light leading-relaxed max-w-[60ch]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
