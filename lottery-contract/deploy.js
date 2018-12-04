const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

//Change to your seed words
const yourSeedWords = 'one two three four five six seven eigth nine ten eleven twelve';

//Replace <YOUR_API_KEY> with your API KEY
//Update URL if you want to deploy to main net.
const infura = 'https://rinkeby.infura.io/v3/<YOUR_API_KEY>';

const provider = new HDWalletProvider(
    yourSeedWords,
    infura
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account ' + accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: bytecode
        })
        .send({
            gas: '1000000',
            from: accounts[0]
        });


    console.log(interface);

    console.log('Contract deployed to: ' + result.options.address);    
};

deploy();
