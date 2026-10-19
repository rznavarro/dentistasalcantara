/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react";
import { Star, MessageCircle, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { REVIEWS, WHATSAPP_URLS } from "../data/clinicData";
import { trackWhatsAppClick } from "../utils/analytics";

export const ReviewsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="opiniones" className="py-14 sm:py-20 bg-white border-b border-[#E3E9F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#0B5FA5]">
              <span>Experiencias verificadas</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F1B2D] font-display text-balance">
              Lo que dicen nuestros pacientes
            </h2>

            <div className="flex items-center gap-3 pt-1 text-sm sm:text-base font-medium text-[#0F1B2D]">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>
              <span className="font-bold tabular-nums">4,8 de 5</span>
              <span className="text-[#5A6B80]">·</span>
              <span className="text-[#5A6B80] tabular-nums">26 opiniones</span>
            </div>
          </div>

          {/* Desktop/Tablet scroll arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              className="p-2.5 rounded-full border border-[#E3E9F0] text-[#0F1B2D] hover:bg-[#F5F8FB] hover:border-[#0B5FA5] transition-colors focus-visible:outline-[#0B5FA5]"
              aria-label="Ver opiniones anteriores"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              className="p-2.5 rounded-full border border-[#E3E9F0] text-[#0F1B2D] hover:bg-[#F5F8FB] hover:border-[#0B5FA5] transition-colors focus-visible:outline-[#0B5FA5]"
              aria-label="Ver siguientes opiniones"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Reviews Container with Mobile Scroll Snap & Grid on Desktop */}
        <div
          ref={scrollRef}
          className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth scrollbar-none"
        >
          {REVIEWS.map((rev) => (
            <article
              key={rev.id}
              className="w-[85vw] sm:w-[360px] lg:w-auto shrink-0 snap-center bg-[#F5F8FB] p-6 rounded-3xl border border-[#E3E9F0] flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#0B5FA5]/20" />
                </div>

                <p className="text-sm text-[#0F1B2D] leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E3E9F0] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#0B5FA5] text-white flex items-center justify-center font-bold text-xs">
                    {rev.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0F1B2D]">{rev.author}</h3>
                    <p className="text-[11px] text-[#5A6B80]">{rev.date}</p>
                  </div>
                </div>
                <span className="text-[11px] text-[#18B4A8] font-medium">Paciente verificado</span>
              </div>
            </article>
          ))}
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_URLS.general}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("opiniones_cta")}
            className="inline-flex items-center gap-2.5 px-7 py-4 text-base font-bold text-white bg-[#25D366] hover:bg-[#1EBE5A] rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 fill-white text-transparent shrink-0" />
            <span>Pedir hora por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
