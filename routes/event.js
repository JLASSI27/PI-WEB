const express =  require('express');
const router = express.Router();
const {Event,eventsSchema} = require('../Models/event');
const validate = require('../Middlewares/validate');
const {addevent,getevent,getEventByType,getEventByLieu,updateEvent,deleteEvent} = require('../Controllers/event/eventController');
const upload = require('../config/multer'); // ✅ l'import essentiel




router.post("/events" ,upload.single('image'),validate(eventsSchema),addevent)

router.get('/events',getevent )

router.get('/getEventByType/:Type', getEventByType)

router.get('/getEventByLieu/:Lieu', getEventByLieu)

router.put("/updateEvent/:id", updateEvent)

router.delete('/deleteEvent/:id',deleteEvent)  




module.exports = router;