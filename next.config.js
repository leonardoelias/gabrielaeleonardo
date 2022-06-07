/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://sites.icasei.com.br/gabieleonardo/home",
        permanent: true,
      },
    ];
  },
};
