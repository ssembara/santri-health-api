const { Class, Student } = require("../models");
const moment = require('moment');


exports.index = async (req, res) => {
    let students = await Student.findAll({
        attributes: ['id', 'nis', 'name', 'sex', 'birthday', 'address', 'createdAt', 'updatedAt'],
        include: [
            {
                model: Class,
                as: 'class',
                required: true
            }
        ],
        raw: true,
        nest: true,
    })

    students = students.map(obj => {
        const now = moment();

        let age = now.diff(moment(obj.birthday).format('YYYY'), 'years')
        let newObj = Object.assign(obj, { age })

        return newObj
    })

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

exports.show = async (req, res) => {
    const { id } = req.params
    let students = await Student.findOne({
        attributes: ['id', 'nis', 'name', 'sex', 'birthday', 'address', 'createdAt', 'updatedAt'],
        where: { id },
        include: [
            {
                model: Class,
                as: 'class',
                required: true
            }
        ],
        raw: true,
        nest: true,
    });

    const now = moment();

    let age = now.diff(moment(students.birthday).format('YYYY'), 'years')
    students = Object.assign(students, { age })

    return res.json({
        code: 200,
        status: "success",
        data: students
    })
}

exports.update = async (req, res) => {
    const { classId, nis, name, sex, birthday, address } = req.body
    const { id } = req.params
    let students = await Student.update(
        {
            classId, nis, name, sex, birthday, address
        },
        {
            where: { id }
        }
    )

    students = await Student.findOne({
        attributes: ['id', 'nis', 'name', 'sex', 'birthday', 'address', 'createdAt', 'updatedAt'],
        where: { id },
        include: [
            {
                model: Class,
                as: 'class',
                required: true
            }
        ]
    });

    return res.json({
        code: 201,
        status: "success",
        data: students
    })

}

exports.destroy = async (req, res) => {
    const { id } = req.params
    let students = await Student.destroy({
        where: { id }
    })

    return res.json({
        code: 201,
        status: "success",
    })
}