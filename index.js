

const cats = ["Milo", "Otis", "Garfield"]; 

function destructivelyAppendCat (name) {
    cats.push(name)
}

function destructivelyPrependCat (name) {
    cats.unshift(name)
}

// const destructivelyPrependCat = (name) => {
//     cats.unshift(name)
// }

function destructivelyRemoveLastCat () {
    cats.splice(-1)
}

function destructivelyRemoveFirstCat () {
    cats.splice(0, 1)
}

function appendCat (name) {
 const newArray = [...cats, name]
return newArray
}

function prependCat (name) {
const newArray = [name, ...cats]
return newArray;
}

function removeLastCat() {
    const slicingLastCat = cats.slice(0, cats.length - 1)
    return slicingLastCat
}

function removeFirstCat() {
    const slicingFirstCat = cats.slice(1)
return slicingFirstCat;
}
