module.exports = {
    index, 
    show
}

function index(req,res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    })
}

function show(req,res) {
    const ctrlObject = {
        skill: Skill.getOne(req.params.id)
    }
    res.render('skills/show', ctrlObject)
}

const Skill = require('../models/skill')

