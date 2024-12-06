/*
interval(간격)
    -시간적인 간격에 따라 특정 로직이나 함수를 반복 실행/호출 가능
    1.setInterval(함수명,주기);
        함수 : 주기에 따라 실행할 함수
        주기 : 1/1000(밀리초) , 1000:1초 , 10000 : 10초
        ->주기마다 지정한 함수를 실행함.
    2. clearInterval(종료할 인터벌 변수 ) : interval 종료

    
 */
//[1] 예제1
let value = 0;
function 증가함수( ){

    value++;  // 전역변수값 1증가
    document.querySelector('.box1').innerHTML = value; //Html 에 value 대입
}// f end
// ---interval 이 증가함수를 1초에 1번씩 자동으로 실행한다
setInterval(증가함수,1000);

//[2] 예제2
function 시계함수( ){
    //날짜/시간 객체 , new Date( )
    let today = new Date();
    let hour = today.getHours();// 시 반환
    let minute = today.getMinutes(); // 분 반환
    let second = today.getSeconds(); // 초 반환
    document.querySelector('.box2').innerHTML =`${hour}:${minute}:${second}`
}//f end

setInterval(시계함수, 1000);


//[예제 3]
let time = 0; // 현재 타이머의 초
let timerId ;  // 변수만 선언 , 초기화값이 없음
function 타이머(){
    
    time++;
    document.querySelector('.box3').innerHTML = time;
    
}//f end

function 타이머시작함수(){
    timerId = setInterval(타이머,1000);
}//f end

function 타이머종료함수(){
    clearInterval(timerId)
}