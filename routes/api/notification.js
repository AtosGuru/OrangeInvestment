const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Notification = require('../../models/Notification');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/', auth ,
  async (req, res) => {
    // console.log("req.body : " , req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { account  , amount  , method , password} = req.body;

    try {
      const user = await User.findById(req.user.id).select();
      // const isMatch = await bcrypt.compare(password, user.password);
    if (password == user.password) {
        // console.log('password match');
        const newNotification = new Notification({
          account,
          amount,
          method,
          user : req.user.id
        });
        const notify = await newNotification.save();
        res.json(notify);
      } else if(password !== user.password){ 
        // console.log('password does not match');
        return res.status(400).json({ errors: [{ msg: 'Password is not Correct' }] });
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

router.get('/', auth, async (req, res) => {
  console.log('here');
  try {
    const _notifications = await Notification.find().sort({ date: -1 });
    console.log(_notifications);
    res.json(_notifications);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.delete('/:id', auth, async (req, res) => {
  console.log('here notification delete');
  try {
    const _notifications = await Notification.findById(req.params.id);
    console.log(_notifications);
    if (!_notifications) {
      return res.status(404).json({ msg: 'Notification not found' });
    }//

    await _notifications.remove();
    res.json(_notifications);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
