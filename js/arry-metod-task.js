let sumTree = ""
const tree = ["oak", "pine", "birch", "maple"]
    for (let i = 0; i < tree.length; i ++) {
        sumTree += tree[i]
    }
console.log(sumTree)
const treeTogether = tree.join(",")
console.log(treeTogether)


const cardFirst = ["card-1", "card-2", "card-3", "card-4", "card-5"];
const cardToRemove = cardFirst.splice(2,1)
console.log(cardToRemove)
console.log(cardFirst)


const cardToInsert = cardFirst.splice(5, 0, "card-6")
console.log(cardFirst)


const cardToUpdate = cardFirst.splice(2, 1, "card-888888")
console.log(cardFirst)