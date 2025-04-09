const express =  require('express');
const router = express.Router();
const {Reservation,reservSchema} = require('../Models/reservation');
const validate = require('../Middlewares/validate');
const { Event } = require('../Models/event');
const {addreservation,getreservation,getreservsByName,updateRsrv,deleteReservation} = require('../Controllers/reservation/reservationController');


router.post('/reservation', validate(reservSchema), addreservation) 

router.get('/reservs', getreservation) 

router.get('/getreservsByName/:Nom', getreservsByName )

router.put("/updateRsrv/:id" , validate(reservSchema),updateRsrv) 

router.delete('/deleteReservation/:id', deleteReservation ) 


module.exports = router;
