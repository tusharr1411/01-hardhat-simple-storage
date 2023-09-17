
/***************           creating our own custom task https://hardhat.org/guides/create-task.html   ****************/
task("accounts", "prints the list of accounts", async(taskArgs,hre)=>{
    const accounts = await hre.ethers.getSigners();
    for(account of accounts){
      conslole.log(account.address);
    }
  })
  
  
  
 
  