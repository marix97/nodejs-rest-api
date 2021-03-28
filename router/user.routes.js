module.exports = app => {
    const users = require('../controllers/user.controller');

    // Create a new User
    app.post('/api/users', users.create);

    // Retrieve all Users
    app.get('/api/users', users.findAll);

    // Retrieve a single User with UserId
    app.get('/api/users/:userId', users.findOne);

    // Update an User with UserId
    app.put('/api/users/:userId', users.update);

    // Delete a User with UserId
    app.delete('/api/users/:userId', users.delete);
}