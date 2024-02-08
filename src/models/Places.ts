import { Schema, model } from "mongoose";

const placeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    descripiton: {
        type: String,
        required: false,
    },
    reviews: [String],
    location: {
        type: String,
    },
    phone: {
        type: String,
    },
    menus : [
        {
            name: String,
            price: Number,
        }
    ],
    liked: {
        type: Number,
        default: 0,
    },
    bookmarked: {
        type: Number,
        default: 0,
    },
    viewed: {
        type: Number,
        default: 0,
    },
    schedule: [
        {
            day: String,
            open: String,
            close: String,
            breakTime: String,
        }
    ],
    tags: [String],
    images: [String],
});

export default model("Places", placeSchema);