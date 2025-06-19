const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  currentRole: {
    type: String,
    required: true
  },
  targetRole: {
    type: String,
    required: true
  },
  skills: [{
    name: String,
    level: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert']
    }
  }],
  dailyProgress: [{
    date: Date,
    tasks: [{
      title: String,
      completed: Boolean,
      category: {
        type: String,
        enum: ['DSA', 'LLD', 'HLD', 'Behavioral', 'Project', 'Other']
      },
      timeSpent: Number // in minutes
    }],
    notes: String
  }],
  roadmap: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Roadmap'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
