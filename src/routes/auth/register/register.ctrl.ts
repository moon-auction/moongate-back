import { Request, Response, NextFunction, RequestHandler } from "express";
import { User, Confirm } from '../../../models/User';
import cheerio  from 'cheerio';
import iconv    from 'iconv-lite';
import axios    from 'axios';

export const getConfirmCode: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const min: number = 1000000;
        const max: number = 9999999;
        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
        // 중복 체크
        while (true) {
            var check = await Confirm.findOne({code: randomNumber});
            if (check == null) {
                break;
            }
            randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        }

        await Confirm.create({code: randomNumber, server: "", name: ""});

        return res.send({code: randomNumber});
    } catch (e) {
        return next(e);
    }
}

export const validateConfirmCode: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {code, url} = req.body;

        if (!code || !url) {
            return res.status(400).send({message: 'Invalid request'});
        }

        if (typeof url !== "number") {
            return res.status(400).send({message: 'Invalid request'});
        }

        // Get Mabinogi Site Post
        const response = await axios({
            url: "https://mabinogi.nexon.com/page/community/free_view.asp?id="+ url +"&category=0",
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

        if (Number(content) !== code) {
            return res.status(400).send({message: 'Invalid code'});
        }

        await Confirm.updateOne({code: code}, {server: server, name: name, url: "https://mabinogi.nexon.com/page/community/free_view.asp?id="+ url +"&category=0"});
        
        return res.send();

    } catch (e) {
        next(e);
    }
}

export const confirmDelete: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {code} = req.body;
        
        if (!code) {
            return res.status(400).send({message: 'Invalid request'});
        }

        const confirmed = await Confirm.findOne({code: code});

        if (!confirmed) {
            return res.status(400).send({message: 'Invalid confirm code'});
        }

        if (!confirmed.url) {
            return res.status(400).send({message: 'Invalid confirm code'});
        }

        // Get Mabinogi Site Post
        const response = await axios({
            url: confirmed.url,
            method: 'GET',
            responseType: 'arraybuffer'
        })

        // if return code is 401 consider it as deleted
        if (response.status === 401) {
            await Confirm.updateOne({code: code}, {deleted: true});
            return res.send();
        } else {
            return res.status(400).send({message: 'Not deleted yet'});
        }

    } catch(e) {
        next(e);
    }
}

export const registerUser: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {email, password, confirm} = req.body;

        if (!email || !password || !confirm) {
            return res.status(400).send({message: 'Invalid request'});
        }


        const confirmed = await Confirm.findOne({code: confirm});

        if (!confirmed) {
            return res.status(400).send({message: 'Invalid confirm code'});
        }

        if (confirmed.server === "" || confirmed.name === "") {
            return res.status(400).send({message: 'Invalid confirm code'});
        }

        if (!confirmed.deleted) {
            return res.status(400).send({message: 'Deleted confirm code'});
        }

        await User.create({
            email,
            password: password,
            verifiedInfo: {
                server: confirmed.server,
                character: confirmed.name
            },
            role: "user",
            level: 1,
            createdAt: new Date(),
            updatedAt: new Date()}
        );

        return res.send();
    } catch (e) {
        next(e);
    }
}