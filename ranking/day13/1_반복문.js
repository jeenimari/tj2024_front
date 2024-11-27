/*
-학생들의 점수 출력하는 구현
    1.학생이름배열
    let nameArray = ['유재석','강호동','신동엽']
    2.학생점수배열
    let score = [92,86,72]

    3.아래와 같이 출력 1000점만점이라고 했을때 점수를 ● 표기 / 나머지 점수는 점수 ○
    이름 점수 시각화

    유재석 80점 00000000
    강호동 70점 000000000
    신동엽 60점 0000000001
    
*/
let nameArray = ['유재석','강호동','신동엽']
let scores = [92,86,72]
let outHTML = '<div> <span>이름</span></div>';

for(let index=0; index <= nameArray-1 ; index++){ 
    outHTML += `<div> <span>${nameArray[index]} </span><span>${scores[index]}</span></div>`
    let pointHTML = `` // 점수를 도형으로 구성한 문자열을 저장하는 변수
    for(let point=1; point<=scores[index];point++){
        outHTML+=`<span>${pointHTML}</span>`
    }
    
    
}//for end
document.write(outHTML)

/**/