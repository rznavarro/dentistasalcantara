/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  university: string;
  photoUrl: string;
  badge?: string;
}

export interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  text: string;
}

export interface Treatment {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  whatsappMessage: string;
  highlight?: string;
}

export const CLINIC_CONTACT = {
  commercialName: "Dentistas Alcántara",
  legalName: "Agrupación Odontológica Alcántara",
  phones: [
    { label: "Principal", display: "+56 2 2206 1380", tel: "+56222061380" },
    { label: "Línea 2", display: "+56 2 2207 1031", tel: "+56222071031" },
    { label: "Línea 3", display: "+56 2 2208 5285", tel: "+56222085285" },
  ],
  whatsapp: "+56 9 9821 7106",
  whatsappNumberDigits: "56998217106",
  address: "Av. Apoquindo 3990, oficina 810, Las Condes, Santiago",
  metroReference: "Metro Alcántara (Línea 1), salida vereda norte",
  coordinates: {
    lat: -33.41502,
    lng: -70.588581,
  },
  googleMapsUrl: "https://maps.app.goo.gl/WXJQxdfqhqeiWQ8p9",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.125950854298!2d-70.5907696848016!3d-33.415020380784234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf5ef9a224a9%3A0xb3bc7a7d4cb94cb1!2sAv.+Apoquindo+3990%2C+oficina+810%2C+Las+Condes%2C+Regi%C3%B3n+Metropolitana!5e0!3m2!1ses-419!2scl!4v1700000000000!5m2!1ses-419!2scl",
  socials: {
    facebook: "https://www.facebook.com/alcantaradentistas/",
    instagram: "https://www.instagram.com/dentistasalcantara/",
    linkedin: "https://www.linkedin.com/company/agrupaci%C3%B3n-odontol%C3%B3gica-edificio-m%C3%A9dico-alc%C3%A1ntara/",
  },
  hours: {
    weekday: "Lunes a viernes: 9:00 a 23:00 hrs.",
    weekend: "Sábados, domingos y festivos (urgencias): 8:00 a 23:00 hrs.",
    summary: "Todos los días, incluso fines de semana y festivos",
  },
  director: {
    name: "Dra. María Angélica Silva",
    title: "Directora Odontológica",
    bio: "Odontóloga de la Universidad de Chile; posgrado (2002) y magíster en Implantología (2005) en la Universidad Andrés Bello; miembro de la Sociedad de Implantología Oral de Chile desde 2007.",
  },
};

export const WHATSAPP_URLS = {
  general: `https://wa.me/${CLINIC_CONTACT.whatsappNumberDigits}?text=${encodeURIComponent("Hola, quiero pedir una hora en Dentistas Alcántara")}`,
  urgency: `https://wa.me/${CLINIC_CONTACT.whatsappNumberDigits}?text=${encodeURIComponent("Hola, tengo una urgencia dental")}`,
  treatment: (treatmentName: string) =>
    `https://wa.me/${CLINIC_CONTACT.whatsappNumberDigits}?text=${encodeURIComponent(`Hola, quiero consultar por ${treatmentName} en Dentistas Alcántara`)}`,
  custom: (message: string) =>
    `https://wa.me/${CLINIC_CONTACT.whatsappNumberDigits}?text=${encodeURIComponent(message)}`,
};

