import { Schema, model as Model } from "mongoose";

const upgradeDictSchema = new Schema({
    itemChangeDictId: {
        type: Schema.Types.ObjectId,
        ref: "ItemChangeDict",
        required: true,
    },
    availableAt: {
        type: [Boolean],
        required: true,
    },
});

export default Model("UpgradeDict", upgradeDictSchema);