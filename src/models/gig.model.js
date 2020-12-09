const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gigSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    provider: {
        type: ObjectId,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength:30,
        maxlength: 120
    },
    cost_value: {
        type: Number,
        required: true 
    },
    cost_currency: {
        type: String,
        required: true 
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
}
);

const Gig = mongoose.model('Gig', gigSchema);

module.exports = Gig;