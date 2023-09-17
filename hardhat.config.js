require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("./tasks/block-number.js");
require("hardhat-gas-reporter");
require("solidity-coverage");

/***************           creating our own custom task https://hardhat.org/guides/create-task.html   ****************/
// task("accounts", "prints the list of accounts", async(taskArgs,hre)=>{
//   const accounts = await hre.ethers.getSigners();
//   for(account of accounts){
//     console.log(account.address);
//   }
// })



//you need to export an object to setup your config https://hardhat.org/config/






/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || "https://eth-goerli/example";
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const COINMARKETCAP_API = process.env.COINMARKETCAP_API;



const GANACHE_RPC_URL = process.env.GANACHE_RPC_URL;
const GANACHE_PRIVATE_KEY = process.env.GANACHE_PRIVATE_KEY;
const GANACHE_CHAIN_ID = process.env.GANACHE_CHAIN_ID;

module.exports = {
  solidity: "0.8.7",
  defaultNetwork: "hardhat",
  networks : {
    goerli :{
      url:GOERLI_RPC_URL,
      accounts:[PRIVATE_KEY],
      chainId:5 // for goerli
      //no need to add chain ID in newer versions

    },
    localhost :{
      url:"http://127.0.0.1:8545/",
      // accounts:[PRIVATE_KEY], // hardhat will auto set
      chainId:31337 // same as hardhat 
      //no need to add chain ID in newer versions
    },
    ganache :{
      url: GANACHE_RPC_URL,
      accounts : [GANACHE_PRIVATE_KEY],
      // chainId : GANACHE_CHAIN_ID
    }
  },
  etherscan :{
    apiKey: ETHERSCAN_API_KEY
  },
  gasReporter : {
    enabled: false,
    outputFile: "gas-report.txt",//this will write gas table in .txt file instead of terminal, also add it to gitignore
    noColors: true, // colors are good in terminal only
    currency: "USD",
    // coinmarketcap: COINMARKETCAP_API,
    token: "MATIC", // to see in polygon blockchain
  }
};
