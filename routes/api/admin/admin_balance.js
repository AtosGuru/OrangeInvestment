const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../../middleware/auth')
const User = require('../../../models/User');
const Balance = require('../../../models/Balance');
// @route    GET api/posts
// @desc     Get all posts
// @access   Private
// Get User
router.get('/', auth, async (req, res) => {
    try {
      const _user = await User.findById(req.user.id);
      if (!_user) {
        return res.status(404).json({ msg: 'User not found' });
        }
        const _balance = await Balance.findOne({user : req.user.id});
        console.log("GET 12321312 :", _balance);
        res.json(_balance);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});


router.post('/', auth, async (req, res) => {

    try {
        const { balance , profit  , id  } = req.body;
      const _balance = await Balance.findOne({ user : id});
        // console.log("Set Balance : ", _user);
      if (!_balance) {
        const new_balance = new Balance({
          balance,
          profit,
          user: id
        })
        const _new_balance = await new_balance.save();
        console.log("SET BALANCE : ", _new_balance);
        res.json(_new_balance);
      } else { 
        await Balance.findOneAndUpdate({ user: id }, { balance, profit });
        console.log(await Balance.findOne({ user: id }))
        const new_balance = {
          balance,
          profit,
          user: id
        };
        res.json(new_balance);
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});
  
  


  

module.exports = router;
