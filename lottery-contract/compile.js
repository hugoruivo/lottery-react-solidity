const path = require('path');
const fs = require('fs');
const solc = require('solc');


const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');

const source = fs.readFileSync(lotteryPath, 'utf8');

//Since we only have 1 contract we will return it directly:
module.exports = solc.compile(source, 1).contracts[':Lottery'];
