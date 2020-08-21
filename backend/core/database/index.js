const database = require("./utils/config")
const mongoose = require("mongoose")
mongoose.Promise = global.Promise
mongoose.set('useCreateIndex', true)


exports.databaseControl = () => {
    startService = () => {
        console.log(`${new Date().toLocaleString('pt-BR')} | initiate the database...`)
        mongoose.connect(database.url, {
            useNewUrlParser: true,
            keepAlive: true,
            useUnifiedTopology: true
        })
            .then(() => {
                mongoose.connection.on("connected", () => {
                    return console.log(`${new Date().toLocaleString('pt-BR')} | [database] database connected`)
                })
                mongoose.connection.on("error", (err) => {
                    return errorService(err)
                })
            })
            .catch(error => {
                return errorService(error)
            })
        console.log(`${new Date().toLocaleString('pt-BR')} | [database] the database it's running...`)
    }

    stopService = () => {
        console.log(`${new Date().toLocaleString('pt-BR')} | stopping the database...`)
          mongoose.connection.close(() => {
            return console.log(`${new Date().toLocaleString('pt-BR')} | [database] database closed`)
        })
    }

    errorService = (error) => {
        console.log("\x1b[33m", `${new Date().toLocaleString('pt-BR')} | erro do banco de dados do sistema: ${error}`)
        process.exit(1)
    }

    return {
        startService,
        stopService
    }
}
