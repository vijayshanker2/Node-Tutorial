const { readFile } = require('fs')
const { reject } = require('lodash')
const { getHeapSnapshot } = require('v8')


const getPath = function(path){
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(data,err)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}
getPath('./content/first.txt').then(res => console.log(res)).catch(err => console.log(err))