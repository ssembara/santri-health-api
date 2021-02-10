const { Disease } = require("../models");


exports.index = async (req, res) => {
    try {
        const diseases = await Disease.findAll({});
        return res.json({
            code: 200,
            status: "success",
            data: diseases
        })
    } catch (error) {
        return res.send({
            error
        })
    }
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
        return res.send({
            error
        })
    }
}

exports.show = async (req, res) => {

    try {
        const { id } = req.params
        const diseases = await Disease.findOne({
            where: { id }
        })
        return res.json({
            code: 200,
            status: "success",
            data: diseases
        })
    } catch (error) {
        return res.send({
            error
        })
    }
}

exports.update = async (req, res) => {

    try {
        const { id } = req.params
        const { name, description, indicators } = req.body
        const diseases = await Disease.update(
            {
                name, description, indicators
            },
            {
                where: { id }
            }
        )

        if (diseases == 0) {
            return res.json({
                code: 201,
                status: "data not found",
                data: diseases
            })
        }

        return res.json({
            code: 200,
            status: "success",
            data: diseases
        })
    } catch (error) {
        return res.send({
            error
        })
    }
}

exports.destroy = async (req, res) => {

    try {
        const { id } = req.params
        const diseases = await Disease.destroy({
            where: { id }
        })

        if (diseases == 0) {
            return res.json({
                code: 201,
                status: "data not found",
                data: diseases
            })
        }

        return res.json({
            code: 201,
            status: "success",
            data: diseases
        })

    } catch (error) {
        return res.json({
            code: 500,
            error
        })
    }
}