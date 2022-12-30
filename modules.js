
const {john, peter} = require('./names');
const {sayHi} = require('./utilis');
const data = require('./alternativeFlavour')
require('./mind-grenade')

// const { john, peter } = names;
// const { sayHi } = sayHi
// sayHi(john)
// sayHi(peter)
// sayHi('peter')

const os = require('os');

// info about current user
const user = os.userInfo();

// returns systems uptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`)

console.log(user);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOs)