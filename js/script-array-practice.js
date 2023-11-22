/*

//STEP 1
let movies = ["Shrek","Shrek 2","Shrek the Third", "Shrek the Halls","Shrek Forever After"]
window.console.log(movies[1])

//STEP 2
let movies = new Array(5)
movies[0] = "Shrek"
movies[1] = "Shrek 2"
movies[2] = "Shrek the Third"
movies[3] = "Shrek the Halls"
movies[4] = "Shrek Forever After"
window.console.log(movies[0])

//STEP 3
let movies = new Array(5)
movies[0] = "Shrek"
movies[1] = "Shrek 2"
movies[2] = "Puss in Boots"
movies[3] = "Shrek the Third"
movies[4] = "Shrek the Halls"
movies[5] = "Shrek Forever After"
console.log(movies.length)

//STEP 4
let movies = []
movies[0] = "Shrek"
movies[1] = "Shrek 2"
movies[2] = "Puss in Boots"
movies[3] = "Shrek the Third"
movies[4] = "Shrek the Halls"
delete movies[0];
window.console.log(movies);

//STEP 5
let movies = []
movies[0] = "Shrek"
movies[1] = "Shrek 2"
movies[2] = "Puss in Boots"
movies[3] = "Shrek the Third"
movies[4] = "Shrek the Halls"
movies[5] = "Shrek Forever After"
movies[6] = "Puss in Boots: The Last Wish"

for(let x in movies){
    console.log(movies[x])
}

//STEP 6
let movies = []
movies[0] = "Shrek"
movies[1] = "Shrek 2"
movies[2] = "Puss in Boots"
movies[3] = "Shrek the Third"
movies[4] = "Shrek the Halls"
movies[5] = "Shrek Forever After"
movies[6] = "Puss in Boots: The Last Wish"

for(let x of movies){
    console.log(x)
}

//STEP 7
let movies = []
movies[0] = "Shrek"
movies[1] = "Shrek 2"
movies[2] = "Puss in Boots"
movies[3] = "Shrek the Third"
movies[4] = "Shrek the Halls"
movies[5] = "Shrek Forever After"
movies[6] = "Puss in Boots: The Last Wish"

for(let x of movies.sort()){
    console.log(x)
}

//STEP 8
let movies = []
movies[0] = "Shrek"
movies[1] = "Shrek 2"
movies[2] = "Puss in Boots"
movies[3] = "Shrek the Third"
movies[4] = "Shrek the Halls"
movies[5] = "Shrek Forever After"
movies[6] = "Puss in Boots: The Last Wish"

let leastFavMovies = []
leastFavMovies[0] = "Forrest Gump"
leastFavMovies[1] = "Schindler's List"
leastFavMovies[2] = "Braveheart"

console.log("Movies I Like: \n\n")
for(let x in movies){
    console.log(movies[x])
}

console.log('\n\nMovies I regret watching: \n\n')
for(let x in leastFavMovies){
    console.log(movies[x])
}


//STEP 9
let movies = []
movies[0] = "Shrek"
movies[1] = "Shrek 2"
movies[2] = "Puss in Boots"
movies[3] = "Shrek the Third"
movies[4] = "Shrek the Halls"
movies[5] = "Shrek Forever After"
movies[6] = "Puss in Boots: The Last Wish"

let leastFavMovies = []
leastFavMovies[0] = "Forrest Gump"
leastFavMovies[1] = "Schindler's List"
leastFavMovies[2] = "Braveheart"

window.console.log(movies.concat(leastFavMovies).reverse())

//STEP 10
let movies = []
movies[0] = "Shrek"
movies[1] = "Shrek 2"
movies[2] = "Puss in Boots"
movies[3] = "Shrek the Third"
movies[4] = "Shrek the Halls"
movies[5] = "Shrek Forever After"
movies[6] = "Puss in Boots: The Last Wish"

let leastFavMovies = []
leastFavMovies[0] = "Forrest Gump"
leastFavMovies[1] = "Schindler's List"
leastFavMovies[2] = "Braveheart"

let myMovies = movies.concat(leastFavMovies)
let lastMovies = myMovies[myMovies.length -1]
window.console.log(lastMovies)

//STEP 11
let movies = []
movies[0] = "Shrek"
movies[1] = "Shrek 2"
movies[2] = "Puss in Boots"
movies[3] = "Shrek the Third"
movies[4] = "Shrek the Halls"
movies[5] = "Shrek Forever After"
movies[6] = "Puss in Boots: The Last Wish"

let leastFavMovies = []
leastFavMovies[0] = "Forrest Gump"
leastFavMovies[1] = "Schindler's List"
leastFavMovies[2] = "Braveheart"

let myMovies = movies.concat(leastFavMovies)
let firstMovie = myMovies[0]
window.console.log(firstMovie)

//STEP 12
let movies = []
movies[0] = "Shrek"
movies[1] = "Shrek 2"
movies[2] = "Puss in Boots"
movies[3] = "Shrek the Third"
movies[4] = "Shrek the Halls"
movies[5] = "Shrek Forever After"
movies[6] = "Puss in Boots: The Last Wish"

let leastFavMovies = []
leastFavMovies[0] = "Forrest Gump"
leastFavMovies[1] = "Schindler's List"
leastFavMovies[2] = "Braveheart"

let myMovies = movies.concat(leastFavMovies)

let x = myMovies.indexOf("Forrest Gump")
let y = myMovies.indexOf("Schindler's List")
let z = myMovies.indexOf("Braveheart")

myMovies[x] = ("Shrek in the Swamp Karaoke Dance Party")
myMovies[y] = ("Shrek's Yule Log")
myMovies[z] = ("Shrek 4-D")
window.console.log(myMovies)


//STEP 13
movies = [["Shrek", 1], ["Shrek 2", 2], ["Shrek the Third", 3], ["Shrek the Halls", 4], ["Shrek Forever After",5]]
function moiveNames(movie){
    for (x in movie){
        if(typeof movie[x] === 'string'){
            console.log(movie[x])
        }
    }
}
movies.filter(moiveNames)

//STEP 14
employees = ["Shrek", "Fiona", "Donkey", "Dragon", "Puss in Boots"]
let showEmployee = function(){
    console.log('EMPLOYEES: \n\n')
    employees.forEach((employee) => {
    console.log(employee)
    })
}
showEmployee()

//STEP 15
let arrayTest = [58, '', 'abcd', true, null, false, 0]

function filterValues(){
    console.log(
        arrayTest
          .filter((x) => { return x !== false})
          .filter((x) => { return x !== null})
          .filter((x) => { return x !== ''})
          .filter((x) => { return x !== 0})
    )
}
filterValues()

//STEP 16
function randomNumber(array){
    let x = Math.floor(Math.random() * array.length)
    let y = array[x]
    return y
}
let numArray = [1,2,3,4,5,6,7,8,9,10]

let result = randomNumber(numArray)
console.log(result)

//STEP 17
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function largestNum(arr) { 
    return Math.max(...arr)
} 
  
const result = largestNum(numArray)
console.log(result)

*/