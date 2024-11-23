const customers = [
    {person: "Such", age: 40, balance: 40000, friend: "Micaylo"},
    {person: "Aslani", age: 34, balance: 68900, friend: "Xachi"},
    {person: "Fofana", age: 44, balance: 8484800, friend: "Micaylo"},
    {person: "Daku", age: 27, balance: 1350299, friend: "Micke"},
    {person: "Fox", age: 20, balance: 56000, friend: "Micaylo"},
]

const totalBalanceCusto = customers.reduce((totalBalance, onePerson) => totalBalance + onePerson.balance, 0)
console.log(totalBalanceCusto)

const whoHaveFriend = customers.reduce((haveFriend, onePerson) => {
    if (onePerson.friend === "Micaylo") {
    haveFriend.push(onePerson.person)
    } 
    return haveFriend;
},[])
console.log(whoHaveFriend)


const worker = [
    {name: "Igor", skills: ['css', 'react'], friends: ["Anna", "Yana", "Darina"]},
    {name: "Stive", skills: ['html', 'css'], friends: ["Arana", "Volodya"]},
    {name: "Skif", skills: ['html', 'js', 'nodejs'], friends: ["Vova", "Vanya", "Dasha", "Oleg", "Gosha"]},
    {name: "Olena", skills: ['js', 'nodejs', 'react'], friends: ["Olesa"]},
    {name: "Slava", skills: ['js', 'nodejs'], friends: ["Vlad", "Olga", "Dasha", "Lilly"]},
]


const manyFriends = worker.sort((a, b) => a.friends.length - b.friends.length).map(person => person.name); 
console.log(manyFriends);


const manySkills = worker.reduce((fullSkills, skill) => {
fullSkills.push(...skill.skills)
return fullSkills.sort()
} ,[])

console.log(manySkills)
