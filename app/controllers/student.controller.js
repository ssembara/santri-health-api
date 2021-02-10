const { Class, Student } = require("../models");
const moment = require('moment');


exports.index = async (req, res) => {
    try {
        let students = await Student.findAll({
            attributes: {
                exclude: ['classId']
            },
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
    } catch (error) {
        return res.send({
            error
        })
    }

}

exports.store = async (req, res) => {
    try {
        const { classId, nis, name, sex, birthday, address } = req.body
        const students = await Student.create({
            classId, nis, name, sex, birthday, address
        })

        return res.json({
            code: 201,
            status: "success",
            data: students
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
    } catch (error) {
        return res.send({
            error
        })
    }

}

exports.update = async (req, res) => {
    try {
        const { classId, nis, name, sex, birthday, address } = req.body
        const { id } = req.params
        const students = await Student.findOne({
            where: { id }
        })

        if (!students) {
            return res.json({
                code: 200,
                status: "failed",
                data: 'data not found'
            })
        }

        students.classId = classId
        students.nis = nis
        students.name = name
        students.sex = sex
        students.birthday = birthday
        students.address = address
        students.save()

        return res.json({
            code: 201,
            status: "success",
            data: students
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
        let students = await Student.findOne({
            where: { id }
        })

        if (!students) {
            return res.json({
                code: 200,
                status: "failed",
                data: 'data not found'
            })
        }


        students.destroy()
        return res.json({
            code: 201,
            status: "success",
        })
    } catch (error) {
        return res.send({
            error
        })
    }
}