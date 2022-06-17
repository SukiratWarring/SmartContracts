let secret = require("./secret.json")
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan")

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    avalancheTest: {
      url: secret.url,
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [secret.key]
    }
  },
  etherscan:{
    apiKey: "7RA8NI3DXSXF6C8F79U4F5FVZQI83RSNGX"
}
  
};

