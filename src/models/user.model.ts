import mongoose from'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
    },
password : {
    type: String,
    required: true,
},
role: {
    type: String,
    enum: [ 'guest', 'admin'],
    default: 'guest'
}
})

const user = mongoose.model('User',userSchema);

export default user;