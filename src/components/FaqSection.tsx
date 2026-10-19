/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react";
import { FAQS, WHATSAPP_URLS } from "../data/clinicData";
import { trackWhatsAppClick } from "../utils/analytics";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-white border-b border-[#E3E9F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#0B5FA5]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Respuestas claras</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F1B2D] font-display text-balance">
            Preguntas frecuentes
          </h2>

          <p className="text-base text-[#5A6B80]">
            Todo lo que necesitas saber antes de tu visita a nuestra clínica en Las Condes.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-[#E3E9F0] overflow-hidden bg-[#F5F8FB] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full py-4 sm:py-5 px-6 text-left flex items-center justify-between gap-4 font-display font-semibold text-[#0F1B2D] text-base hover:text-[#0B5FA5] transition-colors focus-visible:outline-[#0B5FA5]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#E3E9F0] transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#0B5FA5]" : "text-[#5A6B80]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-6 pb-5 pt-1 text-sm text-[#5A6B80] leading-relaxed border-t border-[#E3E9F0]/60 bg-white"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-[#5A6B80] mb-4">
            ¿Tienes otra duda o consulta sobre tu caso?
          </p>
          <a
            href={WHATSAPP_URLS.custom("Hola, tengo una pregunta sobre la atención en Dentistas Alcántara")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("faq_cta")}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#25D366] hover:bg-[#1EBE5A] rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-4 h-4 fill-white text-transparent shrink-0" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
