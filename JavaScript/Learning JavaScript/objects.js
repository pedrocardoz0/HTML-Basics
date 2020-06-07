const userMain = {
    name: "Pedro",
    age: 19,
    city: "Marília"
}

console.log(userMain["name"],
userMain["age"],
userMain["city"]
)

const userLocal = {
    user: {
        name: "Ither",
        age: 29,
        city: "Toronto"
    },

    task: "Just That"
}

console.log(userLocal.user['name'])
console.log(userLocal['user']['name'])

function funcFirst() {
    console.log("First")
}

function funcSecond() {
    console.log("Second")
}

function funcThird() {
    console.log("Third")
}

const userFunc = {

    users: {
        firstOp: funcFirst,
        secondOp: funcSecond,
        thirdOp: funcThird
    }
}

console.log(userFunc.users.firstOp)