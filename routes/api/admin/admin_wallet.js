const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../../middleware/auth')
const User = require('../../../models/User');
const Balance = require('../../../models/Balance');
const Wallet = require('../../../models/Wallet');
// @route    GET api/posts
// @desc     Get all posts
// @access   Private
// Get User
router.get('/:id', auth, async (req, res) => {
    try {
        const _user = await User.findById(req.params.id);        
        console.log(_user);
      if (!_user) {
            return res.status(404).json({ msg: 'User Account not found' });
        }
        const _wallets = await Wallet.find({user : req.params.id});
        console.log("GET WALLETS :", _wallets );
        res.json({ _wallets , username : _user.username });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});
module.exports = router;
