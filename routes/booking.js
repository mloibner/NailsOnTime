const Booking = require('../models/booking');
const { model } = require('../models/booking');
const router = require("express").Router();

router.get('/api/booking', async (req, res) => {
  const allBookings = await Booking.find({});
  res.json(allBookings);
});


router.post('/book', (req, res) => {
  Booking.create(new Booking({
      salon: req.body.salon,
      technician: req.body.technician,
      date: req.body.date,
    }, (err) => {
      if (err) {
        console.error(err);
        res.sendStatus(422);
      }
      res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
        success: true,
        status: 'Your booking has been made!'
      });
  }))
});

router.put('/change', (req, res) => {
    console.log(req.body)
    Booking.findOneAndUpdate({
      salon: req.body.salon,
      technician: req.body.technician,
      date: req.body.date,
      time: req.body.time      
    }, (err) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({
        success: true,
        status: 'Your booking has been updated!'
      }); 
    })
});

router.delete('/delete', (req, res) => {
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
