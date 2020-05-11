

module.exports = (app)=>{
  app.use((req, res, next) =>{
    res.success = (data = null, code = 200)=>{
      return res.status(code).json({ data: data, error: false, message: 'success' });
    };
    res.error = (error, code = 400)=>{
      let message = error;
      if (typeof error === 'object') {
        message = error.message;
      }
      // if (code === 500) {
      //   captureException('function', error);
      // }
      return res.status(code).json({ data: null, error: true, message: message });
    };
    next();
  })
};
