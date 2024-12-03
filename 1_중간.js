// [지문4] prompt 함수로 정수를 입력받아 입력받은 값이 홀수이면 true / 짝수이면 false 로 console탭에 출력하시오.
/*
let a = parseInt(prompt("정수를 입력받으세요"))

if(a % 2 == 0){
  console.log("false");
}else{
  console.log("true");
}*/


// [지문5] prompt 함수로 정수를 입력받아 입력받은 값이 7의 배수이면 true / 아니면 false 로 console탭에 출력하시오.
/*
let b = parseInt(prompt("정수입력"));

if(b % 7 == 0){
  console.log("true")
}else{
  console.log("false")
}
  */
// [지문6] prompt 함수로 아이디 와 비밀번호를 입력받아서 아이디가 'admin' 이고 비밀번호가 1234 와 일치하면 true / 아니면 false 출력하시오.
/*
let id =String(prompt("아이디를 입력하세요"));
let pw =parseInt(prompt("비밀번호를 입력하세요"));

if(id == "admin"){
  console.log("true")
}else{
  console.log("false")
}
if(pw == "1234"){
  console.log("true")
}else{
  console.log("false")
}
  */
// [지문7] prompt 함수로 정수를 입력받아 입력받은 값이 홀수 이면서 7배수 이면 true / 아니면 false 로 console탭에 출력하시오.
/*
let d =parseInt(prompt("정수를 입력하세요"))
if(d % 2==1 && d % 7 == 0){
  console.log("true")
}else{
  console.log("false")
}
*/
// [지문8] prompt 함수로 십만원 단위의 금액을 입력받아 입력받은 금액의 지폐수를 console탭에 출력하시오.
    // -> 입력 예] 356789 입력시 , 출력 예] 십만원:3장 만원:5장 천원6장 

    let money =parseInt(prompt("10만원 단위의 금액을 입력하세요"))
    let 십만원= parseInt(money/100000);
    let 만원 = parseInt((money%100000)/10000);
    let 천원 = parseInt((money%10000)/1000);
    
    console.log(`십만원:${십만원}장,만원:${만원}장,천원:${천원}장`);
    
    
    