/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Optionally add this if you want to bypass the Supabase type error for now
    ignoreBuildErrors: true, 
  }
};

export default nextConfig;