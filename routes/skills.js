var express = require('express');
var router = express.Router();

// Require the controller that exports Skills CRUD functions
const skillsCtrl = require('../controllers/skills')

// All actual paths start with "/skills"

// GET /skills
router.get('/', skillsCtrl.index)

module.exports = router;
