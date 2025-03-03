const errorHandler = (err, req, res, next) => {
   console.log('error code',res.statusCode, err.message)
    res.status(res.statusCode || 500).json({
        message: err.message,
        status: res.statusCode
    })
} 


module.exports = errorHandler