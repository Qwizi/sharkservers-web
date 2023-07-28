const {resolve} = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'http', hostname: 'localhost', port: '',
        },],
    }, experimental: {
        appDir: true,
    },
    typescript: {
        tsconfigPath: './tsconfig.json',
        // TODO fix this
        ignoreBuildErrors: true,
    }
}

module.exports = nextConfig
