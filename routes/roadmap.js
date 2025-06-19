const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  createRoadmap,
  getRoadmap,
  updateRoadmap,
  addMilestone,
  updateMilestoneStatus
} = require('../controllers/roadmapController');

// @route   POST api/roadmap
// @desc    Create a new roadmap
// @access  Private
router.post('/', auth, createRoadmap);

// @route   GET api/roadmap
// @desc    Get user's roadmap
// @access  Private
router.get('/', auth, getRoadmap);

// @route   PUT api/roadmap
// @desc    Update roadmap
// @access  Private
router.put('/', auth, updateRoadmap);

// @route   POST api/roadmap/milestones
// @desc    Add a milestone to roadmap
// @access  Private
router.post('/milestones', auth, addMilestone);

// @route   PUT api/roadmap/milestones/:milestoneId
// @desc    Update milestone status
// @access  Private
router.put('/milestones/:milestoneId', auth, updateMilestoneStatus);

module.exports = router;
