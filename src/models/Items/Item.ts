import { Schema, model as Model } from "mongoose";
import Enchant from "./Enchant";

const itemSchema = new Schema({
    ownedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    itemDictId: {
        type: Schema.Types.ObjectId,
        ref: "ItemDict",
        required: true,
    },
    defense: {
        type: Number,
        default: 0,
        isRequired: false,
    },
    protection: {
        type: Number,
        isRequired: false,
    },
    minDamage: {
        type: Number,
        isRequired: false,
    },
    maxDamage: {
        type: Number,
        isRequired: false,
    },
    magicDamage: {
        type: Number,
        isRequired: false,
    },
    minWound: {
        type: Number,
        isRequired: false,
    },
    maxWound: {
        type: Number,
        isRequired: false,
    },
    criticalRate: {
        type: Number,
        isRequired: false,
    },
    balance: {
        type: Number,
        isRequired: false,
    },
    durability: {
        type: Number,
        isRequired: false,
    },
    rounds: {
        type: Number,
        isRequired: false,
    },
    range: {
        type: Number,
        isRequired: false,
    },
    upgrades: [
        {
            type: Schema.Types.ObjectId,
            ref: "UpgradeDict",
            default: null,
        },
    ],
    additionalEffects: [
        {
            type: {
                changeOn: {
                    type: String,
                    enum: ["attack", "defense", "critical", "balance", "durability", "rounds", "range"],
                    required: true,
                },
                value: {
                    type: Number,
                    required: true,
                },
            }
        }],
    ergLevel: {
        type: Number,
        required: false,
    },
    prefix: {
        type: Schema.Types.ObjectId,
        ref: "Enchant",
        default: null,
    },
    postfix: {
        type: Schema.Types.ObjectId,
        ref: "Enchant",
        default: null,
    },
    piercing: {
        type: Number,
        required: false,
    },
});

const Item = mongoose.model("Item", itemSchema);

export default Item;