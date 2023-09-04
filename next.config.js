/** @type {import('next').NextConfig} */
const removeImports = require('next-remove-imports')();

const nextConfig = {
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
      images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '',
          },
        ],
      },
}

module.exports = removeImports(nextConfig)
