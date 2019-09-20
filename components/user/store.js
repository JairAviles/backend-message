const Model = require('./model')

const addUser = (user) => {
  const myUser = new Model(user);
  return myUser.save();
}

const getUsers = async () => {
    const users = await Model.find();
    return users
}

module.exports = {
  add: addUser,
  list: getUsers
}