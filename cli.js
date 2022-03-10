import chalk from "chalk"
import { takeFile } from "./index.js"

const path = process.argv

async function decodesText(pathFile){
    const result = await takeFile(pathFile[2])
    console.log(chalk.black('List of links'), result)
}
decodesText(path)