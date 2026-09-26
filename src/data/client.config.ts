export const TODO_CLIENT_CONFIRMATION = "TODO_CLIENT_CONFIRMATION" as const;

export type HeroMedia =
  | {
      type: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      caption?: string;
      permission: typeof TODO_CLIENT_CONFIRMATION | "approved";
    }
  | {
      type: "video";
      src: string;
      poster: string;
      captions?: string;
      permission: typeof TODO_CLIENT_CONFIRMATION | "approved";
    };

export interface ClientConfig {
  site: {
    previewMode: boolean;
    previewLabel: string;
    canonicalUrl: string;
  };
  analytics: {
    ga4MeasurementId: string;
  };
  identity: {
    businessName: string;
    shortName: string;
    logoLetters: string;
    tagline: string;
  };
  brand: {
    accent: string;
    accentStrong: string;
    ink: string;
    surface: string;
    signal: string;
  };
  contact: {
    phoneLabel: string;
    phoneHref: string;
    email: string;
    messengerUrl: string;
    whatsappUrl?: string;
  };
  hero: {
    variant: "graphic" | "media";
    eyebrow: string;
    heading: string;
    supportingText: string;
    trustChips: string[];
    media?: HeroMedia;
  };
  serviceAreaSummary: string;
  hours: string;
  services: Array<{
    icon: "clean" | "repair" | "install" | "commercial";
    title: string;
    description: string;
  }>;
  workGallery: Array<{
    src: string;
    alt: string;
    width: number;
    height: number;
    caption: string;
  }>;
  trustPoints: Array<{
    label: string;
    detail: string;
    confirmation: "safe-template-copy" | typeof TODO_CLIENT_CONFIRMATION;
  }>;
  reviews: Array<{
    quote: string;
    attribution: string;
    sample: true;
  }>;
  serviceAreas: string[];
  process: Array<{ step: string; title: string; detail: string }>;
  faqs: Array<{
    question: string;
    answer: string;
    confirmation: "safe-template-copy" | typeof TODO_CLIENT_CONFIRMATION;
  }>;
  form: {
    mode: "demo" | "endpoint";
    endpoint: string;
    method: "POST";
  };
  seo: {
    title: string;
    description: string;
    structuredDataEnabled: boolean;
  };
}

