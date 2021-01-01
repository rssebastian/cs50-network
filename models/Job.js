const { Schema, model } = require('mongoose');

const JobSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  requirements: {
    type: [String],
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = Job = model('job', JobSchema);
