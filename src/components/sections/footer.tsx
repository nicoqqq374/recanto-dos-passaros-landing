"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Heart, Waves, Coffee, Star } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

export function Footer() {
  const WHATSAPP_URL =
    "https://wa.me/5522981054265?text=Ol%C3%A1%2C+gostaria+de+informa%C3%A7%C3%B5es+sobre+reservas+na+Pousada+Recanto+dos+P%C3%A1ssaros";

  const footerLinks = [
    { href: "#chales", label: "Chalés & Suítes" },
    { href: "#rio", label: "Rio & Piscinas" },
    { href: "#lazer", label: "Lazer & Day Use" },
    { href: "#cafe", label: "Café Colonial" },
    { href: "#pet-friendly", label: "Pet Friendly VIP" },
    { href: "#galeria", label: "Galeria de Fotos" },
    { href: "#avaliacoes", label: "Avaliações 9.1" },
    { href: "#localizacao", label: "Como Chegar" },
  ];

  return (
    <footer className="bg-[#050B07]/90 backdrop-blur-2xl border-t border-[#C29D59]/25 pt-8 sm:pt-10 pb-32 sm:pb-24 px-4 sm:px-6 lg:px-8 text-zinc-300 text-xs sm:text-[13px] relative overflow-hidden">
      {/* Subtle top gold accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 max-w-4xl h-px bg-gradient-to-r from-transparent via-[#C29D59]/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 text-left">
        {/* Main 4-Column Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 mb-6 sm:mb-8">
          
          {/* Col 1: Brand (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-2.5">
            <Link
              href="#"
              className="inline-flex items-center gap-3 group shrink-0 select-none"
            >
              <div className="relative w-11 h-11 shrink-0 aspect-square overflow-hidden rounded-full shadow-md group-hover:scale-105 transition-transform bg-white/5 p-0.5 border border-[#C29D59]/40">
                <Image
                  src="/logo.png"
                  alt="Pousada Recanto dos Pássaros Sana Chalés"
                  fill
                  className="object-contain"
                  sizes="44px"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-white group-hover:text-[#E6C994] transition-colors leading-tight">
                  Recanto dos Pássaros
                </span>
                <span className="text-[10px] tracking-widest text-[#C29D59] uppercase font-semibold">
                  Sana Chalés · Sana RJ
                </span>
              </div>
            </Link>

            <p className="text-zinc-300 leading-relaxed font-light text-xs max-w-[38ch]">
              Refúgio sereno na serra do Sana com rio de nascente privativo, deck solário com espreguiçadeiras, café artesanal e acolhimento pet friendly de verdade.
            </p>

            <div className="inline-flex items-center gap-1.5 text-[#E6C994] text-[11px] font-medium pt-0.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C29D59] shrink-0" />
              <span>Reservas Oficiais com Confirmação Imediata</span>
            </div>
          </div>

          {/* Col 2: Navigation 2-col compact (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-2.5 text-[#E6C994]">
              Navegação
            </h4>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-block py-0.5 text-zinc-300 hover:text-[#E6C994] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Diferenciais (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-2">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-2.5 text-[#E6C994]">
              Destaques
            </h4>
            <ul className="space-y-1.5 text-xs text-zinc-300">
              <li className="flex items-center gap-2">
                <Waves className="w-3.5 h-3.5 text-[#C29D59] shrink-0" />
                <span>Rio no Quintal</span>
              </li>
              <li className="flex items-center gap-2">
                <Coffee className="w-3.5 h-3.5 text-[#C29D59] shrink-0" />
                <span>Café da Roça Incluso</span>
              </li>
              <li className="flex items-center gap-2">
                <Heart className="w-3.5 h-3.5 text-[#C29D59] shrink-0" />
                <span>100% Pet Friendly</span>
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-3.5 h-3.5 fill-[#C29D59] text-[#C29D59] shrink-0" />
                <span>Nota 9.1 no Booking</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contato & WhatsApp (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-2 text-[#E6C994]">
              Atendimento & Contato
            </h4>
            <div className="space-y-1.5 text-xs text-zinc-300">
              <p className="leading-snug">
                <span className="text-white font-medium block">Estrada Principal do Sana, s/n</span>
                <span className="text-zinc-400 text-[11px]">Boa Sorte · Sana, Macaé — RJ (2 km do centro)</span>
              </p>

              <div className="pt-1">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[38px] px-3.5 py-1.5 rounded-xl bg-[#1B3B2B] hover:bg-[#234B37] text-white font-semibold text-xs inline-flex items-center gap-2 border border-[#C29D59]/40 hover:border-[#C29D59]/70 transition-all active:scale-95 shadow-sm group"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#E6C994] group-hover:scale-105 transition-transform" />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>

              <p className="text-[11px] text-zinc-400 pt-0.5">
                Check-in a partir das 14h • Check-out até 12h
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Devisão Studio Signature */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-zinc-400">
          <div>
            <p>
              © {new Date().getFullYear()} Pousada Recanto dos Pássaros. Todos os direitos reservados.
            </p>
            <p className="text-[11px] text-zinc-500 mt-0.5">
              Sana, Macaé — RJ · Motor Oficial Simple Reservas
            </p>
          </div>

          {/* DEVISÃO STUDIO Signature */}
          <div className="flex items-center gap-1.5 text-xs text-zinc-400">
            <span>Desenvolvido por</span>
            <a
              href="https://devisaostudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#F97316]/50 transition-all font-bold cursor-pointer"
              title="DEVISÃO STUDIO — devisaostudio.com"
            >
              <span className="text-xs font-extrabold tracking-tight">
                <span className="text-white">DE</span>
                <span className="text-[#F97316] font-black drop-shadow-[0_0_6px_rgba(249,115,22,0.6)]">V</span>
                <span className="text-white">ISÃO</span>
              </span>
              <span className="text-zinc-400 text-[9px] uppercase tracking-widest font-semibold group-hover:text-white transition-colors">
                STUDIO
              </span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
