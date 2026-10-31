"use client";

import React from "react";
import Image from "next/image";
import {
  Waves,
  Sun,
  Gamepad2,
  Smile,
  Compass,
  ArrowRight,
  CalendarCheck,
  Wine,
  Car,
  Mountain,
} from "lucide-react";
import { useBooking } from "@/context/booking-context";
import { motion } from "framer-motion";

export function LeisureSection() {
  const { openBooking } = useBooking();

  const leisureItems = [
    {
      icon: Waves,
      title: "Piscina Natural & Rio no Quintal",
      tag: "Águas Cristalinas",
      desc: "Rio límpido de nascente correndo dentro da propriedade com poços de pedra e remansos calmos para banhos revigorantes a poucos passos do seu chalé.",
      image: "/recanto/piscina-natural-rio.jpg",
    },
    {
      icon: Sun,
      title: "Deck & Solário à Beira do Rio",
      tag: "Solário & Rio",
      desc: "Deck de madeira com espreguiçadeiras e guarda-sol debruçado sobre as águas cristalinas do rio, perfeito para tomar sol, relaxar e contemplar a natureza.",
      image: "/recanto/deck-solario-rio.jpg",
    },
    {
      icon: Gamepad2,
      title: "Salão de Jogos: Bilhar & Ping-Pong",
      tag: "Sinuca & Tênis de Mesa",
      desc: "Espaço coberto e acolhedor com mesa oficial de bilhar/sinuca e ping-pong para tardes e noites descontraídas a dois, em família ou entre amigos.",
      image: "/recanto/sinuca-jogos.jpg",
    },
    {
      icon: Smile,
      title: "Club Infantil & Espaço Kids",
      tag: "Parquinho Seguro",
      desc: "Balanço de madeira, cama elástica / pula-pula e brinquedos ao ar livre em gramado plano cercado de muito verde para os pequenos brincarem com segurança.",
      image: "/recanto/parquinho-infantil.jpg",
    },
  ];

  const services = [
    {
      icon: CalendarCheck,
      title: "Opção de Day Use",
      desc: "Deseja passar o dia no paraíso sem pernoitar? Nosso Day Use oferece acesso completo ao quiosque com redes, rio privativo, piscinas naturais e salão de jogos.",
      badge: "Disponível sob Consulta",
      image: "/recanto/dayuse-quiosque-redes.jpg",
    },
    {
      icon: Wine,
      title: "Bar da Pousada & Drinks",
      desc: "Bebidas geladas, coquetéis refrescantes, sucos naturais e aperitivos saborosos para você degustar à beira do rio cristalino e no jardim.",
      badge: "Bar no Local",
      image: "/recanto/bar-drinks-rio.jpg",
    },
    {
      icon: Sun,
      title: "Redário & Jardins na Mata",
      desc: "Amplo gramado arborizado com redes de descanso sob a sombra das árvores, cantinhos zen à beira d'água e contato puro com os pássaros da serra.",
      badge: "Paz & Contemplação",
      image: "/recanto/hero-pousada-real.jpg",
    },
    {
      icon: Car,
      title: "Estacionamento & Wi-Fi Grátis",
      desc: "Parking privativo gratuito adaptado para mobilidade reduzida no próprio local e Wi-Fi de alta velocidade sem custo adicional.",
      badge: "Comodidade Total",
      image: "/recanto/estacionamento-chalets.jpg",
    },
  ];

  const adventures = [
    {
      title: "Pico do Peito do Pombo",
      tag: "Trekking de Altitude",
      icon: Mountain,
      desc: "Trilha guiada até a formação rochosa mais mística do Sana (1.400m de altitude). Vista deslumbrante em 360° para todas as montanhas e o litoral.",
      image: "/recanto/peito-do-pombo-sana.jpg",
      whatsappUrl:
        "https://wa.me/5522981054265?text=Ol%C3%A1%2C+gostaria+de+informa%C3%A7%C3%B5es+sobre+o+passeio+ao+Peito+do+Pombo+na+Pousada+Recanto+dos+P%C3%A1ssaros",
    },
    {
      title: "Passeios a Cavalo",
      tag: "Cavalgada na Mata",
      icon: Compass,
      desc: "Cavalgadas ecológicas pelas trilhas preservadas da serra e margens de rios cristalinos. Passeio calmo e seguro com guias para casais e famílias.",
      image: "/recanto/trilhas-cavalgadas-sana.jpg",
      whatsappUrl:
        "https://wa.me/5522981054265?text=Ol%C3%A1%2C+gostaria+de+informa%C3%A7%C3%B5es+sobre+os+passeios+a+cavalo+na+Pousada+Recanto+dos+P%C3%A1ssaros",
    },
    {
      title: "Passeio 4x4 Aventura",
      tag: "Expedição Off-Road",
      icon: Car,
      desc: "Roteiro off-road emocionante por estradas de serra secretas, cachoeiras remotas de acesso exclusivo e mirantes panorâmicos com segurança.",
      image: "/recanto/aventura-4x4-sana.jpg",
      whatsappUrl:
        "https://wa.me/5522981054265?text=Ol%C3%A1%2C+gostaria+de+informa%C3%A7%C3%B5es+sobre+o+passeio+4x4+aventura+na+Pousada+Recanto+dos+P%C3%A1ssaros",
    },
  ];

  const WHATSAPP_DAYUSE_URL =
    "https://wa.me/5522981054265?text=Ol%C3%A1%2C+gostaria+de+informa%C3%A7%C3%B5es+sobre+o+Day+Use+na+Pousada+Recanto+dos+P%C3%A1ssaros";

  return (
    <section id="lazer" className="py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden">
      {/* Warm ambient glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[960px] h-[960px] bg-[radial-gradient(circle,rgba(194,157,89,0.1)_0%,transparent_70%)] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20 space-y-4">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-[#C29D59]/40 text-[#E6C994] text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-xs">
            <span>Lazer, Natureza & Serviços Exclusivos</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Mais do que uma pousada: um{" "}
            <span className="italic font-normal text-[#E6C994]">oásis de lazer na serra.</span>
          </h2>

          <p className="text-zinc-300 text-[15px] sm:text-lg font-light leading-relaxed max-w-[62ch] mx-auto">
            Do deck solário de madeira com espreguiçadeiras ao mergulho no rio cristalino, partida de bilhar e ping-pong, bar no local e parquinho para as crianças.
          </p>
        </div>

        {/* 4 Leisure Experience Cards (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-16">
          {leisureItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                className="rounded-[2rem] sm:rounded-[2.4rem] bg-gradient-to-b from-[#0A140F]/90 via-[#0A140F]/80 to-[#050B07]/90 border border-[#C29D59]/30 hover:border-[#C29D59]/60 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_25px_50px_rgba(194,157,89,0.18)] hover:-translate-y-1 transition-all duration-400 flex flex-col sm:flex-row group backdrop-blur-2xl"
              >
                {/* Photo Left/Top with Integrated Icon Badges */}
                <div className="relative h-52 sm:h-auto sm:w-2/5 shrink-0 overflow-hidden bg-black/40">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/80 via-transparent to-black/30" />
                  
                  {/* Category Pill with Icon */}
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#0A140F]/90 text-[#E6C994] border border-[#C29D59]/40 shadow-sm backdrop-blur-md">
                    <Icon className="w-3.5 h-3.5 text-[#C29D59] shrink-0" />
                    <span>{item.tag}</span>
                  </span>

                  {/* Sleek Icon Badge Placed Directly on the Image */}
                  <div className="absolute bottom-3 right-3 w-9 h-9 rounded-xl bg-[#0A140F]/85 border border-[#C29D59]/40 flex items-center justify-center text-[#E6C994] shadow-md backdrop-blur-md">
                    <Icon className="w-4 h-4 text-[#C29D59]" />
                  </div>
                </div>

                {/* Content Right/Bottom — Streamlined without duplicate icon row */}
                <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between text-left space-y-2">
                  <div>
                    <h3 className="font-serif font-bold text-lg sm:text-xl text-white group-hover:text-[#E6C994] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-zinc-300 text-xs sm:text-sm font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 4 Value Pillars: Day Use, Bar, Trilhas & Estacionamento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10 sm:mb-12">
          {services.map((srv, i) => {
            const Icon = srv.icon;
            return (
              <div
                key={i}
                className="rounded-[2rem] bg-gradient-to-b from-[#0A140F]/85 to-[#050B07]/85 border border-[#C29D59]/25 hover:border-[#C29D59]/50 shadow-xl hover:shadow-[0_20px_45px_rgba(194,157,89,0.14)] transition-all duration-400 flex flex-col justify-between text-left backdrop-blur-xl overflow-hidden group"
              >
                {srv.image && (
                  <div className="relative h-44 w-full overflow-hidden shrink-0">
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A140F] via-transparent to-black/30" />
                    <span className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-black/60 text-[10px] font-bold text-[#E6C994] border border-[#C29D59]/30 backdrop-blur-md shadow-xs">
                      {srv.badge}
                    </span>
                  </div>
                )}

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {!srv.image && (
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-11 h-11 rounded-2xl bg-[#C29D59]/15 border border-[#C29D59]/30 flex items-center justify-center text-[#E6C994]">
                          <Icon className="w-5 h-5 text-[#C29D59]" />
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-[#1B3B2B]/60 text-[10px] font-bold text-[#E6C994] border border-[#C29D59]/30 shadow-xs">
                          {srv.badge}
                        </span>
                      </div>
                    )}

                    <h4 className="font-serif text-lg font-bold text-white mb-2">
                      {srv.title}
                    </h4>
                    <p className="text-zinc-300 text-sm font-light leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Aventuras & Ecoturismo: Peito do Pombo, Passeios a Cavalo, 4x4 Aventura */}
        <div id="aventuras" className="mt-14 sm:mt-20 mb-12 sm:mb-16">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C29D59]/40 text-[#E6C994] text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-xs">
              <Compass className="w-3.5 h-3.5 text-[#C29D59]" />
              <span>A Pousada Também Oferece</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight">
              Aventuras & Ecoturismo no Sana
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base font-light max-w-[62ch] mx-auto">
              Viva experiências inesquecíveis nas montanhas. Organizamos passeios guiados exclusivos para você e sua família durante a sua estadia:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {adventures.map((adv, idx) => {
              const AdvIcon = adv.icon;
              return (
                <div
                  key={idx}
                  className="rounded-[2.2rem] bg-gradient-to-b from-[#0A140F]/90 via-[#0A140F]/80 to-[#050B07]/90 border border-[#C29D59]/30 hover:border-[#C29D59]/60 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_25px_50px_rgba(194,157,89,0.18)] transition-all duration-500 overflow-hidden flex flex-col justify-between group backdrop-blur-2xl"
                >
                  {/* Photo Frame */}
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-black/40">
                    <Image
                      src={adv.image}
                      alt={adv.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050B07] via-transparent to-black/30" />
                    <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#0A140F]/90 text-[#E6C994] border border-[#C29D59]/40 shadow-sm backdrop-blur-md">
                      {adv.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between text-left space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-[#E6C994]">
                        <AdvIcon className="w-4 h-4 text-[#C29D59]" />
                        <span className="text-[11px] uppercase tracking-wider font-bold">Experiência Guiada</span>
                      </div>
                      <h4 className="font-serif font-bold text-xl sm:text-2xl text-white group-hover:text-[#E6C994] transition-colors">
                        {adv.title}
                      </h4>
                      <p className="mt-2.5 text-zinc-300 text-sm font-light leading-relaxed">
                        {adv.desc}
                      </p>
                    </div>

                    <a
                      href={adv.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-white/[0.08] hover:bg-[#C29D59] hover:text-[#050B07] text-[#E6C994] font-semibold text-xs border border-[#C29D59]/40 transition-all duration-300 shadow-sm"
                    >
                      <span>Consultar & Agendar</span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Day Use & Horários Callout Banner */}
        <div className="relative p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left border border-[#C29D59]/40 backdrop-blur-2xl overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/recanto/dayuse-quiosque-redes.jpg"
              alt="Quiosque e redes para Day Use na Pousada Recanto dos Pássaros"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050B07]/95 via-[#0A140F]/90 to-[#050B07]/85 backdrop-blur-[2px]" />
          </div>

          <div className="space-y-2 relative z-10">
            <span className="text-xs font-bold text-[#E6C994] uppercase tracking-wider block">
              Horários & Day Use na Serra
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Check-in a partir das 14h • Check-out até as 12h
            </h3>
            <p className="text-zinc-300 text-sm font-light max-w-[58ch] mx-auto lg:mx-0">
              Passe o dia curtindo o quiosque com redes, o rio privativo e a natureza com nosso Day Use ou garanta sua hospedagem com café da manhã excepcional incluso.
            </p>
          </div>

          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 shrink-0 relative z-10">
            <a
              href={WHATSAPP_DAYUSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[48px] px-7 py-3.5 rounded-full bg-[#C29D59] hover:bg-[#D4AF67] active:bg-[#B38C48] text-[#14221A] font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span>Consultar Day Use</span>
              <ArrowRight className="w-4 h-4 text-[#14221A]" />
            </a>

            <button
              type="button"
              onClick={() => openBooking()}
              className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/25 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center cursor-pointer"
            >
              Reservar Diária Completa
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
