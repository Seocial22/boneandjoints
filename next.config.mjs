/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

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
            
    ];
  },
};

export default nextConfig;
