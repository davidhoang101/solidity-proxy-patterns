const hre = require('hardhat');
const assert = require('assert')

let V1, V2, V3;
let instanceV1, instanceV2, instanceV3;
before('get fatories', async () => {
  V1 = await hre.ethers.getContractFactory('MyTokenV1');
  V2 = await hre.ethers.getContractFactory('MyTokenV2');
  V3 = await hre.ethers.getContractFactory('MyTokenV3');
})

it('Deploys', async () => {
  //deploy with proxy plugin
  instanceV1 = await hre.upgrades.deployProxy(V1, {kind:'uups'});

  //upgrade to v2
  instanceV2 = await hre.upgrades.upgradeProxy(instanceV1, V2);

  //upgrade to V3
  instanceV3 = await hre.upgrades.upgradeProxy(instanceV1, V3);

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
  console.log(instanceV3.address);
})