const { Class } = require("../models");


exports.index = async (req, res) => {
    const classes = await Class.findAll({});
    return res.json({
        code: 200,
        status: "success",
        data: classes
    })
}

exports.store = async (req, res) => {
    const { name, grade } = req.body
    const classes = await Class.create({
        name, grade
    })

    return res.json({
        code: 201,
        status: "success",
        data: classes
    })
}