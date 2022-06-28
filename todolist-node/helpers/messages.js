require('colors');

const showMenu = () => {
    return new Promise ( resolve => {
        console.clear()
        console.log('====================='.green)
        console.log('  SELECT AN OPTION')
        console.log('=====================\n'.green)
     
        console.log('1.'.green, 'Create task')
        console.log('2.'.green, 'Tasks list')
        console.log('3.'.green, 'Completed tasks')
        console.log('4.'.green, 'Pending tasks')
        console.log('5.'.green, 'Complete tasks')
        console.log('6.'.green, 'Delete tasks')
        console.log('0.'.green, 'Escape')
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question('Select an option: ', (option) => {
            readline.close()
            resolve (option)
        })
    }) 
}
const pause = () => {
    return new Promise ( resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question(`Press ${'ENTER'.green} to continue`, (option) => {
            readline.close()
            resolve()
        }) 
    })
   
}

module.exports = {
    showMenu,
    pause
}