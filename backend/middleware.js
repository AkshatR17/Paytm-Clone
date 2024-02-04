require('dotenv').config();
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {

    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({
            msg: "User not authenticated 1"
        });
    }

    const jwtToken = authHeader.split(' ')[1];
    
    try {
        const data = jwt.verify(jwtToken, process.env.JWT_SECRET);
        req.userId = data.userId;
        next();
    } catch (error) {
        return res.status(403).json({
            msg: "User not authenticated 2"
        });
    }

};

module.exports = authMiddleware;