let movieNames = ['히든페이스', '위키드', '글래디에이터2', '청설'];
let movieRating = [8, 4, 7, 6];

for(let i = 0; i< movieNames.length ; i++){
  let stars = '';
  for(let j = 0; j< movieRating[i]; j++){
    stars += '★'
  }
  for(let j = movieRating[i]; j<10; j++){
    stars += '☆'
  }document.write(movieNames[i]+'\t'+stars+'</br>')
}

/*[문제2] 6개 좌석 상태 출력 구현하기.    변수 좌석 6개 , 임의배열 구성 , 좌석 2행 3열출력
        1. 좌석은 총 6개 , 빈좌석인지 예약석인지는 6개 좌석 정보를 임의로 *배열* 구성 
        2. 아래와 같이 좌석를 2칸씩 3줄 출력한다.
        3. 빈좌석이면 color:blue 색상 표기 , 예약석이면 color:red 색상 표기 하시오.
        4. HTML 예시 
            빈좌석 = false 예약석   
            예약석 빈좌석
            예약석 빈좌석
*/

let seat=[false,true,true,false, true, false];  // 0 1 2 3 4 5 빈좌석/예약석/예약석/빈좌석/예약석/빈좌석
for(let i = 0; i<seat.length; i++){                // i 를 0으로 초기화 카운터 , i가 시트길이보다 작으면 1증가
  if(seat[i]){                                        // 만약 배열 i가 조건이 true이면 예약석 출력
    document.write('<span style="color:red">예약석</span>')
  }else{                                              //아니면 빈좌석 출력 색상은 블루
    document.write('<span style="color:blue">빈좌석</span>')
  }
  if(i%2==1)document.write('<br>');                  // 만약 i가 홀수이면 줄바꿈처리
}
