const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // เปิดใช้ Static Export
  basePath: isProd ? '/setsiri.github.io' : '',
  assetPrefix: isProd ? '/setsiri.github.io/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
