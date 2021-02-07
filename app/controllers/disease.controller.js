const { Disease } = require("../models");


exports.index = async (req, res) => {
    const diseases = await Disease.findAll({});
    return res.json({
        code: 200,
        status: "success",
        data: diseases
    })
}

exports.store = async (req, res) => {

    try {
        const { name, description, indicators } = req.body
        const diseases = await Disease.create({
            name: name, description, indicators
        })

        return res.json({
            code: 201,
            status: "success",
            data: diseases
        })
    } catch (error) {
        return res.json({
            error
        })
    }

}