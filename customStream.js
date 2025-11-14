import {Readable} from "stream"
import fs from "fs"

import path , {dirname} from "path"
import { fileURLToPath } from "url"


const __filename = fileURLToPath(import.meta.url)

const __dirname = dirname(__filename)
const inputFilePath = path.join(__dirname , "input.txt")


class CustomReadableStream extends Readable{

    constructor(options){
        super(options);

        this.maxNumber = 10;
        this.generateNumbers = 0;

    }


    // _read(){
    //     if(this.generateNumbers >= this.maxNumber){
    //         this.push(null)
    //     }else{
    //         const randomNumber = Math.floor(Math.random() * 100);
    //         const buffer = Buffer.from(randomNumber.toString() , "utf8")
    //         this.push(buffer)
    //         this.generateNumbers++;
    //     }
    // }


    _read(){
        const readStream = fs.createReadStream(inputFilePath);
        readStream.on("data" , (ch)=>{
            this.push(ch.toString())
            this.push(null)
        })

        readStream.on("error" , (message)=>{
            console.log("error in readStream : " , message)
        })


    }

}



const randomNumberStream = new CustomReadableStream();


randomNumberStream.on("data" , (ch)=>{
    console.log("Received Data : " , ch.toString())
})