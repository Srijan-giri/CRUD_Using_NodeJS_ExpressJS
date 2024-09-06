const { User } = require("../models/user");

const createUser = async (userData) => {
    return await User.create(userData);
}

const getUsers = async () => {
    return await User.findAll();
}

const getUserById = async (userId) => {
    return await User.findByPk(userId);
}

const updateUser = async (id, userData) => {
    const user = getUserById(id);
    if (!user) throw new Error('User not found');
    return await User.update(userData);
}

const deleteUser = async (id) => {
    const user = getUserById(id);
    if (!user) throw new Error('User not found');
    return await User.destroy();
};

module.exports = { createUser, getUsers, getUserById, updateUser, deleteUser }