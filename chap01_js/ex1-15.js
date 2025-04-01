/*
연산자 우선순위
*/

//괄호 우선
let result = 5 + 3 * 2;
console.log(result); //11

result = (5 + 3) * 2;
console.log(result); //16

//산술 연산자 우선
//비교 연산자 나중
result = 5 + 3 > 6 * 2;
console.log(result); //false

//논리연산자
result = 5 + 3 > 6 * 2 || 3 * 4 < 5 + 10;
console.log(result); //false || true -> true