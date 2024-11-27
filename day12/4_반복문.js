//[1] continue: 가장 가까운 for문의 증감식으로 코드흐름(눈에보이지않음) 이동
for(let i=1;i<=5;i++){//i는 1부터 5이하까지 1씩 증가.
    //만약 i가 3이면
    if(i==3){continue;}  //코드의 흐름이 continue 를 만나면 가장 가까운 증감식 이동
                        //즉 continue 이후 코드는 실행되지 않음
    console.log(i);
}//for end

//[2] break; : 가장 가까운 for문의 { } 종료함

for(let i=1;i<=10; i++){//i는 1부터 10이하까지 1씩증가 반복
    if(i==5){break;} // 코드흐름이 break를 만나면 가장 가까운 반복문 종료
    //즉 break 이후 코드는 실행되지 않음!
    console.log(i); // 1 2 3 4 
}

//[3]무한루프: 종료되는 조건이 없이 계속적으로 반복되는 구조, 메모리에 과부하가 생길 수 있음.

/*for(; ;){
    console.log('무한입력:')
}
    */

//(실습1) 총 6개의 정수를 입력받아 하나의 배열에 저장하시오.
    //-조건2: 배열내 중복은 없어야한다. 
    //-조건2: 배열내 값의 개수가 6개가 되면 프로그램 종료한다.

let numArray = [];
for(;;){//무한루프strat // 무한루프 종료조건 : 배열내 요소가 6개이면 종료

    let num = Number(prompt(`${numArray.length}번째 수 입력:`))
    if(numArray.indexOf(num)!=-1){
        alert('중복입니다.');
        continue;
    } // if end
    numArray.push(num);
    if(numArray.length>=6){
        break;
    } 
}//무한루프 for end
console.log(numArray);