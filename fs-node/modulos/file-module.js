import {promises as fs} from 'fs'

//usando o async awaait
//init()
initJson()
/*async function init() {
    try{

        await fs.writeFile('text.js', 'ola')
        await fs.appendFile('text.js', '\n ola + \n')
        const data = await fs.readFile('test.js', 'utf-8')
        console.log(data)
    }catch(err) {
        console.log(err)
    }
}*/


async function initJson() {

    try{
        const cars = ["toyota", "ranger"]
        const obj = {
            carros: cars
        }
        await fs.writeFile('text.json', JSON.stringify(obj))
        const data = await fs.readFile('text.json', 'utf-8')
        console.log( JSON.parse(data))
    }catch(err) {
        console.log(err)
    }
}

/*fs.writeFile('text.js', 'ola arq', function(err) {
    if(err) {

        console.log('its not worked')
    }else {

        console.log('worked')

        //concatena o novo contaudo ao inves de subscrever
        fs.appendFile('test.js', 'concatenar', (err) => {
            console.log('concatencao feita')
        })
        fs.readFile('text.js', 'utf-8', function(err, data) {
            if(err) {
            console.log('its not worked')

            }else {
                //data - conteudo do arq
            console.log(data)

            }
        })

    }
})
*/
/**
 * 1 - nome do arq
 * 2 - o conteudo
 * 3- uma callback
 */

 /**
  * readFile
  * 1 - caminho do arquivo
  * 2- callback
  */

  