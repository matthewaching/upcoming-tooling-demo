import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: true,
    headers: async () => [
        {
            source: '/api/:path*',
            headers: [
                {
                    key: 'Access-Control-Allow-Origin',
                    value: '*',
                },
            ],
        },
    ],
};

export default nextConfig;
