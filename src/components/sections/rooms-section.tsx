"use client";

import React, { useState, useRef } from "react";
import type { Room } from "@/data/rooms";
import { Users, BedDouble, Check, Calendar, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { useBooking } from "@/context/booking-context";
import { RoomDetailModal } from "@/components/ui/room-detail-modal";
import Image from "next/image";

interface RoomCardProps {
  room: Room;
  onSelect: (room: Room) => void;
  onBook: (id: string, name: string) => void;
}

function RoomCard({ room, onSelect, onBook }: RoomCardProps) {
  return (
    <div className="flex flex-col h-full rounded-[2rem] sm:rounded-[2.4rem] bg-[#0A140F]/85 border border-[#C29D59]/35 hover:border-[#C29D59]/70 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_25px_60px_rgba(194,157,89,0.25)] hover:-translate-y-1 transition-all duration-500 group backdrop-blur-2xl text-white">
      {/* Room Image Frame (Semantic Button for Keyboard & Touch Accessibility) */}
      <button
        type="button"
        onClick={() => onSelect(room)}
        aria-label={`Ver fotos e detalhes de ${room.name}`}
        className="relative h-60 w-full overflow-hidden bg-[#07100A] cursor-pointer shrink-0 text-left block border-0 p-0"
      >
        <Image
          src={room.images[0] || "/recanto/hero-pousada-real.jpg"}
          alt={room.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 88vw, 380px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

        {/* Badges on Card */}
        <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5 z-10">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-black/60 text-[#E6C994] border border-[#C29D59]/40 shadow-sm backdrop-blur-md uppercase tracking-wider">
            {room.typeName}
          </span>
          {room.badge && (
            <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#C29D59] text-[#050B07] shadow-sm">
              {room.badge}
            </span>
          )}
        </div>

        {/* Capacity badge */}
        <div className="absolute bottom-3 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[11px] text-white font-medium z-10 border border-white/10">
          <Users className="w-3.5 h-3.5 text-[#C29D59]" />
          <span>
            {room.capacity} {room.capacity > 1 ? "hóspedes" : "hóspede"}
          </span>
          <span className="text-zinc-400">•</span>
          <span className="text-[#E6C994]">Pet Friendly</span>
        </div>
      </button>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4 text-left">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#E6C994] transition-colors">
            <button
              type="button"
              onClick={() => onSelect(room)}
              className="text-left hover:underline cursor-pointer bg-transparent border-0 p-0 font-inherit"
            >
              {room.name}
            </button>
          </h3>
          <p className="mt-2 text-zinc-300 text-sm sm:text-[15px] line-clamp-2 leading-relaxed font-light">
            {room.description}
          </p>
        </div>

        {/* Features Chips */}
        <div className="space-y-1.5 pt-3 border-t border-white/10">
          {room.features.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs sm:text-[13px] text-zinc-200">
              <Check className="w-3.5 h-3.5 text-[#C29D59] shrink-0" />
              <span className="truncate">{feat}</span>
            </div>
          ))}
        </div>

        {/* Price & Action Buttons */}
        <div className="pt-4 border-t border-white/10 space-y-3">
          <div className="flex items-center justify-between gap-2">
            <div>
              {room.price > 0 ? (
                <div>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider block font-semibold">Diária a partir de</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-[#E6C994] font-bold">R$</span>
                    <span className="text-2xl font-extrabold text-white tracking-tight">{room.price}</span>
                    <span className="text-xs text-zinc-400 font-normal">/noite</span>
                  </div>
                </div>
              ) : (
                <div>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider block font-semibold">Tarifa</span>
                  <span className="text-sm font-bold text-white">Sob consulta</span>
                </div>
              )}
            </div>

            {/* Ver Fotos Button (>= 44px height) */}
            <button
              type="button"
              onClick={() => onSelect(room)}
              className="min-h-[44px] flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 active:scale-95 transition-all cursor-pointer border border-white/15"
            >
              <Eye className="w-3.5 h-3.5 text-[#C29D59]" />
              <span>Ver Fotos</span>
            </button>
          </div>

          {/* Full-width High-Converting Reservar Button (>= 48px height) */}
          <button
            type="button"
            onClick={() => onBook(room.id, room.name)}
            className="w-full min-h-[48px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-[#050B07] bg-[#C29D59] hover:bg-[#D4AF67] active:bg-[#B8924E] shadow-[0_0_20px_rgba(194,157,89,0.35)] hover:shadow-[0_0_30px_rgba(194,157,89,0.55)] transition-all cursor-pointer active:scale-[0.98]"
          >
            <Calendar className="w-4 h-4 text-[#050B07]" />
            <span>Reservar este Chalé</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export function RoomsSection() {
  const { openBooking, rooms, setFilters } = useBooking();
  const [selectedRoomForModalId, setSelectedRoomForModalId] = useState<string | null>(null);
  const selectedRoomForModal = rooms.find((room) => room.id === selectedRoomForModalId) ?? null;
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  return (
    <section id="chales" className="py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 lg:mb-16 gap-6 text-left">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/55 border border-[#C29D59]/40 text-[#E6C994] text-xs font-semibold uppercase tracking-wider backdrop-blur-xl shadow-lg">
              <BedDouble className="w-3.5 h-3.5 text-[#C29D59]" />
              <span>Acomodações com Privacidade & Conforto Total</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
              Chalés & suítes para casais, famílias e{" "}
              <span className="italic font-normal text-[#E6C994]">grupos na serra.</span>
            </h2>

            <p className="text-zinc-200 text-[15px] sm:text-lg font-light leading-relaxed max-w-[62ch] drop-shadow-sm">
              Capacidade para diferentes tamanhos de grupos. Todos equipados com varanda e rede (com vista para jardim, montanhas ou rio), banheiro privativo, TV, ar-condicionado e café da manhã farto incluso.
            </p>
          </div>

          {/* Desktop Navigation Arrows */}
          <div className="hidden sm:flex items-center gap-2 self-start md:self-end">
            <button
              type="button"
              onClick={scrollPrev}
              className="min-w-[44px] min-h-[44px] p-3 rounded-full bg-black/60 border border-white/20 text-white hover:bg-[#C29D59] hover:text-[#050B07] active:scale-95 transition-all shadow-lg cursor-pointer flex items-center justify-center backdrop-blur-xl"
              aria-label="Chalé anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="min-w-[44px] min-h-[44px] p-3 rounded-full bg-black/60 border border-white/20 text-white hover:bg-[#C29D59] hover:text-[#050B07] active:scale-95 transition-all shadow-lg cursor-pointer flex items-center justify-center backdrop-blur-xl"
              aria-label="Próximo chalé"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Rooms Grid / Carousel */}
        <div
          ref={carouselRef}
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 no-scrollbar snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {rooms.map((room) => (
            <div key={room.id} className="w-[86vw] max-w-[360px] sm:w-auto sm:max-w-none shrink-0 snap-center">
              <RoomCard
                room={room}
                onSelect={(r) => setSelectedRoomForModalId(r.id)}
                onBook={(id, name) => {
                  setFilters({ roomId: id, roomName: name });
                  const el = document.getElementById("reservas");
                  if (el) {
                    const yOffset = -75;
                    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  } else {
                    openBooking(id, name);
                  }
                }}
              />
            </div>
          ))}
        </div>

        {/* Mobile Carousel Controls & Affordance */}
        <div className="flex sm:hidden items-center justify-between mt-3 px-1">
          <span className="text-xs text-zinc-300 font-medium">
            ← Deslize para ver todas as suítes →
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={scrollPrev}
              className="min-w-[44px] min-h-[44px] rounded-full bg-[#0A140F]/85 border border-[#C29D59]/40 text-[#E6C994] active:bg-[#C29D59] active:text-[#050B07] active:scale-95 transition-all shadow-md flex items-center justify-center cursor-pointer"
              aria-label="Chalé anterior"
            >
              <ChevronLeft className="w-4.5 h-4.5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="min-w-[44px] min-h-[44px] rounded-full bg-[#0A140F]/85 border border-[#C29D59]/40 text-[#E6C994] active:bg-[#C29D59] active:text-[#050B07] active:scale-95 transition-all shadow-md flex items-center justify-center cursor-pointer"
              aria-label="Próximo chalé"
            >
              <ChevronRight className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal de Detalhes da Acomodação */}
      <RoomDetailModal
        room={selectedRoomForModal}
        onClose={() => setSelectedRoomForModalId(null)}
      />
    </section>
  );
}
