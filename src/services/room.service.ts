import roomModel from '../models/room.model';
import IcreateRoom from '../interfaces/room.interfaces';


class RoomService {

    async create(roomData :IcreateRoom) {
        return await roomModel.create(roomData);
    }

    async getOne(filter :Partial<IcreateRoom>) {
        return await roomModel.findOne(filter).populate('roomType')
    }

    async getAll(filter : Partial<IcreateRoom>) {
        return await roomModel.find(filter).populate('roomType')
    }

    async update(filter : Partial<IcreateRoom>, updateData : Partial<IcreateRoom>) {
        return await roomModel.findOneAndUpdate(filter, updateData, { new: true });
    }

    async delete(filter : Partial<IcreateRoom>){
        return await roomModel.findOneAndDelete(filter)
    }
}

export default new RoomService()