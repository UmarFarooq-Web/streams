import fs from "fs"

import path , {dirname} from "path"

import { fileURLToPath } from "url"

import { Transform } from "stream"


const __filename = fileURLToPath(import.meta.url)


const __dirname = dirname(__filename)



const UperCaseTransform = new Transform({
    transform(chunk , encoding , callback){


       const newstring = chunk.toString().replace("a" , "")


        this.push(newstring)
        callback()
    }
})






const inputFilePath = path.join(__dirname , "input.txt" )
const outputFilePath = path.join(__dirname , "output.txt")



const readStream = fs.createReadStream(inputFilePath , {highWaterMark:2})
const writeStream = fs.createWriteStream(outputFilePath)


readStream.pipe(UperCaseTransform).pipe(writeStream)