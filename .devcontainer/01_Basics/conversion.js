let score="33"
console.log(typeof score);
console.log(typeof(score));
// Typecasting :
// let score="33" // 33
// let score="33abc" // NaN
// let score=null // 0
// let score=undefined // NaN
// let score=true// 1
// let score=false// 0
// let score="hkhg"// NaN
// let is LoggedIn =1 -->let booleanIsLoggedIn = Boolean(isLoggedIn) //true
// let is LoggedIn = ""-->let booleanIsLoggedIn = Boolean(isLoggedIn) //false
// let is LoggedIn = "saikat"-->let booleanIsLoggedIn = Boolean(isLoggedIn) //false

let valueInNumber = Number(score)
console.log(typeof(valueInNumber));
