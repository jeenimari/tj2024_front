/*
조건문?
    -조건의 결과값은 항상  true 1 / false 0
    -삼항연산자 : 간단한 조건문
    1.IF 조건문 : 조건문을 표현 가능한 문법
        -조건에 TRUE/FALSE , 비교연산 또는 관계연산

    2.IF 형태
        1.if(조건)참일경우 코드
        2.if(조건){참일경우 코드; 참일경우코드;}
        3.if(조건){참일경우 코드} 
            else{거짓일경우코드;}
        
        4.if(조건){참일경우코드;}
            else if(조건2){참2일경우코드;}
            eles if(조건3){참3일경우코드;}
            else if(조건4){참4일경우코드;}
            else{거짓일경우 코드}
        5.if중첩
            if(조건){
                if(조건){}
                }else{}
            }else{}
            -주의할점 : if(조건){}사이에 ;(세미콜론) 넣지마
            -주의2 : {시작 중괄호} 끝 중괄호 매칭 잘해
*/

// [1] if문(조건) 바로뒤에 ;(세미콜론) 넣지말자
if (10 > 3) console.log(`1.T 10>3`) //T -> 출력
if (10 > 20) console.log(`2 T 10>20`) //F -> 출력 X
// if(10>20);console.log(`3 T 10>20`) //F -> 출력o

//[2] 참일경우 코드의 명령어 2개 이상이면 {}묶어주자
if (10 > 20) console.log(`4-1 10>20`); console.log(`4-2 10>20`);
if (10 > 20) {
    console.log(`5-1 10>20`);
    console.log(`5-2 10>20`);
}

if (10 > 3) {
    console.log(`6-1 10>3`);
    console.log(`6-2 10>3`);
}

//[3] if~ else
if (10 > 3) {
    console.log(`7.T 10>3`);  //출력o

} else {
    console.log { (`7.F 10>3`); } //출력x
}

//[4] if ~else if~else if ~esle 조건이 다수일때
if (10 >= 20) { console.log(`8.T1 10>=20`); }  // 출력 x
else if (10 >= 15) { console.log(`8. T2 10>=15`); } // 출력 x
else if (10 >= 15) { console.log(`8. T3 10>=10`) } // 출력 O
else { console.log(`8.F 그외`); }

//[5] if 중첩 
let 성별 = '남'; let 점수 = 80;
if (성별 == '남') {//-만약에 '성별'변수 값이 '남'이면 --if start}
} if (점수 >= 90) {
} else { console.log(`남자`); } //--if end
else {   // else start
    if (점수 >= 90) { console.log('여자우수'); }
    else { console.log('여자'); }
} // else end
