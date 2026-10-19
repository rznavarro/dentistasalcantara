/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Phone, AlertCircle } from "lucide-react";
import { CLINIC_CONTACT } from "../data/clinicData";
import { trackPhoneClick } from "../utils/analytics";

export const TopBar: React.FC = () => {
  return (
    <aside aria-label="Aviso de urgencias y contacto rápido" className="bg-[#0B5FA5] text-white text-xs md:text-sm py-2 px-4 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2 font-medium">
          <AlertCircle className="w-3.5 h-3.5 text-[#18B4A8] shrink-0" aria-hidden="true" />
          <span>
            Urgencias dentales todos los días, incluso fines de semana y festivos
          </span>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <a
            href={CLINIC_CONTACT.phones[0].tel}
            onClick={() => trackPhoneClick("topbar", CLINIC_CONTACT.phones[0].tel)}
            className="flex items-center gap-1.5 font-semibold text-white hover:text-[#18B4A8] transition-colors"
            title="Llamar directamente a la clínica"
          >
            <Phone className="w-3.5 h-3.5 text-[#18B4A8]" aria-hidden="true" />
            <span>📞 2 2206 1380</span>
          </a>
          <span className="hidden md:inline text-white/40">·</span>
          <span className="hidden md:inline text-white/80">
            Av. Apoquindo 3990, Of. 810 (Metro Alcántara)
          </span>
        </div>
      </div>
    </aside>
  );
};
