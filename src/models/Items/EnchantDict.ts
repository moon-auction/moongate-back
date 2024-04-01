import { Schema, model as Model } from 'mongoose';

const enchantDictSchema = new Schema({
    itemChangeDictId: {
        type: Schema.Types.ObjectId,
        ref: 'ItemChangeDict',
        required: true,
    },
    isPrefix: {
        type: Boolean,
        required: true,
    },
    availableType: {
        type: Schema.Types.ObjectId,
        ref: 'ItemTypeDict',
        required: true
    }
});

export default Model('EnchantDict', enchantDictSchema);
