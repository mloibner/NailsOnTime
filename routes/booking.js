const Booking = require('../models/booking');
const { model } = require('../models/booking');
const router = require("express").Router();

router.post('/booking', (req, res) => {
  Booking.register(new Booking({
      date: req.body.date,
      technician: req.body.technician,
      salon: req.body.salon,
      time: req.body.time
    }))
});

router.put('/change', (req, res) => {
    console.log(req.body)
    Booking.findOne({
      date: req.body.date,
      time: req.body.time,
      technician: req.body.technician,
      salon: req.body.salon
    }, (err) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({
        success: true,
        status: 'Your booking has been updated!'
      }); 
    })
});

router.get('/delete', (req, res) => {

    req.remove((err) => {
        if (err) {
          console.log(err);
        } else {
          res.json({
            message: 'Your booking has been cancelled!'
          });
        }
    })
});

module.exports = router;
