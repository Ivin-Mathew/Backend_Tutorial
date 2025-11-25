module.exports = (err, req, res, next) =>{
    console.error(err && err.stack ? err.stack : err);
    const status = err && err.status ? err.status : 500;
    res.status(status).json({
        ok:false,
        error: err && err.message ? err.message : "Internal server error"
    })
}