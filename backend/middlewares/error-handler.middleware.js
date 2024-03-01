
	// Log error on server side, dont send error details to client
function ErrorHandlerMiddleware(_err, _req, _res, _next) {
	console.error(_err);
	_res.sendStatus(_err.status || 500);
}

module.exports = ErrorHandlerMiddleware;
