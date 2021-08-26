const sendErrorDev = (err, req, res) => {
  // A) API
  if (req.originalUrl.startsWith('/')) {
    return res.status(err.statusCode).json({
      name: err.name,
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  }
  // B) RENDERED WEBSITE
  console.error('ERROR 💥', err);
  return res.status(err.statusCode).render('error', {
    title: 'Something when wrong 😓',
    msg: err.message,
  });
};

module.exports = (err, req, res, next) => {
  // console.log(err.stack);
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  sendErrorDev(err, req, res);
};
