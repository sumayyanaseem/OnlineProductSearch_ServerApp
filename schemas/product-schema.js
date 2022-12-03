import mongoose from 'mongoose';

const schema = mongoose.Schema(
    {
        _id: String,
        title: String,
        description: String,
        price: Number,
        discountPercentage: Number,
        rating: Number,
        stock: Number,
        brand: String,
        category: String,
        thumbnail: String,
        images: [{
            type: String
        }],
        owner: String,
        status: {
            type: String,
            enum: ['Approved', 'Rejected', 'Pending'],
            default: 'user'
        },
    },
    {
        collection: 'products_info'
    }
);

export default schema;