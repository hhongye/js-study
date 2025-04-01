/*
논리 연산자 &&, ||, !
*/
//논리합(or)
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

var id = 'hong'
var invalidId = id.length < 4 || id.length > 12;
console.log('id 입력 조건에 맞지 않음', invalidId);

// 앞의 값이 참이면 앞의 값을 반환
//falsy : number 0, string '', boolean false, null, undefined
//truthy : 100, 'hello', true

console.log('hello' || 'world'); //hello
console.log(90 || 30); //90
console.log(null || 'world');  //world
console.log(undefined || 'hello'); //hello
console.log(0 || 100); //100
console.log('' || 'hello') //hello

//let userName = '체리핑';
//let userName = '';
let userName = undefined;
//let userAge = 8;
let userAge = 0;

//console.log(userName || '체리핑'); //체리핑
console.log(userName || '널핑'); //널핑
console.log(userAge || '나이미상'); //나이미상

// 논리곱(AND)
// 피연산자 둘 다 true일 경우 true가 됨
// 둘 중 하나라도 false일 경우 false가 됨
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

// 앞의 값이 참이면 뒤의 값을 반환
// 앞의 값이 거짓이면 앞의 값을 반환

id = null; //type은 object
console.log('글자수', id && id.length); //글자수 null 
console.log('글자수', id?.length); //글자수 undefined 