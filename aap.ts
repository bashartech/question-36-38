// Question 37

function tshirt(size:string ="large" ,message:string = "I love typescript"){
    console.log(`The size of shirt will be ${size} and style is ${message}`)
}
tshirt("Medium")
tshirt()
tshirt("Small","I love front-end development")

// Question 38


function describe_city (city:string, country:string = "Pakistan"){
    console.log(`${city} is in ${country}`);
    
}
describe_city("Karachi")
describe_city("Lahore")
describe_city("London","England")

// Question 39

function city_Names(city:string,country:string){
return `${city},${country}`
}
console.log(city_Names("Sydney","Australia"))
console.log(city_Names("Melborne","Australia"))
console.log(city_Names("SCG","Australia"))
