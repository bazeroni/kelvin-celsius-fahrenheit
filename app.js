// constant temperature of kelvin units
const kelvin = 0;
// kelvin temperature converted to celsius
const celsius = kelvin - 273;
// celsius temperature converted to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// using the floor method, rounding the fahrenheit result to floor number
fahrenheit = Math.floor(fahrenheit)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
