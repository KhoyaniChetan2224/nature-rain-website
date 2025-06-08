const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express')
const app = express();
const connectToDb = require('./db/db');
const userRoutes = require('./router/login.router');
const animalRoutes = require('./router/animal.router');
const path = require('path');
const rainRoutes = require('./router/rain.router');
const seaRoutes = require('./router/sea.router');
const farmerRoutes = require('./router/farmer.router');
const cropRouter = require('./router/crop.router');
const multer = require('multer');

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedTypes.includes(file.mimetype)) {
      cb(new Error('Invalid file type'));
      return;
    }
    cb(null, true);
  }
});

connectToDb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

// Make uploads directory accessible
app.use('/uploads', express.static('uploads'));

// Create uploads directory if it doesn't exist
const fs = require('fs');
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

app.use(cors());


app.get('/', (req, res) => {
    res.send(' Hello Duniya Nature ');
});
app.use('/users', userRoutes);
app.use('/forest', animalRoutes);
app.use('/rain', rainRoutes);
app.use('/sea', seaRoutes);
app.use('/farmer', farmerRoutes);
app.use("/farmcropdata", cropRouter);
app.put('/:id/update', userRoutes);

module.exports = app;