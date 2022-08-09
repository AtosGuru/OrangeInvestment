
const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    client.verify.v2.services(VERIFY_SERVICE_SID)
    .verificationChecks
    .create({to: `+${req.body.phonenumber}`, channel: req.body.channel})
    .then(verification_check => console.log(verification_check.status));
});


module.exports = router;