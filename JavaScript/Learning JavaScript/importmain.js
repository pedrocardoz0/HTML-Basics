function doubleValue(p) {
    return p * 2
}

function name() {
    return "Hello Pedro"
}

/*
export function name() {
    return "Hello Pedro"
}

if try to do like that, it will not require export {} i think
*/

export { name, doubleValue }