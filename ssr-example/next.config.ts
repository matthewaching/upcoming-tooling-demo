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
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.redd.it',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'preview.redd.it',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'react19-chat.s3.us-east-1.amazonaws.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'i.etsystatic.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'external-preview.redd.it',
                port: '',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
