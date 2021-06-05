const { readFile, writeFile, fstat } = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt', `This file is written asynchronously \n${first}\n${second}\n`, (err, result) => {
            if (err) {
                console.log(err)
                return
            }
        })
    })
})