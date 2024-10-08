/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        APP_VERSION: process.env.APP_VERSION || 'local',
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};

module.exports = nextConfig;
