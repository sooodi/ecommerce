import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
