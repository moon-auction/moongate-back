import { Schema, model as Model } from "mongoose";

const itemTypeDictSchema = new Schema({
    itemType: {
        type: String,
        unique: true,
        required: true,
    },
});

export default Model("ItemTypeDict", itemTypeDictSchema);