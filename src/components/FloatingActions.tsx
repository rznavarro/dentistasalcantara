/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { MessageCircle, Phone } from "lucide-react";
import { CLINIC_CONTACT, WHATSAPP_URLS } from "../data/clinicData";
import { trackWhatsAppClick, trackPhoneClick } from "../utils/analytics";

export const FloatingActions: React.FC = () => {
  return (
    <>
      {/* Desktop Floating WhatsApp Button (bottom-right) */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <a
          href={WHATSAPP_URLS.general}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick("flotante_desktop")}
          className="group flex items-center gap-2.5 px-5 py-3.5 bg-[#25D366] hover:bg-[#1EBE5A] text-white font-bold text-sm rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 animate-whatsapp-pulse cursor-pointer border-2 border-white/80"
          title="Pedir hora por WhatsApp"
          aria-label="Pedir hora por WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white text-transparent shrink-0" />
          <span className="font-display tracking-tight">Pedir hora</span>
        </a>
      </div>

      {/* Mobile Fixed Bottom Bar (WhatsApp + Call)
          Under 15% mobile viewport height (height ~60px) */}
      <aside aria-label="Acciones rápidas de contacto" className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#E3E9F0] px-3 py-2 shadow-lg">
        <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
          {/* Mobile WhatsApp Button */}
          <a
            href={WHATSAPP_URLS.general}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("barra_fija_movil")}
            className="flex items-center justify-center gap-1.5 h-11 px-2.5 bg-[#25D366] active:bg-[#1EBE5A] text-white font-bold text-xs rounded-xl shadow-xs active:scale-98"
          >
            <MessageCircle className="w-4 h-4 fill-white text-transparent shrink-0" />
            <span className="truncate">WhatsApp · Pedir hora</span>
          </a>

          {/* Mobile Call Button */}
          <a
            href={CLINIC_CONTACT.phones[0].tel}
            onClick={() => trackPhoneClick("barra_fija_movil", CLINIC_CONTACT.phones[0].tel)}
            className="flex items-center justify-center gap-1.5 h-11 px-2.5 bg-[#0B5FA5] active:bg-[#084980] text-white font-bold text-xs rounded-xl shadow-xs active:scale-98"
          >
            <Phone className="w-4 h-4 text-white shrink-0" />
            <span className="truncate">Llamar clínica</span>
          </a>
        </div>
      </aside>
    </>
  );
};
