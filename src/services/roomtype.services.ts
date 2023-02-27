import  roomTypeModel from'../models/roomtype.model';

class RoomTypeService {
    // create 
    async create(roomType :Iroomtype) {
        return await roomTypeModel.create(roomType)
    }


    // get one roomtype 
    async getOne(filter : Partial<Iroomtype> & {roomType ? : string}) {
        return await roomTypeModel.findOne(filter)
    }


    // get all roomtype s
    async getMany(filter : Partial<Iroomtype>) {
        return await roomTypeModel.find(filter)
    }


    // update a room type
    async update(filter : Partial<Iroomtype>  ,newData :Iroomtype) {
        return await roomTypeModel.findOneAndUpdate(filter, newData, { new: true })
    }


    // delete a room type
    async delete (filter : Partial<Iroomtype> & {roomType ? : string}){
        return await roomTypeModel.findOneAndDelete (filter);
    }


}

export default  new RoomTypeService()