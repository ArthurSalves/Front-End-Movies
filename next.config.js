/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    publicRuntimeConfig: {
        BACK_HOST:
            process.env.NEXT_PUBLIC_BACK_HOST ||
            'https://arthurportifolio.cloud/api'
    }
}

module.exports = nextConfig
