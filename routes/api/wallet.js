const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Wallet = require('../../models/Wallet');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/', auth ,
  check('address', 'Wallet Address is required').notEmpty(),
  check(
    'password',
    'Please enter a password with 6 or more characters'
  ).isLength({ min: 6 }),
  async (req, res) => {
    // console.log("req.body : " , req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { address  , password } = req.body;

    try {
      const user = await User.findById(req.user.id).select();
      // const isMatch = await bcrypt.compare(password, user.password);
      let _wallet = await Wallet.findOne({ address }); 
      if (_wallet) {
        return res.status(400).json({ errors: [{ msg: 'Wallet Address exists' }] });
      } else if (password == user.password) {
        // console.log('password match');
        const newWallet = new Wallet({
          address,
          password,
          user: req.user.id
        });
        const wallet = await newWallet.save();
        res.json(wallet);
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

//Get All of the Wallets 
router.get('/', auth, async (req, res) => {
  try {
    const wallets = await Wallet.find().sort({ date: -1 });
    console.log(wallets);
    res.json(wallets);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/posts/:id
// @desc     Get post by ID
// @access   Private
router.delete('/:id', auth, async (req, res) => {
  // console.log("Server can work : " );
  try {
    const wallet = await Wallet.findById(req.params.id);
    console.log(wallet);
    if (!wallet) {
      return res.status(404).json({ msg: 'Wallet not found' });
    }
    // console.log(wallet.user.toString());

    // Check user
    if (wallet.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await wallet.remove();

    res.json({ msg: 'Wallet Address removed successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/posts/:id
// @desc     Delete a post
// @access   Private
router.delete('/:id', auth , async (req, res) => {
  try {
    const wallet = await Wallet.findById(req.params.id);

    if (!wallet) {
      return res.status(404).json({ msg: 'Wallet not found' });
    }

    // Check user
    if (wallet.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await wallet.remove();

    res.json({ msg: 'Wallet removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});


module.exports = router;
