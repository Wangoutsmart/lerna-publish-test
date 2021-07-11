const execa = require('execa')
const res = execa('lerna', ['changed'])
console.log(res, 'res')