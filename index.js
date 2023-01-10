import chalk from 'chalk';
import randomColor from 'randomcolor';

const randomHex = randomColor({
  luminosity: process.argv[2],
  hue: process.argv[2],
});
const makeColors = function (str) {
  console.log(chalk.hex(randomHex)(str));
};

makeColors(`
 #############################
 #############################
 ######## ${randomHex} ###########
 #############################
 #############################`);
