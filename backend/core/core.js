const { databaseControl } = require('./database/index')
const { serverControl } = require('./server/index')

const database = databaseControl()
const server = serverControl()

exports.createCore = () => {

    startService = () => {
        console.log("\x1b[36m", `${new Date().toLocaleString('pt-BR')} | initiate the core...`)
        database.startService()
        server.startService()
        console.log(`${new Date().toLocaleString('pt-BR')} | [core] the core it's running...`)
    }


    stopService = () => {
        console.log("\x1b[33m", `${new Date().toLocaleString('pt-BR')} | initiate the shutdown`)
        database.stopService()
        server.stopService()
        console.log("\x1b[31m", `${new Date().toLocaleString('pt-BR')} | core closed`)
    }

    return {
        startService,
        stopService
    }
}
