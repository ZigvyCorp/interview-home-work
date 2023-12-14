const jwt = require("jsonwebtoken");
const User = require("../models/User");
const middlewareController = {
    verifyToken: (req, res, next) => {
        const authHeader = req.headers.authorization;
        if (authHeader && authHeader.startsWith("Bearer ")) {
            const token = authHeader.split(" ")[1];
            jwt.verify(token, process.env.JWT_ACCESS_KEY, (error, user) => {
                if (error) {
                    res.status(403).json("Token is not valid");
                }
                req.user = user;
                next();
            });
        } else {
            res.status(401).json("Unauthorized!!");
        }
    },
    verifyTokenAndUserAuth: (req, res, next) => {
        middlewareController.verifyToken(req, res, () => {
            if (
                req.user.id === req.params.userId ||
                req.user.id === req.body.userId
            ) {
                next();
            } else {
                res.status(500).json({message: "You are not allowed for this user"});
            }
        });
    },
    verifyTokenUserAndManagerAuth: (req, res, next) => {
        middlewareController.verifyToken(req, res, async () => {
            try {
                const user = await User.findById(req.params.userId || req.user.id).populate("roles");
                if (!user) {
                    return res.status(404).json({message: "User not found"});
                }
                const manager = user.roles.some((role) => role.name === "MANAGER");
                if (manager || req.user.id === req.params.userId) {
                    next();
                } else {
                    res
                        .status(403)
                        .json({message: "You are not allowed to updated info user"});
                }
            } catch (error) {
                res.status(500).json(error);
            }
        });
    },
    verifyTokenAndManagerAuth: (req, res, next) => {
        middlewareController.verifyToken(req, res, async () => {
            try {
                const user = await User.findById(req.params.userId || req.user.userId).populate("roles");
                if (!user) {
                    return res.status(404).json({message: "User not found"});
                }
                const manager = user.roles.some((role) => role.name === "MANAGER");
                if (manager) {
                    next();
                } else {
                    res.status(403).json({message: "Manager permission required"});
                }
            } catch (error) {
                res.status(500).json(error);
            }
        });
    },
    verifyTokenAdminAuth: (req, res, next) => {
        middlewareController.verifyToken(req, res, async () => {
            try {
                const user = await User.findById(req.params.userId || req.user.userId).populate("roles");
                if (!user) {
                    return res.status(404).json({message: "User not found"});
                }
                const admin = user.roles.some((role) => role.name === "ADMIN");
                if (admin) {
                    next();
                } else {
                    res.status(403).json({message: "Admin permission required"});
                }
            } catch (error) {
                res.status(500).json(error);
            }
        });
    },
};
module.exports = middlewareController;