export const DOCTORS: Doctor[] = [
  {
    id: "dra-maria-angelica-silva",
    name: "Dra. María Angélica Silva",
    specialty: "Rehabilitación Oral e Implantología",
    university: "Universidad de Chile",
    photoUrl: "https://www.dentistasalcantara.cl/pictures/pages/profesionales/angelica-diaz.jpg",
    badge: "Directora Médica",
  },
  {
    id: "dra-soledad-fenner",
    name: "Dra. Soledad Fenner",
    specialty: "Odontopediatría y Sedación",
    university: "Universidad de Concepción",
    photoUrl: "https://www.dentistasalcantara.cl/pictures/pages/profesionales/soledad-fenner.jpg",
  },
  {
    id: "dra-ignacia-zursiedel",
    name: "Dra. Ignacia Zursiedel",
    specialty: "Ortodoncia y Ortopedia Dentomaxilar",
    university: "Universidad de Los Andes",
    photoUrl: "https://www.dentistasalcantara.cl/pictures/pages/profesionales/ignacia-zursiedel.jpg",
  },
  {
    id: "dra-claudia-silva",
    name: "Dra. Claudia Silva",
    specialty: "Disfunción Temporomandibular (Bruxismo)",
    university: "Universidad de Chile",
    photoUrl: "https://www.dentistasalcantara.cl/pictures/pages/profesionales/claudia-silva.jpg",
  },
  {
    id: "dra-ana-luisa-pesce",
    name: "Dra. Ana Luisa Pesce",
    specialty: "Periodoncia",
    university: "Universidad de Los Andes",
    photoUrl: "https://www.dentistasalcantara.cl/pictures/pages/profesionales/ana-pesce.jpg",
  },
  {
    id: "dra-pamela-gallego",
    name: "Dra. Pamela Gallego",
    specialty: "Endodoncia",
    university: "Universidad de Chile",
    photoUrl: "https://www.dentistasalcantara.cl/pictures/pages/profesionales/pamela-gallego.jpg",
  },
  {
    id: "dr-francisco-escala",
    name: "Dr. Francisco Escala P.",
    specialty: "Cirugía Maxilofacial",
    university: "Universidad de Los Andes",
    photoUrl: "https://www.dentistasalcantara.cl/pictures/pages/profesionales/dr-francisco-escala.jpg",
  },
  {
    id: "dra-javiera-zenteno",
    name: "Dra. Javiera Zenteno",
    specialty: "Odontología General",
    university: "Universidad del Desarrollo",
    photoUrl: "https://www.dentistasalcantara.cl/pictures/pages/profesionales/Dra-Javiera-Zenteno.jpg",
  },
  {
    id: "dr-jorge-zenteno",
    name: "Dr. Jorge Zenteno",
    specialty: "Odontología General y Urgencias Dentales",
    university: "Universidad del Desarrollo",
    photoUrl: "https://www.dentistasalcantara.cl/pictures/pages/profesionales/Dr-Jorge-Zenteno.jpg",
  },
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Pamela C",
    date: "22 dic 2025",
    rating: 5,
    text: "Quiero agradecer al doctor Zenteno su excelente trabajo, además de atenderme un día domingo con la mejor disposición, llevaba muchos días con dolor y él fue quién me explicó con paciencia la mejor opción para solucionarlo, fue muy asertivo con el diagnóstico y eso que antes había visto varios dentistas. Muchas gracias!",
  },
  {
    id: "rev-2",
    author: "Macarena Zapata",
    date: "17 dic 2025",
    rating: 5,
    text: "Increíble atención... Muy amables sobre todo por que tenia una urgencia dental me atendieron altiro, con todas las facilidades y rapidez.",
  },
  {
    id: "rev-3",
    author: "Francisco Javier Larrain",
    date: "6 dic 2025",
    rating: 5,
    text: "Excelente! Me he atendido con la doctora Javiera Zenteno y Claudia Silva. La primera para limpiezas, tapaduras y control del dolor. Me solucionó el problema con creces y con una paciencia infinita. La doctora Claudia me arregló mi problema en la articulación e hizo placas para el bruxismo, además de enseñarme a controlarlo. Las recomiendo 100%.",
  },
  {
    id: "rev-4",
    author: "Cecilia Martínez",
    date: "13 dic 2025",
    rating: 5,
    text: "Excelente atención, muy profesional, feliz con los resultados, muy recomendable.",
  },
  {
    id: "rev-5",
    author: "Proyectos Consultores C.A.",
    date: "19 dic 2025",
    rating: 5,
    text: "La atención fue muy buena con la Dra. Javiera, muy profesional, detallista y brinda un trato muy cordial.",
  },
  {
    id: "rev-6",
    author: "Renatto Zambrano",
    date: "27 dic 2025",
    rating: 5,
    text: "Excelente atención, muy buena disposición de los profesionales.",
  },
];

