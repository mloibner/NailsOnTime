const Booking = require('../models/booking');
const { model } = require('../models/booking');
const router = require("express").Router();

router.get('/:id', async (req, res) => {
  Booking.findOne({
    username: req.params.id
  }).then((user) => {console.log(user); res.json(user)}); 
  console.log(req.params)
});


router.post('/book', (req, res) => {
  console.log("new Booking")
  console.log(req.body)
  Booking.create({
    salon: req.body.salon,
    technician: req.body.technician,
    date: req.body.date,
    username: req.body.username
  });
  res.json({
    success: true,
    status: 'You are successfully booked in!'
  });
});

router.put('/change', (req, res) => {
  console.log("changing booking")
  console.log(req.body)
  Booking.update((err)=> {
    if (err) {
      console.log(err)
    }
  });
  res.json({
    success: true,
    status: 'Your booking has been updated!'
  });
});

router.delete('/delete', (req, res) => {
  Booking.remove((err) => {
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
