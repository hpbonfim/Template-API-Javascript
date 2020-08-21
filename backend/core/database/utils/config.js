require('dotenv').config()
module.exports = { url: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_URL}:${process.env.MONGO_PORT}${process.env.MONGO_QUERY}` }
