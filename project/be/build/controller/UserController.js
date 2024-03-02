"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const middleware_1 = require("../middleware");
const models_1 = require("../models");
const UserController = {
    register: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { fullName, email, password } = req.body;
            const userExist = yield models_1.User.findOne({ email });
            if (userExist)
                return res.status(400).send({ msg: "Email already in use" });
            const passwordHash = yield bcrypt_1.default.hash(password, 10);
            const newUser = yield models_1.User.create({
                fullName,
                email,
                password: passwordHash,
            });
            if (newUser) {
                res.json({
                    status: 200,
                    _id: newUser.id,
                    name: newUser.fullName,
                });
            }
            else {
                res.status(400).send({ msg: "Error" });
            }
        }
        catch (e) {
            res.status(500).send({ msg: "Internal Server Error" });
            console.log(e);
        }
    }),
    getUserById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield models_1.User.findById(req.params.id).select("-password");
            if (!user)
                return res.status(404).send({ msg: "User not found" });
            res.json({ user });
        }
        catch (e) {
            res.status(500).send({ msg: "Internal Server Error" });
            console.log(e);
        }
    }),
    login: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            const user = yield models_1.User.findOne({ email });
            if (!user)
                return res.status(400).send({ msg: "Account not exist" });
            yield (0, middleware_1.handleUserLogin)(user, password, res);
        }
        catch (error) {
            return res.status(500).send({ msg: error.message });
        }
    }),
    logout: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        if (!req.user)
            return res.status(400).send({ msg: "Invalid" });
        try {
            res.clearCookie("refreshtoken", { path: "/api/rf-token" });
            yield models_1.User.findOneAndUpdate({ _id: req.user._id }, {
                rf_token: "",
            });
            return res.send("Logout!");
        }
        catch (error) {
            return res.status(500).send({ msg: error.message });
        }
    }),
};
exports.default = UserController;
