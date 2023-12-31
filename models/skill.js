const skills = [
    {id: 4171, skill: 'HTML', status: 'proficient'}, 
    {id: 4185, skill: 'CSS styling', status: 'learning'}, 
    {id: 4256, skill: 'JavaScript array methods', status: 'proficient'}, 
    {id: 4280, skill: 'Storing DOM elements in a variable', status: 'proficient'},
    {id: 4291, skill: 'Updating DOM content using DOM properties', status: 'proficient'}, 
    {id: 4293, skill: 'Using Bootstrap framework', status: 'aware'},
    {id: 4301, skill: 'Eating snacks', status: 'mastered'}
]

module.exports = {
    getAll,
    getOne, 
    create, 
    deleteOne, 
    update
}

function getAll() {
    return skills
}

function getOne(id) {
    id = Number(id)
    return skills.find(skill => skill.id === id)
}

function create(skill) {
    const newSkill = {...skill}
    newSkill.id = Date.now() % 10000
    skills.push(newSkill)
}

function deleteOne(id) {
    id = Number(id)
    const idx = skills.findIndex(function(skill) {
        return skill.id === id
    })
    skills.splice(idx, 1)
}

function update(id, data) {
    let index = skills.findIndex(s => s.id == id)
    let updatedSkill = {...skills[index], ...data}
    console.log("updated skill", updatedSkill)
    skills.splice(index, 1, updatedSkill)
}