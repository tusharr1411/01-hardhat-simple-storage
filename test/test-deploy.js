const {ethers} = require("hardhat");
const {expect,assert} = require("chai");

//to run test : yarn hardhat test
// to run a test with unique word : yarn hardhat test --grap uniqueword


// describe("SimpleStorage", () =>{})

describe("SimpleStorage", function () {
  let simpleStorageFactory,simpleStorage;
  beforeEach(async function(){
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
  })

  it("Should start with a faborite number 0", async function(){
    const currentValue = await simpleStorage.retrieve();
    const expectedValue = "0";
    //assert and expect keyword available with chai package chai
    //we have installed chai automatically as basic package
    assert.equal(currentValue.toString(), expectedValue);
    // or expect.apply(currentValue.toString()).to.equal(expectedValue);
  });

  it("should update when we call store", async function (){
    const expectedValue = "7";
    const transactionResponse = await simpleStorage.store(expectedValue);
    await transactionResponse.wait(1);
    const currentValue = await simpleStorage.retrieve();
    assert.equal(currentValue.toString(), expectedValue);
  });



})
