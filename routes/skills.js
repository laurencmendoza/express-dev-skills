var express = require('express');
var router = express.Router();

// Require the controller that exports Skills CRUD functions
const skillsCtrl = require('../controllers/skills')

// All actual paths start with "/skills"

// GET /skills
router.get('/', skillsCtrl.index)

router.get('/new', skillsCtrl.new)

// POST /skills/
router.post('/', skillsCtrl.create)

router.delete('/:id', skillsCtrl.delete)

// GET /skills/:id
router.get('/:id', skillsCtrl.show)

module.exports = router;
