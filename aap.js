// Question 37
function tshirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love typescript"; }
    console.log("The size of shirt will be ".concat(size, " and style is ").concat(message));
}
tshirt("Medium");
tshirt();
tshirt("Small", "I love front-end development");
// Question 38
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("London", "England");
// Question 39
function city_Names(city, country) {
    // console.log(`${city},${country}`);
    return "".concat(city, ",").concat(country);
}
console.log(city_Names("Sydney", "Australia"));
console.log(city_Names("Melborne", "Australia"));
console.log(city_Names("SCG", "Australia"));
