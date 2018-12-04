### Setup

```sh
npm install
```

Update deploy.js file with your seed words

```
const yourSeedWords = ...
```

Update deploy.js file with your infura api key or other:

```
//Replace <YOUR_API_KEY> with your API KEY
//Update URL if you want to deploy to main net.
const infura = 'https://rinkeby.infura.io/v3/<YOUR_API_KEY>';
```

### To run the tests:
```sh
npm test
```

### To Deploy the contract:
```sh
node deploy.js
```

Take note of the deployed contract address and interface, they will be required by the frontend app.
