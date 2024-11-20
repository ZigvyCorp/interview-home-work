import jwt from "jsonwebtoken"

const generateAccessToken = (uid, role) => jwt.sign({ _id: uid, role }, process.env.JWT_SECRET, { expiresIn: "7d" })
const generateRefreshToken = (uid) => jwt.sign({ _id: uid }, process.env.JWT_SECRET, { expiresIn: "365d" })

module.exports = {
    generateAccessToken, generateRefreshToken
}