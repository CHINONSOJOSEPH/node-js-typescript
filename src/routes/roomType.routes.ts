import express from 'express'
import roomtypeController from '../controllers/roomtype.controller';
const router = express.Router()

router.route('/')
    .get(roomtypeController.getAllRoomTypes)
    .post(roomtypeController.createRoom)

router.route('/:roomType')
    .get(roomtypeController.getOneRoomType)
    .delete(roomtypeController.deleteRoomType)
    .patch(roomtypeController.updateRoomType)



export default router;