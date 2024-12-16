import jwt from 'jsonwebtoken';

export const verifyUser = (req, res, next) => {
    const token = req.cookies.JwtToken; // Ensure you use the correct cookie name
    if (!token) {
        return res.status(401).json('You are not authenticated');
    }
    jwt.verify(token, process.env.SECRET, (err, data) => {
        if (err) {
            return res.status(401).json('Token is not valid');
        }
        req.UserId = data.id; // Store the user ID from the token
        next();
    });
};
