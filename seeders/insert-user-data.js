"use strict"

const { query } = require("express")

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('users', [
            {
                username: 'Srijan Giri',
                email: 'abc@gmail.com',
                password: 'abc123',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: 'Akash Das',
                email: 'aka@gmail.com',
                password: '123man',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ])
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});
    },
}