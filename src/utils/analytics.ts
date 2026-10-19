/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

/**
 * Pushes events to Google Tag Manager dataLayer with standard parameters
 */
export function trackWhatsAppClick(location: string, treatment?: string) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "click_whatsapp",
      ubicacion: location,
      ...(treatment ? { tratamiento: treatment } : {}),
      timestamp: new Date().toISOString(),
    });
  }
}

export function trackPhoneClick(location: string, phone: string = "+56222061380") {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "click_telefono",
      ubicacion: location,
      telefono: phone,
      timestamp: new Date().toISOString(),
    });
  }
}

export function trackFormSubmit(treatment: string) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "form_submit",
      tratamiento: treatment,
      timestamp: new Date().toISOString(),
    });
  }
}

export function trackDirectionsClick(location: string = "ubicacion") {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "click_como_llegar",
      ubicacion: location,
      timestamp: new Date().toISOString(),
    });
  }
}
