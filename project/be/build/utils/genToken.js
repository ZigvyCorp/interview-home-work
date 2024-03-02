"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRefreshToken = exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateAccessToken = (payload) => {
    return jsonwebtoken_1.default.sign(payload, `${process.env.ACCESS_TOKEN_SECRET}`, {
        expiresIn: "15m",
    });
};
exports.generateAccessToken = generateAccessToken;
const generateRefreshToken = (payload, res) => {
    const refresh_token = jsonwebtoken_1.default.sign(payload, `${process.env.REFRESH_TOKEN_SECRET}`, {
        expiresIn: "30d",
    });
    res.cookie("refreshtoken", refresh_token, {
        httpOnly: true,
        path: `/api/rf_token`,
        maxAge: 30 * 24 * 60 * 60 * 1000,
    });
    return refresh_token;
};
exports.generateRefreshToken = generateRefreshToken;
