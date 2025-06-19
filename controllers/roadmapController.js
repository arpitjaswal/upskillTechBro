const Roadmap = require('../models/Roadmap');

// Create a new roadmap
exports.createRoadmap = async (req, res) => {
  try {
    const { title, targetDate, milestones } = req.body;
    
    const roadmap = new Roadmap({
      userId: req.userId,
      title,
      targetDate: new Date(targetDate),
      milestones: milestones || []
    });

    await roadmap.save();
    
    // Update user's roadmap reference
    await User.findByIdAndUpdate(req.userId, { roadmap: roadmap._id });

    res.status(201).json(roadmap);
  } catch (error) {
    console.error('Create roadmap error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get user's roadmap
exports.getRoadmap = async (req, res) => {
  try {
    const roadmap = await Roadmap.findOne({ userId: req.userId });
    if (!roadmap) {
      return res.status(404).json({ message: 'Roadmap not found' });
    }
    res.json(roadmap);
  } catch (error) {
    console.error('Get roadmap error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update roadmap
exports.updateRoadmap = async (req, res) => {
  try {
    const { title, currentStage, milestones, weeklyGoals } = req.body;
    
    const updateFields = {};
    if (title) updateFields.title = title;
    if (currentStage) updateFields.currentStage = currentStage;
    if (milestones) updateFields.milestones = milestones;
    if (weeklyGoals) updateFields.weeklyGoals = weeklyGoals;

    const roadmap = await Roadmap.findOneAndUpdate(
      { userId: req.userId },
      { $set: updateFields },
      { new: true }
    );

    if (!roadmap) {
      return res.status(404).json({ message: 'Roadmap not found' });
    }

    res.json(roadmap);
  } catch (error) {
    console.error('Update roadmap error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Add a milestone
exports.addMilestone = async (req, res) => {
  try {
    const { title, description, dueDate, category, priority, resources } = req.body;
    
    const roadmap = await Roadmap.findOne({ userId: req.userId });
    if (!roadmap) {
      return res.status(404).json({ message: 'Roadmap not found' });
    }

    const newMilestone = {
      title,
      description,
      dueDate: new Date(dueDate),
      category,
      priority,
      resources: resources || [],
      completed: false
    };

    roadmap.milestones.push(newMilestone);
    await roadmap.save();

    res.status(201).json(roadmap);
  } catch (error) {
    console.error('Add milestone error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update milestone status
exports.updateMilestoneStatus = async (req, res) => {
  try {
    const { milestoneId } = req.params;
    const { completed } = req.body;

    const roadmap = await Roadmap.findOne({ userId: req.userId });
    if (!roadmap) {
      return res.status(404).json({ message: 'Roadmap not found' });
    }

    const milestone = roadmap.milestones.id(milestoneId);
    if (!milestone) {
      return res.status(404).json({ message: 'Milestone not found' });
    }

    milestone.completed = completed;
    await roadmap.save();

    res.json(roadmap);
  } catch (error) {
    console.error('Update milestone status error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
