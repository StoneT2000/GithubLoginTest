const express = require('express');
//const connectDB = require('./config/db');
var cors = require('cors');

// routes
const auth = require('./routes/api/auth');

// payload
const payload = require('./payload');

const app = express();

// Connect Database
//connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/auth', auth);

app.use('/payload', payload);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));
