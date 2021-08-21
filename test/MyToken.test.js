/*
run:
npx hardhat test
*/
const hre = require('hardhat');
const assert = require('assert')

let V1, V2, V3;
let instanceV1, instanceV2, instanceV3;
before('get fatories', async () => {
  V1 = await hre.ethers.getContractFactory('MyTokenV1');
  V2 = await hre.ethers.getContractFactory('MyTokenV2');
  V3 = await hre.ethers.getContractFactory('MyTokenV3');
})

//####### Deployment https://github.com/Bholdus/smart-contracts/blob/main/test/token/CoinBHO.test.ts
it('Deploys', async () => {
  //deploy with proxy plugin
  instanceV1 = await hre.upgrades.deployProxy(V1, {kind:'uups'});
  
  //upgrade to v2
  instanceV2 = await hre.upgrades.upgradeProxy(instanceV1, V2);

  //upgrade to V3
  instanceV3 = await hre.upgrades.upgradeProxy(instanceV1, V3);

})

it('Should have 18 decimals', async () => {
  assert(await instanceV3.decimals().toString(), 18);
});

it('Should have 10B total supply', async () => {

})
it('Should set the right owner', async function () {

})

it('Should assign the total supply of tokens to the owner', async function () {

});


//###### Transactions
it('Should transfer tokens between accounts', async function () {
})

it('Should fail if sender doesn’t have enough tokens', async function () {
})

it('Should update balances after transfers', async function () {
})

it('should reduce total supply when burn', async function () {
})

it('should revert when burn amount exceeds balance', async function () {
})

it('should revert when burnFrom amount exceeds allowance', async function () {
})

it('should burnFrom really burn tokens, reduce allowance, reduce total supply', async function () {
})

it('should increase total supply when mint', async function () {
  // const initialOwnerBalance = await coinContract.balanceOf(owner.address);
  //     const mintAmount = 1_000_000_000;
  //     await coinContract.mint(mintAmount);
  //     const totalSupply = await coinContract.totalSupply();
  //     expect(totalSupply).to.equal(
  //       BigNumber.from(initialOwnerBalance).add(mintAmount)
  //     );
})

it('should revert when minting from stranger', async function () {
  // const mintAmount = 1_000_000_000;
  //     await expect(
  //       coinContract.connect(addr1).mint(mintAmount)
  //     ).to.revertedWith('Ownable: caller is not the owner');
})

it("Token total supply onwer check", async () => {
  const [owner] = await ethers.getSigners();
  // console.log("Owner address: ",owner.address);

  const ownerBalance = await instanceV3.balanceOf(owner.address);
  // console.log("ownerBalance: ", ownerBalance.toString());

  const decimals = await instanceV3.decimals();
  // console.log("decimals: ", decimals.toString());

  const totalSupply = await instanceV3.totalSupply();
  assert.equal(ownerBalance.toString(), totalSupply.toString(), 'Wrong token balance of onwer');
  
})

it('Should be able to get implementation address', async () => {
  //access v1 data
  const implementation = await instanceV3.getImplementation();
  console.log('implementation', implementation);
  assert.notEqual(implementation,null, 'Cannot get implementation address');
})

it('accessing v1 data', async () => {
  //access v1 data
  await instanceV3.setV1Data();
  const v1data = await instanceV3.getV1Data();
  assert.equal(v1data, 'This is v1 data', 'Can not get v1 data');
})

it('accessing v2 data', async () => {
  //access v1 data
  await instanceV3.setV2Data();
  const v2data = await instanceV3.getV2Data();

  assert.equal(v2data, 'This string from V2', 'Can not get data from v2');
})

it('accessing v3 data', async () => {
  //access v1 data
  await instanceV3.setV3Data();
  const v3data = await instanceV3.getV3Data();

  assert.equal(v3data, 'This string from V3', 'Can not get data from v3');
})

it('get proxy contract address', async () => {
  //access v1 data
  assert.notEqual(instanceV3.address, null, 'Can not get proxy contract address');
})