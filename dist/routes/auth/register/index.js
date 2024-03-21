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
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = __importDefault(require("cheerio"));
const iconv_lite_1 = __importDefault(require("iconv-lite"));
const router = express_1.default.Router();
router.get('/confirm', (req, res, next) => {
    try {
        const min = 1000000;
        const max = 9999999;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        // TODO: post on db
        return res.send({ code: randomNumber });
    }
    catch (e) {
        next(e);
    }
});
router.post('/confirm', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { code, url } = req.body;
        if (!code || !url) {
            return res.status(400).send({ message: 'Invalid request' });
        }
        // Get Mabinogi Site Post
        const response = yield (0, axios_1.default)({
            url: url,
            method: 'GET',
            responseType: 'arraybuffer'
        }).then((response) => {
            return iconv_lite_1.default.decode(response.data, 'EUC-KR').toString();
        });
        const $ = cheerio_1.default.load(response);
        // Get Data from it
        var server = $('.btm_box').find('dl').find('dt').find('img').attr('src');
        server = server === null || server === void 0 ? void 0 : server.split('/')[(server === null || server === void 0 ? void 0 : server.split('/').length) - 1];
        const content = $('.view_cont').find('p').text();
        const name = $('.btm_box').find('dl').find('dt').find('a').text();
        // Icon to server info
        if (server == "icon_l.png") {
            server = "류트";
        }
        else if (server == "icon_h.png") {
            server = "하프";
        }
        else if (server == "icon_m.png") {
            server = "만돌린";
        }
        else if (server == "icon_w.png") {
            server = "울프";
        }
        return res.send({ server, name, content });
    }
    catch (e) {
        next(e);
    }
}));
exports.default = router;
