import mongoose from 'mongoose';

const Item = new mongoose.Schema(
    {
        sItemName: String,
    },
    {
        timestamps: { createdAt: 'dCreatedAt', updatedAt: 'dUpdatedAt' },
    }
);

export default mongoose.model('Items', Item);