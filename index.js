import chalk from 'chalk';
import {promises} from "fs"

function extractLinks(text){
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm

  const arrayResults = []
  let temp;
  while((temp = regex.exec(text)) !== null) {
    arrayResults.push({ [temp[1]]: temp[2] })
  }
  
  return arrayResults.length == 0 ? "There isn't links": arrayResults;
}

function handlesError(error) {
  throw new Error(chalk.red(error.code, "There isn't file in the path"));
}

export async function takeFile(path) {
  const encoding = 'utf-8';
  try {
    const text = await promises.readFile(path, encoding)
    return extractLinks(text)
  } catch(error) {
    handlesError(error);
  }
}

/* UTILIZANDO OUTROS METODOS ANTIGOS  */
// function takeFile(path) {
//   const encoding = 'utf-8';
//   promises
//   .readFile(path, encoding)
//   .then((texto) => chalk.green(console.log(texto)))
//   .catch((error) => handlesError(error))
// }

// function takeFile(path) {
//   const encoding = 'utf-8';
//   readFile(path, encoding, (error, texto) => {
//     if (error) {
//       handlesError(error);
//     }
//     console.log(chalk.green(texto));
//   })
// }