export const TREATMENTS: Treatment[] = [
  {
    id: "implantes",
    title: "Implantes dentales",
    shortDesc: "Especialistas certificados por la Sociedad de Implantología Oral de Chile.",
    iconName: "ShieldCheck",
    whatsappMessage: "Implantes dentales",
    highlight: "Certificación oficial",
  },
  {
    id: "ortodoncia",
    title: "Ortodoncia e Invisalign",
    shortDesc: "Brackets o alineadores invisibles para niños y adultos.",
    iconName: "Sparkles",
    whatsappMessage: "Ortodoncia e Invisalign",
  },
  {
    id: "bruxismo",
    title: "Bruxismo y trastornos temporomandibulares",
    shortDesc: "Evaluación costo $0 y placas de descanso personalizadas.",
    iconName: "Smile",
    whatsappMessage: "Evaluación de Bruxismo costo $0",
    highlight: "Evaluación $0",
  },
  {
    id: "sedacion-infantil",
    title: "Sedación infantil",
    shortDesc: "Atención especializada para niños con requerimientos especiales.",
    iconName: "HeartHandshake",
    whatsappMessage: "Sedación infantil y odontopediatría",
  },
  {
    id: "estetica",
    title: "Estética dental y diseño de sonrisa",
    shortDesc: "Carillas y blanqueamiento para una sonrisa natural.",
    iconName: "Flame",
    whatsappMessage: "Estética dental y diseño de sonrisa",
  },
  {
    id: "endodoncia",
    title: "Endodoncia",
    shortDesc: "Tratamiento de conducto para salvar tu pieza dental.",
    iconName: "Activity",
    whatsappMessage: "Endodoncia (tratamiento de conducto)",
  },
  {
    id: "periodoncia",
    title: "Periodoncia",
    shortDesc: "Encías sanas para dientes firmes y libres de sangrado.",
    iconName: "Shield",
    whatsappMessage: "Periodoncia y salud de encías",
  },
  {
    id: "rehabilitacion",
    title: "Rehabilitación oral",
    shortDesc: "Recupera cómo masticas y cómo te ves con prótesis y coronas.",
    iconName: "Layers",
    whatsappMessage: "Rehabilitación oral",
  },
  {
    id: "cirugia",
    title: "Cirugía bucal y maxilofacial",
    shortDesc: "Extracciones complejas e incluye muelas del juicio.",
    iconName: "Scissors",
    whatsappMessage: "Cirugía bucal y muelas del juicio",
  },
  {
    id: "armonizacion",
    title: "Armonización orofacial",
    shortDesc: "Resultados estéticos, seguros y naturales para tu rostro.",
    iconName: "Compass",
    whatsappMessage: "Armonización orofacial",
  },
];

export const URGENCY_PROBLEMS = [
  {
    id: "dolor-muela",
    title: "Dolor de muela intenso",
    description: "Te evaluamos y aliviamos el dolor de inmediato.",
    iconName: "Zap",
  },
  {
    id: "diente-fracturado",
    title: "Diente fracturado o golpe",
    description: "Lo reparamos antes de que se infecte o empeore.",
    iconName: "AlertTriangle",
  },
  {
    id: "encia-hinchada",
    title: "Encía hinchada o absceso",
    description: "Tratamos la infección de raíz con antibióticos o drenaje.",
    iconName: "Flame",
  },
  {
    id: "mandibula-trabada",
    title: "Mandíbula trabada o bruxismo",
    description: "Especialista en articulación temporomandibular y dolor.",
    iconName: "Target",
  },
];

export const FAQS = [
  {
    question: "¿Atienden urgencias dentales el fin de semana?",
    answer: "Sí. Dentistas Alcántara atiende urgencias dentales sábados, domingos y festivos de 8:00 a 23:00 hrs, en Av. Apoquindo 3990, Las Condes.",
  },
  {
    question: "¿Dónde está la clínica?",
    answer: "En Av. Apoquindo 3990, oficina 810, Las Condes, Santiago, a pasos del Metro Alcántara (Línea 1), por la vereda norte.",
  },
  {
    question: "¿Qué formas de pago aceptan?",
    answer: "Tarjeta de débito, todas las tarjetas de crédito, efectivo y tarjetas de casas comerciales. Hay facilidades de pago para tratamientos y cirugías.",
  },
  {
    question: "¿Tienen convenio?",
    answer: "Sí, con la Municipalidad de Las Condes para vecinos con Tarjeta Vecino.",
  },
  {
    question: "¿Atienden niños?",
    answer: "Sí. Contamos con odontopediatra y sedación infantil para niños con requerimientos especiales.",
  },
];
