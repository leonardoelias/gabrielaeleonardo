module.exports = {
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
