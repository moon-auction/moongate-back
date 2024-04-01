import { Schema, model as Model } from 'mongoose';

const commentSchema = new Schema({
    content: {
        type: String,
        required: true,
        default: "",
    },
    uploadedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    deleted: {
        type: Boolean,
        required: true,
        default: false,
    },
}, {
    timestamps: true,
});

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        default: "",
    },
    content: {
        type: String,
        required: true,
        default: "",
    },
    uploadedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment',
    }],
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    views: {
        type: Number,
        required: true,
        default: 0,
    },
    deleted: {
        type: Boolean,
        required: true,
        default: false,
    },
}, {
    timestamps: true,
});

const postReportSchema = new Schema({
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    },
    content: {
        type: String,
        required: true,
        default: "",
    },
    reportedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    result: {
        type: String,
        required: true,
        default: "pending",
    },
}, {
    timestamps: true,
});

const commentReportSchema = new Schema({
    comment: {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
        required: true,
    },
    content: {
        type: String,
        required: true,
        default: "",
    },
    reportedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    result: {
        type: String,
        required: true,
        default: "pending",
    }
}, {
    timestamps: true,
});

export const Comment = Model('Comment', commentSchema);
export const Post = Model('Post', postSchema);
export const PostReport = Model('PostReport', postReportSchema);
export const CommentReport = Model('CommentReport', commentReportSchema);