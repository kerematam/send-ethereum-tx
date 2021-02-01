# Create Ethereum Transaction with Infura

This repo is intended to show how the Ethereum transaction can be made with [Infura](https://infura.io/) and [web3.js v1.3.3](https://web3js.readthedocs.io/en/v1.3.0/). 

The project code, higly influenced by [gist](https://gist.github.com/raineorshine/c8b30db96d7532e15f85fcfe72ac719c) of [@raineorshine](https://gist.github.com/raineorshine).

It simply generates a raw transaction and sign it with a private key of the sender address. Then Infura API is used to broadcast this raw transaction to Ethereum's Ropsten test network.

## Pre-requirement

We will use [Infura](https://infura.io/) as our Ethereum client; so enroll and get your project ID from the dashboard.


## Steps

**1. Install packages**

```bash
npm install
```

**2. Create `.env` file**

You may take `.env-sample` file as reference.
```bash
cp .env-sample .env
```

Update the project_id variable with the project ID that you will have from Infura.

**3. Update Address Pair on `.env` File**

We need to have a public address and the priv key that derives this public address. Update the `.env` file if you already have it. If you don't have any, just run the following command :
```
node ./generate-addr.js
```

Update the `.env` file accordingly.

**4. Get Free Testnet Ethereum**

You may visit [faucet.ropsten.be](https://faucet.ropsten.be/) or any other testnet faucet and get your free ethers to your address.

**5. Check your Tx, on code (It is hardcoded!)**

Visit `send-tx.js`. You may leave it as it is. If you use this code for the mainnet to do a real transaction, do not forget to change it!

```js
const addressTo = "0x1463500476a3ADDa33ef1dF530063fE126203186";

const amount = "123"
```

**6. Run!**

```js
node ./send-tx.js
```

Sample output should look like this : 
```js
result :  { blockHash:
   '0x06053ada933fa0c31b7c3c48e6e1f01fa996884b3a9227ea3b6c9bb22e63e8a7',
  blockNumber: 9573032,
  contractAddress: null,
  cumulativeGasUsed: 819814,
  from: '0x1bb5849d23f2d8351dfa7d9ed3872cbbe5eafc49',
  gasUsed: 21000,
  logs: [],
  logsBloom:
   '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  status: true,
  to: '0x1463500476a3adda33ef1df530063fe126203186',
  transactionHash:
   '0xe971803ad48941b713e8dac98bb59642520b84b3ae484a12b934e0df37cc610c',
  transactionIndex: 3 }
  ```

**7. Check your Tx on Etherscan**

Check your `transactionHash`, you can search it on [Ropsten network](https://ropsten.etherscan.io/). 

Or directly go via link : 
https://ropsten.etherscan.io/tx/0xe971803ad48941b713e8dac98bb59642520b84b3ae484a12b934e0df37cc610c
