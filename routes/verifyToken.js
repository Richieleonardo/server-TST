//fetchProtectedData
const jwt = require('jsonwebtoken');
function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Extract token from Authorization header

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.error('Token verification error:', err);
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({ message: 'Access denied. Token expired.' });
            }
            return res.status(403).json({ message: 'Invalid token.' });
        }
        next(); // Pass control to the next middleware/route
    });
}

module.exports = verifyToken;