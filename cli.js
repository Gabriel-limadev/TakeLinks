import chalk from "chalk"
import { takeFile } from "./index.js"
import { validateUrls } from "./http-validations.js"

const path = process.argv

// Return an array with only links
async function decodesText(pathFile){
    const result = await takeFile(pathFile[2])
    if (path[3] === 'validate'){
        console.log(chalk.black('List of links'), await validateUrls(result))
    } else{
        console.log(chalk.black('List of links'), result)
    }
}
decodesText(path)