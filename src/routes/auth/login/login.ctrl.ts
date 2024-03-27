import { Request, Response, NextFunction, RequestHandler } from 'express';
import { User } from '../../../models/User';

export const login: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;

        var session = req.session;

        if (session!.isLogin) {
            return res.status(400).json({ message: 'Already logged in' });
        }

        const found = await User.findOne({ email });

        if (!found) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await found.comparePassword(password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Password does not match' });
        } else {
            session!.isLogin = true;
            session!.email = found.email;
            session!._id = found._id.toString();
            session!.name = found.name;
            session!.verifiedInfo = found.verifiedInfo;
            session!.role = found.role;
            session!.level = found.level;
            session!.save();

            return res.status(200).json(
                {
                    message: 'Login success',
                    user: {
                        _id: session!._id,
                        email: session!.email,
                        name: session!.name,
                        verifiedInfo: session!.verifiedInfo,
                        role: session!.role,
                        level: session!.level
                    }
                }
            );
        }

    } catch(e) {
        return next(e);
    }
}