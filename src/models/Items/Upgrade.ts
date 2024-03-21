// 개조 스키마
import { Schema, model } from 'mongoose';

const Upgrade = new Schema({
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

export default model('Upgrade', Upgrade);