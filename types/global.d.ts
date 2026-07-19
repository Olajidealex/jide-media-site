export {};

declare global {
  interface CalendlyPopupOptions {
    url: string;
  }

  interface CalendlyAPI {
    initPopupWidget: (options: CalendlyPopupOptions) => void;
  }

  interface Window {
    Calendly?: CalendlyAPI;
  }
}
