/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export a static site bundle for Cloudflare Pages and other static hosts.
  output: 'export',
  images: { unoptimized: true }
};
export default nextConfig;
