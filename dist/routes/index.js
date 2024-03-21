"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const protected_1 = __importDefault(require("./protected"));
const auth_1 = __importDefault(require("./auth"));
const ItemDb_1 = __importDefault(require("./ItemDb"));
const router = express_1.default.Router();
router.use('/auth', auth_1.default);
router.use('/protected', protected_1.default);
router.use('/itemDB', ItemDb_1.default);
exports.default = router;
