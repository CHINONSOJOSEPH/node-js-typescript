import express from 'express'
const router = express.Router();

import roomRoute from './room.route'
import roomtypeRoute from './roomType.routes'


router.use('/room', roomRoute)
router.use('/roomtypeRoute', roomtypeRoute)


export default router;