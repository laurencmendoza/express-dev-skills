const skills = [
    {id: 4171, skill: 'HTML', status: 'proficient'}, 
    {id: 4185, skill: 'Basic CSS styling', status: 'learning'}, 
    {id: 4256, skill: 'JavaScript array methods', status: 'proficient'}, 
    {id: 4280, skill: 'Storing DOM elements in a variable', status: 'proficient'},
    {id: 4291, skill: 'Updating DOM content using DOM properties', status: 'proficient'}, 
    {id: 4293, skill: 'Using Bootstrap framework', status: 'aware'},
    {id: 4301, skill: 'Eating snacks', status: 'mastered'}
]

module.exports = {
    getAll,
    getOne
}

function getAll() {
    return skills
}

function getOne(id) {
    id = Number(id)
    return skills.find(skill => skill.id === id)
}