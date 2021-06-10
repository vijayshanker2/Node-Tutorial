

const { readFile, writeFile } = require('fs').promises
const util = require('util')


//const readFilePromise = util.promisify(readFile)
//const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        console.log(first)

        const second = await readFile('./content/second.txt', 'utf8')
        console.log(second)

        await writeFile('./content/subfolder/text.txt',`${first} \n ${second}`,'utf8',{flag:'a'})

    } catch (error) {
        console.log(error)
    }
}
start()