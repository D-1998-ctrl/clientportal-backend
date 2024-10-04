

const express = require('express');
const cors = require('cors');
const sidebarDataRoutes = require('./routes/sidebarDataRoutes');
require("dotenv").config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes for main sidebar
app.use('/api', sidebarDataRoutes);

const connectToDatabase = require("../sidebarBackend/config/db");

const dbConStatus = connectToDatabase();

const PORT = process.env.PORT || 9500;
app.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});