import { Schema, model as Model } from "mongoose";

const itemDictSchema = new Schema({
    itemTypeId: {
        type: Schema.Types.ObjectId,
        ref: "ItemType",
        required: false
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    colorParts: {
        type: Number,
        required: false,
    },
    buyPrice: {
        type: Number,
        required: false,
    },
    sellPrice: {
        type: Number,
        required: false,
    },
    size: {
        type: [Number],
        required: false,
    },
    repair90: {
        type: Number,
        required: false,
    },
    repair95: {
        type: Number,
        required: false,
    },
    repair100: {
        type: Number,
        required: false,
    },
    hitNumber: {
        type: Number,
        required: false,
    },
    atkSpeed: {
        type: Number,
        required: false,
    },
    minDefense: {
        type: Number,
        required: false,
    },
    maxDefense: {
        type: Number,
        required: false,
    },
    minProtection: {
        type: Number,
        required: false,
    },
    maxProtection: {
        type: Number,
        required: false,
    },
    minMinDamage: {
        type: Number,
        required: false,
    },
    maxMinDamage: {
        type: Number,
        required: false,
    },
    minMaxDamage: {
        type: Number,
        required: false,
    },
    maxMaxDamage: {
        type: Number,
        required: false,
    },
    minMagicDamage: {
        type: Number,
        required: false,
    },
    maxMagicDamage: {
        type: Number,
        required: false,
    },
    minMinWound: {
        type: Number,
        required: false,
    },
    maxMinWound: {
        type: Number,
        required: false,
    },
    minMaxWound: {
        type: Number,
        required: false,
    },
    maxMaxWound: {
        type: Number,
        required: false,
    },
    minCriticalRate: {
        type: Number,
        required: false,
    },
    maxCriticalRate: {
        type: Number,
        required: false,
    },
    minBalance: {
        type: Number,
        required: false,
    },
    maxBalance: {
        type: Number,
        required: false,
    },
    minDurability: {
        type: Number,
        required: false,
    },
    maxDurability: {
        type: Number,
        required: false,
    },
    rounds: {
        type: Number,
        required: false,
    },
    range: {
        type: Number,
        required: false,
    },
    repairable: {
        type: Boolean,
        required: false,
    },
    enchantable: {
        type: Boolean,
        required: false,
    },
    upgradeable: {
        type: Boolean,
        required: false,
    },
    upgrades: {
        type: Schema.Types.ObjectId,
        ref: "UpgradeDict"
    },
    maxUpgrades: {
        type: Number,
        required: false,
    },
    reforgable: {
        type: Boolean,
        required: false,
    },
    erg_able: {
        type: Boolean,
        required: false,
    },
    additionalEffect: [
        {
            type: {
                changeOn: String,
                value: Number,
            },
            required: false,
        }
    ],
    piercing: {
        type: Number,
        required: false,
    },
});

export default Model("ItemDict", itemDictSchema);