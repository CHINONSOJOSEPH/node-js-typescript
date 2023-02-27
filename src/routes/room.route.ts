import roomController from '../controllers/room.controller';

import express from 'express';
const router = express.Router()


router.route('/')
    .get(roomController.getAllRoom)
    .post(roomController.createRoom)


router.route('/:room')
    .get(roomController.getOneRoom)
    .delete(roomController.deleteRoom)

    export default router