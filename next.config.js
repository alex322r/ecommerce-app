/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fakestoreapi.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'falabella.scene7.com',
                port: '',
                pathname: '/**',
            }
        ],
    },
}

module.exports = nextConfig
