const express = require('express')
const application = express()
const http = require('http')
const bodyParser = require('body-parser')
const templateServicesRoutes = require('./routes/templateRoute')
const port = 3000

application.use(bodyParser.urlencoded({ extended: true }))
application.use(bodyParser.json())
application.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*")
    response.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    )
    if (request.method === "OPTIONS") {
        response.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET")
        return response.sendStatus(200)
    }
    next()
})
application.use("/", templateServicesRoutes)

exports.serverControl = () => {
    const server = http.createServer(application)

    startService = () => {
        console.log(`${new Date().toLocaleString('pt-BR')} | [webserver] initiate service...`)
        try {
            server.listen(port, () => {
                console.log(`${new Date().toLocaleString('pt-BR')} | [webserver] server running on port: ${port}`)
            })
        } catch (error) {
            errorService(error)
        }
    }

    stopService = () => {
        console.log(`${new Date().toLocaleString('pt-BR')} | [webserver] stopping service...`)
        try {
            server.close()
            console.log(`${new Date().toLocaleString('pt-BR')} | [webserver] closed.`)
        } catch (error) {
            errorService(error)
        }
    }

    errorService = (error) => {
        console.log("\x1b[33m", `${new Date().toLocaleString('pt-BR')} | erro do servidor do sistema: ${error}`)
        process.exit(1)
    }

    return {
        startService,
        stopService
    }
}