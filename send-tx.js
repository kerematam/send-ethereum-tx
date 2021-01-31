const Web3 = require("web3");
const Tx = require("ethereumjs-tx").Transaction;

// read .env file for addr, addr_priv and network
require("dotenv").config();

// get values from .env
const { addr_priv, addr, project_id } = process.env;

// connect to infura client
const network = `https://ropsten.infura.io/v3/${project_id}`;
const web3 = new Web3(new Web3.providers.HttpProvider(network));

// the address that will send the test transaction
const addressFrom = addr;

// substr(2) will clean the "0x" part of the address
const privateKey = new Buffer.from(addr_priv.substr(2), "hex");

// the destination address
const addressTo = "0x1463500476a3ADDa33ef1dF530063fE126203186";

// tx amount in wei
const amount = "123"

// construct the transaction data
// NOTE: property 'nonce' must be merged in from web3.eth.getTransactionCount
// before the transaction data is passed to new Tx(); see sendRawTransaction below.
const txData = {
  gasLimit: web3.utils.toHex(25000),
  gasPrice: web3.utils.toHex(10e9), // 10 Gwei
  to: addressTo,
  from: addressFrom,
  value: web3.utils.toHex(web3.utils.toWei(amount, "wei")), // thanks @abel30567
  // if you want to send raw data (e.g. contract execution) rather than sending tokens,
  // use 'data' instead of 'value' (thanks @AlecZadikian9001)
  // e.g. myContract.methods.myMethod(123).encodeABI() (thanks @NguyenHoangSon96)
};

/** Signs the given transaction data and sends it. Abstracts some of the details of
 * buffering and serializing the transaction for web3.
 * @returns A promise of an object that emits events: transactionHash, receipt, confirmaton, error
 */
const sendRawTransaction = (txData) =>
  // get the number of transactions sent so far so we can create a fresh nonce
  web3.eth.getTransactionCount(addressFrom).then((txCount) => {
    const newNonce = web3.utils.toHex(txCount);
    const transaction = new Tx(
      { ...txData, nonce: newNonce },
      { chain: "ropsten" }
    ); // or 'rinkeby'
    transaction.sign(privateKey);
    const serializedTx = transaction.serialize().toString("hex");
    return web3.eth.sendSignedTransaction("0x" + serializedTx);
  });

// fire away!
sendRawTransaction(txData).then((result) => {
  console.log("result : ", result);
});
