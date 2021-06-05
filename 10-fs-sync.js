const {readFileSync,writeFileSync} = require('fs')
console.log('start')
const firstFile = readFileSync('./content/first.txt','utf8')
const secondFile = readFileSync('./content/second.txt','utf8')

console.log(firstFile)
console.log(secondFile)

writeFileSync('./content/result-sync.txt',`Here is the result \n${firstFile} \n${secondFile}`,{flag:'a'})

console.log('Done with this task \nStart with new task')