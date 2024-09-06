"use strict"

module.exports = (sequelize, datatypes) => {
    const User = sequelize.define('users', {
        id: {
            type: datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: datatypes.STRING,
            allowNull: false
        },
        email: {
            type: datatypes.STRING,
            allowNull: false
        },
        password: {
            type: datatypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: datatypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: datatypes.DATE,
            allowNull: false
        }
    })

    return User;
};