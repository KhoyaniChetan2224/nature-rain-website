// const mongoose = require('mongoose');

// const rainSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   type: {
//     type: String,
//     enum: ['image', 'video'],
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   src: {
//     type: String,
//     required: true,
//   },
// }, { timestamps: true });

// module.exports = mongoose.model('Rain', rainSchema);



const mongoose = require('mongoose');

const rainSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    enum: ['image', 'video'],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  src: {
    type: String, // URL to video/image
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Rain', rainSchema);
