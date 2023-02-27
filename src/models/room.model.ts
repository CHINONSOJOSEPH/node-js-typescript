import mongoose  from 'mongoose';

import roomTypeModel from './roomtype.model';


const roomSchema = new mongoose.Schema({
    roomId: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    }
    , roomType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "RoomType"
    }
})


const roomModelType = mongoose.model('Room', roomSchema);

export default roomModelType