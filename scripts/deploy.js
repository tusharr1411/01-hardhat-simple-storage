//importing
const { ethers, run, network, tasks } = require("hardhat"); // we ware importing ether from hardhat because hardhat knows what are complied contracts already
// run allow us to run any task available for us
// network allow us to get information about network config
require("dotenv").config;

//async main function
async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("deploying... Please wait:");

  const simpleStorage = await SimpleStorageFactory.deploy();
  // await simpleStorage.deployed();
  await simpleStorage.deploymentTransaction().wait(1);
  // console.log(`deployed contract to: ${simpleStorage.address}`);  no longer working
  console.log(`deployed to: ${simpleStorage.target}`)
  // console.log(`deployed to: ${await  simpleStorage.getAddress()}`)


  //interacting with contracts
  const currentValue = await simpleStorage.retrieve();
  console.log(`Current Vlaue : ${currentValue}`);

  const transactionResponse = await simpleStorage.store(77);
  await transactionResponse.wait(1);
  const updatedValue = await simpleStorage.retrieve();
  console.log(`updated Value : ${updatedValue}`);

  // make sure you are verifying on goerli testnet
  // console.log(network.config);
  // if(network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY ){
  //   // we have to also wait
  //   await simpleStorage.deployTransaction.wait(5);
  //   await verify(simpleStorage.address,[]);
  //   console.log("verified");
  // }
}

// function to verify contract on etherscan
// async function verify(contratcAddress, args){
//   console.log("Verifying contract ... ");

//   try{
//     await run("verify:verify",{
//       address: contratcAddress,
//       constructorArguments : args,
//     });
//   }
//   catch(e){
//     if(e.message.toLowerCase().includes("already verified")){console.log("Already Verified !");}
//     else{console.log(e);}
//   }
// }

//calling main function

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });


  


  //for encryption
  /*
  const encryptedJson = fs.readFileSync("./.encryptedKey.json", "utf8");
  async function promptPassword() {
    prompt.start();
    prompt.message = "";
    prompt.delimiter = ":";
    const { password } = await prompt.get({
      properties: {
        password: {
          message: "Enter private key password",
          hidden: true,
        },
      },
    });
    return password;
  }
  const password = await promptPassword();
  let wallet = ethers.Wallet.fromEncryptedJsonSync(encryptedJson, password);
  wallet = await wallet.connect(provider);

  */