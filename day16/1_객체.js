//[1] 객체 선언
let 객체변수 = { }
//[2] 객체 호출
console.log(객체변수);

//[3]객체 속성 구성 
let 객체변수2 ={속성1 :10,속성2 :'hello'}
console.log(객체변수2);

//[4]객체 속성값 호출
console.log(객체변수2.속성1);
console.log(객체변수2,속성2);

//[5]객체 속성 생성
객체변수2. 속성명3=true;
console.log(객체변수2);

//[6]객체 속성 값 수정
객체변수2.속성1 = 20;
console.log(객체변수2);

//[7]객체 속성 값 수정
delete 객체변수2.속성3;
console.log(객체변수2);

//[8]객체 내 다양한 속성값들
let 객체변수3 = {
  속성1 : 10 ,속성2 :'hi',속성3 :false,
  속성4: [10,20,30,40],
  속성5: function(){},
  속성6:{속성7: 10 ,속성8:'Hi2'}  
};
console.log(객체변수3);
console.log(객체변수3.속성1);
console.log(객체변수3.속성4);
console.log(객체변수3.속성4[2]);
객체변수3.속성5();
console.log(객체변수3.속성6);
console.log(객체변수3.속성6.속성8);