/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
import { CLINIC_CONTACT, WHATSAPP_URLS } from "../data/clinicData";
import { trackWhatsAppClick, trackPhoneClick } from "../utils/analytics";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Urgencias", href: "#urgencias" },
    { label: "Tratamientos", href: "#tratamientos" },
    { label: "Equipo", href: "#equipo" },
    { label: "Opiniones", href: "#opiniones" },
    { label: "Ubicación", href: "#ubicacion" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E3E9F0] py-2.5"
          : "bg-white border-b border-[#E3E9F0]/60 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 md:gap-8">
        {/* Zone 1: Brand Wordmark / Logo */}
        <a
          href="#"
          className="flex items-center gap-3 shrink-0 focus-visible:outline-[#0B5FA5] focus-visible:outline-2 rounded-lg"
          title="Dentistas Alcántara - Inicio"
        >
          {!imgError ? (
            <img
              src="https://www.dentistasalcantara.cl/images/1/logo.png"
              alt="Dentistas Alcántara - Agrupación Odontológica Alcántara"
              className={`transition-all duration-300 object-contain ${
                isScrolled ? "h-9 w-auto" : "h-11 md:h-12 w-auto"
              }`}
              onError={() => setImgError(true)}
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#0B5FA5] font-display">
                Dentistas Alcántara
              </span>
              <span className="text-[11px] text-[#5A6B80] -mt-0.5">
                Las Condes · Desde 1995
              </span>
            </div>
          )}
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav
          aria-label="Navegación principal"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#5A6B80]"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#0B5FA5] transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#0B5FA5] rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Mobile controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Mobile direct call button */}
          <a
            href={CLINIC_CONTACT.phones[0].tel}
            onClick={() => trackPhoneClick("header_mobile", CLINIC_CONTACT.phones[0].tel)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-xl text-[#0B5FA5] bg-[#F5F8FB] hover:bg-[#E3E9F0] transition-colors"
            aria-label="Llamar a la clínica"
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* Desktop Call link */}
          <a
            href={CLINIC_CONTACT.phones[0].tel}
            onClick={() => trackPhoneClick("header_desktop", CLINIC_CONTACT.phones[0].tel)}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#0B5FA5] hover:bg-[#F5F8FB] rounded-xl transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>2 2206 1380</span>
          </a>

          {/* WhatsApp Primary Button */}
          <a
            href={WHATSAPP_URLS.general}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("header")}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#1EBE5A] rounded-xl shadow-sm transition-transform active:scale-95 whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white text-transparent shrink-0" />
            <span>Pedir hora</span>
          </a>

          {/* Hamburger Menu Toggle (Mobile) */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-xl text-[#0F1B2D] hover:bg-[#F5F8FB] transition-colors focus-visible:outline-[#0B5FA5]"
            aria-label={isMobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E3E9F0] bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-[#0F1B2D] hover:bg-[#F5F8FB] hover:text-[#0B5FA5] rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#E3E9F0] flex flex-col gap-2.5">
            <a
              href={WHATSAPP_URLS.general}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackWhatsAppClick("header_drawer");
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white bg-[#25D366] rounded-xl shadow-sm active:scale-98"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              Pedir hora por WhatsApp
            </a>
            <a
              href={CLINIC_CONTACT.phones[0].tel}
              onClick={() => {
                trackPhoneClick("header_drawer", CLINIC_CONTACT.phones[0].tel);
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-[#0B5FA5] bg-[#F5F8FB] hover:bg-[#E3E9F0] rounded-xl"
            >
              <Phone className="w-4 h-4" />
              Llamar al 2 2206 1380
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
