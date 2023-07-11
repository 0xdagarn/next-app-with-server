require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    localhost: {
      chainId: 31337,
    },
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: [
        `0xea9886f46a437b373e61cedc7e111dd30e87283c46929d9e181f6702fd925822`,
      ],
    },
    // goerli: {
    //   url: "https://eth-goerli.g.alchemy.com/v2/id",
    //   accounts: [
    //     "0xprivatekey",
    //   ],
    // },
  },
};
