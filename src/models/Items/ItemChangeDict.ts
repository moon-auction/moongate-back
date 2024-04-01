import { Schema, model as Model } from "mongoose";

const itemChangeDictSchema = new Schema({
    changeOn: {
        type: String,
        required: true,
    },
    minValue: {
        type: Number,
        required: true,
    },
    maxValue: {
        type: Number,
        required: true,
    },
    isOnAdditionalEffect: {
        type: Boolean,
        required: true,
    },
    condition: {
        type: String,
        required: false,
    },
});

export default Model("ItemChangeDict", itemChangeDictSchema);