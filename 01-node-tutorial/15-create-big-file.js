const { writeFile } = require('fs')

for (let i = 0; i < 10000; i++) {
    writeFile("./content/subfolder/Big.txt", "This is a text \n", { flag: 'a' }, (err) => {
        if (err)
            console.log(err)

    })
}