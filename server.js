const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
//Routes for wallet creation
app.use('/api/addWallet', require('./routes/api/wallet'));
app.use('/api/getWallet', require('./routes/api/wallet'));
app.use('/api/deleteWallet', require('./routes/api/wallet'));
// Routes for Team Account
app.use('/api/addTeamAccount', require('./routes/api/teamAccount'));
app.use('/api/getTeamAccount', require('./routes/api/teamAccount'));
app.use('/api/deleteAccount', require('./routes/api/teamAccount'));

//Middleware for phone verification
app.use('/api/getCode', require('./routes/getCode'));
app.use('/api/verify', require('./routes/verify'));
//Routes for Admin
app.use('/api/admin/users', require('./routes/api/admin/admin_user'));
app.use('/api/admin/balance/getBalance', require('./routes/api/admin/admin_balance'));
app.use('/api/admin/balance/setBalance', require('./routes/api/admin/admin_balance'));
// Admin Team routes
app.use('/api/admin/team/getTeams', require('./routes/api/admin/admin_teams'));
//Admin Wallet routes
app.use('/api/admin/wallet/getWallets', require('./routes/api/admin/admin_wallet'));
//notification
app.use('/api/sendNotification', require('./routes/api/notification'));
app.use('/api/getNotifications', require('./routes/api/notification'));
app.use('/api/deleteNotifications', require('./routes/api/notification'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
