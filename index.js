import chalk from 'chalk';
import randomColor from 'randomcolor';

const randomHex = randomColor({
  luminosity: process.argv[3],
  hue: process.argv[2],
});

console.log(
  chalk.hex(randomHex)(`##############################
##############################
##############################
########              ########
########   ${randomHex}    ########
########              ########
##############################
##############################
##############################`),
);
