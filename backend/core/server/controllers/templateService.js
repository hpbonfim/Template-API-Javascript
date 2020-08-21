const Template = require("../../database/models/templateModel")
const mongoose = require("mongoose")


exports.postData = (request, response) => {
    const createDoc = new Template({
        _id: new mongoose.Types.ObjectId(),
        email: request.body.email,
        message: request.body.message
    })

      createDoc
        .save()
        .then(result => {
            return response.status(200).json({ message: result })
        })
        .catch(error => {
            return response.status(404).json({ error: error })
        })
}


exports.getData = (request, response) => {

      Template.findOne({ email: request.body.email })
        .exec()
        .then(result => {
            if (result.length <= 0)
                return response.status(401).json({ message: "usuário não cadastrado" })
            return response.status(200).json({ result })
        })
        .catch(error => {
            return response.status(500).json({ error: error })
        })
}

exports.putData = (request, response) => {

      Template.updateOne({ email: request.params.email },
        {
            $set:
            {
                email: request.body.email,
                message: request.body.message,
                modified_date: Date.now()
            }
        })
        .exec()
        .then(result => {
            return response.status(200).json({ message: result })
        })
        .catch(error => {
            return response.status(404).json({ error: error })
        })
}

exports.deleteData = (request, response) => {

      Template.deleteOne({ email: request.params.email })
        .exec()
        .then(result => {
            return response.status(200).json({ message: result })
        })
        .catch(error => {
            return response.status(404).json({ error: error })
        })
}

