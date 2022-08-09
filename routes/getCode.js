
const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(VERIFY_SERVICE_SID);
    client.verify.v2.services(VERIFY_SERVICE_SID)
        .verifications
        .create({ to: `+${req.body.phonenumber}`, channel: req.body.channel })
        .then(verification => console.log(verification));
});

module.exports = router;