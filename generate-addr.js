const ethWallet = require("ethereumjs-wallet");

const addressData = ethWallet.default.generate();

console.log("\n######################################################");
console.log(`### ${new Date()} ###`);
console.log("######################################################");
console.log(`addr_priv=${addressData.getPrivateKeyString()}`);
console.log(`addr=${addressData.getAddressString()}`);
console.log("###################################################### \n");
