const jwt = require('jsonwebtoken');
const usersModel = require('../../Models/user/user.model');

const isAdminMiddleware = async (req, res, next) => {
    const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];
    if (!token) {
        console.log('No token provided');
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        console.log('Decoded token:', decoded);

        const user = await usersModel.findById(decoded.id);
        console.log('User found:', user);

        if (!user || user.role!=="admin") {
            return res.status(403).json({ message: 'Access denied. You are not an admin.' });
        }

        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

module.exports = isAdminMiddleware
