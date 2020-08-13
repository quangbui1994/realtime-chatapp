const users = [];

/**
 * The function is used to add the user to list of users and join the room.
 * @param {String} id The id of added user, equals to socket id
 * @param {String} name The name of added user
 * @param {String} room The room of user is going to join
 */
const addUser = ({ id, name, room }) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();
    const existingUser = users.find(user => user.name === name && user.room === room);

    if (existingUser) return { error: 'User is existed' };

    const user = { id, name, room };
    users.push(user);

    return { user }
};

/**
 * The function removes the specific user from users list by id
 * @param {String} id The id of user needs to be removed
 */
const removeUser = (id) => {
    const index = users.findIndex(user => user.id === id);

    if (index > -1) {
        return users.splice(index, 1)[0];
    }
};

/**
 * The function returns the specific user by id
 * @param {String} id The id of user
 */
const getUserById = id => users.find(user => user.id === id);

/**
 * The function returns the list of users in specific room
 * @param {String} room The room name 
 */
const getUsersInRoom = room => users.filter(user => user.room === room);

module.exports = { addUser, removeUser, getUserById, getUsersInRoom }; 