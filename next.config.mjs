/** @type {import('next').NextConfig} */
const nextConfig = {
    output: undefined,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: { unoptimized: true },
};

export default nextConfig;
