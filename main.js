//Book 1-column 3: Filtering Fish/ Big Fish, Little Fish

//Example 1:
//Filter socks into arrays according to color
const socks = ["white", "brown", "white", "black", "blue",
"white", "brown", "white", "white", "white", "brown", "white",
"black", "white", "black", "brown", "black",  "white",
"brown", "white", "black"]

/*
    From the source data, which should never be modified,
    filter out each color of socks into its own array
*/
const brownSocks = []
const blackSocks = []
const whiteSocks = []

for (const sock of socks) {
    if (sock === "brown") {
        brownSocks.push(sock)
    } else if (sock === "black") {
        blackSocks.push(sock)
    } else if (sock === "white") {
        whiteSocks.push(sock)
    }
}

console.log(brownSocks)
console.log(blackSocks)
console.log(whiteSocks)

//output:
// (5) ['brown', 'brown', 'brown', 'brown', 'brown']
// main.js:24
// (5) ['black', 'black', 'black', 'black', 'black']
// main.js:25
// (10) ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white']


//Example 2:
//Display EVEN NUMBERS 
const numbers = [4,1,5,8,6,4,2,2,4,6,7,7,8,9,7,5,3,2,1,3,4,2,1,3,5,7,76,5,9,4,23,5,3,2,6,8,98,65,3,1,3,4]

// Only display even numbers
for (const number of numbers) {
    if (number % 2 === 0) {
        console.log(number)
    }
}

