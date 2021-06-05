const {readFileSync,writeFileSync} = require('fs')

const firstFile = readFileSync('./content/first.txt','utf8')
const secondFile = readFileSync('./content/second.txt','utf8')

console.log(firstFile)
console.log(secondFile)

writeFileSync('./content/result-sync.txt',`Here is the result \n${firstFile} \n${secondFile}`,{flag:'a'})