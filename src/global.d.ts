import type { routing } from "@/i18n/routing";
import type messages from "@/messages/en.json";

// Typed translations: a missing or misspelled key is now a TypeScript error,
// and English is the source of truth for the message shape.
declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}
