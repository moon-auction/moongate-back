import express from 'express';
import axios from 'axios';
import cheerio from 'cheerio';
import iconv from 'iconv-lite';

import { Confirm } from '../../../models/User';

const router = express.Router();

router.get('/confirm', async (req, res, next) => {
    try {
        const min = 1000000;
        const max = 9999999;
        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
        // TODO: post on db and check if it's already there
        // if it's already there, then generate another number
        var flag = false;
        while (flag == false) {
            console.log("flag")
            console.log(await Confirm.findOne({code: randomNumber}));
            flag = true;

                
        }

        Confirm.create({code: randomNumber, server: "", name: ""}, (err: Error, result: any) => {
            if (err) {
                console.log(err);
                return res.status(500).send({message: 'Server Error'});
            }
        });

        return res.send({code: randomNumber});
    } catch (e) {
        next(e);
    }
});

router.post('/confirm', async (req, res, next) => {
    try {
        const {code, url} = req.body;

        if (!code || !url) {
            return res.status(400).send({message: 'Invalid request'});
        }
    
        // Get Mabinogi Site Post
        const response = await axios({
            url: url,
            method: 'GET',
            responseType: 'arraybuffer'
        }).then((response) => {
            return iconv.decode(response.data, 'EUC-KR').toString();
        });

        const $ = cheerio.load(response);


        // Get Data from it
        var server = $('.btm_box').find('dl').find('dt').find('img').attr('src');
        server = server?.split('/')[server?.split('/').length - 1];

        const content = $('.view_cont').find('p').text();

        const name = $('.btm_box').find('dl').find('dt').find('a').text();

        // Icon to server info
        if (server == "icon_l.png") {
            server = "류트";
        } else if (server == "icon_h.png") {
            server = "하프";
        } else if (server == "icon_m.png") {
            server = "만돌린";
        } else if (server == "icon_w.png") {
            server = "울프";
        }

        return res.send({server, name, content});

    } catch (e) {
        next(e);
    }
});

// get user info and confirm code
// router.post('/', (req, res, next) => {
//     try {)

export default router;