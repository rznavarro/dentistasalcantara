/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { MessageCircle, Phone, Star, MapPin, Award, Calendar } from "lucide-react";
import { CLINIC_CONTACT, WHATSAPP_URLS } from "../data/clinicData";
import { trackWhatsAppClick, trackPhoneClick } from "../utils/analytics";

export const Hero: React.FC = () => {
  const [imgFailed, setImgFailed] = useState(false);
  const [ratingVal, setRatingVal] = useState("4.0");
  const [reviewsCount, setReviewsCount] = useState(15);
  const [yearVal, setYearVal] = useState(1990);

  // Smooth entrance counter animation
  useEffect(() => {
    // Check if prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setRatingVal("4,8");
      setReviewsCount(26);
      setYearVal(1995);
      return;
    }

    const duration = 1200;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      const currentRating = (4.0 + 0.8 * easeProgress).toFixed(1).replace(".", ",");
      const currentReviews = Math.round(15 + 11 * easeProgress);
      const currentYear = Math.round(1980 + 15 * easeProgress);

      setRatingVal(currentRating);
      setReviewsCount(currentReviews);
      setYearVal(currentYear);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white border-b border-[#E3E9F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-[#0B5FA5]">
              <span className="w-2 h-2 rounded-full bg-[#18B4A8]" aria-hidden="true" />
              <span>Clínica Odontológica en Las Condes</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#5A6B80]">Metro Alcántara</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F1B2D] font-display leading-[1.15] text-balance">
              Dentistas en Las Condes que te sacan del dolor hoy y cuidan tu sonrisa por años
            </h1>

            <p className="text-base sm:text-lg text-[#5A6B80] leading-relaxed max-w-2xl">
              Clínica con más de 30 años y especialistas en urgencias, implantes, ortodoncia y bruxismo. A pasos del Metro Alcántara. Atendemos de lunes a domingo, también festivos.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={WHATSAPP_URLS.general}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("hero")}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-bold text-white bg-[#25D366] hover:bg-[#1EBE5A] rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white text-transparent shrink-0" />
                <span>Pedir hora por WhatsApp</span>
              </a>

              <a
                href={CLINIC_CONTACT.phones[0].tel}
                onClick={() => trackPhoneClick("hero", CLINIC_CONTACT.phones[0].tel)}
                className="inline-flex items-center justify-center gap-2.5 px-5 py-4 text-sm font-semibold text-[#0B5FA5] bg-[#F5F8FB] hover:bg-[#E3E9F0] border border-[#E3E9F0] rounded-2xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-4 h-4 text-[#0B5FA5]" />
                <span>Llamar al 2 2206 1380</span>
              </a>
            </div>

            {/* Quick proof chips / trust badges - Anti-slop clean text layout */}
            <div className="pt-4 border-t border-[#E3E9F0] flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-[#5A6B80]">
              <div className="flex items-center gap-1.5 font-medium text-[#0F1B2D]">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
                <span className="tabular-nums font-semibold">★ {ratingVal} de 5</span>
                <span className="text-[#5A6B80] tabular-nums">({reviewsCount} opiniones)</span>
              </div>
              <span aria-hidden="true" className="text-[#E3E9F0]">|</span>
              <div className="flex items-center gap-1.5 font-medium">
                <Calendar className="w-4 h-4 text-[#0B5FA5] shrink-0" />
                <span>Desde <strong className="tabular-nums text-[#0F1B2D]">{yearVal}</strong></span>
              </div>
              <span aria-hidden="true" className="text-[#E3E9F0]">|</span>
              <div className="flex items-center gap-1.5 font-medium">
                <Award className="w-4 h-4 text-[#18B4A8] shrink-0" />
                <span>Convenio Tarjeta Vecino Las Condes</span>
              </div>
              <span aria-hidden="true" className="text-[#E3E9F0]">|</span>
              <div className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-4 h-4 text-[#0B5FA5] shrink-0" />
                <span>Metro Alcántara L1</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset (Single image with subtle Ken Burns) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E3E9F0] bg-[#F5F8FB] aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] max-h-[460px]">
              {!imgFailed ? (
                <img
                  src="https://www.dentistasalcantara.cl/images/2/slide1.jpg"
                  alt="Equipo odontológico y consulta en Dentistas Alcántara Las Condes"
                  className="w-full h-full object-cover animate-ken-burns transition-transform duration-700"
                  onError={() => setImgFailed(true)}
                  fetchPriority="high"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#0B5FA5]/10 via-[#18B4A8]/10 to-white text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#0B5FA5]/10 flex items-center justify-center mb-4 text-[#0B5FA5]">
                    <Award className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F1B2D] font-display mb-1">
                    Dentistas Alcántara
                  </h3>
                  <p className="text-xs text-[#5A6B80]">
                    Atención odontológica integral en Av. Apoquindo 3990, Las Condes
                  </p>
                </div>
              )}

              {/* Discreet floating reassurance banner */}
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/90 backdrop-blur-md rounded-2xl border border-white/60 shadow-md flex items-center justify-between text-xs text-[#0F1B2D]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#25D366]" />
                  <span className="font-semibold">Atención hoy disponible</span>
                </div>
                <span className="text-[#5A6B80]">Lun a Dom 8:00 - 23:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
