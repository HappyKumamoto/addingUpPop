'use strict';
const fs = require('fs');
const readline = require('readline');
const rs = re.createReadStream('./c01.csv');
const rl = readline.createInterface({input: rs,output:{}});
rl.on('line',lineString =>{
  console.log(lineString);
});