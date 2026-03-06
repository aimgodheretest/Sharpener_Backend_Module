const db = require("../utils/db-connection");
const Users = require("../models/userModel");

//POST USERS
const addUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const users = await Users.create({
      name: name,
      email: email,
    });

    res.status(201).send(`User with name:${name} is Created...`);
  } catch (error) {
    console.log(error);
    res.status(500).send(`unable to create user entry!.`);
  }
};

//GET USERS
const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
module.exports = {
  addUser,
  getUsers,
};
