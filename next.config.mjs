/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'd29p8yz5fxctco.cloudfront.net',
            },
        ]
    }
};

export default nextConfig;
