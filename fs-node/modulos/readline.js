import readline from 'readline'

const rel = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

ask()
function ask() {
    rel.question("digite um n", n => {
        const multiplos = []
        for(let i = 3; i < parseInt(n); i++) {
            if((i % 3 === 0) || (i % 5 === 0)) {
                multiplos.push(i)
            }
        }
        console.log(multiplos)
        ask()
    })
}