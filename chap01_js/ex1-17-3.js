/*
if-else문

if(조건식){
	조건식이 참일 때 실행할 코드;
	조건식이 참일 때 실행할 코드;
	...
}else{
	조건식이 거짓일 때 실행할 코드;
	조건식이 거짓일 때 실행할 코드;
	...
}
*/
const isLogin = true;
const isUser = true;
const isSeller = false;
const isAdmin = false;

if(isLogin == true){
  console.log('로그인 상태')
} else {
  console.log('로그아웃 상태')
}

//console.log((0.1 + 0.2).toFixed(2));

// isUser가 true이면 "사용자" 출력
if(isUser){
  console.log('사용자')
} else {
  if (isSeller){ // isSeller가 true이면 "판매자" 출력
    console.log('판매자')
  } else { // isAdmin "관리자" 출력
    console.log('관리자')
  }
}

// if(isLogin) {
//   if (isSeller){
//     if (isUser){console.log("사용자 로그인 상태")};
//   } else {
//     if (isSeller)
//   } else {

// }

// isLogin이 true이고 isUser가 true 이면 "사용자 로그인 상태" 출력
if (isLogin == true && isUser == true){
  console.log("사용자 로그인 상태")
}
// isLogin이 false이고 isUser가 true이면 "사용자 로그아웃 상태" 출력
if (isLogin == false && isUser == true){
  console.log("사용자 로그아웃 상태")
}

// isLogin이 true이고 isSeller가 true이면 "판매자 로그인 상태" 출력
if (isLogin == true && isSeller == true){
  console.log("판매자 로그인 상태")
}
// isLogin이 false이고 isSeller가 true이면 "판매자 로그아웃 상태" 출력
if (isLogin == false && isSeller == true){
  console.log("판매자 로그아웃 상태")
}


// isLogin이 true이고 isAdmin이 true이면 "관리자 로그인 상태" 출력
if (isLogin == true && isAdmin == true){
  console.log("관리자 로그인 상태")
}
// isLogin이 false이고 isAdmin이 true이면 "관리자 로그아웃 상태" 출력
if (isLogin == false && isAdmin == true){
  console.log("관리자 로그아웃 상태")
}