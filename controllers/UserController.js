'use strict'

const config = require('../config')

function loginUser(req, res) {
    const { nombre, contrasena } = req.body
    config.pool.query("SELECT * FROM Users WHERE name = $1 and password = $2",
        [nombre, contrasena], (err, results) => {
            if (err) {
                throw err
            }
            res.status(200).json(results.rows)
        })
}

function getUsers(req, res) {
    config.pool.query('SELECT id_usuario,nombre FROM Usuario', (err, results) => {
            if (err) {
                throw err
            }
            res.status(200).json(results.rows)
        })
}

function registerUser(req, res) {
    const { name, password, country, role } = req.body
    config.pool.query(`INSERT INTO Users (name, password, country, role) VALUES ($1, $2, $3, $4)`,
        [name, password, country, role], (err, results) => {
            if (err) {
                throw err
            }
            console.log(results);
            res.status(201).json(`Usuario Agregado`)
        })
}

module.exports = {
    loginUser,
    registerUser,
    getUsers,
}
