class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error'; //! chuyển statusCode thành String mới dùng dc startsWith
    this.isOperational = true; //! để sau này phân biệt lỗi xuất phát từ đây hay từ bug
    Error.captureStackTrace(this, this.constructor); //! để lỗi này ko xuất hiện trên console
  }
}

module.exports = AppError;
