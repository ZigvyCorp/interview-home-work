const injectWhyDidYouRender = require('./scripts/why-did-you-render');

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, context) => {
        injectWhyDidYouRender(config, context)

        return config;
    }
}

module.exports = nextConfig
