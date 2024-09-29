/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['manuj-portfolio-images.s3.eu-north-1.amazonaws.com'],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'manuj-portfolio-images.s3.eu-north-1.amazonaws.com',
    //   },
    // ],
  },
};

export default nextConfig;
