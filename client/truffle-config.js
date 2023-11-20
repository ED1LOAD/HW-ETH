const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },
    alchemy: {
      provider: function () {
        return new HDWalletProvider(process.env.ALCHEMY_KEY, "https://eth-goerli.g.alchemy.com/v2/oa8se28ffhlz_VDAffaI-yyeYSB_fcEA");
      },
      network_id: 5, // Rinkeby network id
    },
  },
  compilers: {
    solc: {
      version: "0.8.0", // Укажите версию компилятора, которую используете
    },
  },
};
