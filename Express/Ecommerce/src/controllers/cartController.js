const { sendResponse, sendErrResponse } = require("../utils/response");

const getCartForUser = (req, res) => {
  try {
    const userId = req.params.userId;
    if (!userId) {
      const err = new Error("User ID is required");
      err.statusCode = 400;
      throw err;
    }
    return sendResponse(res, `Fetching cart for user with ID: ${userId}`);
  } catch (error) {
    return sendErrResponse(res, error);
  }
};

const addProductToCart = (req, res) => {
  try {
    const userId = req.params.userId;
    if (!userId) {
      const err = new Error("User ID is reuired");
      err.statusCode = 400;
      throw err;
    }
    return sendResponse(
      res,
      `Adding product to cart for user with ID: ${userId}`,
    );
  } catch (error) {
    return sendErrResponse(res, error);
  }
};

module.exports = {
  getCartForUser,
  addProductToCart,
};
