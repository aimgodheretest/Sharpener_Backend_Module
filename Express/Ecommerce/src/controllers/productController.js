const productService = require("../services/productServices");
const { sendResponse, sendErrorResponse } = require("../utils/response");

const getAllProducts = (req, res) => {
  try {
    const result = productService.getAllProducts();
    return sendResponse(res, result);
  } catch (error) {
    return sendErrorResponse(res, error);
  }
};

const addProduct = (req, res) => {
  try {
    const result = productService.addProduct();
    return sendResponse(res, result, 201);
  } catch (error) {
    return sendErrorResponse(res, error);
  }
};

const getProductById = (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      const err = new Error("Product ID is required");
      err.statusCode = 400;
      throw err;
    }
    const result = productService.getProductById(id);
    return sendResponse(res, result);
  } catch (error) {
    return sendErrorResponse(res, error);
  }
};

module.exports = {
  getAllProducts,
  addProduct,
  getProductById,
};
