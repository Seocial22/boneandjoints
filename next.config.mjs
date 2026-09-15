/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  compress: true,
  poweredByHeader: false,

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2592000, // 30 days
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // HTTP Headers for caching and performance
  async headers() {
    return [
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Redirection of link
  async redirects() {
    return [
      {
        source: "/blog/arthroscopy-surgery-ajmer-joint-pain-treatment",
        destination:
          "/blog/best-arthroscopy-surgery-ajmer-joint-pain-treatment",
        permanent: true, // 301 Redirect
      },
      {
        source: '/blog/back-pain-specialist-surgeon-in-ajmer-dr-abhishek-saxena',
        destination: '/blog/best-back-pain-specialist-surgeon-in-ajmer-dr-abhishek-saxena',
        permanent: true,
      },
      {
        source: '/blog/arthroscopy-surgery-ajmer-joint-pain-treatment',
        destination: '/blog/best-arthroscopy-surgery-ajmer-joint-pain-treatment',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/conditions/knee-pain-causes-advanced-treatment-options-ajmer',
        destination: '/blog/knee-pain-causes-advanced-treatment-options-ajmer',
        permanent: true,
      },
      {
        source: '/blogs',
        destination: '/blog',
        permanent: true,
      },      
    ];
  },
};

export default nextConfig;