export const clientConfig: ClientConfig = {
  site: {
    previewMode: true,
    previewLabel: "Concept preview for review - details pending client confirmation",
    canonicalUrl: "https://example.com/",
  },
  analytics: {
    ga4MeasurementId: "",
  },
  identity: {
    businessName: "Tatay Tim's Refrigeration and Air-conditioning Service",
    shortName: "Tatay Tim's",
    logoLetters: "TASK",
    tagline: "Kaagapay sa malamig na buhay",
  },
  brand: {
    accent: "#eaf2f8",
    accentStrong: "#174a78",
    ink: "#102f50",
    surface: "#fffaf0",
    signal: "#c73543",
  },
  contact: {
    phoneLabel: "Phone number to be confirmed",
    phoneHref: "",
    email: "",
    messengerUrl: "",
    whatsappUrl: "",
  },
  hero: {
    variant: "media",
    eyebrow: "Refrigeration and air-conditioning service",
    heading: "Presko at maayos na aircon, with service you can trust.",
    supportingText:
      "From preventive maintenance and cleaning to repair and installation, Tatay Tim is ready to help keep your space comfortable.",
    trustChips: ["Split-type & window-type cleaning", "Maintenance, repair & installation", "Ask us about your unit"],
    media: {
      type: "image",
      src: `${import.meta.env.BASE_URL}/media/work/fb-aircon-repair.jpg`,
      alt: "Technician inspecting an opened air-conditioning unit with repair tools",
      width: 2048,
      height: 2048,
      caption: "Air-conditioning check-up and repair",
      permission: "approved",
    },
  },
  serviceAreaSummary: "Service area to be confirmed with Tatay Tim.",
  hours: "Operating hours to be confirmed",
  services: [
    {
      icon: "clean",
      title: "Preventive maintenance & cleaning",
      description: "Air-conditioning PMS, normal cleaning, and deep cleaning for split-type and window-type units.",
    },
    {
      icon: "repair",
      title: "Check-up, repair & reprocessing",
      description: "Air-conditioning unit check-up and repair, plus unit reprocessing service.",
    },
    {
      icon: "install",
      title: "Installation & relocation",
      description: "Air-conditioning unit installation and relocation service.",
    },
    {
      icon: "repair",
      title: "Freon recharging",
      description: "Freon recharging service for air-conditioning units.",
    },
  ],
  workGallery: [
    {
      src: `${import.meta.env.BASE_URL}/media/work/fb-split-type-aircon-installation.jpg`,
      alt: "Split-type air-conditioning unit and components during installation work",
      width: 2048,
      height: 2048,
      caption: "Split-type air-conditioning installation",
    },
    {
      src: `${import.meta.env.BASE_URL}/media/work/fb-split-type-aircon-recharging.jpg`,
      alt: "Technician working on an outdoor split-type air-conditioning unit with refrigerant equipment",
      width: 960,
      height: 960,
      caption: "Split-type air-conditioning recharging",
    },
    {
      src: `${import.meta.env.BASE_URL}/media/work/fb-split-type-aircon.jpg`,
      alt: "Technician servicing outdoor split-type air-conditioning units",
      width: 2048,
      height: 2048,
      caption: "Split-type air-conditioning service",
    },
    {
      src: `${import.meta.env.BASE_URL}/media/work/fb-wall-type-aircon.jpg`,
      alt: "Technician working beside a wall-type air-conditioning unit",
      width: 1080,
      height: 1440,
      caption: "Wall-type air-conditioning service",
    },
  ],
  trustPoints: [
    {
      label: "Maayos ang trabaho",
      detail: "Tapat at mapagkakatiwalaan, sa presyong kaibigan, lahat ay masisiyahan.",
      confirmation: "safe-template-copy",
    },
    {
      label: "Kaagapay sa malamig na buhay",
      detail: "Air-conditioning and refrigeration services from Tatay Tim.",
      confirmation: "safe-template-copy",
    },
    {
      label: "Service area",
      detail: "Coverage details will be confirmed before launch.",
      confirmation: TODO_CLIENT_CONFIRMATION,
    },
    {
      label: "Hours and contact details",
      detail: "Business hours and preferred contact channel will be added after confirmation.",
      confirmation: TODO_CLIENT_CONFIRMATION,
    },
  ],
  reviews: [],
  serviceAreas: [],
  process: [
    { step: "01", title: "Share your service need", detail: "Add your unit type, location, and what service you are looking for." },
    { step: "02", title: "Confirm the details", detail: "Confirm the service scope, coverage, fees, and scheduling directly with Tatay Tim." },
    { step: "03", title: "Arrange the service", detail: "Agree on the next step after the details have been confirmed." },
  ],
  faqs: [
    {
      question: "What details should I send for a quote?",
      answer: "Send your location, aircon type, main concern, and photos when useful. Final requirements depend on the service provider’s process.",
      confirmation: "safe-template-copy",
    },
    {
      question: "Do you cover my barangay or nearby city?",
      answer: "Share your location in the enquiry form so service coverage can be confirmed before scheduling.",
      confirmation: "safe-template-copy",
    },
    {
      question: "Are inspection or call-out fees charged?",
      answer: "Please contact Tatay Tim to confirm any inspection or call-out fees before scheduling.",
      confirmation: "safe-template-copy",
    },
    {
      question: "Is there a service warranty?",
      answer: "Warranty details have not yet been provided. Please confirm directly before booking.",
      confirmation: TODO_CLIENT_CONFIRMATION,
    },
    {
      question: "How quickly can you respond?",
      answer: "Operating hours and response times are to be confirmed.",
      confirmation: TODO_CLIENT_CONFIRMATION,
    },
  ],
  form: {
    mode: "demo",
    endpoint: "",
    method: "POST",
  },
  seo: {
    title: "Tatay Tim's Refrigeration and Air-conditioning Service",
    description: "Explore Tatay Tim's air-conditioning maintenance, cleaning, repair, reprocessing, relocation, Freon recharging, and installation services.",
    structuredDataEnabled: false,
  },
};
