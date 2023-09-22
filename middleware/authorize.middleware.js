const authorizeMiddleware = (permittedRoles) => {
    return (req, res, next) => {
        let role = req.body.role;
        if (!permittedRoles.includes(role)) {
            return res.status(401).send({ message: "Unauthorized! Only Sellers Can Add And Update Products" });
        }
        next();
    };
};

module.exports={
    authorizeMiddleware
}