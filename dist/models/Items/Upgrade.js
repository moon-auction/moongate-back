"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 개조 스키마
const mongoose_1 = require("mongoose");
const Upgrade = new mongoose_1.Schema({
    byWho: [String],
    description: String,
    effect: [
        {
            condition: String,
            effect: String,
            value: Number,
            repair: Number
        }
    ],
    cost: Number,
    proficencyCost: Number,
    level: Number
});
exports.default = (0, mongoose_1.model)('Upgrade', Upgrade);
