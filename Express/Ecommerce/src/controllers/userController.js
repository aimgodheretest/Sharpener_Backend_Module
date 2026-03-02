const { sendResponse, sendErrorResponse } = require("../utils/response");
const getAllUsers = (req, res) => {
  try {
    return sendResponse(res, "Fetching all users");
  } catch (error) {
    return sendErrorResponse(res, error);
  }
  // return res.json({
  //   test: "Working",
  // });
};

const addUser = (req, res) => {
  try {
    return sendResponse(res, "Adding a new user", 201);
  } catch (error) {
    return sendErrorResponse(res, error);
  }
};

const getUserById = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (!id) {
      const err = new Error("Invalid User ID");
      err.statusCode = 400;
      throw err;
    }
    return sendResponse(res, `Fetching user with ID:${id}`);
  } catch (error) {
    return sendErrorResponse(res, error);
  }
};

module.exports = {
  getAllUsers,
  addUser,
  getUserById,
};
