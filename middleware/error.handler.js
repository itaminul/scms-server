const errorHanlderMiddlewae = (err, req, res, next) => {
    console.log(err)
    res.status(500).json({msg: err})
}

module.exports=errorHanlderMiddlewae;