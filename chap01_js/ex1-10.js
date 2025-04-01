/*
증감 연산자 a++, a--, ++a, --a
*/

var count = 0;
count++; //1
console.log(count);
count++; //2
console.log(count);
count--; //1
console.log(count); //1

//쌤 풀이
var count = 0;
console.log(count);

count = count + 1; //0+1=1
count += 1; //1+1=2
count++; //2+1=3

console.log(count);

//전위형, 후위형
console.log(count++); //3
console.log(++count); //4+1=5

var sum = count++ + 10; //5 + 10 = 15
console.log(sum); //15+1=16

sum = ++count + 10; //17 + 10 = 27
console.log(sum); //27