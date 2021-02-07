const { Class } = require("../models");


exports.index = async (req, res) => {
    try {
        const classes = await Class.findAll({});
        return res.json({
            code: 200,
            status: "success",
            data: classes
        })
    } catch (error) {
        return res.send({
            error
        })
    }
}

exports.store = async (req, res) => {
    try {
        const { name, grade } = req.body
        const classes = await Class.create({
            name, grade
        })

        return res.json({
            code: 201,
            status: "success",
            data: classes
        })
    } catch (error) {
        return res.send({
            error
        })
    }
}