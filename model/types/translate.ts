import nextConfig from "@/next.config"
import dictionary from "@/locales"

export type Language = typeof nextConfig.i18n.locales[number];
export const DEFAULT_LOCALE: Language = nextConfig.i18n.defaultLocale
const defaultPages = dictionary[DEFAULT_LOCALE]
export type Pages = keyof typeof defaultPages
