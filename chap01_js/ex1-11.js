/*
비교 연산자 >, >=, <, <=, ==, !=, ===, !==
*/

var a = 5;
var b = 10;
var c = '5';
var d = 5;

// > (크다)
console.log(a > b); //false

// <
console.log(a < b); //true

// >=
console.log(a >= d); //true

// <=
console.log(a <= d); //true

// 문자열 비교
console.log(a == c); //true
console.log(a === c); //false

console.log('ch04' > 'ch01') //사전순으로 비교 사전앞에 있으면 작은 값 -> true
console.log('ch12' > 'ch2') //false, 각 자리를 비교함 12의 1과 ch2의 2를 비교한 것 같은 자릿수에서 동률일때 글자수가 더 많은 게 더 큼
