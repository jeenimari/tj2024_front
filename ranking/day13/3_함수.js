//(1) 함수 만들기 / 정의
//[1] 매개변수 x ,반환값x   매개(중매 매 -양쪽 관계 맺기)  인자값과 ---변수를 중매하겠다!!
//인자값/인수 : 들어갈 인 어딘가에 들어가는 수   
//매개변수 란 즉 ! 함수 호출시 인자값을 변수에 대입되는 변수
function func1(){console.log('func1 execute')}

//[2] 매개변수 o , 반환값 x   console.log( ) , document.write( ) 등
function func2(x,y){console.log(`func2 execute ${x+y}`)}

//[3] 매개변수 o , 반환값 o let 변수 = prompt( ) 등등 
function func3(x,y){
    console.log(`func3 execute`);
    let result = x+y;
    return result;
}


//[4] 매개변수 x ,반환값 o
function func4( ){
    console.log(`func4 excute`);return 10;
}

//(2) 함수 호출
func1() //인자값 x 리턴값 x
func2(1,2) // 인자값 1, 2  리턴값 x
func3(1,2) // 인자값 1, 2 리턴값 더한 결과 , 
let result = func3(1,2)      // 결과를 다음 코드에서 사용 할 예정이라면 변수에대입.
let result4 = func4( ) // 인자값이 없고 리턴값이 있는 함수 호출 / 사용