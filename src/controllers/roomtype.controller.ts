import roomTypeService from '../services/roomtype.services';
import { Request, Response } from 'express';



class RoomTypeController {
    // create a room type
    async createRoom(req: Request, res:Response) {
        // check if a roomtype with that name exist already
        const newRoomTypeData = req.body; // {}
        const foundRoomType = await roomTypeService.getOne({ roomType: newRoomTypeData.roomType });

        if (foundRoomType) {
            res.status(400).json({ success: false, message: "Roomtype already exists" });
        }

        const newRoomType = await roomTypeService.create(newRoomTypeData);
        res.status(201).json({ success: true, message: "Roomtype fetched Succesfully" });
    }




    // get one roomtype
    async getOneRoomType(req : Request, res: Response) {
        const requestedRoomType: string = req.params.roomType;

        const foundRoomType = await roomTypeService.getOne({ roomType: requestedRoomType});
        if (!foundRoomType) {
            res.status(404).json({ success: false, message: "Roomtype does not exist" })
        }

        res.status(200).json({ success: true, message: "RoomType fetched successfully", data: foundRoomType })


    }



    // get all room types
    async getAllRoomTypes(req : Request, res:Response) {
        const filter = req.query;

        const foundRoomTypes  =await roomTypeService.getMany(filter);

        if (!foundRoomTypes) {
            res.status(404).json({ success: false, message: "No roomTypes found" })
        }

        res.status(200).json({ success: true, message: "RoomTypes fetched successfully", data: foundRoomTypes })
    }



    // delete a roomtype
    async deleteRoomType (req:Request, res:Response){
        const requestedRoomType = req.params.roomType;

        const deletedRoomType = await  roomTypeService.delete({roomType: requestedRoomType});


        if (!deletedRoomType) {
            res.status(404).json({ success: false, message: "Requested roomtype not found" })
        }

        res.status(200).json({ success: true, message: "RoomTypes deleted successfully", data: deletedRoomType })
    }


    // update a room type
    async updateRoomType (req:Request, res:Response){
    
    }
}

export default  new RoomTypeController()