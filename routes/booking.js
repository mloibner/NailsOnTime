const Booking = require('../models/booking');
const { model } = require('../models/booking');
const router = require("express").Router();

router.get('/:id', async (req, res) => {
  console.log(req.params.id)
  try{
  const allBookings = await Booking.findById({username: req.params.id});
  console.log(allBookings)
  res.json(allBookings);
  } catch(error) {
    console.log("error");
    console.log(error);
  }
});


router.post('/book', async (req, res) => {
  console.log("new Booking")
  console.log(req.body)
  const newBooking = await Booking.create({
    salon: req.body.salon,
    technician: req.body.technician,
    date: req.body.date,
    username: req.body.username
  });
  res.json(newBooking);
});

router.put('/change', async (req, res) => {
   const updatedBooking = await Booking.findOneAndUpdate({
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
    });
    res.json(updatedBooking)
});

router.delete('/delete', (req, res) => {
  req.findById((err) => {
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
