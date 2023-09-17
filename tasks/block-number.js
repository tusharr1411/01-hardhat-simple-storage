// current block number of blockchain we are working with
// for hardhat local blockchain, it set to zero every time

const {task} = require("hardhat/config");

task("block-number", "Prints the current block number").setAction(
    async (taskArgs, hre)=>{
        const currentBlockNumber = await hre.ethers.provider.getBlockNumber();
        console.log(`Current Block Number is : ${currentBlockNumber}`)
})



module.exports = {};

//hre can access the same packages what hardhat can
/*
The Hardhat Runtime Environment, or HRE for short, is an object containing all the functionality 
that Hardhat exposes when running a task, test or script. In reality, Hardhat is the HRE.
When you require Hardhat (const hardhat = require("hardhat")) you're getting an instance of the HRE.
During initialization, the Hardhat configuration file essentially constructs a list of things to be
added to the HRE. This includes tasks, configs and plugins. Then when tasks, tests or scripts run,
the HRE is always present and available to access anything that is contained in it.
The HRE has a role of centralizing coordination across all Hardhat components. This architecture 
allows for plugins to inject functionality that becomes available everywhere the HRE is accessible.
*/