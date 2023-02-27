import mongoose from'mongoose';

const roomTypeSchema = new mongoose.Schema({
    size: {
        type: String,
        required: true,
        unique: true
    }

});


const RoomType = mongoose.model('RoomType', roomTypeSchema);

export default  RoomType