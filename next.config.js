/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false,
        os: false,
        module: false,
        path: false
      }
    }
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: "html-loader",
        },
        {
          loader: "markdown-loader",
          options: {
            // Pass options to marked
            // See https://marked.js.org/using_advanced#options
          },
        },
      ],
    })

    return config;
  },
}

