const { readFile, writeFile, fstat } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Finished reading First')
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        console.log('Finished reading Second')
        const second = result
        writeFile('./content/result-async.txt', `This file is written asynchronously \n${first}\n${second}\n`, (err, result) => {
            if (err) {
                console.log(err)
                return
            }
        console.log('Finished wrting file')

        })

    })
})
console.log('Starting next task')