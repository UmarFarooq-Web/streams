

import fs from "fs"
import path , {dirname} from "path"
import { fileURLToPath } from "url"


const __filename = fileURLToPath(import.meta.url)

const __dirname = dirname(__filename)




const inputFilePath = path.join(__dirname , "input.txt")


const readStream = fs.createReadStream(inputFilePath)





readStream.on("open" , ()=>{
    console.log("Stream started")
})


readStream.on("data" , (chunk)=>{
    console.log(chunk.toString())
})

readStream.on("end" , ()=>{ 
    console.log("Stream ended")
})