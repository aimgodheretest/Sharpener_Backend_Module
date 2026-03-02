const sendResponse = (res, data, statusCode = 200) => {
  try {
    return res.status(statusCode).json({
      status: true,
      data: data,
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: "Something went wrong while sending response",
    });
  }
};

const sendErrResponse = (res, error) => {
  try {
    const statusCode = error.statusCode || 400;
    const message = error.message || "Internal Server Error";

    res.status(statusCode).json({
      status: false,
      message: message,
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: "Unexpected Error",
    });
  }
};

module.exports = {
  sendErrResponse,
  sendResponse,
};
