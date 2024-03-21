// 기본 아이템 정보 스키마
import { Schema, model } from 'mongoose';

const EquipmentData = new Schema({
    category: Number,
    name: String,
    atkSpeed: String,
    atkNumber: Number,
    range: Number,
    piercing: Number,
    defense: Number,
    protection: Number,
    magicDefense: Number,
    magicProtection: Number,
    damage: {
        min: Number,
        max: Number
    },
    magicDamage: {
        min: Number,
        max: Number
    },
    wound: {
        min: Number,
        max: Number
    },
    crit: {
        min: Number,
        max: Number
    },
    balance: {
        min: Number,
        max: Number
    },
    durability: {
        min: Number,
        max: Number
    },
    upgrades: [
        {
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
        }
    ],
    repairCost: {
        90: Number,
        95: Number,
        100: Number
    },
    repairable: {
        type: Boolean,
        default: true
    },
    repairableBy: [String],

})

export default model('EquipmentData', EquipmentData);