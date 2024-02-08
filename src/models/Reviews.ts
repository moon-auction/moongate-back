import { Schema, model } from 'mongoose';

const reviewSchema = new Schema({
    placeId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    tags: [String],
    images: [String],
});

export default model('Reviews', reviewSchema);