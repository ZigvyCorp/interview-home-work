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
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const __1 = require("..");
const PollController = {
    createPoll: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { title, options, author } = req.body;
            const existPoll = yield models_1.Polls.findOne({ title });
            if (existPoll)
                return res.send({ msg: "Poll already create" });
            const newPoll = new models_1.Polls({
                author,
                title,
                options,
            });
            yield newPoll.save();
            res.status(200).json({
                code: 200,
                newPoll,
            });
        }
        catch (error) {
            console.log("error", error);
            res.status(500).send({ msg: error });
        }
    }),
    getAllPoll: (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const polls = yield models_1.Polls.find().sort("-createdAt");
            if (!polls)
                return res.status(404).send({ msg: "Empty" });
            return res.status(200).json({ polls });
        }
        catch (error) {
            res.send({ msg: error });
        }
    }),
    getPollById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const poll = yield models_1.Polls.findById(req.params.id);
            if (!poll)
                return res.status(404).send({ msg: "not found" });
            return res.status(200).json({ poll });
        }
        catch (error) {
            res.send({ msg: error });
        }
    }),
    updateVote: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { userId, optionsId } = req.body;
            const voted = yield models_1.Polls.findOneAndUpdate({
                _id: req.params.id,
                "options._id": optionsId,
            }, {
                $inc: { "options.$.count": 1 },
                $addToSet: { user_voted: userId },
            }, { new: true });
            __1.io.to(`${req.params.id}`).emit("voted", voted);
            res.json({ code: 200, voted });
        }
        catch (error) {
            res.send({ msg: error });
        }
    }),
};
exports.default = PollController;
