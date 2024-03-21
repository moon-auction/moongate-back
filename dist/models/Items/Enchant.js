"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Effect = new mongoose_1.Schema({
    condition: String,
    effect: String,
    value: Number,
    repair: Number
});
const Enchant = new mongoose_1.Schema({
    id: Number,
    vars: [Effect]
});
exports.default = (0, mongoose_1.model)('Enchant', Enchant);
