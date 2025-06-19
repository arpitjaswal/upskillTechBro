const mongoose = require('mongoose');

const roadmapSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true,
    default: 'My Job Switch Roadmap'
  },
  startDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  targetDate: {
    type: Date,
    required: true
  },
  currentStage: {
    type: String,
    enum: ['DSA Foundation', 'Advanced DSA', 'LLD', 'HLD', 'Interview Prep', 'Job Search'],
    default: 'DSA Foundation'
  },
  milestones: [{
    title: String,
    description: String,
    dueDate: Date,
    completed: {
      type: Boolean,
      default: false
    },
    category: {
      type: String,
      enum: ['DSA', 'LLD', 'HLD', 'Behavioral', 'Project', 'Other']
    },
    priority: {
      type: String,
      enum: ['High', 'Medium', 'Low'],
      default: 'Medium'
    },
    resources: [{
      title: String,
      url: String,
      type: {
        type: String,
        enum: ['Video', 'Article', 'Book', 'Course', 'Other']
      }
    }]
  }],
  weeklyGoals: [{
    weekNumber: Number,
    startDate: Date,
    endDate: Date,
    focusAreas: [String],
    tasks: [{
      title: String,
      completed: Boolean,
      category: String
    }],
    notes: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
roadmapSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

module.exports = mongoose.model('Roadmap', roadmapSchema);
