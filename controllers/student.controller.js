const { Class, Student } = require("../models");


exports.index = async (req, res) => {
    const students = await Student.findAll({
        attributes: ['id', 'nis', 'name', 'sex', 'birthday', 'address', 'createdAt', 'updatedAt'],
        include: [
            {
                model: Class,
                as: 'class',
                required: true
            }
        ]
    });
    return res.json({
        code: 200,
        status: "success",
        data: students
    })
}

exports.store = async (req, res) => {
    const { classId, nis, name, sex, birthday, address } = req.body
    const students = await Student.create({
        classId, nis, name, sex, birthday, address
    })

    return res.json({
        code: 201,
        status: "success",
        data: students
    })
}