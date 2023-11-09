function errorMiddleware(error, request, response, next) {
    const status = error.status || 500;
    const message = error.message || "Something went wrong";
    response.status(status).json({
        status,
        message,
    });
}
export default errorMiddleware;
//# sourceMappingURL=errorMiddleware.js.map