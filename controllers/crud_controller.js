// const sayHello = (req, res) => {
//     res.send('Hello World');
// }

// module.exports = { sayHello };

const userService = require('../services/userService');

module.exports.createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
}

module.exports.getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (user) {
            res.status(200).json(user);
        }
        else {
            res.status(400).send({ message: 'User not found' });
        }
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
}


module.exports.getAll = async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

