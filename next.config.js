/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ["localhost"]
    },
    i18n: {
        locales: ['uz'],
        defaultLocale: "uz",
        localeDetection: false
    }
}

module.exports = nextConfig
