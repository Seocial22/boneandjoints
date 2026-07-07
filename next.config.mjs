/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      {
        source: "/blog/arthroscopy-surgery-ajmer-joint-pain-treatment",
        destination:
          "/blog/best-arthroscopy-surgery-ajmer-joint-pain-treatment",
        permanent: true, // 301 Redirect
      },
    ];
  },
};

export default nextConfig;
