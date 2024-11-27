/*
    -반복문과 배열 관계
        1.배열의 인덱스는 순차적인 순서가 존재함.
            배열이란? 여러개 요소들을 순서대로 나열한 자료의 타입
            인덱스란? 배열내 저장된 순서 번호
            let 배열변수 = ['유재석','강호동','하하']
                index =        0        1      2
                length = 3
        2.0부터 마지막 인덱스 까지 1씩 증가
        3.마지막 인덱스란 ? 배열변수.length -1
        4.배열 순회,  배열 내 모든 요소를 하나씩 호출 하는 작업
            for(let index = 0; index<= 배열변수.length - 1; index++){
            배열변수[index]
            }
 */
//[1] 배열의 데이터
let 과일상자 =['사과','포도','딸기']; 
// -배열내 모든 요소를 하나씩 출력하세요
for(let index = 0; index <=2 ; index++){
    //index는 0부터 2까지 1씩증가 반복하겠다.
    console.log(과일상자[index])
}
for(let index = 0; index <=과일상자.length-1; ){
    //index는 0부터 마지막인덱스까지 1씩증가 반복
}

//[2] 3개의 점수를 입력받아 점수배열에 저장하시오.

let 점수배열 =[]
let 점수1 =prompt('점수1:')
점수배열.push(점수1)

let 점수2 =prompt('점수2:')
점수배열.push(점수2)

let 점수3 =prompt('점수3:')
점수배열.push(점수3)
//중복코드 : let 점수1 = prompt('점수 ?:') , 점수배열.push(점수?)
//중복되지않는 코드 : 1 2 3 , 패턴 : 1부터 3까지 1씩증가
//[반복문코드]

for(let i=1;i<=3;i++){//1는 1부터 3까지 1씩증가
    let 점수1 = prompt(`점수${i}:`)     //지역변수? 특정한 중괄호{ } 안에서 선언된 변수를 지역변수
    점수배열.push(점수1);               // -{ } 밖으로 못나감 , 중괄호가 끝나면 변수는 사라짐.
}//for end

//[3]점수배열2 에 저장된 모든 점수들을 <li> 마크업에 출력하시오 
//반복문없는 코드
let outHTML =`<ol>`
outHTML +=`<li>${점수배열2[0]}</li>`
outHTML +=`<li>${점수배열2[1]}</li>`
outHTML +=`<li>${점수배열2[2]}</li>`
outHTML +=`</ol>`
document.write(outHTML)


// [반복문 코드]
let outHTML2 =`<ol>`
for( let index = 0; index <= 점수배열2.length -1; index++){// 인덱스는 0부터 마지막 인덱스까지 1씩 증가 반복
    outHTML2 += `<li>${점수배열2[index]}</li>`
    }
    outHTML2 +=`</ol>`
    document.write(outHTML2)