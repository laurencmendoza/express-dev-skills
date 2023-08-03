var express = require('express');
var router = express.Router();

// Require the controller that exports Skills CRUD functions
const skillsCtrl = require('../controllers/skills')

// All actual paths start with "/skills"

// GET /skills
router.get('/', skillsCtrl.index)

router.get('/new', skillsCtrl.new)

// GET /skills/:id
router.get('/:id', skillsCtrl.show)

// GET /edit 
router.get('/:id/edit', skillsCtrl.edit)

// POST /skills/
router.post('/', skillsCtrl.create)

router.delete('/:id', skillsCtrl.delete)

router.put('/:id', skillsCtrl.update)


module.exports = router;
