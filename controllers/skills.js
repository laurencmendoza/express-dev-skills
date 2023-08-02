module.exports = {
    index, 
    show, 
    new: newSkill, 
    create,
    delete: deleteSkill,
}

function index(req,res) {
    res.render('skills/index', {
        title: 'Developer Skills',
        skills: Skill.getAll()
    })
}

function show(req,res) {
    const ctrlObject = {
        title: Skill.getOne(req.params.id).skill,
        skill: Skill.getOne(req.params.id)
    }
    res.render('skills/show', ctrlObject)
}

function newSkill(req, res) {
    res.render('skills/new', {title: 'New Skill'})
}

function create(req,res) {
    console.log(req.body)
    Skill.create(req.body)
    res.redirect('/skills')
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
}

const Skill = require('../models/skill')

