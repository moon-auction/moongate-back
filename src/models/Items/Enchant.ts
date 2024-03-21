import { Schema, model } from 'mongoose';

const Effect = new Schema({
    condition: String,
    effect: String,
    value: Number,
    repair: Number
})

const Enchant = new Schema({
    id: Number,
    vars: [Effect]
})

export default model('Enchant', Enchant);