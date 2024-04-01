import { Session } from 'express-session'

declare module 'express-session' {
  interface SessionData {
isLogin: Boolean;
email: string;
_id: string;
name: string;
verifiedInfo: any;
role: string;
level: number;
}}